<template>
  <div class="OrderList">
    <div class="check_up">
      <div class="orderItemCheck" v-for="(food, index) in cartFoods" :key="index">
        <div class="ItemCheckIndex">
          訂單{{ index + 1 }}
          <div class="deleteItem" @click="deleteThisItem(index)">刪除</div>
        </div>
        <div class="ItemCheckContext">
          <span>商品名稱:{{ food.name }}</span>
          <span>數量:{{ food.count }}</span>
          <span>金額:{{ sigleItemPrice(food) }}</span>
        </div>
      </div>
      <div class="payGroup">
        <div class="payGroupTitle">結帳明細</div>
        <div class="payGroupContent">
          <div class="totalChooseCount">
            商品結帳金額:
            <span>${{ totalPrice }}</span>
          </div>
        </div>
        <router-link to="/orderpay">
          <div class="payButtom">結帳</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapState(['userInfo', 'cartFoods']),
    ...mapGetters(['totalCount', 'totalPrice'])
  },
  methods: {
    sigleItemPrice (food) {
      let sum = food.count * food.price
      return sum
    },
    ...mapActions(['deleteThisItem'])
  }
}
</script>
<style scoped>
.OrderList {
  position: absolute;
  top: 50px;
  bottom: 0px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  width: 100%;
  bottom: 80px;
}
.check_up {
  padding: 10px;
}
.orderItemCheck {
  border: 3px solid violet;
  border-radius: 5px;
  margin-bottom: 5px;
}
.ItemCheckIndex {
  text-align: left;
  background-color: violet;
  padding: 5px;
}
.ItemCheckContext {
  text-align: left;
  padding: 5px;
}
.ItemCheckContext > span {
  font-size: 10px;

  margin-left: 5px;
}
.deleteItem {
  font-size: 12px;
  color: white;
  display: inline-block;
  float: right;
  border-radius: 3px;
  padding: 3px;
  background-color: tomato;
  cursor: pointer;
}
.payGroup {
  text-align: right;
}
.payGroupTitle {
  padding: 5px;
  background-color: rgb(173, 173, 173);
  text-align: left;
  font-weight: 600;
}
.totalChooseCount {
  position: relative;
  text-align: right;
  margin: 5px;
}
.totalChooseCount > span {
  color: rgb(255, 0, 0);
}
.payButtom {
  display: inline-block;

  background-color: yellowgreen;
  padding: 5px;
  font-weight: 600;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
</style>
