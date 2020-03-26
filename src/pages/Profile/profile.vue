<template>
  <div class="profile">
    <!--Header-->
    <HeaderTop title="會員資訊"></HeaderTop>
    <!--會員登入顯示狀態-->
    <section class="profile_number">
      <router-link to="/login" class="profile_link">
        <div class="profile_image">
          <i class="iconfont icon-gerenzhongxin"></i>
        </div>
        <div class="user-info">
          <div class="userGroup">
            <p class="user-info-top">登錄/注冊</p>
            <p class="user-icon">
              <span>
                <i class="iconfont icon-huiyuan"></i>
              </span>
              <span class="phone-number">暫無綁定手機號碼</span>
            </p>
          </div>
        </div>
        <span class="arrow">
          <i class="iconfont icon-chevron-right"></i>
        </span>
      </router-link>
    </section>
    <!--會員卡內容-->
    <section class="profile_info_data">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span>
            0.00
            <span>元</span>
          </span>
          <span class="info_data_bottom">我的余額</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span>
            0
            <span>個</span>
          </span>
          <span class="info_data_bottom">我的優惠</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span>
            0
            <span>分</span>
          </span>
          <span class="info_data_bottom">我的積分</span>
        </a>
      </ul>
    </section>
    <!-- 我的資料列表 -->
    <section class="profile_my_order">
      <!-- 我的訂單 -->
      <a href="javascript:">
        <span>
          <i class="iconfont icon-zhanwaicepingguanggaoshuju"></i>
        </span>
        <div class="my_order_div">
          <span>我的訂單</span>
          <span class="my_order_icon">
            <i class="iconfont icon-chevron-right"></i>
          </span>
        </div>
      </a>
      <!-- 積分商城 -->
      <a href="javascript:;">
        <span>
          <i class="iconfont icon-yusuanguanli"></i>
        </span>
        <div class="my_order_div">
          <span>積分商城</span>
          <span class="my_order_icon">
            <i class="iconfont icon-chevron-right"></i>
          </span>
        </div>
      </a>
      <!-- 會員卡-->
      <a href="javascript:;">
        <span>
          <i class="iconfont icon-huiyuan"></i>
        </span>
        <div class="my_order_div">
          <span>會員卡</span>
          <span class="my_order_icon">
            <i class="iconfont icon-chevron-right"></i>
          </span>
        </div>
      </a>
      <!-- 服務中心-->
      <a href="javascript:;">
        <span>
          <i class="iconfont icon-fuwushangchaxunsvg"></i>
        </span>
        <div class="my_order_div">
          <span>服務中心</span>
          <span class="my_order_icon">
            <i class="iconfont icon-chevron-right"></i>
          </span>
        </div>
      </a>
    </section>
  </div>
</template>
<script>
import HeaderTop from '@/components/headerTop.vue'
export default {
  components: {
    HeaderTop
  }
}
</script>
<style>
@import url("../../common/download/font_batbg34t7tl/iconfont.css");
.profile_my_order {
  width: 100%;
}
.profile_number {
  padding: 0;
  height: 100px;
  background-color: rgb(139, 22, 134);
}
.profile_link {
  position: relative;
  display: block;
  height: 100%;
  *zoom: 1;
  padding: 10px 10px;
  box-sizing: border-box;
}
.profile_link::before,
.profile_link::after {
  content: "";
  display: table;
  clear: both;
}
.profile_image {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  width: 60px;
  height: 60px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: rgb(248, 247, 244);
  overflow: hidden;
  vertical-align: middle;
}
.profile_image > .icon-gerenzhongxin {
  z-index: 2;
  font-size: 62px;
}
.user-info {
  position: relative;
  display: inline-block;
  margin-left: 100px;
  vertical-align: middle;
  height: 100%;
  width: 200px;
  margin-right: 0px;
  float: left;
}
.userGroup {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 50px;
}
.user-info-top {
  text-align: left;
  font-size: 25px;
  line-height: 100%;
  display: block;
  margin: 0;
  color: cornsilk;
}
.user-icon {
  line-height: 100%;
  display: block;
  margin-top: 5px;
  color: cornsilk;
}
.iconfont .icon-chevron-right {
  color: black;
}
.arrow {
  float: right;
  top: 0;
  bottom: 0;
  height: 100%;
}
.arrow:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.icon-chevron-right {
  font-size: 30px;
  color: rgb(229, 165, 235);
  display: inline-block;
  vertical-align: middle;
}
.profile_info_data {
  font-size: 0;
  height: 81px;
}
.info_data_list {
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid gray;
}
.info_data_list > a {
  flex: 1;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.info_data_list > a:not(:nth-child(3)) {
  border-right: 1px solid gray;
}
.info_data_list > a > span {
  display: block;
  width: 100%;
  font-size: 14px;
  color: rgb(124, 122, 122);
}

.info_data_list > a > span:nth-child(1) {
  font-size: 22px;

  color: rgb(250, 205, 3);
}
.info_data_list > a > span:nth-child(1) > span {
  font-size: 14px;
  color: rgb(0, 0, 0);
}
.profile_my_order {
  border-top: 1px solid grey;
  margin-top: 15px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 80px;
}
.profile_my_order > a {
  position: relative;
  display: block;
  width: 100%;
  height: 53px;
  background-color: gold;
  border-bottom: 1px solid grey;
  padding-left: 20px;
  text-align: left;
  height: 58px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgb(77, 56, 5);
}
.profile_my_order > a > span:nth-child(1) {
  display: inline-block;
  position: relative;
  width: 5%;
}
.my_order_div {
  position: relative;
  width: 92%;
  margin-left: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
