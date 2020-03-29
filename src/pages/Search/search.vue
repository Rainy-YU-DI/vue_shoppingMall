<template>
  <div class="search">
    <HeaderTop title="搜尋"></HeaderTop>
    <form class="search_form">
      <input type="search" placeholder="請輸入商家名稱" class="search_input" />
      <input type="submit" class="search_submit" />
    </form>
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
.search {
  margin: 0;
  padding: 0;
  width: 100%;
}
.search_form {
  display: flex;

  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  height: 59px;
  flex-grow: 1;
}
.search_input {
  height: 30px;
  flex-grow: 3;
  margin-right: 2px;
}
.search_submit {
  height: 30px;

  flex-grow: 1;
  background-color: slateblue;
  border: 0;
}
</style>
