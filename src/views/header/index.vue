<template>
  <header class="header">
    <div class="logo">
      <img class="logo-main" src="@/assets/images/logo.png" alt="logo" />
      <img class="another-me" src="@/assets/images/Another_Me.png" alt="Another_Me">
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
  height: 5em;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  
  .logo {
    margin-left: 1.94em;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    height: 100%;
    .logo-main {
      width: 3.69em;
      height: 3em;
    }
    .another-me {
      margin-left: 0.75em;
      width: 12em;
      height: 2em;
    }
  }
  
  .links {
    margin-left: auto;
    display: flex;
    
    .link-item {
      width: 5.38em;
      height: 1.25em;
      padding: 0.75em 1.56em;
      background-color: #ffffff;
      border-radius: 1.38em;
      margin: 0 1.88em;
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
