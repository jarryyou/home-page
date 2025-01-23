<template>
  <section class="about-wrapper">
    <img class="about-logo" src="@/assets/images/about-logo.png" width="270" height="92" alt="logo">
    <div class="qr-code">
      <div class="qr-code-img">
      
      </div>
      <div class="qr-code-text">
        扫一扫，添加客服微信
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.about-wrapper {
  height: 300px;
  width: 100%;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  .about-logo {
    margin-left: 200px;
  }
  
  .qr-code {
    width: 150px;
    height: 170px;
    margin-left: auto;
    margin-right: 200px;
    .qr-code-img {
      width: 150px;
      height: 150px;
      background-color: #ffffff;
    }
    .qr-code-text {
      width: 100%;
      text-align: center;
      font-size:  14px;
      color: #ffffff;
    }
  }
}
</style>
