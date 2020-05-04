<template>
  <div>
    <div v-if="showOrder"></div>
  </div>
</template>

<script>
/* import { reqAlredeyOrder } from '../../api/index' */
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showOrder: true,
      name: this.$store.state.userInfo.name
    }
  },

  computed: {
    ...mapState(['cartFoods'])
  },
  methods: {}
}
</script>

<style>
</style>
