<template>
  <div>
    <!-- 首頁頭部 -->
    <HeaderTop :title="address.name">
      <span class="slotLeft" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="slotRight" slot="right">登入|註冊</span>
    </HeaderTop>
    <div class="content">
      <div class="nav">
        <!-- 首頁導航 -->
        <div class="swiper-container" v-if="categorys.length">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(categorys, index) in categorysArr"
              :key="index"
            >
              <a
                class="swiperOne"
                v-for="(category, index) in categorys"
                :key="index"
              >
                <div class="imgBlock">
                  <!--  <img src="./imgs/nav/1.jpg" /> -->
                  <img :src="categoryBaseUrl + category.image_url" />
                  <span class="text">{{ category.title }}</span>
                </div>
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="./imgs/msite_back.svg" alt="back" v-else />
      </div>
      <div class="shopArea">
        <!--商家列表標題-->
        <div class="shopHeader">
          <i class="iconfont icon-jichuguanli"></i>
          <span>附近商家</span>
        </div>
        <!--商家列表-->
        <ShopList />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import HeaderTop from '@/components/headerTop.vue'
import ShopList from '@/components/ShopList/ShopList.vue'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  data () {
    return {
      baseImageUrl: './imgs/nav/1.jpg',
      categoryBaseUrl: 'https://fuss10.elemecdn.com/'
    }
  },

  mounted () {
    this.$store.dispatch('getCategorys')
    this.$store.dispatch('getShops')
  },
  components: {
    HeaderTop,
    ShopList
  },
  computed: {
    ...mapState(['address', 'categorys']),
    // 食品分類輪播
    categorysArr () {
      const { categorys } = this
      const arr = []
      let minArr = []
      categorys.forEach(c => {
        if (minArr.length === 8) {
          minArr = []
        }
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        minArr.push(c)
      })
      return arr
    }
  },
  watch: {
    categorys (value) {
      this.$nextTick(() => {
        /* eslint-disable */
        new Swiper(".swiper-container", {
          autoplay: {
            delay: 2000 //2秒切换一次
          },
          loop: true, // 循环模式选项
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>
<style scoped>
@import url("../../common/download/font_batbg34t7tl/iconfont.css");
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
.nav {
  height: 200px;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.swiperOne {
  width: 25%;
}
.imgBlock {
  display: block;
  width: 100%;
  text-align: center;
}
.imgBlock > img {
  display: inline-block;
  width: 50px;
  height: 50px;
}
.imgBlock > .text {
  display: block;
  width: 100%;
  text-align: center;
}
.shopHeader {
  position: relative;
  height: 30px;
  text-align: left;
  padding: 10px;
  font-size: 1.3rem;
  border-top: rgb(179, 179, 180) 2px solid;
}
</style>
