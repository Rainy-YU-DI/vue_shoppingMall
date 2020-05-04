<template>
  <div class="profile">
    <!--Header-->
    <HeaderTop title="會員資訊"></HeaderTop>
    <!--會員登入顯示狀態-->
    <section class="profile_number">
      <router-link :to="!userInfo.name ? '/login' : ''" class="profile_link">
        <div class="profile_image">
          <i class="iconfont icon-gerenzhongxin"></i>
        </div>
        <div class="user-info">
          <div class="userGroup">
            <p class="user-info-top">{{ userInfo.name || "登錄/注冊" }}</p>
            <p class="user-icon">
              <span>
                <i class="iconfont icon-huiyuan"></i>
              </span>
              <span class="phone-number">
                {{
                userInfo.phone || "暫無綁定手機號碼"
                }}
              </span>
            </p>
          </div>
        </div>
        <span class="arrow" v-if="!userInfo.name">
          <i class="iconfont icon-chevron-right"></i>
        </span>
      </router-link>
    </section>

    <!-- 我的資料列表 -->
    <section class="profile_my_order">
      <!-- 我的訂單 -->
      <a href="javascript:">
        <span>
          <i class="iconfont icon-zhanwaicepingguanggaoshuju"></i>
        </span>
        <div class="my_order_div">
          <span>我的歷史訂單</span>
          <router-link :to="!userInfo.name? '' : '/UserOrderText'">
            <span class="my_order_icon">
              <i class="iconfont icon-chevron-right"></i>
            </span>
          </router-link>
        </div>
      </a>
      <!--若有登入顯示會員資料-->
      <section class="accountInfo" v-if="userInfo.name">
        <div class="accountInfoList">
          <span class="accountInfoList_top">資本會員資料</span>
          <div class="accountInfoList_left">
            <span class="accountInfoList_title">名稱</span>
            <span class="accountInfoList_title">性別</span>
            <span class="accountInfoList_title">生日</span>
            <span class="accountInfoList_title">手機</span>
          </div>
          <div class="accountInfoList_right">
            <span class="accountInfoList_content">雨滴</span>
            <span class="accountInfoList_content">女</span>
            <span class="accountInfoList_content">1992/06/03</span>
            <span class="accountInfoList_content">0912333666</span>
          </div>
        </div>
      </section>
      <!--退出登入按鍵-->
      <section v-if="userInfo.name">
        <mt-button type="danger" style="width:100%" @click="logout">退出登入</mt-button>
      </section>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { MessageBox, Toast } from 'mint-ui'
import HeaderTop from '@/components/headerTop.vue'
export default {
  components: {
    HeaderTop
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    logout () {
      MessageBox.confirm('確定退出嗎?').then(
        action => {
          // 請求退出
          this.$store.dispatch('logout')
          this.$store.dispatch('clearCart')
          Toast('登出完成')
        },
        action => {
          console.log('點擊了取消')
        }
      )
    }
  }
}
</script>
<style scoped>
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
/* 會員資料明細 */
.accountInfo {
  padding: 0px 20px 0px;
}
.accountInfo > .accountInfoList {
  position: relative;
  margin: 20px 0px;
  text-align: left;
  border: 4px solid gold;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
}
.accountInfoList_top {
  font-weight: 600;
  display: block;
}
.accountInfoList > .accountInfoList_left {
  font-weight: 600;
}
.accountInfoList > .accountInfoList_right {
  position: absolute;

  top: 23px;
  right: 5px;
  height: 80px;
}
.accountInfoList_title {
  display: block;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
}
.accountInfoList_content {
  display: block;
}
.accountInfoList_content:nth-of-type(2),
.accountInfoList_content:nth-of-type(3) {
  margin: 2px 0px;
}
</style>
