<template>
  <div class="view-container home-container">
    <PicWraper></PicWraper>
    <Properties></Properties>
    <GenContents></GenContents>
    <Creators></Creators>
    <About></About>
  </div>
</template>
<script lang="ts" setup>
import PicWraper from './component/picWrapper/index.vue'
import GenContents from './component/genContents/index.vue'
import Properties from './component/properties/index.vue'
import Creators from './component/creators/index.vue'
import About from './component/about/index.vue'
</script>
<style lang="scss" scoped>
</style>
