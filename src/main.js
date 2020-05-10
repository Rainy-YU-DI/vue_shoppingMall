// JS入口
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "jquery";
import { Button } from "mint-ui";
import Vue from "vue";
//圖片懶加載插件
import VueLazyload from "vue-lazyload";
import "../src/mock/mockServer.js"; //加載mockServer即可(像CSS，他也沒暴露)
import App from "./App";
import loading from "./common/img/lazyLoadImg.gif";
//時間模塊
import "./filter/index";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
//註冊全局組件標籤
Vue.component(Button.name, Button);

//使用懶加載(內部會可以使用自定義標籤v-lazy)
Vue.use(VueLazyload, {
  //配置圖片來源
  loading: loading
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});
