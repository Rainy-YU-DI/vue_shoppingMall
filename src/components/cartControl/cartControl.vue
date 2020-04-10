<template>
  <div class="GreeButtom">
    <transition name="move">
      <span
        class="material-icons"
        v-if="food.count"
        v-on:click.stop.prevent="updateFoodCount(false)"
      >
        remove_circle_outline
      </span>
    </transition>
    <p v-if="food.count">{{ food.count }}</p>
    <span
      class="material-icons"
      v-on:click.stop.prevent="updateFoodCount(true)"
    >
      add_circle
    </span>
  </div>
</template>
<script>
export default {
  props: {
    food: Object
  },
  methods: {
    updateFoodCount (isAdd, event) {
      if (event) {
        event.stopImmediatePropagation()
      } else {
        this.$store.dispatch('updateFoodCount', { isAdd, food: this.food })
      }
    }
  }
}
</script>
<style>
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://example.com/MaterialIcons-Regular.woff2) format("woff2"),
    url(https://example.com/MaterialIcons-Regular.woff) format("woff"),
    url(https://example.com/MaterialIcons-Regular.ttf) format("truetype");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: rgb(65, 126, 5);

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}
.GreeButtom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  float: right;
}
.GreeButtom > span,
.GreeButtom > p {
  display: inline-block;
}
.GreeButtom > p {
  display: inline-block;
  padding: 0;
  margin: 0;
  line-height: 28px;
  vertical-align: middle;
}
/* 顯示時樣式 :原本CSS*/
.material-icons.move-enter-active,
.material-icons.move-leave-active {
  transition: all 0.3s;
}
/*消失時樣式 */
.material-icons.move-enter,
.material-icons.move-leave-to {
  opacity: 0;
  /*順序有關效果 */
  transform: translateX(30px) rotate(180deg);
}
</style>
