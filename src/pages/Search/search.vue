<template>
  <div class="search">
    <HeaderTop title="搜尋"></HeaderTop>
    <!-- @submit.prevent提交事件不再重載頁面-->
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder="請輸入商家名稱" class="search_input" v-model="keyword" />
      <input type="submit" class="search_submit" />
    </form>
    <section class="searchListGrooup" v-if="searchResult">
      <ul class="searchUl">
        <li class="searchLi" v-for="(searchShop, index) in searchShops" :key="index">
          <img
            style="width:50px;height:50px;background-color:blue"
            :src="imgBaseUrl + searchShop.image_path"
          />
          <div class="textContent">
            <span>{{ searchShop.name }}</span>
            <span>月售{{ searchShop.float_minimum_order_amount }}單</span>
            <span>
              {{ searchShop.float_delivery_fee }}元起送/距離{{
              searchShop.distance
              }}
            </span>
          </div>
        </li>
      </ul>
    </section>
    <div class="searchNoResult" v-if="!searchResult">很抱歉搜尋不到此商家!</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import HeaderTop from '@/components/headerTop.vue'
export default {
  data () {
    return {
      searchResult: true,
      keyword: '',
      imgBaseUrl: 'http://cangdu.org:8001/img/'
    }
  },
  components: {
    HeaderTop
  },
  methods: {
    search () {
      // 得到搜索關鍵字
      const keyword = this.keyword.trim()
      // 進行搜索
      if (keyword) {
        console.log(keyword)
        this.$store.dispatch('searchShops', keyword)
      }
    }
  },
  computed: {
    ...mapState(['searchShops'])
  },
  watch: {
    searchShops (value) {
      if (!value.length) {
        console.log('222')
        this.searchResult = false
      } else {
        this.searchResult = true
        console.log('111')
      }
    }
  }
}
</script>
<style scoped>
@import url("../../common/download/font_batbg34t7tl/iconfont.css");
.search {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.search_form {
  display: flex;
  margin: auto;
  padding: 10px;
  justify-content: space-between;
  box-sizing: border-box;
}
.search_input {
  height: 30px;
  flex-grow: 2;
  box-sizing: border-box;
  flex-basis: 0;
  margin-right: 20px;
  border: none;
  background-color: #f2f2f2;
  border-radius: 3px;
  padding-left: 10px;
}
.search_submit {
  height: 30px;
  box-sizing: border-box;
  flex-grow: 1;
  border-radius: 3px;
  background-color: rgb(114, 20, 143);
  border: 0;
  color: white;
  font-weight: 600;
  font-size: 14px;
  flex-basis: 0;
}
.searchUl {
  padding: 0px;
  margin: 0px;
}
.searchLi {
  position: relative;
  padding: 10px;
  text-align: left;
  height: 71px;
  margin: auto 0;
  box-sizing: border-box;
  vertical-align: middle;
  border-bottom: 1px solid #f2f2f2;
}
.searchLi > img {
  display: inline-block;
  vertical-align: middle;

  margin-right: 10px;
}
.textContent {
  position: absolute;
  display: inline-block;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 50px;
  text-align: left;
}
.textContent > span {
  display: block;
  font-size: 10px;
}
.textContent > span:not(:last-of-type) {
  margin-bottom: 4px;
}
</style>
