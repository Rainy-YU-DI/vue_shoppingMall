<template>
  <div>
    <HeaderTop title="訂單列表">
      <span class="slotLeft" slot="left"></span>
      <span class="slotRight" slot="right"></span>
    </HeaderTop>
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
@import url("../../common/download/font_7u524u7kfii/iconfont.css");
.slotLeft {
  position: absolute;
  display: inline-block;
  width: 20%;
  left: 0;
}
.slotRight {
  position: absolute;
  display: inline-block;
  width: 20%;
  right: 0;
}
</style>
