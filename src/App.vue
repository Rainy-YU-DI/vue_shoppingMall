<template>
  <div id="app">
    <router-view />
    <Footer v-if="$route.meta.showFooter" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Footer from '../src/components/footer.vue'
/* import { reqFootList } from './api' */

export default {
  mounted () {
    /*   this.$store.dispatch('getAddress') */
    this.getAddress()
  },
  methods: {
    ...mapActions(['getAddress'])
  },
  // 測試有沒有串接到資料
  /*  async mounted () {
    const result = await reqFootList()
    console.log(result)
  }, */
  components: {
    Footer
  }
}
</script>

<style>
/* html {
  overflow-x: hidden;
  overflow-y: hidden;
} */
body,
#app {
  display: block;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
</style>
