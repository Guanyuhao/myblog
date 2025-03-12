<template>
  <div class="project-card">
    <div class="project-header">
      <h3>{{ title }}</h3>
      <span class="project-company">{{ company }}</span>
    </div>
    <div class="project-period">{{ period }}</div>
    <p class="project-description">{{ description }}</p>
    <div class="project-tech">{{ tech }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'tech', 'period', 'company']
}
</script>

<style scoped>
.project-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s, box-shadow 0.3s;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.project-header h3 {
  margin: 0;
  margin-right: 10px;
  font-size: 1.15rem;
  color: #2c3e50;
  border-bottom: none;
  line-height: 1.2;
  flex: 1; /* 允许h3占据更多空间 */
  padding-top: 0;
}
.project-company {
  font-size: 0.85rem;
  background-color: #3eaf7c;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  white-space: nowrap; /* 防止文本换行 */
  flex-shrink: 0; /* 防止元素被压缩 */
  align-self: flex-start; /* 确保始终在顶部 */
}
.project-period {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
.project-description {
  color: #475569;
  margin-bottom: 1rem;
  line-height: 1.5;
}
.project-tech {
  color: #3eaf7c;
  font-size: 0.9rem;
  font-weight: 500;
}
</style> 