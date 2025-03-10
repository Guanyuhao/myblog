<template>
  <div class="post-item">
    <h3><a :href="link">{{ title }}</a></h3>
    <p>{{ description }}</p>
    <div class="post-meta">
      <span class="post-date">{{ date }}</span>
      <a :href="link" class="read-more">阅读更多 →</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'link', 'date']
}
</script>

<style scoped>
.post-item {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  transition: box-shadow 0.3s;
}
.post-item:hover {
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}
.post-item h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: none;
}
.post-item h3 a {
  color: #2c3e50;
  text-decoration: none;
}
.post-item h3 a:hover {
  color: #3eaf7c;
}
.post-item p {
  color: #475569;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}
.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}
.post-date {
  color: #64748b;
}
.read-more {
  color: #3eaf7c;
  font-weight: 500;
  text-decoration: none;
}
</style> 