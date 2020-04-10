<template>
  <div class="shopRatings">
    <div class="shopRatingsBScroll">
      <div class="rating_Title">
        <div class="rating_Title_Left">
          <span>4.2</span>
          <span>綜合評分</span>
          <span>高於周邊商家99%</span>
        </div>
        <div class="rating_Title_Right">
          <div class="attitudeStar">
            <Star :size="36" :score="info.serviceScore" /><span>服務態度</span
            ><span class="attitudetext_yellow">4.1</span>
          </div>
          <div class="giveStar">
            <Star :size="36" :score="info.serviceScore" /><span>商品評分</span
            ><span class="attitudetext_yellow">4.3</span>
          </div>
          <div class="rating_deliveryTime">
            <span>送達時間</span><span>28分鐘</span>
          </div>
        </div>
      </div>
      <div class="rating_bar"></div>
      <div class="rating_content">
        <div class="rating_content_top">
          <div class="rating_filterGroup">
            <div class="rating_filter_Button">全部24</div>
            <div class="rating_filter_Button">滿意18</div>
            <div class="rating_filter_Button">不滿意6</div>
          </div>
          <div class="onlyText">
            <div class="toggleText">
              <span class="material-icons">
                check_circle
              </span>
            </div>
            <span>只看有內容的評價</span>
          </div>
        </div>
        <div class="rating_content_bottom">
          <ul class="rating_content_Ul">
            <li class="rating_content_list">
              <div class="rating_content_list_left">
                <span class="iconfont icon-huiyuan"> </span>
              </div>
              <div class="rating_content_list_middle">
                <span>3*****c</span>
                <div class="rating_content_star">
                  <Star :size="24" :score="info.serviceScore" />
                  <span>30</span>
                </div>
                <span class="rating_content_list_middle_text"
                  >我經常吃這一家000000000000000000000000000000000000</span
                >
                <div class="rating_content_list_middle_good">
                  <span class="material-icons">
                    thumb_up
                  </span>
                  <div class="rating_content_list_middle_goodFood">南瓜粥</div>
                  <div class="rating_content_list_middle_goodFood">
                    皮蛋瘦肉粥
                  </div>
                </div>
                <div class="rating_content_list_top">2016-07-23 21:52:44</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Star from '../../../components/Star/Star.vue'
export default {
  computed: {
    ...mapState(['info'])
  },
  components: {
    Star
  }
}
</script>
<style scoped>
@import url("../../../common/download/font_batbg34t7tl/iconfont.css");

.rating_Title {
  display: flex;
  height: 118px;
  padding: 18px;
  box-sizing: border-box;
  overflow-x: hidden;
}
.rating_Title_Left {
  flex: 1;
  text-align: center;
  border-right: 1px solid rgb(194, 194, 194);
  vertical-align: middle;
  margin: auto;
}
.rating_Title_Left > span {
  display: block;
  margin-bottom: 6px;
}
.rating_Title_Left > span:nth-child(1) {
  color: rgb(240, 170, 18);
  font-size: 24px;
}
.rating_Title_Left > span:nth-child(2) {
  font-size: 10px;
}
.rating_Title_Left > span:nth-child(3) {
  color: rgb(117, 117, 117);
  font-size: 10px;
}
.rating_Title_Right {
  flex: 2;
  padding-left: 30px;
  box-sizing: border-box;
  font-size: 10px;
  margin: auto;
}
.attitudeStar,
.giveStar {
  margin-bottom: 10px;
}
.attitudetext_yellow {
  color: rgb(240, 170, 18);
}
.rating_deliveryTime {
  text-align: left;
}
.rating_deliveryTime > span:nth-child(2) {
  margin-left: 5px;
  color: rgb(117, 117, 117);
}
.rating_bar {
  width: 100%;
  height: 18px;
  background-color: rgb(240, 240, 240);
  border-top: 1px solid rgb(194, 194, 194);
  border-bottom: 1px solid rgb(194, 194, 194);
}
.rating_content_top {
  width: 100%;
  display: inline-block;
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid rgb(194, 194, 194);
  box-sizing: border-box;
}
.rating_filterGroup {
  margin-bottom: 20px;
}
.rating_filter_Button {
  width: 62px;
  height: 32px;
  display: inline-block;
  background-color: #02a774;
  color: rgb(255, 255, 255);
  font-size: 10px;
  text-align: center;
  vertical-align: middle;
  line-height: 32px;
  margin-right: 10px;
}
.onlyText {
  line-height: 29px;
}
.toggleText {
  color: #02a774;
  display: inline-block;
  margin: auto;
}
.toggleText > span {
  display: inline-block;
  vertical-align: middle;
}
.onlyText > span {
  font-size: 13px;
  color: rgb(148, 147, 147);
}
.rating_content_Ul {
  position: relative;
  margin: 0px;
  padding: 15px;
}
.rating_content_list {
  display: flex;
  border-bottom: 1px solid rgb(185, 184, 184);
}
.rating_content_list_left {
  left: 0;
  margin-right: 10px;
}
.rating_content_list_left > span {
  font-size: 30px;
  color: blue;
  display: inline-block;
}
.rating_content_list_middle {
  text-align: left;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.rating_content_list_middle > span {
  position: relative;
  font-size: 13px;
}
.rating_content_list_middle_text {
  display: block;
  width: 100%;
  background-color: cornflowerblue;
  margin-top: 5px;
}
.rating_content_list_middle_good {
  margin-top: 5px;
  display: inline-block;
  text-align: left;

  line-height: 15px;
}
.rating_content_list_middle_good > .material-icons {
  color: rgb(240, 170, 18);
  font-size: 14px;
  vertical-align: middle;
  margin-right: 3px;
}
.rating_content_list_middle_goodFood {
  display: inline-block;
  border: 1px solid rgb(185, 184, 184);
  padding: 2px;
  font-size: 10px;
  color: rgb(185, 184, 184);
  box-sizing: border-box;
  margin-right: 3px;
}
.rating_content_list_top {
  position: absolute;
  top: 15px;
  right: 10px;
  font-size: 14px;
  color: rgb(185, 184, 184);
}
</style>
