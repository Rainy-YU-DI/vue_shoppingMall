<template>
  <div class="GreeButtom">
    <transition name="move">
      <span
        v-if="remove_circle (food)"
        class="material-icons"
        v-on:click.stop.prevent="updateFoodCount(false)"
      >remove_circle_outline</span>
    </transition>
    <!--此時要顯示的是同品項名的舊food，因為在跳頁後,這邊就變undefined,所以沒有count了 -->
    <!--更新頁面後第2次增加要
    去抓舊的相同名稱的food.count出來++
    在cartFoods.length沒有的時候=>:不要顯示
      在cartFoods.length有的時候=>:顯示同名稱的food.count(抓取同名稱的food)
    在購物車沒有同名food時:=>不要顯示-->
    <p v-if="cartFoods.length">{{indexCount (food)}}</p>
    <span class="material-icons" v-on:click.stop.prevent=" updateFoodCount(true)">add_circle</span>
  </div>
</template>
<script>
import { mapState } from 'vuex'

import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      userInfo1: this.$store.state.userInfo
    }
  },
  props: {
    food: Object
  },
  methods: {
    updateFoodCount (isAdd, event) {
      if (event) {
        event.stopImmediatePropagation()
      } else if (this.userInfo1.username) {
        console.log(this.userInfo1.username, '000')
        this.$store.dispatch('updateFoodCount', { isAdd, food: this.food })
      } else {
        MessageBox.alert('需先登入會員', '提示')
      }
    },
    /*  if (event) {
        event.stopImmediatePropagation()
      } else {
        this.$store.dispatch('updateFoodCount', { isAdd, food: this.food })
        this.indexCount(this.food)
      } */

    indexCount (food) {
      var a = this.$store.state.cartFoods.filter(function (e) {
        return e.name === food.name
      })
      if (!a.length) {
        return
      }
      console.log(a[0].count)
      console.log(this.food.count, this.food)
      return a[0].count
    },

    // remove_circle出現/消失調整
    remove_circle (food) {
      var a = this.$store.state.cartFoods.filter(function (e) {
        return e.name === food.name
      })
      if (!a.length) {
        return false
      }

      return true
    }
  },
  computed: {
    ...mapState(['userInfo', 'cartFoods'])
  }
}
</script>
<style>
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
  color: rgb(65, 126, 5);

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}
.GreeButtom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  float: right;
}
.GreeButtom > span,
.GreeButtom > p {
  display: inline-block;
}
.GreeButtom > p {
  display: inline-block;
  padding: 0;
  margin: 0;
  line-height: 28px;
  vertical-align: middle;
}
/* 顯示時樣式 :原本CSS*/
.material-icons.move-enter-active,
.material-icons.move-leave-active {
  transition: all 0.3s;
}
/*消失時樣式 */
.material-icons.move-enter,
.material-icons.move-leave-to {
  opacity: 0;
  /*順序有關效果 */
  transform: translateX(30px) rotate(180deg);
}
</style>
