<template>
  <div class="order">
    <HeaderTop title="訂單列表"></HeaderTop>
    <div class="order_content">
      <div class="no_login"></div>
      <div class="no_login_text">尚未登入</div>
    </div>
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
.order {
  margin: 0;
  padding: 0;
  width: 100%;
}
.order_content {
  overflow-y: auto;
  margin-bottom: 100px;
}
.no_login {
  position: relative;
  width: 100%;
  height: 200px;
  background: url("img/5gvlyWFkV2_small.jpg") center center no-repeat;
  background-size: contain;
}
.no_login_text {
  font-size: 50px;
  color: rosybrown;
  top: 50%;
}
</style>
