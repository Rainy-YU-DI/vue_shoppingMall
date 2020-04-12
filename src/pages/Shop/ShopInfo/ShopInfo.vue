<template>
  <div class="shopInfo">
    <div class="shopInfoBScroll">
      <div class="deliveryMessageGroup">
        <h4>配送信息</h4>
        <div class="deliveryMessage">
          <div class="blueTag">{{ info.description }}</div>
          <span
            >由商家提供配送,約{{ info.deliveryTime }}分鐘配送，距離{{
              info.distance
            }}</span
          >
          <span>配送費${{ info.deliveryPrice }}</span>
        </div>
      </div>
      <div class="shopInfo_bar"></div>
      <div class="shopInfoActivity">
        <h4>活動與服務</h4>
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
      <div class="shopInfo_bar"></div>
      <div class="shopInfoRealGroup">
        <h4>商家實景</h4>
        <div class="shopInfoRealImgs">
          <ul class="shopInfoRealImgsBScroll" ref="picUl">
            <li v-for="(pic, index) in info.pics" :key="index" ref="picLi">
              <img :src="pic" style="width:120px;height:90px" />
            </li>
          </ul>
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
            <span class="shopInfoPlaceItemTitle2">{{ info.category }}</span>
          </div>
          <div class="shopInfoPlaceItem">
            <span class="shopInfoPlaceItemTitle">商家電話</span>
            <span class="shopInfoPlaceItemTitle2">{{ info.phone }}</span>
          </div>
          <div class="shopInfoPlaceItem">
            <span class="shopInfoPlaceItemTitle">地址</span>
            <span class="shopInfoPlaceItemTitle2">{{ info.address }}</span>
          </div>
          <div class="shopInfoPlaceItem">
            <span class="shopInfoPlaceItemTitle">營業時間</span>
            <span class="shopInfoPlaceItemTitle2">{{ info.workTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      supportClasses: ['active-green', 'active-red', 'active-orange']
    }
  },
  computed: {
    ...mapState(['info'])
  },
  mounted () {
    // 如果還沒有數據info.pics，直接結束
    if (!this.info.pics) {
      return
    }

    // info.pics數據已經有了的作法:可以在掛載時直接創建BScroll
    this._initBscroll()
  },
  // 在直接頁面刷新時會有info.pics數據
  watch: {
    info () {
      // 刷新流程-->更新數據
      this.$nextTick(() => {
        this._initBscroll()
      })
    }
  },
  methods: {
    _initBscroll () {
      var scroll = new BScroll('.shopInfo')
      console.log(scroll)

      // 計算shopInfoRealImgsBScroll Ul的寬
      const ul = this.$refs.picUl
      const liWidth = 120
      const space = 5
      const ulCount = this.info.pics.length
      ul.style.width = (liWidth + space) * ulCount - space + 'px'

      var scroll02 = new BScroll('.shopInfoRealImgs', {
        scrollX: true // 設定為水平滑動
      })
      console.log(scroll02)
    }
  }
}
</script>
<style scoped>
.shopInfo {
  display: block;
  position: absolute;
  overflow: hidden;
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

  border-radius: 5px;
  padding: 3px;
  box-sizing: border-box;
  margin-right: 5px;
}
.activityTag.active-green {
  background-color: #70bc46;
}
.activityTag.active-red {
  background-color: #f07373;
}
.activityTag.active-orange {
  background-color: #eb7506;
}
.shopInfoActivityLi {
  font-size: 13px;
  margin-bottom: 12px;
}
.shopInfoRealGroup {
  padding: 14px;
  text-align: left;
  box-sizing: border-box;
}
.shopInfoRealImgs {
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.shopInfoRealImgsBScroll {
  white-space: nowrap;
  padding: 0;
  margin: 0;
}
.shopInfoRealImgsBScroll > li {
  display: inline-block;
  font-size: 0;
  margin-right: 5px;
}
.shopInfoRealImgsBScroll > li:nth-last-of-type(1) {
  margin-right: 0px;
}
.shopInfoPlaceGroup {
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
