<template>
  <div class="resume-sheet">
    <form class="resume-controls" @submit.prevent="exportPdf">
      <div class="resume-controls-head">
        <p class="resume-controls-title">{{ copy.panelTitle }}</p>
        <a class="resume-lang" :href="copy.otherHref">{{ copy.otherLabel }}</a>
      </div>
      <p class="resume-controls-lead">{{ copy.lead }}</p>
      <div class="resume-fields">
        <label class="resume-field">
          <span>{{ copy.nameLabel }}</span>
          <input
            v-model="name"
            type="text"
            name="name"
            autocomplete="name"
            :placeholder="copy.nameInput"
          />
        </label>
        <label class="resume-field">
          <span>{{ copy.emailLabel }}</span>
          <input
            v-model="email"
            type="text"
            name="email"
            inputmode="email"
            autocomplete="email"
            :placeholder="copy.emailInput"
          />
        </label>
        <label class="resume-field">
          <span>{{ copy.phoneLabel }}</span>
          <input
            v-model="phone"
            type="tel"
            name="tel"
            autocomplete="tel"
            :placeholder="copy.phoneInput"
          />
        </label>
        <label class="resume-field">
          <span>GitHub</span>
          <input
            v-model="github"
            type="text"
            name="url"
            inputmode="url"
            autocomplete="url"
            placeholder="https://github.com/…"
          />
        </label>
        <label class="resume-field resume-field-wide">
          <span>{{ copy.blogLabel }}</span>
          <input
            v-model="blog"
            type="text"
            name="url"
            inputmode="url"
            autocomplete="url"
            placeholder="https://"
          />
        </label>
      </div>
      <div class="resume-actions">
        <button class="resume-export" type="submit">{{ copy.exportLabel }}</button>
        <button class="resume-reset" type="button" @click="resetIdentity">{{ copy.resetLabel }}</button>
      </div>
      <p class="resume-hint">{{ copy.hint }}</p>
    </form>

    <header class="resume-masthead" aria-live="polite">
      <p class="resume-name" :class="{ 'is-placeholder': !nameTrimmed }">{{ displayName }}</p>
      <p class="resume-role">{{ copy.role }}</p>
      <p class="resume-meta">{{ copy.meta }}</p>
      <ul class="resume-contacts">
        <li
          v-for="item in contactItems"
          :key="item.key"
          :class="{ 'is-placeholder': item.placeholder }"
        >
          <a v-if="item.href" :href="item.href">{{ item.text }}</a>
          <span v-else>{{ item.text }}</span>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
var STORAGE_KEY = 'lucas-resume-identity-v1'

var COPY = {
  zh: {
    panelTitle: '填写姓名与联系方式',
    lead: '下方抬头会随输入更新，导出的 PDF 用的是同一份内容。中英文简历共用这些信息，只保存在这台浏览器里。未填写时保持脱敏占位。',
    nameLabel: '姓名',
    emailLabel: '邮箱',
    phoneLabel: '电话',
    blogLabel: '博客',
    nameInput: '简历上的姓名',
    emailInput: 'name@example.com',
    phoneInput: '手机号',
    exportLabel: '导出 PDF',
    resetLabel: '恢复脱敏',
    hint: '导出会打开系统打印对话框。打印机选「存储为 PDF」或「另存为 PDF」，纸张 A4，边距选默认。文件名取当前姓名。这是矢量排版，不把网页截成图片。',
    otherHref: '/about/resume-en.html',
    otherLabel: '英文简历',
    role: 'TechLead / 业务线全栈技术负责人',
    meta: '本科 · 软件工程 · 8 年经验 · 创业公司 TechLead',
    namePlaceholder: '姓名',
    emailPlaceholder: '邮箱待填写',
    phonePlaceholder: '电话待填写',
    fileSuffix: 'TechLead简历'
  },
  en: {
    panelTitle: 'Name and contact',
    lead: 'The header below updates as you type, and the PDF uses that same header. Chinese and English resumes share these fields. They stay in this browser only. Empty fields stay as placeholders.',
    nameLabel: 'Full name',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    blogLabel: 'Blog',
    nameInput: 'Name on the resume',
    emailInput: 'name@example.com',
    phoneInput: 'Phone number',
    exportLabel: 'Export PDF',
    resetLabel: 'Clear personal details',
    hint: 'Export opens the system print dialog. Choose “Save as PDF”, paper size A4, and default margins. The file name follows the name field. Text stays vector type, not a screenshot.',
    otherHref: '/about/resume.html',
    otherLabel: '中文简历',
    role: 'TechLead / Business-Line Technical Owner',
    meta: 'B.E. Software Engineering · 8 years · TechLead at a startup',
    namePlaceholder: 'Full name',
    emailPlaceholder: 'Email',
    phonePlaceholder: 'Phone',
    fileSuffix: 'TechLead-Resume'
  }
}

