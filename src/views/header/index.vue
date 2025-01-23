<template>
  <header class="header">
    <div class="logo">
      <img class="logo-main" src="@/assets/images/logo.png" width="60px" height="48px" alt="logo" />
      <img class="another-me" src="@/assets/images/Another_Me.png" width="192px" height="30px" alt="Another_Me">
    </div>
    <ul class="links">
      <li
          :class="['link-item', currentLink === o.path ? 'active-link' : '']"
          v-for="(o, i) in linkLists"
          :key="i"
          @click="() => go(o)"
      >
        {{ o.name }}
      </li>
    </ul>
  </header>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import type {LinkItem} from "@/views/header/header.ts";

const router = useRouter()
const route = useRoute()
const currentLink = computed(() => {
  return route.path
})
const linkLists: LinkItem[] = [
  { name: '平台介绍', path: '/home', value: 'home' },
  { name: '下载APP', path: '/download', value: 'download' }
]

const go = (o: LinkItem) => {
  router.push(o.path)
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  position: fixed;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  
  .logo {
    margin-left: 30px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    height: 50px;
    .another-me {
      margin-left: 12px;
    }
  }
  
  .links {
    margin-left: auto;
    display: flex;
    
    .link-item {
      width: 86px;
      padding: 2px 25px;
      height: 40px;
      background-color: #ffffff;
      border-radius: 22px;
      margin: 0 30px;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    
    .active-link {
      background-color: black;
      color: #ffffff;
    }
  }
}
</style>
