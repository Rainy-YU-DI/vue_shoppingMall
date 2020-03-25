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
  background-color: rgb(114, 20, 143);
  color: white;
  text-align: center;
  margin: 0px;
  padding: 0;
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
