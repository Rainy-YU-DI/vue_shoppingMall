<template>
  <div>
    <button @click="showAlredeyOrder()">顯示已完成付款訂單</button>
  </div>
</template>

<script>
import { reqAlredeyOrder } from '../../api/index'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      name: this.$store.state.userInfo.name,
      phone: this.$store.state.userInfo.phone,
      id: this.$store.state.userInfo._id,
      orderNo: 123456,
      totalCost: this.$store.getters.totalPrice,
      productList: [
        {
          name: this.$store.state.cartFoods.name,
          count: this.$store.state.cartFoods.count,
          price: this.$store.state.cartFoods.price
        }
      ]
    }
  },

  computed: {
    ...mapState(['cartFoods']),
    ...mapGetters(['totalPrice'])
  },
  methods: {
    // 異步POST資料
    async showAlredeyOrder () {
      let result
      const { name, phone, id, orderNo, totalCost, productList } = this
      // 發ajax請求:已訂定單
      result = await reqAlredeyOrder({
        name,
        phone,
        id,
        orderNo,
        totalCost,
        productList
      })
      console.log(result)
      if (result.code === 0) {
        const alredeyOrder = result.data
        // 將alredeyOrder保存到state
        this.$store.dispatch('recordAlredeyOrder', alredeyOrder)
      }
    }
  }
}
</script>

<style>
</style>