var PUBLIC_GITHUB = 'https://github.com/guanyuhao'
var PUBLIC_BLOG = 'https://guanyuhao.github.io/'

export default {
  name: 'ResumeSheet',
  props: {
    lang: {
      type: String,
      default: 'zh'
    }
  },
  data: function () {
    return {
      name: '',
      email: '',
      phone: '',
      github: PUBLIC_GITHUB,
      blog: PUBLIC_BLOG,
      hydrated: false
    }
  },
  computed: {
    copy: function () {
      return this.lang === 'en' ? COPY.en : COPY.zh
    },
    nameTrimmed: function () {
      return (this.name || '').trim()
    },
    displayName: function () {
      return this.nameTrimmed || this.copy.namePlaceholder
    },
    contactItems: function () {
      var email = (this.email || '').trim()
      var phone = (this.phone || '').trim()
      var github = (this.github || '').trim()
      var blog = (this.blog || '').trim()
      var items = []

      items.push(email
        ? { key: 'email', text: email, href: 'mailto:' + email, placeholder: false }
        : { key: 'email', text: this.copy.emailPlaceholder, href: '', placeholder: true })

      items.push(phone
        ? { key: 'phone', text: phone, href: 'tel:' + phone.replace(/\s+/g, ''), placeholder: false }
        : { key: 'phone', text: this.copy.phonePlaceholder, href: '', placeholder: true })

      if (github) {
        items.push({
          key: 'github',
          text: this.shortUrl(github),
          href: this.withProtocol(github),
          placeholder: false
        })
      }
      if (blog) {
        items.push({
          key: 'blog',
          text: this.shortUrl(blog),
          href: this.withProtocol(blog),
          placeholder: false
        })
      }
      return items
    },
    identity: function () {
      return {
        name: this.name,
        email: this.email,
        phone: this.phone,
        github: this.github,
        blog: this.blog
      }
    }
  },
  watch: {
    identity: {
      deep: true,
      handler: function (value) {
        if (typeof window === 'undefined' || !this.hydrated) return
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
        } catch (e) {}
      }
    }
  },
  mounted: function () {
    document.body.classList.add('resume-page')
    this.loadIdentity()
    this.hydrated = true
  },
  beforeDestroy: function () {
    document.body.classList.remove('resume-page')
  },
  methods: {
    loadIdentity: function () {
      try {
        var raw = window.localStorage.getItem(STORAGE_KEY)
        if (!raw) return
        var saved = JSON.parse(raw)
        if (!saved || typeof saved !== 'object') return
        if (typeof saved.name === 'string') this.name = saved.name
        if (typeof saved.email === 'string') this.email = saved.email
        if (typeof saved.phone === 'string') this.phone = saved.phone
        if (typeof saved.github === 'string') this.github = saved.github
        if (typeof saved.blog === 'string') this.blog = saved.blog
      } catch (e) {}
    },
    resetIdentity: function () {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.github = PUBLIC_GITHUB
      this.blog = PUBLIC_BLOG
    },
    shortUrl: function (value) {
      return String(value).replace(/^https?:\/\//i, '').replace(/\/$/, '')
    },
    withProtocol: function (value) {
      if (/^https?:\/\//i.test(value)) return value
      if (/^mailto:/i.test(value) || /^tel:/i.test(value)) return value
      return 'https://' + value
    },
    exportPdf: function () {
      var previousTitle = document.title
      var base = this.nameTrimmed || (this.lang === 'en' ? 'Resume' : '简历')
      base = base.replace(/[\\/:*?"<>|]/g, ' ').replace(/\s+/g, ' ').trim()
      if (!base) base = this.lang === 'en' ? 'Resume' : '简历'
      document.title = base + '-' + this.copy.fileSuffix

      var restore = function () {
        document.title = previousTitle
        window.removeEventListener('afterprint', restore)
      }
      window.addEventListener('afterprint', restore)
      window.print()
    }
  }
}
</script>

<style>
.resume-sheet {
  margin: 0 0 0.5rem;
}

.resume-controls {
  border: 1px solid #e4e7eb;
  background: #f6f8f7;
  border-radius: 12px;
  padding: 16px 16px 12px;
  margin: 0 0 22px;
}

.resume-controls-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.resume-controls-title {
  margin: 0;
  font-size: 15px;
  font-weight: 650;
  color: #102a43;
}

.resume-lang {
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.resume-controls-lead,
.resume-hint {
  margin: 8px 0 0;
  font-size: 13px;
  line-height: 1.55;
  color: #52606d;
}

.resume-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 12px;
  margin-top: 14px;
}

.resume-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  font-weight: 650;
  color: #3e4c59;
}

.resume-field-wide {
  grid-column: 1 / -1;
}

.resume-field input {
  font: inherit;
  font-weight: 450;
  font-size: 14px;
  color: #102a43;
  background: #fff;
  border: 1px solid #d9e2ec;
  border-radius: 8px;
  padding: 8px 10px;
}

.resume-field input:focus {
  outline: 2px solid rgba(62, 175, 124, 0.35);
  border-color: #3eaf7c;
}

.resume-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.resume-export,
.resume-reset {
  font: inherit;
  font-size: 14px;
  font-weight: 650;
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
}

.resume-export {
  background: #3eaf7c;
  color: #fff;
  border: 1px solid #3eaf7c;
}

.resume-export:hover {
  background: #34986c;
}

.resume-reset {
  background: #fff;
  color: #334e68;
  border: 1px solid #d9e2ec;
}

.resume-masthead {
  padding: 2px 0 12px;
  margin: 0 0 8px;
  border-bottom: 1px solid #d9e2ec;
}

.resume-name {
  margin: 0;
  font-size: 2rem;
  line-height: 1.15;
  font-weight: 680;
  letter-spacing: -0.02em;
  color: #102a43;
}

.resume-name.is-placeholder {
  color: #9aa5b1;
  font-weight: 560;
}

.resume-role {
  margin: 8px 0 0;
  font-size: 1.05rem;
  line-height: 1.4;
  font-weight: 600;
  color: #243b53;
}

.resume-meta {
  margin: 4px 0 0;
  font-size: 0.92rem;
  line-height: 1.5;
  color: #52606d;
}

.resume-contacts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px 0;
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  font-size: 0.92rem;
  line-height: 1.5;
}

.resume-contacts li {
  display: inline-flex;
  align-items: center;
}

.resume-contacts li:not(:last-child)::after {
  content: "·";
  margin: 0 8px;
  color: #9aa5b1;
}

.resume-contacts li.is-placeholder {
  color: #9aa5b1;
}

@media (max-width: 719px) {
  .resume-fields {
    grid-template-columns: 1fr;
  }

  .resume-field-wide {
    grid-column: auto;
  }

  .resume-name {
    font-size: 1.6rem;
  }
}

@media print {
  .resume-controls {
    display: none !important;
  }

  .resume-masthead {
    border-bottom: 1.25pt solid #111;
    padding: 0 0 8pt;
    margin: 0 0 4pt;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .resume-name {
    font-size: 22pt !important;
    line-height: 1.15 !important;
    color: #111 !important;
    letter-spacing: -0.01em;
  }

  .resume-name.is-placeholder {
    color: #666 !important;
  }

  .resume-role {
    margin-top: 4pt !important;
    font-size: 11.5pt !important;
    color: #222 !important;
  }

  .resume-meta {
    margin-top: 2pt !important;
    font-size: 10pt !important;
    color: #333 !important;
  }

  .resume-contacts {
    margin-top: 6pt !important;
    font-size: 9.5pt !important;
    color: #222 !important;
  }

  .resume-contacts a,
  .resume-contacts li.is-placeholder {
    color: #222 !important;
    font-weight: 400 !important;
    text-decoration: none !important;
  }

  .resume-contacts li.is-placeholder {
    color: #555 !important;
  }
}
</style>
