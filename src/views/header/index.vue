<template>
  <header class="header">
    <div class="logo">
      <img class="logo-main" src="@/assets/images/logo.png" width="36" height="30" alt="logo" />
      <img class="another-me" src="@/assets/images/Another_Me.png" width="130" height="20" alt="Another_Me">
    </div>
    <ul class="links">
      <li class="link-item" v-for="(o, i) in linkLists" :key="i" @click="() => go(o)">
        {{ o.name }}
      </li>
    </ul>
  </header>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const activeLink = computed(() => {
  return linkLists.find(s => s.value === useRouter().currentRoute.value.name)
})
const linkLists = [
  { name: '平台介绍', path: '/home', value: 'home' },
  { name: '下载APP', path: '/download', value: 'download' }
]
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  
  .logo {
    margin-left: 15px;
    display: flex;
    align-items: center;
    height: 50px;
    .another-me {
      margin-left: 10px;
    }
  }
  
  .links {
    margin-left: auto;
    display: flex;
    
    .link-item {
      padding: 2px 25px;
      height: 36px;
      background-color: black;
      border-radius: 20px;
      margin: 0 20px;
      color: #ffffff;
      display: flex;
      align-items: center;
    }
  }
}
</style>
