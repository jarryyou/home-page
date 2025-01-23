<template>
  <div class="swiperCon">
    <swiper
      loop
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :modules="modules"
      :pagination="{ clickable: true }"
      class="swiper-container"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <video id="v0" autoplay muted loop src="@/assets/videos/coder.mp4" />
      </swiper-slide>
      <swiper-slide>
        <video id="v1" autoplay muted loop src="@/assets/videos/musician.mp4" />
      </swiper-slide>
      <swiper-slide>
        <video
          id="v2"
          autoplay
          muted
          loop
          src="@/assets/videos/photographer.mp4"
        />
      </swiper-slide>
      ...
    </swiper>
    <div class="AnotherMe">Another Me，开启多维世界</div>
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const onSlideChange = (s: any) => {
      console.log(s.activeIndex);
      const id = "v" + s.activeIndex;
      const oV = document.getElementById(id);
      oV!.play();
      console.log(oV, "====");
    };
    return {
      onSlideChange,
      modules: [Navigation, Pagination, Autoplay],
    };
  },
};
</script>
<style scoped lang="scss">
.swiperCon {
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
      bottom: 80px !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :deep(.swiper-pagination-bullet) {
      width: 12px;
      height: 12px;
      border: 1px solid #fff;
    }
    :deep(.swiper-pagination-bullet-active) {
      width: 13px;
      height: 13px;
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
    font-size: 72px;
    color: #fff;
    text-align: center;
    user-select: none;
  }
}
</style>
