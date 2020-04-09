<template>
  <div>
    <div class="goods">
      <div class="menu_left">
        <ul>
          <li
            class="categoryItem"
            v-for="(good, index) in goods"
            :key="index"
            :class="{ current: index === currentIndex }"
            @click="clickMenuLeft(index)"
          >
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
        <ul ref="foodUl">
          <li class="titleBar" v-for="(good, index) in goods" :key="index">
            <h1>
              {{ good.name }}
            </h1>
            <ul>
              <li
                class="shopItem"
                v-for="(food, index) in good.foods"
                :key="index"
                @click="showFood(food)"
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
                </div>

                <CartControl :food="food" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart />
    </div>
    <Food :food="food" ref="foodshow"></Food>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
import CartControl from '../../../components/cartControl/cartControl.vue'
import Food from '../../../components/Food/Food.vue'
import ShopCart from '../../../components/ShopCart/ShopCart.vue'

export default {
  data () {
    return {
      scrollY: 0,
      tops: [],
      food: {} // 需要顯示的food
    }
  },
  mounted () {
    this.$store.dispatch('getShopGoods', () => {
      // 數據更新後執行此回調函式命名callback
      this.$nextTick(() => {
        // 列表數據更新顯示後執行
        /* eslint-disable */
        //列表顯示後創建
        this._initScroll();
        this._initTops();
      });
    });
  },
  computed: {
    ...mapState(["goods"]),
    //計算得到當前分類的下標
    currentIndex() {
      //初始和相關數據發生變化時會調用
      //得到條件數據
      const { scrollY, tops } = this;
      //根據條件計算產生一個結果
      const index = tops.findIndex((top, index) => {
        return scrollY >= top && scrollY < tops[index + 1];
      });
      //返回結果
      return index;
    }
  },
  methods: {
    //1.初始化滾動條
    _initScroll() {
      new BScroll(".menu_left", {
        click: true
      });
      this.foodScroll = new BScroll(".menu_right", {
        probeType: 2, //慣性滑動不會觸發
        scrollY: true,
        click: true
      });

      //給右側列表綁定scroll監聽
      this.foodScroll.on("scroll", ({ x, y }) => {
        console.log(x, y);
        this.scrollY = Math.abs(y);
      });
      //給右側列表綁定scrollEnd監聽
      this.foodScroll.on("scrollEnd", ({ x, y }) => {
        console.log(x, y);
        this.scrollY = Math.abs(y);
      });
    },
    //2.初始化tops
    _initTops() {
      //初始化tops
      const tops = [];
      let top = 0;
      tops.push(top);
      //找出所有food li的top位置
      const lis = this.$refs.foodUl.getElementsByClassName("titleBar");
      Array.prototype.slice.call(lis).forEach(li => {
        top += li.clientHeight;
        tops.push(top);
      });
      //更新tops數據
      this.tops = tops;
      console.log(this.tops);
    },
    clickMenuLeft(index) {
      //使右側列表滑動到對應的位置
      const scroll = this.tops[index];
      //立即將scrollY改變
      this.scrollY = scroll;
      this.foodScroll.scrollTo(0, -scroll, 300);
    },
    //顯示點擊的food
    showFood(food, event) {
      //設置food組件
      this.food = food;
      //顯示food組件(在父組件調用子組件內的方法)
      this.$refs.foodshow.toggleShow();
    }
  },
  components: {
    CartControl,
    Food,
    ShopCart
  },
  watch: {
    food: {
      deep: true,
      handler: {
        food(newCount, oldCount) {
          this.food.count = newCount;
        }
      },
      immediate: true
    }
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
.categoryItem.current {
  background-color: rgb(255, 255, 255);
}
ul {
  margin: 0;
  padding: 0;
}
.menu_left > ul {
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
  padding: 10px;
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
</style>
