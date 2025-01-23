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
  position: relative;
  width: 100%;
  .view-container {
    margin-top: 80px;
  }
}
</style>
