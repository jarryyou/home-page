<template>
  <section class="about-wrapper">
    <img class="about-logo" src="@/assets/images/about-logo.png" alt="logo">
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
  height: 18.75em;
  width: 100%;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  .about-logo {
    margin-left: 25em;
    width: 25.38em;
    height: 8.38em;
  }
  
  .qr-code {
    width: 9.38em;
    height: 10.33em;
    margin-left: auto;
    margin-right: 25em;
    .qr-code-img {
      width: 9.38em;
      height: 9.38em;
      background-color: #ffffff;
      margin-bottom: 0.75em;
    }
    .qr-code-text {
      width: 100%;
      text-align: center;
      font-size: 0.88em;
      color: #ffffff;
    }
  }
}
</style>
