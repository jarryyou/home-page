<template>
  <section class="wrapper">
    <div class="headWrapper">
      <div class="title">热门作品</div>
      <div class="tip">建立创作利益分配的新范式，构建健康的AIGC创作者生态</div>
    </div>
    <div class="box one">
      <div
        class="item item1"
        type="1"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
      <div
        class="item item2 item-audio"
        type="audio"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <img class="audio-bg" :src="music_bg" alt="" />
        <img class="audio-gp" :src="music_gp" alt="" />
        <img class="audio-icon-play" :src="music_playing" alt="" />
        <img class="audio-icon-pause" :src="music_pause" alt="" />
        <audio :src="audio1"></audio>
      </div>

      <div
        class="item item3"
        type="2"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
    </div>
    <div class="box two">
      <div class="empty"></div>
      <div
        class="item item4"
        type="video"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <video :src="video1" loop muted></video>
      </div>
      <div
        class="item item5"
        type="2"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
      <div
        class="item item6"
        type="2"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
    </div>
    <div class="box three">
      <div class="empty"></div>
      <div
        class="item item7"
        type="2"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
      <div
        class="item item8"
        type="2"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
    </div>
    <div class="box four">
      <div class="empty"></div>
      <div
        class="item item9 item-audio"
        type="audio"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <img class="audio-bg" :src="music_bg" alt="" />
        <img class="audio-gp" :src="music_gp" alt="" />
        <img class="audio-icon-play" :src="music_playing" alt="" />
        <img class="audio-icon-pause" :src="music_pause" alt="" />
        <audio :src="audio2"></audio>
      </div>
      <div
        class="item item10"
        type="video"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <video :src="video2" loop muted></video>
      </div>
      <div
        class="item item11 item-audio"
        type="audio"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <img class="audio-bg" :src="music_bg" alt="" />
        <img class="audio-gp" :src="music_gp" alt="" />
        <img class="audio-icon-play" :src="music_playing" alt="" />
        <img class="audio-icon-pause" :src="music_pause" alt="" />
        <audio :src="audio3"></audio>
      </div>
    </div>
    <div class="box five">
      <div class="empty"></div>
      <div
        class="item item12"
        type="2"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
      <div
        class="item item13"
        type="2"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
    </div>
    <div class="box six">
      <div class="empty"></div>
      <div
        class="item item14 item-audio"
        type="audio"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <img class="audio-bg" :src="music_bg" alt="" />
        <img class="audio-gp" :src="music_gp" alt="" />
        <img class="audio-icon-play" :src="music_playing" alt="" />
        <img class="audio-icon-pause" :src="music_pause" alt="" />
        <audio :src="audio4"></audio>
      </div>
      <div
        class="item item15"
        type="1"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
      <div
        class="item item16"
        type="1"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
    </div>
    <div class="box seven">
      <div
        class="item item17"
        type="1"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
      <div
        class="item item18 item-audio"
        type="audio"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <img class="audio-bg" :src="music_bg" alt="" />
        <img class="audio-gp" :src="music_gp" alt="" />
        <img class="audio-icon-play" :src="music_playing" alt="" />
        <img class="audio-icon-pause" :src="music_pause" alt="" />
        <audio :src="audio2"></audio>
      </div>
      <div
        class="item item19"
        type="1"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      ></div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import audio1 from "@/assets/audios/audio1.mp3";
import audio2 from "@/assets/audios/audio2.mp3";
import audio3 from "@/assets/audios/audio3.mp3";
import audio4 from "@/assets/audios/audio4.mp3";
import music_bg from "@/assets/images/music_bg.png";
import music_gp from "@/assets/images/music_gp.png";
import music_playing from "@/assets/images/music-playing.png";
import music_pause from "@/assets/images/music-pause.png";
import video1 from "@/assets/videos/video1.mp4";
import video2 from "@/assets/videos/video2.mp4";
import { ref } from "vue";

