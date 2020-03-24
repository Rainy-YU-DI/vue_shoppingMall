<template>
  <div class="footer">
    <div
      class="button"
      :class="{ on: '/msite' === $route.path }"
      @click="goto('/msite')"
    >
      <span class="iconfont icon-xiaolianhaoping"></span>
      <span class="choose">外賣</span>
    </div>
    <div
      class="button"
      :class="{ on: '/search' === $route.path }"
      @click="goto('/search')"
    >
      <span class="iconfont icon-sousuo"></span>
      <span class="choose">搜尋</span>
    </div>
    <div
      class="button"
      :class="{ on: '/order' === $route.path }"
      @click="goto('/order')"
    >
      <span class="iconfont icon-aixin"></span>
      <span class="choose">訂單</span>
    </div>
    <div
      class="button"
      :class="{ on: '/profile' === $route.path }"
      @click="goto('/profile')"
    >
      <span class="iconfont icon-gerenzhongxin"></span>
      <span class="choose">我的</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    console.log(this.$route.path)
  },
  methods: {
    goto (place) {
      this.$router.replace(place)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../common/download/font_7u524u7kfii/iconfont.css");

.footer {
  position: absolute;
  width: 100%;
  height: 80px;
  padding: 10px 0px;
  left: 0px;
  bottom: 0px;
  margin: 0px;
  box-sizing: border-box;
  border-top-style: solid;
  border-top-color: rgb(206, 205, 205);
  border-top-width: 1px;
}
.footer > .button {
  position: relative;
  float: left;
  width: 25%;
  height: 60px;
}
.footer > .button > .iconfont {
  position: relative;
  display: block;
  font-size: 30px;
  font-weight: bolder;
}
span.choose {
  position: relative;
  display: block;
  width: 100%;
  height: 22px;
  left: 0px;
  bottom: 0px;
  margin-top: 4px;
}
.on {
  color: rgb(212, 70, 248);
}
</style>
