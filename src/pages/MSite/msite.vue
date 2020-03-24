<template>
  <div>
    <!-- 首頁頭部 -->
    <HeaderTop title="歡迎來到購物商城">
      <span class="slotLeft" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="slotRight" slot="right">登入|註冊</span>
    </HeaderTop>
    <div class="content">
      <div class="nav">
        <!-- 首頁導航 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="n in 3" :key="n">
              <a class="swiperOne">
                <div class="imgBlock" v-for="n in 8" :key="n">
                  <!--  <img src="./imgs/nav/1.jpg" /> -->
                  <img src="./imgs/nav/1.jpg" />
                </div>
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="shopList"></div>
    </div>
  </div>
</template>
<script>
import HeaderTop from '@/components/headerTop.vue'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  data () {
    return {
      baseImageUrl: './imgs/nav/1.jpg'
    }
  },

  mounted () {
    /* eslint-disable */
    new Swiper(".swiper-container", {
      /*  autoplay: {
        delay: 2000 //2秒切换一次
      }, */
      loop: true, // 循环模式选项
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  components: {
    HeaderTop
  }
};
</script>
<style>
@import url("../../common/download/font_7u524u7kfii/iconfont.css");
.slotLeft {
  position: absolute;
  display: inline-block;
  width: 20%;
  left: 0;
}
.slotRight {
  position: absolute;
  display: inline-block;
  width: 20%;
  right: 0;
}
.swiper-container {
  position: relative;
  height: 200px;
}

.swiperOne {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: crimson;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.imgBlock {
  position: relative;
  display: inline-block;

  width: 20%;
  margin: 3px;
  border-radius: 40px;
  background-color: cyan;
  overflow: hidden;
}
.imgGroup {
  position: relative;
  display: block;
  width: 100%;
  background-color: green;
}
</style>
