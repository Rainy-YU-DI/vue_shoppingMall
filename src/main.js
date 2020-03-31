// JS入口
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { Button } from "mint-ui";
import Vue from "vue";
import "../src/mock/mockServer.js"; //加載mockServer即可(像CSS，他也沒暴露)
import App from "./App";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
//註冊全局組件標籤
Vue.component(Button.name, Button);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});
