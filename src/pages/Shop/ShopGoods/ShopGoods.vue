<template>
  <div class="goods">
    <div class="menu_left">
      <ul>
        <li class="categoryItem" v-for="(good, index) in goods" :key="index">
          <div class="itemSpan">
            <img
              :src="good.icon"
              style="width:12px;height:12px"
              v-if="good.icon"
            />
            <p>{{ good.name }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="menu_right">
      <ul>
        <li class="titleBar" v-for="(good, index) in goods" :key="index">
          <h1>
            {{ good.name }}
          </h1>
          <ul>
            <li
              class="shopItem"
              v-for="(food, index) in good.foods"
              :key="index"
            >
              <div class="iconImg">
                <img :src="food.icon" width="57" height="57" />
              </div>
              <div class="texts">
                <p>{{ food.name }}</p>
                <p>{{ food.description }}</p>
                <p>
                  月售{{ food.sellCount }}份
                  <span>好評率{{ food.rating }}%</span>
                </p>
                <p>${{ food.price }}</p>
                <div class="buyButton"><div class="green"></div></div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="shopCart"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      scrollY: 0,
      tops: []
    }
  },
  mounted () {
    this.$store.dispatch('getShopGoods', () => {
      this.$nextTick(() => {
        /* eslint-disable */
        new BScroll(".menu_left");
      });
    });
  },
  computed: {
    ...mapState(["goods"])
  }
};
</script>
<style>
.goods {
  display: flex;
  /* 要用position:absolute/overflow:hidden才可以顯示滑動效果 */
  position: absolute;
  top: 195px;
  bottom: 46px;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.menu_left {
  width: 80px;
  background-color: rgb(231, 230, 230);
}
.menu_right {
  flex: 1;
}
ul {
  margin: 0;
  padding: 0;
}
.menu_left > ul {
  padding: 0px 5px;
  box-sizing: border-box;
  background-color: rgb(231, 230, 230);
}

li {
  list-style-type: none;
}
.itemSpan {
  display: inline-block;
  height: 54px;
  vertical-align: middle;
  box-sizing: border-box;
}
.itemSpan > p {
  display: inline-block;
  line-height: 54px;
  margin: 0;
}
.titleBar > h1 {
  height: 26px;
  margin: 0px;
  background-color: rgb(231, 230, 230);
  text-align: left;
  padding-left: 15px;
  font-size: 20px;
}
.shopItem {
  display: flex;
  margin: 10px;
  text-align: left;
  vertical-align: baseline;
  border-bottom: 0.4px solid rgb(190, 190, 190);
}
.shopItem > .iconImg {
  flex-grow: 0;
  margin-right: 10px;
  box-sizing: border-box;
}

.shopItem > .texts {
  flex-grow: 5;
  display: inline-block;
}
.shopItem > .texts > p {
  margin-top: 0px;
  margin-bottom: 5px;
}
.shopItem > .texts > p:nth-child(2),
.shopItem > .texts > p:nth-child(3) {
  font-size: 10px;
  color: rgb(161, 161, 161);
}
.shopItem > .texts > p:nth-child(4) {
  display: inline-block;
  font-size: 20px;
  color: rgb(255, 0, 0);
}
.shopItem > .texts > p:nth-child(3) > span {
  margin-left: 10px;
}
.buyButton {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: rgb(65, 126, 5);
  border-radius: 50px;
  float: right;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
