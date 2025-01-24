<template>
  <section class="wrapper">
    <div class="box one">
      <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
    </div>
    <div class="box two">
      <div class="empty"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
      <div class="item item6"></div>
    </div>
    <div class="middle">
      <div class="headWrapper">
        <div class="title">热门作品</div>
        <div class="tip">
          建立创作利益分配的新范式，构建健康的AIGC创作者生态
        </div>
      </div>
      <div class="middle-bottom">
        <div class="three">
          <div class="item item7"></div>
          <div class="item item8"></div>
        </div>
        <div class="four">
          <div class="empty"></div>
          <div class="item item9"></div>
          <div class="item item10"></div>
          <div class="item item11"></div>
        </div>
        <div class="five">
          <div class="item item12"></div>
          <div class="item item13"></div>
        </div>
      </div>
    </div>
    <div class="box six">
      <div class="empty"></div>
      <div class="item item14"></div>
      <div class="item item15"></div>
      <div class="item item16"></div>
    </div>
    <div class="box seven">
      <div class="item item17"></div>
      <div class="item item18"></div>
      <div class="item item19"></div>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: space-between;
  background-color: #000;
  .middle {
    width: 42.6%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .headWrapper {
      width: 100%;
      height: 26.5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        padding-top: 80px;
        margin-bottom: 30px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        font-size: 68px;
        color: #ffffff;
      }
      .tip {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .middle-bottom {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .three {
        width: 32.65%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item7 {
          height: 55%;
          background-color: #437467;
        }
        .item8 {
          height: 43.6%;
          background-color: #b6399b;
        }
      }
      .four {
        width: 32.44%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .empty {
          height: 12%;
        }
        .item9 {
          height: 33%;
          background-color: #79d4d4;
        }
        .item10 {
          height: 18%;
          background-color: #c97497;
        }
        .item11 {
          height: 33%;
          background-color: #ecf87a;
        }
      }
      .five {
        width: 32.44%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item12 {
          height: 43.5%;
          background-color: pink;
        }
        .item13 {
          height: 55.2%;
          background-color: #d3a612;
        }
      }
    }
  }
  .box {
    width: 13.9%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .item {
    border-radius: 6px;
    cursor: pointer;
  }
  .one {
    height: 100%;
    .item1 {
      height: 41%;
      background-color: #c92f2f;
    }
    .item2 {
      height: 24.5%;
      background-color: #8d7777;
    }
    .item3 {
      height: 32.4%;
      background-color: #a87575;
    }
  }
  .two {
    .empty {
      height: 10.65%;
    }
    .item4 {
      height: 13.9%;
      background-color: #7b83ad;
    }
    .item5 {
      height: 32.6%;
      background-color: #b87474;
    }
    .item6 {
      height: 40%;
      background-color: #99a11c;
    }
  }

  .six {
    .empty {
      height: 10.65%;
    }
    .item14 {
      height: 24.5%;
      background-color: #a82864;
    }
    .item15 {
      height: 32.4%;
      background-color: #a4e9d6;
    }
    .item16 {
      height: 30%;
      background-color: #68e64e;
    }
  }
  .seven {
    .item17 {
      height: 41%;
      background-color: #f0d2cd;
    }
    .item18 {
      height: 24.45%;
      background-color: #6521bd;
    }
    .item19 {
      height: 32.6%;
      background-color: dimgray;
    }
  }
}
</style>
