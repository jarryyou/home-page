<template>
  <div class="main-container">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script lang="ts" setup>
import Header from './views/header/index.vue'
import Footer from './views/footer/index.vue'
</script>
<style lang="scss" scoped>
.main-container {
  font-size: 12px;
  position: relative;
  width: 100%;
  .view-container {
    margin-top: 80px;
  }
}
html {
  font-size: 16px; /* 基础字体大小 */
}

@media (max-width: 1200px) {
  html {
    font-size: 14px; /* 在屏幕宽度小于1200px时调整字体大小 */
  }
}

@media (max-width: 768px) {
  html {
    font-size: 12px; /* 在屏幕宽度小于768px时进一步调整字体大小 */
  }
}
</style>
