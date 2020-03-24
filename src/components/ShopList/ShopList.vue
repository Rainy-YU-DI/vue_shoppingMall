<template>
  <div class="shopList">
    <ul class="shopListBlock">
      <li class="shop_li" v-for="n in 5" :key="n">
        <a>
          <div class="shopPic">
            <img class="shop_img" src="@/components/ShopList/imgs/shop/1.jpg" />
          </div>
          <div class="textGroup">
            <div class="textHeader">
              <span class="shopName">
                <span>00000000000</span>
              </span>
            </div>
            <div class="textRating">
              <div class="rating_left">
                <div class="score">星圖</div>
                <div class="rateCount">3.6</div>
              </div>
              <div class="rating_right">
                <div class="saleOrder">月售多少</div>
              </div>
            </div>
            <div class="deliveryData">
              <span class="deliveryLess">多少起送</span>
              <span class="deliveryCost">配送費約</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
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
.score,
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
