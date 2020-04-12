//import moment from "moment";
import format from "date-fns/format";
import Vue from "vue";
Vue.filter("dateformat", function(value) {
  //使用moment
  //return moment(value).format("YYYY-MM-DD HH:mm:ss");
  //使用format參數為(value,格式)
  return format(value, "yyyy-MM-dd HH:mm:ss");
});
