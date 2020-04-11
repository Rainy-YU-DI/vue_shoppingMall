<template>
  <div class="shopInfo">
    <div class="shopInfoBScroll">
      <div class="deliveryMessageGroup">
        <h4>配送信息</h4>
        <div class="deliveryMessage">
          <div class="blueTag">雨滴專送</div>
          <span
            >由商家配送由商家配送由商家配送由商家配送由商家配送由商家配送由商家配送</span
          >
          <span>配送費$4</span>
        </div>
      </div>
      <div class="shopInfo_bar"></div>
      <div class="shopInfoActivity">
        <h4>活動與服務</h4>
        <ul class="shopInfoActivityUl">
          <li class="shopInfoActivityLi">
            <div class="activityTag">首單</div>
            <span class="activityText">新用戶下單000000000000000</span>
          </li>
          <li class="shopInfoActivityLi">
            <div class="activityTag">首單</div>
            <span class="activityText">新用戶下單000000000000000</span>
          </li>
          <li class="shopInfoActivityLi">
            <div class="activityTag">首單</div>
            <span class="activityText">新用戶下單000000000000000</span>
          </li>
        </ul>
      </div>
      <div class="shopInfo_bar"></div>
      <div class="shopInfoRealGroup">
        <h4>商家實景</h4>
        <div clsaa="shopInfoRealImgs">
          <div class="shopInfoRealImgsBScroll">
            <li v-for="(pic, index) in info.pics" :key="index">
              <!--  <img :src="pic" style="width:120px;height:90px" /> -->
            </li>
          </div>
        </div>
      </div>
      <div class="shopInfo_bar"></div>
      <div class="shopInfoPlaceGroup">
        <h4>
          商家信息
        </h4>
        <div class="shopInfoPlaceItemGroup">
          <div class="shopInfoPlaceItem">
            <span class="shopInfoPlaceItemTitle">品類</span>
            <span class="shopInfoPlaceItemTitle2">包子粥店簡餐</span>
          </div>
          <div class="shopInfoPlaceItem">
            <span class="shopInfoPlaceItemTitle">商家電話</span>
            <span class="shopInfoPlaceItemTitle2">18501083744</span>
          </div>
          <div class="shopInfoPlaceItem">
            <span class="shopInfoPlaceItemTitle">地址</span>
            <span class="shopInfoPlaceItemTitle2"
              >包北京市豐台區太平橋44號</span
            >
          </div>
          <div class="shopInfoPlaceItem">
            <span class="shopInfoPlaceItemTitle">營業時間</span>
            <span class="shopInfoPlaceItemTitle2">09:35-24:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['info'])
  }
}
</script>
<style scoped>
.shopInfo {
  display: block;
  position: absolute;
  /*  overflow: hidden; */
  top: 194px;
  bottom: 0;
  margin: 0;
  padding: 0;
  width: 100%;
}
h4 {
  margin: 0px;
}
.deliveryMessageGroup {
  height: 124px;
  padding: 14px;
  text-align: left;
  box-sizing: border-box;
}
.deliveryMessage {
  margin-top: 16px;
}
.blueTag {
  display: inline-block;
  font-size: 13px;
  color: rgb(255, 255, 255);
  background-color: #0097ff;
  border-radius: 5px;
  padding: 3px;
  box-sizing: border-box;
  margin-right: 5px;
}
.deliveryMessage > span {
  font-size: 13px;
}
.deliveryMessage > span:nth-of-type(2) {
  display: block;
  margin-top: 5px;
}
.shopInfo_bar {
  width: 100%;
  height: 18px;
  background-color: rgb(240, 240, 240);
  border-top: 1px solid rgb(194, 194, 194);
  border-bottom: 1px solid rgb(194, 194, 194);
}
.shopInfoActivity {
  padding: 14px;
  text-align: left;
  box-sizing: border-box;
}
.shopInfoActivityUl {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 16px;
}
.activityTag {
  display: inline-block;
  font-size: 13px;
  color: rgb(255, 255, 255);
  background-color: #70bc46;
  border-radius: 5px;
  padding: 3px;
  box-sizing: border-box;
  margin-right: 5px;
}
.shopInfoActivityLi {
  font-size: 13px;
  margin-bottom: 12px;
}
.shopInfoRealGroup {
  height: 124px;
  padding: 14px;
  text-align: left;
  box-sizing: border-box;
}
.shopInfoRealImgs {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}
.shopInfoRealImgsBScroll {
  position: relative;
  display: block;
}
.shopInfoRealImgsBScroll > li {
  display: inline-block;
  font-size: 0;
  width: auto;
}
.shopInfoRealImgsBScroll > li > img {
  display: inline-block;
  margin-right: 5px;
}
.shopInfoPlaceGroup {
  height: 124px;
  padding: 14px;
  text-align: left;
  box-sizing: border-box;
}
.shopInfoPlaceItemGroup {
  margin-top: 16px;
}
.shopInfoPlaceItem {
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(228, 227, 227);
}
.shopInfoPlaceItem:nth-last-of-type(1) {
  border: none;
}
.shopInfoPlaceItemTitle {
  display: inline-block;
  font-size: 12px;
  color: rgb(31, 31, 31);
  font-weight: 600;
}
.shopInfoPlaceItemTitle2 {
  display: inline-block;
  font-size: 12px;
}
</style>
