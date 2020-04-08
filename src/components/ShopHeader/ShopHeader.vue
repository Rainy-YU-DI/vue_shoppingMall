<template>
  <div class="shopHeader">
    <div
      class="headTop"
      :style="{
        backgroundImage: `url(${info.bgImg})`,
        backgroundSize: 'cover'
      }"
    >
      <a class="back" @click="$router.back()">
        <i class="iconfont icon-chevron-left"></i>
      </a>
    </div>
    <div class="headCenter">
      <div class="titleImg"></div>
      <div class="headCenter_one">
        <span>品牌</span><span>{{ info.name }}</span>
        <a class="iconfont icon-chevron-right" @click="toggleShopShow"></a>
      </div>
      <div class="headCenter_two">
        <span>{{ info.score }}</span>
        <span>月售{{ info.sellCount }}單</span>
        <span>雨滴專送</span>
        <span>約{{ info.deliveryTime }}分鐘</span>
        <span>距離{{ info.distance }}</span>
      </div>
    </div>
    <div class="headFooter">
      <div class="headFooter_left" v-if="info.supports">
        <span :class="supportClasses[info.supports[0].type]">{{
          info.supports[0].name
        }}</span>
        <span>{{ info.supports[0].content }}</span>
      </div>
      <div class="headFooter_right">
        <span>8個優惠</span>
        <a class="iconfont icon-chevron-right"></a>
      </div>
    </div>
    <transition name="fade">
      <div class="shopModal" v-show="shopShow">
        <div class="black">
          <div class="shopModal_content">
            <div class="shopModal_content_one">
              <span>品牌</span>
              <span>{{ info.name }}</span>
            </div>
            <ul class="shopModal_content_two">
              <li>
                <span>{{ info.score }}</span
                ><span>評分</span>
              </li>
              <li>
                <span>{{ info.sellCount }}單</span> <span>月售</span>
              </li>
              <li>
                <span>雨滴專送</span> <span>約{{ info.deliveryTime }}分鐘</span>
              </li>
              <li>
                <span>{{ info.deliveryPrice }}元</span> <span>配送費用</span>
              </li>
              <li>
                <span>距離{{ info.distance }}</span> <span>距離</span>
              </li>
            </ul>

            <div class="middleLine">公告</div>
            <div class="shopText">{{ info.bulletin }}</div>
          </div>
          <div class="close">
            <i class="material-icons" @click="toggleShopShow">cancel</i>
          </div>
        </div>
      </div>
    </transition>
    <div class="activitySheet" v-show="supportShow"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      supportClasses: ['activity-green', 'activity-red', 'activity-orange'],
      shopShow: false,
      supportShow: false
    }
  },
  computed: {
    ...mapState(['info'])
  },
  methods: {
    toggleShopShow () {
      this.shopShow = !this.shopShow
    },
    toggleSupportShow () {
      this.supportShow = !this.supportShow
    }
  }
}
</script>
<style>
@import url("../../common/download/font_batbg34t7tl/iconfont.css");
/* */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://example.com/MaterialIcons-Regular.woff2) format("woff2"),
    url(https://example.com/MaterialIcons-Regular.woff) format("woff"),
    url(https://example.com/MaterialIcons-Regular.ttf) format("truetype");
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}
.shopHeader {
  width: 100%;
  height: 154px;
}
.headTop {
  width: 100%;
  height: 50px;
  background-image: url("../../common/img/1.jpg");
  padding: 5px 10px;
  box-sizing: border-box;
  vertical-align: middle;
  line-height: 40px;
}
.headTop > a {
  float: left;
  color: white;
}
.headCenter {
  position: relative;
  width: 100%;
  height: 79px;
  text-align: center;
  padding: 30px 20px 5px 20px;
  box-sizing: border-box;
}

.headCenter_one > span:nth-child(1),
.shopModal_content_one > span:nth-child(1) {
  display: inline-block;
  background-color: yellow;

  color: rgb(126, 79, 9);
  font-size: 4px;
  font-weight: 600;
  border-radius: 2px;
  padding: 1px;
  margin-right: 5px;
  box-sizing: border-box;
}
.headCenter_one > span:nth-child(2),
.shopModal_content_one > span:nth-child(2) {
  font-size: 20px;
  font-weight: 700;
}
.headCenter_two {
  font-size: 2px;
  margin-top: 4px;
}
.headCenter_two > span {
  margin-right: 6px;
}
.headFooter {
  display: flex;
  height: 25px;
  padding: 2px;
  margin: 0px 30px;
  border: 1px rgb(163, 163, 163) solid;
  box-sizing: border-box;
  font-size: 3px;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  border-radius: 2px;
}
.headFooter_left {
  vertical-align: middle;
  line-height: 25px;
}
.activity-green {
  background-color: rgb(19, 233, 19);
}
.activity-red {
  background-color: rgb(252, 8, 8);
}
.activity-orange {
  background-color: rgb(241, 177, 93);
}
.headFooter_right {
  vertical-align: middle;
  line-height: 20px;
}
.titleImg {
  position: absolute;

  left: calc(50% - 33px);
  top: -40px;
  background: url("../../common/img/1.jpg") center center no-repeat;
  width: 66px;
  height: 66px;
  background-size: cover;
  border-radius: 4px;
}
.shopModal {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  margin: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.black {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 220px;
  background-color: white;
  width: 90%;
  z-index: 2;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 25px;
}
.shopModal_content_two {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 10px;
}
.shopModal_content_two > li {
  list-style-type: none;
}
.shopModal_content_two > li > span {
  display: inline-block;
}
.shopModal_content_two > li > span:nth-child(2) {
  font-size: 4px;
  color: rgb(156, 156, 156);
}
.middleLine {
  position: relative;
  display: flex;
  font-size: 4px;
  color: rgb(156, 156, 156);
  text-align: center;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
}
.middleLine::before {
  background-color: rgb(156, 156, 156);

  content: "";
  width: 10px;
  height: 2px;
}
.middleLine::after {
  background-color: rgb(156, 156, 156);
  content: "";
  width: 10px;
  height: 2px;
}
.shopText {
  text-align: left;
  font-size: 6px;
  margin-bottom: 20px;
}
</style>
