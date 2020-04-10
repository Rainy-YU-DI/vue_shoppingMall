<template>
  <div class="star" :class="'star-' + size">
    <span
      class="star-item"
      v-for="(sc, index) in starClasses"
      :class="sc"
      :key="index"
    ></span>
  </div>
</template>

<script>
// 類名常量
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
  props: {
    score: Number,
    size: Number
  },
  computed: {
    starClasses () {
      // 條件
      const { score } = this
      const scs = []
      // 向scs中添加n個CLASS_ON
      const onLength = Math.floor(score)
      for (let i = 0; i < onLength; i++) {
        scs.push(CLASS_ON)
      }
      // 向scs中添加n個CLASS_HALF
      if (score * 10 - onLength * 10 >= 5) {
        scs.push(CLASS_HALF)
      }
      // 向scs中添加n個CLASS_OFF
      while (scs.length < 5) {
        scs.push(CLASS_OFF)
      }

      return scs
    }
  }
}
</script>

<style scoped>
/*星圖*/
.star {
  float: left;
}
.star-item {
  display: inline-block;
  background-repeat: no-repeat;
}
/*48 */
.star.star-48 > .star-item {
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background-size: 20px 20px;
}
.star.star-48:last-child {
  margin-right: 0;
}
.star.star-48 > .star-item.on {
  background-image: url("./imgs/star48_on@3x.png");
}
.star.star-48 > .star-item.half {
  background-image: url("./imgs/star48_half@3x.png");
}
.star.star-48 > .star-item.off {
  background-image: url ("./imgs/star48_off@3x.png");
}
/*36 */
.star.star-36 > .star-item {
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
}
.star.star-36:last-child {
  margin-right: 0;
}
.star.star-36 > .star-item.on {
  background-image: url("./imgs/star36_on@3x.png");
}
.star.star-36 > .star-item.half {
  background-image: url ("./imgs/star36_half@3x.png");
}
.star.star-36 > .star-item.off {
  background-image: url("./imgs/star36_off@3x.png");
}
/*24 */
.star.star-24 > .star-item {
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-size: 10px 10px;
}
.star.star-24:last-child {
  margin-right: 0;
}
.star.star-24 > .star-item.on {
  background-image: url("./imgs/star24_on@3x.png");
}
.star.star-24 > .star-item.half {
  background-image: url("./imgs/star24_half@3x.png");
}
.star.star-24 > .star-item.off {
  background-image: url("./imgs/star24_off@3x.png");
}
</style>
