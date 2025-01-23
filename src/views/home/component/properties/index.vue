<template>
  <section class="porperty-wrapper">
    <div class="wrapper-title">
      <p class="title-main">平台特征</p>
      <p class="title-description">Another Me 汇聚AIGC内容和创作者的共创型超级入口</p>
    </div>
    <div class="details">
      <ul class="left">
        <li class="detail-item" v-for="(o, i) in leftDetailList" :key="i">
          <img class="detail-image" :src="o.image" :alt="o.alt" />
          <div class="detail-text">
            <p class="detail-title">
              {{ o.title }}
            </p>
            <p class="detail-content">
              {{ o.content }}
            </p>
          </div>
        </li>
      </ul>
      <ul class="right">
        <li class="detail-item" v-for="(o, i) in rightDetailList" :key="i">
          <img class="detail-image" :src="o.image" :alt="o.alt" />
          <div class="detail-text">
            <p class="detail-title">
              {{ o.title }}
            </p>
            <p class="detail-content">
              {{ o.content }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts" setup>
import pic1 from '@/assets/images/1@2x.png'
import pic2 from '@/assets/images/2@2x.png'
import pic3 from '@/assets/images/3@2x.png'
import pic4 from '@/assets/images/4@2x.png'
import pic5 from '@/assets/images/5@2x.png'

const leftDetailList = [
  {
    title: '去中心化参与',
    content: '"Another Me"摒弃了单一中心控制点的模式，每个用户均为平台生态不可或缺的组成部分。这种去中心化的架构促进了广泛参与与协作，保障了创意与想法的自由流通，进而汇聚为强大的创造力。',
    image: pic1
  },
  {
    title: 'AIGC技术的深度融合',
    content: '平台深度整合了人工智能生成内容的技术，向用户提供了一系列个性化的创作工具。无论是虚拟形象的塑造、场景的构建，还是内容的创造，AIGC技术均能依据用户的偏好及需求实现智能匹配与创作，极大地降低了创作门槛。',
    image: pic2
  },
]

const rightDetailList = [
  {
    title: '宇宙级入口的构想',
    content: '将元宇宙视为一个充满无限可能的宇宙，平台致力于打造一个容纳多元创意、文化和体验的入口。这一入口不仅连接着虚拟与现实世界，更将不同文化、背景及兴趣的人群联结起来，共同探索元宇宙的无穷魅力。',
    image: pic3
  },
  {
    title: '引领者角色的赋予',
    content: '参与者摆脱传统被动接受的角色，转变为积极的引领者。通过个人实际行动及深远影响力，推动平台的发展，并在塑造元宇宙未来方面发挥关键作用。',
    image: pic4
  },
  {
    title: 'Artist权益受护',
    content: '区块链版权存证技术可让作品快速存证确权，作品创作相关信息实现全自动化登记，且其透明可溯源的特性增强了版权的公开性。',
    image: pic5
  }
]
</script>
<style lang="scss" scoped>
.porperty-wrapper {
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  .wrapper-title {
    margin: 5.63em auto;
    width: 40.5em;
    height: 7.63em;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .title-main {
      font-size: 4.25em;
      height: 4.25em;
      color: #2A2A2A;
    }
    
    .title-description {
      margin-top: 1.88em;
      font-size: 1.5em;
      height: 1.5em;
      color: #888888;
    }
  }
  
  .details {
    height: calc(100% - 18.88em);
    margin: 0 1.88em;
    //background-color: lightseagreen;
    display: flex;
    
    .detail-item {
      flex-grow: 1;
      margin-bottom: 1.25em;
      display: flex;
      align-items: center;
      background-color: #F5F7FF;
      border-radius: 1.5em;
      .detail-image {
        width: 10em;
        height: 10em;
      }
      .detail-text {
        margin-left: 4.38em;
        .detail-title {
          color: #2A2A2A;
          font-size: 2.25em;
          margin-bottom: 0.5em;
        }
        .detail-content {
          color: #2A2A2A;
          font-size: 1.13em;
        }
      }
    }

    .left {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: calc(100% - 5.01em);
      //background-color: salmon;
      .detail-item {
        padding: 0 3.13em;
      }
      & :last-child {
        margin-bottom: 0;
      }
    }

    .right {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: calc(100% - 5.01em);
      margin-left: 1.25em;
      //background-color: lightblue;
      .detail-item {
        padding: 1em;
        .detail-text {
          margin-left: 2.5em;
        }
        .detail-image {
          width: 8em;
          height: 8em;
        }
      }
      & :last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