const isActive = ref(false);
const mouseEnter = (e: any) => {
  console.log(e);
  const type = e.target.getAttribute("type");
  if (type == "audio") {
    e.target.children[1].className = "audio-gp active";
    e.target.children[2].style.display = "block";
    e.target.children[3].style.display = "none";
    e.target.children[4].play();
  }
  if (type == "video") {
    e.target.children[0].play();
  }
};
const mouseLeave = (e: any) => {
  const type = e.target.getAttribute("type");
  if (type == "audio") {
    e.target.children[1].className = "audio-gp";
    e.target.children[2].style.display = "none";
    e.target.children[3].style.display = "block";
    e.target.children[4].pause();
  }
  if (type == "video") {
    e.target.children[0].pause();
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #000;
  position: relative;
  .headWrapper {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    height: 215px;
    .title {
      text-align: center;
      margin-bottom: 30px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      font-size: 68px;
      color: #ffffff;
    }
    .tip {
      text-align: center;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 24px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .middle-bottom {
    display: flex;
    justify-content: space-between;
  }
  .box {
    width: 265px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 10px;
  }
  .item {
    border-radius: 6px;
    cursor: pointer;
  }
  @keyframes imgRotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  .item-audio {
    height: 265px;
    position: relative;
    .audio-bg {
      width: 265px;
    }
    .audio-gp {
      width: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      &.active {
        animation: imgRotate 8s linear infinite;
      }
    }
    .audio-icon-pause {
      width: 42px;
      position: absolute;
      right: 16px;
      bottom: 16px;
      display: block;
    }
    .audio-icon-play {
      width: 42px;
      position: absolute;
      right: 16px;
      bottom: 16px;
      display: none;
    }
  }
  .one {
    .item1 {
      height: 443px;
      background-color: #c92f2f;
      margin-bottom: 10px;
    }
    .item2 {
      height: 265px;
      margin-bottom: 10px;
    }
    .item3 {
      height: 352px;
      background-color: #a87575;
    }
  }
  .two {
    .empty {
      height: 115px;
    }
    .item4 {
      height: 150px;
      margin-bottom: 10px;
      background-color: #7b83ad;
      video {
        width: 100%;
      }
    }
    .item5 {
      height: 352px;
      margin-bottom: 10px;
      background-color: #b87474;
    }
    .item6 {
      height: 443px;
      background-color: #99a11c;
    }
  }
  .three {
    width: 265px;

    .empty {
      height: 275px;
    }
    .item7 {
      height: 443px;
      margin-bottom: 10px;
      background-color: #437467;
    }
    .item8 {
      height: 352px;
      background-color: #b6399b;
    }
  }
  .four {
    width: 265px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 10px;
    .empty {
      height: 380px;
    }
    .item9 {
      height: 265px;
      margin-bottom: 10px;
      background-color: #79d4d4;
    }
    .item10 {
      height: 150px;
      margin-bottom: 10px;
      background-color: #c97497;
      video {
        width: 100%;
      }
    }
    .item11 {
      height: 265px;
      background-color: #ecf87a;
    }
  }
  .five {
    width: 265px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .empty {
      height: 275px;
    }
    .item12 {
      height: 352px;
      margin-bottom: 10px;
      background-color: pink;
    }
    .item13 {
      height: 443px;
      background-color: #d3a612;
    }
  }

  .six {
    .empty {
      height: 91px;
    }
    .item14 {
      height: 265px;
      margin-bottom: 10px;
      background-color: #a82864;
    }
    .item15 {
      height: 352px;
      margin-bottom: 10px;
      background-color: #a4e9d6;
    }
    .item16 {
      height: 352px;
      background-color: #68e64e;
    }
  }
  .seven {
    margin-right: 0;
    .item17 {
      height: 443px;
      margin-bottom: 10px;
      background-color: #f0d2cd;
    }
    .item18 {
      height: 265px;
      margin-bottom: 10px;
      background-color: #6521bd;
    }
    .item19 {
      height: 352px;
      background-color: dimgray;
    }
  }
}
</style>
