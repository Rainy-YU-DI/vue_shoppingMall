<template>
  <div class="shopCart">
    <div class="cartBottom">
      <div class="cartLeft" @click="toggleShow">
        <div class="iconCart">
          <div class="outerCircle" :class="{ highlight: totalCount }">
            <span
              class="iconfont icon-icon-test"
              :class="{ highlight: totalCount }"
            ></span>
          </div>
          <div class="redNum" v-if="totalCount">
            {{ totalCount }}
          </div>
        </div>
        <div class="leftText">
          <p>${{ totalPrice }}</p>
          <p>另需配送費${{ info.deliveryPrice }}元</p>
        </div>
      </div>
      <router-link
        :to="payText === '結算' ? '/order' : ''"
        class="cartRight"
        :class="payClass"
      >
        <div class="pay">
          {{ payText }}
        </div>
      </router-link>
    </div>
    <transition name="listUp">
      <div class="cartList" v-show="listShow">
        <div class="listTittle">
          <p>購物車</p>
          <div class="clearCart" @click="clearCart">清空</div>
        </div>
        <div class="listFood" ref="listFood">
          <ul class="listFoodUl">
            <li
              class="listFoodLi"
              v-for="(food, index) in cartFoods"
              :key="index"
            >
              <p>{{ food.name }}</p>
              <p>${{ food.price }}</p>
              <CartControl :food="food" />
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <div class="cartBG" v-show="listShow" @click="toggleShow"></div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import BScroll from 'better-scroll'
import CartControl from '../cartControl/cartControl.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    ...mapState(['cartFoods', 'info']),
    ...mapGetters(['totalCount', 'totalPrice']),
    payClass () {
      const { totalPrice } = this
      const { minPrice } = this.info
      return totalPrice >= minPrice ? 'enough' : 'not-enough'
    },
    payText () {
      const { totalPrice } = this
      const { minPrice } = this.info
      if (totalPrice === 0) {
        return `$${minPrice}元起送`
      } else if (totalPrice < minPrice) {
        return `還差$${minPrice - totalPrice}元起送`
      } else {
        return '結算'
      }
    },

    listShow () {
      // 如果總數量為0,直接不顯示
      if (this.totalCount === 0) {
        return false
      }

      return this.isShow
    }
    // 交給watch
    /* if (this.isShow) {
        this.$nextTick(() => {
          // 實現BScroll的實例是單例(沒有時才創建，不然創建太多調用會一直重複調)
          if (!this.scroll) {
            this.scroll = new BScroll('.listFood', { click: true })
          } else {
            this.scroll.refresh() // 讓滾動條自動刷新:自動重新統計內容高度
          }
        })
      }
    } */
  },
  methods: {
    toggleShow () {
      if (this.totalCount > 0) {
        this.isShow = !this.isShow
      }
    },
    clearCart () {
      MessageBox.confirm('確定清除購物車?').then(
        action => {
          this.$store.dispatch('clearCart')
          this.isShow = false
        },
        () => {}
      )
    }
  },
  components: {
    CartControl
  },
  // 當您要執行異步或昂貴的操作以響應更改的數據時，此功能非常有用。使用該watch選項可以使我們執行異步操作（訪問API），限制執行該操作的頻率，並設置中介狀態，直到獲得最終答案。使用計算屬性，這一切都不可能。
  watch: {
    // 複雜得變動由watch監視
    selectFoods (newFoods, oldFoods) {
      if (newFoods.length === 0) {
        this.isShow = false
      }
    },

    listShow () {
      if (this.isShow) {
        this.$nextTick(() => {
          // 實現BScroll的實例是單例(沒有時才創建，不然創建太多調用會一直重複調)
          if (!this.scroll) {
            this.scroll = new BScroll('.listFood', { click: true })
          } else {
            this.scroll.refresh() // 讓滾動條自動刷新:自動重新統計內容高度
          }
        })
      }
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
.shopCart {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 48px;

  box-sizing: border-box;
}
.cartBottom {
  display: flex;
  box-sizing: border-box;
}
.cartLeft {
  display: inline-block;
  flex-basis: 0;
  flex-grow: 2;
  background-color: #141d27;
  text-align: left;
}
.cartRight {
  flex: 1;
  background-color: rgb(80, 80, 80);

  vertical-align: middle;
}
.cartRight .pay {
  color: rgb(255, 255, 255);
  font-size: 10px;
  line-height: 48px;
  display: inline-block;
}
.cartRight.enough {
  background-color: rgb(5, 107, 5);
}
.iconCart {
  position: relative;
  top: -10px;
  left: 0px;
  margin-left: 20px;
  margin-right: 0;
  display: inline-block;
  text-align: left;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: #141d27;
  z-index: 1;
}
.outerCircle > .icon-icon-test {
  display: inline-block;
  font-size: 20px;
  color: rgb(141, 141, 141);
  font-weight: 800;
  line-height: 45px;
  z-index: 2;
}
.outerCircle > .icon-icon-test.highlight {
  color: white;
}
.iconCart > .outerCircle {
  position: absolute;
  display: block;
  margin: auto;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-color: #68686873;
  z-index: 1;
}
.outerCircle.highlight {
  background-color: #02a774;
}
.redNum {
  position: absolute;
  right: 1px;
  top: -1px;
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: rgb(247, 43, 8);
  color: rgb(255, 255, 255);
  z-index: 1;
}
.leftText {
  position: absolute;
  left: 0px;
  display: inline-block;
  margin-left: 90px;
  text-align: left;
}
.leftText > p {
  position: relative;

  margin: 5px;
  display: block;
  left: 0;

  box-sizing: border-box;
}
.leftText > p:nth-child(1) {
  color: white;
  font-size: 17px;
}
.leftText > p:nth-child(2) {
  color: rgb(161, 160, 160);
  font-size: 8px;
}
.cartList.listUp-enter-active,
.cartList.listUp-leave-active {
  transition: transform 0.3s;
}
/*隱藏時樣式*/
.cartList.listUp-enter,
.cartList.listUp-leave-to {
  transform: translateY(0);
}
.cartList {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  transform: translateY(-100%);
}
.listTittle {
  height: 41px;
  padding: 0px 18px;
  background-color: #f3f5f7;
  line-height: 41px;
  vertical-align: middle;
}
.listTittle > p {
  margin: 0;
  float: left;
  font-weight: 700;
}
.clearCart {
  float: right;
  color: rgb(8, 188, 219);
  font-size: 10px;
}
.listFood {
  background-color: rgb(255, 255, 255);
  margin: 0;
  padding: 0px 18px;
  max-height: 217px;
  overflow: hidden;
}
.listFood:after {
  content: "";
  clear: both;
  display: block;
}
.listFoodUl {
  box-sizing: border-box;
}
.listFoodUl > li {
  position: relative;
  height: 41px;
}
.listFoodUl > li > p {
  position: absolute;
  display: inline-block;
  margin: 0;
  line-height: 41px;
}
.listFoodUl > li > p:nth-child(1) {
  left: 0px;
}
.listFoodUl > li > p:nth-child(2) {
  right: 80px;
}
.listFoodUl > li > .GreeButtom {
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  right: 0px;
}
.cartBG {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(49, 49, 49, 0.5);
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  z-index: -2;
}
</style>
