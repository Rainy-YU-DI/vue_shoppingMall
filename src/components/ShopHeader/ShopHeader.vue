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
      <div class="headFooter_right" v-if="info.supports">
        <span>{{ info.supports.length }}個優惠</span>
        <a class="iconfont icon-chevron-right" @click="toggleShopAcitity"></a>
      </div>
    </div>
    <!--商家彈跳名細-->
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
    <!--商家優惠名細-->
    <transition name="fade">
      <div class="shopModal" v-show="shopAcitity">
        <div class="shopAcitity_black">
          <div class="shopAcitity_content">
            <span>優惠活動</span>
            <div class="shopAcitityClose">
              <i class="material-icons" @click="toggleShopAcitity">cancel</i>
            </div>
            <ul class="shopInfoActivityUl">
              <li
                class="shopInfoActivityLi"
                v-for="(support, index) in info.supports"
                :key="index"
              >
                <div class="activityTag" :class="supportClasses[support.type]">
                  {{ support.name }}
                </div>
                <span class="activityText">{{ support.content }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      supportClasses: ['activity-green', 'activity-red', 'activity-orange'],
      shopShow: false,
      shopAcitity: false
    }
  },
  computed: {
    ...mapState(['info'])
  },
  methods: {
    toggleShopShow () {
      this.shopShow = !this.shopShow
    },
    toggleShopAcitity () {
      this.shopAcitity = !this.shopAcitity
    }
  }
}
</script>
<style scoped>
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: middle;
  line-height: 25px;
  width: 150px;
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
  z-index: 1;
  overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
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
/*優惠活動彈跳視窗 */
.shopAcitity_black {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 240px;
  background-color: rgb(235, 235, 235);
}
.shopAcitity_content {
  padding: 20px 10px 10px 20px;
  text-align: center;
}
.shopAcitity_content > span {
  font-weight: 600;
  font-size: 24px;
}
.shopAcitityClose {
  position: absolute;
  display: inline-block;
  top: 10px;
  right: 10px;
}
.shopInfoActivityUl {
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  top: 70px;
  bottom: 0px;
  width: 100%;
  overflow-y: auto;
  text-align: left;
}
.activityTag {
  display: inline-block;
  font-size: 13px;
  color: rgb(255, 255, 255);

  border-radius: 5px;
  padding: 3px;
  box-sizing: border-box;
  margin-right: 5px;
}
.activityTag.activity-green {
  background-color: #70bc46;
}
.activityTag.activity-red {
  background-color: #f07373;
}
.activityTag.activity-orange {
  background-color: #eb7506;
}
.shopInfoActivityLi {
  font-size: 13px;
  margin-bottom: 12px;
}
</style>
