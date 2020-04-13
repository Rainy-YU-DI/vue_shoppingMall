<template>
  <div class="order">
    <HeaderTop title="訂單列表"></HeaderTop>
    <div v-if="!totalCount" class="noOrder">
      <div class="no_OrderImg"></div>
      <div class="no_OrderImg_text">尚未選取任何商品入購物車!</div>
    </div>
    <div v-if="totalCount && !confirmOK">
      <OrderList />
    </div>
    <div v-if="totalCount && confirmOK">
      <OrderPay />
    </div>

    <div class="OrderFooter">
      <router-link to="/shop/goods">
        <div class="backCartPage" @click="confirmClaer">回到購物車頁面</div>
      </router-link>

      <div class="comfirmPage" v-if="totalCount && !confirmOK" @click="confirm">
        下一步
      </div>
      <div class="finally" v-if="totalCount && confirmOK" @click="finallyPump">
        完成繳費
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import HeaderTop from '@/components/headerTop.vue'
import OrderList from './OrderList/OrderList.vue'
import OrderPay from './OrderPay/OrderPay.vue'
export default {
  data () {
    return {
      confirmOK: false
    }
  },
  components: {
    HeaderTop,
    OrderList,
    OrderPay
  },
  computed: {
    ...mapState(['userInfo', 'cartFoods']),
    ...mapGetters(['totalCount', 'totalPrice'])
  },
  methods: {
    confirm () {
      this.confirmOK = true
    },
    confirmClaer () {
      this.confirmOK = false
    }
  }
}
</script>
<style scoped>
.order {
  margin: 0;
  padding: 0;
  width: 100%;
}
.noOrder {
  overflow-y: auto;
}
.no_OrderImg {
  position: relative;
  width: 100%;
  height: 200px;
  background: url("img/5gvlyWFkV2_small.jpg") center center no-repeat;
  background-size: contain;
}
.no_OrderImg_text {
  font-size: 30px;
  color: rosybrown;
  top: 50%;
}
</style>
