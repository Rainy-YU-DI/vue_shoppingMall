import moment from "moment";
import Vue from "vue";
Vue.filter("dateformat", function(value) {
  return moment(value).format("YYYY-MM-DD HH:mm:ss");
});
