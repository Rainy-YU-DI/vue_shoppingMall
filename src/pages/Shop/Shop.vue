<template>
  <div>
    <ShopHeader />
    <div class="tab">
      <div class="tab-item">
        <router-link active-class="active" to="/shop/goods">點餐</router-link>
      </div>
      <div class="tab-item">
        <router-link active-class="active" to="/shop/ratings">評價</router-link>
      </div>
      <div class="tab-item">
        <router-link active-class="active" to="/shop/info">商家</router-link>
      </div>
    </div>
    <keep-alive><router-view /></keep-alive>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'

export default {
  data () {
    return {
      show: true
    }
  },
  mounted () {
    this.$store.dispatch('getShopInfo')
  },
  methods: {},
  components: {
    ShopHeader
  }
}
</script>
<style>
.tab {
  width: 100%;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
}
.tab-item {
  float: left;
  width: 33.3333%;
  border-bottom: 0.5px rgb(189, 187, 187) solid;
}
.tab-item > a.active {
  position: relative;
  color: green;
  font-weight: 600;
}

.tab-item > a.active::after {
  content: "";
  position: absolute;
  background-color: green;
  width: 35px;
  height: 2px;
  left: 0;
  transform: translateY(40px);
  text-align: center;
}
.tab-item > a {
  text-decoration: none;
  color: rgb(194, 194, 194);
}
</style>
