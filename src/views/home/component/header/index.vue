<template>
  <header class="head-box">
    <div class="logo">another me</div>
      <div>
        <span class="introduction" round color="#000">平台介绍</span>
        <span class="download" link>下载APP</span>
      </div>
  </header>
</template>
<script lang="ts" setup>

</script>
<style scoped lang="scss">
.head-box {
    height: 50px;
    padding: 4px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .introduction {
      display: online-block;
      height: 48px;
      width: 120px;
      margin-right: 100px;
    }
  }
</style>
