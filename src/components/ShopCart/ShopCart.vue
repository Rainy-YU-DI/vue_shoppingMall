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
      <div class="cartRight" :class="payClass">
        <div class="pay">
          {{ payText }}
        </div>
      </div>
    </div>
    <div class="cartList" v-show="listShow">
      <div class="listTittle">
        <p>購物車</p>
        <div class="clearCart">清空</div>
      </div>
      <div class="listFood">
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
    <div class="cartBG" v-if="listShow" @click="toggleShow"></div>
  </div>
</template>
<script>
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
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    }
  },
  components: {
    CartControl
  }
}
</script>
<style>
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
.cartList {
  position: fixed;
  bottom: 48px;
  width: 100%;
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
  z-index: -1;
}
</style>
