<template>
  <swiper
    class="swiper-container"
    :modules="modules"
    navigation
    loop
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <video id="v0" autoplay loop src="@/assets/videos/coder.mp4" />
    </swiper-slide>
    <swiper-slide>
      <video id="v1" autoplay loop src="@/assets/videos/musician.mp4" />
    </swiper-slide>
    <swiper-slide>
      <video id="v2" autoplay loop src="@/assets/videos/photographer.mp4" />
    </swiper-slide>
    ...
  </swiper>
</template>
<script lang="ts">
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const onSwiper = (swiper: any) => {
     console.log(swiper,'1234');
     
    };
    const onSlideChange = (s:any) => {
      console.log(s.activeIndex);
      const id = "v" + s.activeIndex;
      const oV = document.getElementById(id);
      oV!.play();
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
};
</script>
<style scoped lang="scss">
.swiper-container {
  height: 100vh;
  width: 100%;
  .swiper-slide{
    height: 100%;
    video{
      height: 100%;
    }
  }
}
</style>
