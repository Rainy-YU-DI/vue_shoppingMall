<template>
  <div class="shopList">
    <ul class="shopListBlock" v-if="shops.length">
      <li class="shop_li" v-for="(shop, index) in shops" :key="index">
        <a>
          <div class="shopPic">
            <img class="shop_img" :src="shopsBaseImg + shop.image_path" />
          </div>
          <div class="textGroup">
            <div class="textHeader">
              <span class="shopName">
                <span>{{ shop.name }}</span>
              </span>
            </div>
            <div class="textRating">
              <!--星圖-->
              <div class="rating_left">
                <Star :size="24" :scroe="shop.rating" />
                <div class="rateCount">{{ shop.rating }}</div>
              </div>
              <div class="rating_right">
                <div class="saleOrder">月售{{ shop.recent_order_num }}單</div>
              </div>
            </div>
            <div class="deliveryData">
              <span class="deliveryLess">多少${{ shop.float_minimum_order_amount }}起送</span>
              <span class="deliveryCost">配送費約${{ shop.float_delivery_fee }}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <ul v-else>
      <li v-for="n in 6" :key="n">
        <img src="./imgs/shop_back.svg" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Star from '../Star/Star'
export default {
  data () {
    return {
      shopsBaseImg: 'http://cangdu.org:8001/img/'
    }
  },
  computed: {
    ...mapState(['shops'])
  },
  components: {
    Star
  }
}
</script>

<style>
.shopList,
.shopListBlock {
  margin: 0;
  padding: 0;
  margin-bottom: 50px;
  overflow: auto;
}
.shop_li {
  width: 100%;
  border-bottom: grey 1px solid;
}
.shop_li > a {
  *zoom: 1;
  display: block;
  box-sizing: border-box;
  padding: 15px 8px;
  width: 100%;
}
.shop_li > a:before,
.shop_li > a:after {
  content: "";
  display: table;
  clear: both;
}
.shopPic {
  float: left;
  width: 23%;
  height: 75px;
  padding-right: 10px;
}
.shop_img {
  display: block;
  width: 100%;
  height: 100%;
}
.textGroup {
  float: right;
  width: 70%;
  box-sizing: border-box;
}
.textHeader {
  position: relative;
  *zoom: 1;
  width: 100%;
  margin: 3px 0px;
  text-align: left;
}
.textHeader::before,
.textHeader:after {
  content: "";
  display: table;
  clear: both;
}
.shopName {
  width: 200px;
  color: #333;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
}
.shopName > span {
  display: inline-block;
  vertical-align: middle;
}
.shopName::before {
  content: "品牌";
  font-size: 11px;
  line-height: 11px;
  color: #333;
  background-color: #ffd930;
  padding: 4px;
  border-radius: 2px;
  margin-right: 2px;
  box-sizing: border-box;
}
.textRating {
  margin-top: 5px;
  *zoom: 1;
  width: 100%;
}
.textRating:before,
.textRating:after {
  content: "";
  display: table;
  clear: both;
}
.rating_left {
  float: left;
}
.star,
.rateCount {
  display: inline-block;
  vertical-align: middle;
}
.rating_right {
  float: right;
}
.deliveryData {
  margin-top: 5px;
  text-align: left;
}
.deliveryLess,
.deliveryCost {
  display: inline-block;
  vertical-align: middle;
}
</style>
