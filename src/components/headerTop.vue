<template>
  <div class="header">
    <div class="headerOne">
      <slot class="slotLeft" name="left"></slot>
      <span class="title">{{ title }}</span>
      <slot class="slotright" name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style>
.header {
  height: 45px;
  background-color: blueviolet;
  color: white;
  text-align: center;
}
.headerOne {
  line-height: 45px;
}
.title {
  position: absolute;
  display: block;
  width: 100%;
}
</style>
