<template>
  <div class="food" v-if="isShow">
    <div class="content">
      <div class="upper">
        <img v-lazy="food.image" />
        <p>{{ food.info }}</p>
      </div>
      <div class="down">
        <span>{{ food.name }}</span>
        <p>月售{{ food.sellCount }}份</p>
        <p>好評率{{ food.rating }}%</p>
      </div>
      <span class="iconfont icon-chevron-left" @click="toggleShow"></span>
    </div>
    <div class="foodCover" @click="toggleShow"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    food: Object
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>
<style scoped>
.food {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0px;
  width: 100%;
  margin: 0 auto;
}
.foodCover {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0px;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(71, 70, 70, 0.671);
  z-index: 2;
}

.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 65%;
  background-color: rgb(255, 254, 254);
  border-radius: 5px;
  overflow: hidden;
  z-index: 4;
}
.upper {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 75%;
}
.upper > img {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.upper > p {
  position: absolute;
  display: inline-block;
  bottom: -10px;
  margin-left: 10px;
  left: 0;
  color: rgb(255, 255, 255);
}
.down {
  position: relative;
  display: block;
  width: 100%;
  bottom: 0;
  text-align: left;
  padding: 5px;
}
.down > span {
  display: block;
  font-weight: 700;
  margin-bottom: 5px;
}
.down > p {
  font-size: 5px;
  color: rgb(155, 155, 155);
  display: inline;
}
.icon-chevron-left {
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-size: 20px;
}
</style>
