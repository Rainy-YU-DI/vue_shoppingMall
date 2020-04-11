<template>
  <div class="shopRatings" ref="ratings">
    <div class="shopRatingsInner">
      <div class="rating_Title">
        <div class="rating_Title_Left">
          <span>{{ info.score }}</span>
          <span>綜合評分</span>
          <span>高於周邊商家99%</span>
        </div>
        <div class="rating_Title_Right">
          <div class="attitudeStar">
            <Star :size="36" :score="info.serviceScore" /><span>服務態度</span
            ><span class="attitudetext_yellow">{{ info.serviceScore }}</span>
          </div>
          <div class="giveStar">
            <Star :size="36" :score="info.foodScore" /><span>商品評分</span
            ><span class="attitudetext_yellow">{{ info.foodScore }}</span>
          </div>
          <div class="rating_deliveryTime">
            <span>送達時間</span><span>{{ info.deliveryTime }}分鐘</span>
          </div>
        </div>
      </div>
      <div class="rating_bar"></div>
      <div class="rating_content">
        <div class="rating_content_top">
          <div class="rating_filterGroup">
            <div
              class="rating_filter_Button"
              :class="{ selectType: selectRatingType === 2 }"
              @click="changeSelectRatingType(2)"
            >
              全部{{ ratings.length }}
            </div>
            <div
              class="rating_filter_Button"
              :class="{ selectType: selectRatingType === 0 }"
              @click="changeSelectRatingType(0)"
            >
              滿意{{ ratingAcount }}
            </div>
            <div
              class="rating_filter_Button"
              :class="{ selectType: selectRatingType === 1 }"
              @click="changeSelectRatingType(1)"
            >
              不滿意{{ ratings.length - ratingAcount }}
            </div>
          </div>
          <div class="onlyText">
            <div class="toggleText">
              <span
                class="material-icons"
                :class="{ on: ratingOnlyShowText }"
                @click="toggleShowText"
              >
                check_circle
              </span>
            </div>
            <span>只看有內容的評價</span>
          </div>
        </div>
        <div class="rating_content_bottom">
          <ul class="rating_content_Ul">
            <!-- 要過濾產生新的評價數組 -->
            <li
              class="rating_content_list"
              v-for="(rating, index) in filterRatings"
              :key="index"
            >
              <div class="rating_content_list_left">
                <img :src="rating.avatar" />
              </div>
              <div class="rating_content_list_middle">
                <span>{{ rating.username }}</span>
                <div class="rating_content_star">
                  <Star :size="24" :score="rating.score" />
                  <span>{{ rating.deliveryTime }}</span>
                </div>
                <span class="rating_content_list_middle_text">
                  {{ rating.text }}</span
                >
                <div class="rating_content_list_middle_good">
                  <span class="material-icons" v-if="!rating.rateType">
                    thumb_up
                  </span>
                  <span class="material-icons" v-if="rating.rateType">
                    thumb_down
                  </span>
                  <div
                    class="rating_content_list_middle_goodFood"
                    v-for="(item, index) in rating.recommend"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </div>
                <div class="rating_content_list_top">
                  {{ rating.rateTime | dateformat }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapGetters } from 'vuex'
import Star from '../../../components/Star/Star.vue'
export default {
  data () {
    return {
      ratingOnlyShowText: false,
      selectRatingType: 2
    }
  },
  mounted () {
    this.$store.dispatch('getShopRatings', () => {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.ratings, {
            click: true
          })
        }
      })
    })
  },
  methods: {
    toggleShowText () {
      this.ratingOnlyShowText = !this.ratingOnlyShowText
    },
    changeSelectRatingType (select) {
      this.selectRatingType = select
      console.log(this.selectRatingType)
    }
  },
  computed: {
    ...mapState(['info', 'ratings']),
    ...mapGetters(['ratingAcount']),
    filterRatings () {
      /*
      // 條件一:
      selectRatingType:2=>全顯示
     selectRatingType:0/1=>rateType;
     結果:selectRatingType === 2 || selectRatingType === rateType

      //條件二:
       ratingOnlyShowText=false=>ratings.text.length=0
      ratingOnlyShowText=true=>ratings.text.length>0
      結果:!ratingOnlyShowText || text.length > 0
       */
      const { ratings, selectRatingType, ratingOnlyShowText } = this

      return ratings.filter(rating => {
        const { rateType, text } = rating
        return (
          (selectRatingType === 2 || selectRatingType === rateType) &&
          (!ratingOnlyShowText || text.length > 0)
        )
      })
    }
  },
  components: {
    Star
  }
}
</script>
<style>
@import url("../../../common/download/font_batbg34t7tl/iconfont.css");
/*使用BScroll要設外層height:只有固定螢幕顯示到的高 必寫overflow: hidden;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 195px;*/
/*像這邊就是讓.shopRatings高小,內容物.shopRatingsInner高為整組列表長，然後將BScroll設給.shopRatings*/
.shopRatings {
  overflow: hidden;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 195px;
}
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
  background-color: rgb(117, 117, 117);
  color: rgb(255, 255, 255);
  font-size: 10px;
  text-align: center;
  vertical-align: middle;
  line-height: 32px;
  margin-right: 10px;
}
.rating_filter_Button.selectType {
  background-color: #02a774;
}
.onlyText {
  line-height: 29px;
}
.toggleText {
  display: inline-block;
  margin: auto;
}
.toggleText > span:not(.on) {
  color: rgb(148, 147, 147);

  display: inline-block;
  vertical-align: middle;
}
.toggleText > span.on {
  color: #02a774;
  display: inline-block;
  vertical-align: middle;
}
.onlyText > span {
  font-size: 13px;
  color: rgb(148, 147, 147);
}
.rating_content_Ul {
  margin: 0px;
  padding: 15px;
}
.rating_content_list {
  display: flex;
  border-bottom: 1px solid rgb(185, 184, 184);
  margin-bottom: 15px;
}
.rating_content_list_left {
  left: 0;
  margin-right: 10px;
}
.rating_content_list_left > img {
  width: 30px;
  height: 30px;

  display: inline-block;
}
.rating_content_list_middle {
  position: relative;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.rating_content_list_middle > span {
  position: relative;
  font-size: 13px;
}
.rating_content_list_middle_text {
  display: inline-block;
  width: 100%;
  margin-top: 5px;
  text-align: left;
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
  margin-bottom: 3px;
}
.rating_content_list_top {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 14px;
  color: rgb(185, 184, 184);
}
</style>
