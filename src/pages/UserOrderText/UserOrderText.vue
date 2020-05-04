<template>
  <div class="UserOrderText">
    <div class="header">
      <router-link to="/profile" class="profileTip">
        <div class="profileTip01">
          <span>會員資訊</span>
        </div>
      </router-link>

      <div class="OrderTip">
        <span>訂單名細查詢</span>
      </div>
    </div>
    <div class="orderItem">
      <div class="orderItemBorder" v-for="(userOrder,index) in userAlredeyOrder" :key="index">
        <div class="orderItemHead">
          <span>訂單編號:{{userOrder.orderNo}}</span>
          <div class="user">
            <span>會員姓名:{{userInfo.name}}</span>
            <span>會員id:{{userOrder.username}}</span>
          </div>
        </div>

        <table class="orderItemContextTitle">
          <tr>
            <th>商品名稱</th>
            <th>數量</th>
            <th>金額</th>
          </tr>
          <tr
            class="orderItemContext"
            v-for="(orderDetail,index) in userOrder.orderDetails"
            :key="index"
          >
            <td>{{orderDetail.name}}</td>
            <td>{{orderDetail.count}}</td>
            <td>{{orderDetail.price}}</td>
          </tr>
        </table>
        <div class="orderItemFoot">
          <span>共計:{{userOrder.totalPrice}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapState(['userInfo', 'userAlredeyOrder'])
  },
  methods: {
    ...mapActions(['deleteThisItem', 'getUserInfoAlredeyOrder'])
  },
  mounted: function () {
    if (this.$store.state.userInfo._id) {
      let userId = this.$store.state.userInfo._id
      this.getUserInfoAlredeyOrder(userId)
    }
  }
}
</script>
<style scoped>
.UserOrderText {
  overflow-y: auto;
  margin: 0;
  padding: 0;
  width: 100%;
}
.header {
  position: relative;
  display: flex;
}
.profileTip {
  vertical-align: middle;
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
}
.OrderTip {
  vertical-align: middle;
  flex: 1.2;
  clip-path: polygon(5% 20%, 100% 20%, 100% 100%, 0% 100%);
  background: linear-gradient(top, #ffffff 70%, #f0f0f0 100%);
}
.profileTip01 {
  line-height: 45px;
}
.OrderTip > span {
  line-height: 45px;

  color: rgb(255, 42, 42);
}
.orderItemHead {
  height: 60px;
  text-align: left;
}
.user {
  margin: 0px;
}
.orderItemHead span {
  display: inline-block;
  margin: 5px 5px 0px 5px;
  box-sizing: border-box;
}
.orderItem {
  padding: 30px;
}
.orderItemBorder {
  border: 1px solid rgb(194, 194, 194);
  margin-bottom: 10px;
}
table {
  width: 100%;
  border: 1px solid rgb(194, 194, 194);
  border-collapse: collapse;
}
th {
  border: 1px solid rgb(194, 194, 194);
  background: rgb(228, 227, 226);
}
td {
  border: 1px solid rgb(194, 194, 194);
}
.orderItemFoot {
  font-weight: 600;
  margin-right: 5px;
  text-align: right;
  color: rgb(114, 20, 143);
}
</style>
