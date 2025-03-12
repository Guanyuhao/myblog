export default ({ Vue, router }) => {
  // 添加全局环境变量
  Vue.prototype.$isProduction = process.env.NODE_ENV === 'production';
  Vue.prototype.$isDevelopment = process.env.NODE_ENV !== 'production';
  Vue.prototype.$phoneNumber = process.env.PHONE_NUMBER || '17600102308';
  
  // 确保所有代码都在客户端环境中执行
  if (typeof window !== 'undefined') {
    router.afterEach(() => {
      // 添加PDF下载功能到全局作用域
      // 检测是否为移动设备
      window.isMobileDevice = function() {
        return (window.innerWidth <= 768) || 
               /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      };
      
      // 加载脚本的辅助函数
      window.loadScript = function(url) {
        return new Promise((resolve, reject) => {
          if (document.querySelector(`script[src="${url}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = url;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      };

      // 添加PDF下载功能
      window.downloadResume = async function() {
        console.log('PDF下载函数被调用');
        
        // 检测移动设备
        if (window.isMobileDevice()) {
          alert('移动设备不支持PDF下载功能，请使用桌面浏览器访问本页面下载PDF版简历。');
          return;
        }
        
        try {
          // 更新按钮状态
          const btn = document.querySelector('.resume-action-btn:nth-child(2)');
          if (!btn) {
            console.error('未找到下载按钮');
            return;
          }
          
          const originalText = btn.innerText;
          btn.innerText = '准备中...';
          btn.disabled = true;
          
          // 加载print-js库
          await window.loadScript('https://cdnjs.cloudflare.com/ajax/libs/print-js/1.6.0/print.min.js');
          
          if (typeof printJS === 'undefined') {
            throw new Error('print-js库未正确加载');
          }
          
          btn.innerText = '生成PDF中...';
          
          // 创建一个只包含简历内容的打印样式
          const style = document.createElement('style');
          style.textContent = `
            @media print {
              body * {
                visibility: hidden;
              }
              .resume-container, .resume-container * {
                visibility: visible;
              }
              .resume-container {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
              }
              .resume-actions {
                display: none !important;
              }
            }
          `;
          document.head.appendChild(style);
          
          // 设置文件名
          const filename = '关哈哈-前端开发工程师简历.pdf';
          
          // 使用浏览器原生打印功能，但通过样式控制只打印简历部分
          // 关键是我们修改了打印样式，使得只有简历容器可见
          window.onafterprint = function() {
            // 打印完成后删除样式和事件监听
            document.head.removeChild(style);
            window.onafterprint = null;
            
            // 恢复按钮状态
            btn.innerText = originalText;
            btn.disabled = false;
            console.log('PDF生成完成');
          };
          
          // 一些浏览器可能不触发afterprint事件，添加超时恢复
          setTimeout(() => {
            if (btn.innerText === '生成PDF中...') {
              btn.innerText = originalText;
              btn.disabled = false;
              console.log('由于超时恢复按钮状态');
            }
          }, 5000);
          
          // 调用打印
          window.print();
          
        } catch (error) {
          console.error('PDF生成失败:', error);
          alert('PDF生成失败: ' + error.message);
          
          // 恢复按钮状态
          const btn = document.querySelector('.resume-action-btn:nth-child(2)');
          if (btn) {
            btn.innerText = '下载PDF版';
            btn.disabled = false;
          }
        }
      };
      
      // 页面加载完成后检测设备类型并调整PDF按钮
      // 使用setTimeout确保DOM已经准备好
      setTimeout(() => {
        const pdfBtn = document.querySelector('.resume-action-btn:nth-child(2)');
        if (pdfBtn && window.isMobileDevice()) {
          pdfBtn.innerText = '移动端不支持PDF下载';
          pdfBtn.style.opacity = '0.7';
          pdfBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('移动设备不支持PDF下载功能，请使用桌面浏览器访问本页面下载PDF版简历。');
            return false;
          });
        }
      }, 1000);
    });
  }
  // 添加全局属性
};