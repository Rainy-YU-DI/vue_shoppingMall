<template>
  <div class="OrderList">
    <div class="check_up">
      <div class="ItemCheckTitle">共{{ cartFoods.length }}筆訂單</div>
      <div
        class="orderItemCheck"
        v-for="(food, index) in cartFoods"
        :key="index"
      >
        <div class="ItemCheckIndex">訂單{{ index + 1 }}</div>
        <div class="ItemCheckContext">
          <span>商品名稱:{{ food.name }}</span>
          <span>數量:{{ food.count }}</span>
          <span>金額:{{ sigleItemPrice(food) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

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
    }
  }
}
</script>
<style scoped>
.OrderList {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
