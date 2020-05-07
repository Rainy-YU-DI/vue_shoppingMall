<template>
  <div class="order">
    <HeaderTop title="訂單列表"></HeaderTop>
    <div v-if="!totalCount" class="noOrder">
      <div class="no_OrderImg"></div>
      <div v-if="!userInfo.username" class="no_OrderImg_text">需先登入會員</div>
      <div v-if="userInfo.username" class="no_OrderImg_text">尚未選取任何商品入購物車!</div>
    </div>
    <div v-if="totalCount">
      <OrderList />
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import HeaderTop from '@/components/headerTop.vue'
import OrderList from '../OrderList/OrderList.vue'
export default {
  data () {
    return {
      confirmOK: false
    }
  },
  components: {
    HeaderTop,
    OrderList
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
