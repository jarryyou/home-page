<template>
  <div class="swiperCon">
    <swiper
      loop
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :modules="modules"
      :pagination="{ clickable: true }"
      class="swiper-container"
    >
      <swiper-slide v-for="(item, index) in videoList" :key="index">
        <video
          :id="'v' + index"
          autoplay
          muted
          loop
          preload="auto"
          :src="item"
        />
      </swiper-slide>
    </swiper>
    <div class="AnotherMe">Another Me，开启多维世界</div>
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import coder from "@/assets/videos/coder.mp4";
import musician from "@/assets/videos/musician.mp4";
import photographer from "@/assets/videos/photographer.mp4";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const videoList = reactive([coder, musician, photographer]);

    return {
      videoList,
      modules: [Pagination, Autoplay],
    };
  },
};
</script>
<style scoped lang="scss">
.swiperCon {
  width: 100%;
  position: relative;
  height: calc(100vh - 80px);
  .swiper-container {
    height: 100%;
    width: 100%;
    .swiper-slide {
      height: 100%;
      video {
        height: 100%;
      }
    }
    :deep(.swiper-pagination) {
      bottom: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :deep(.swiper-pagination-bullet) {
      width: 0.75rem;
      height: 0.75rem;
      border: 1px solid #fff;
    }
    :deep(.swiper-pagination-bullet-active) {
      width: 0.81rem;
      height: 0.81rem;
      background-color: #fff;
    }

    --swiper-pagination-color: #fff;
  }
  .AnotherMe {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
    font-size: 4.5rem;
    color: #fff;
    text-align: center;
    user-select: none;
  }
}
</style>
