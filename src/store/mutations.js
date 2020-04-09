/*直接更新state的多個方法的對象 */
import Vue from "vue";
import {
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  RECEIEVE_INFO,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_RATINGS,
  RECEIVE_SHOPS,
  RECIEVE_GOODS,
  RECIEVE_USER_INFO,
  RESET_USER_INFO
} from "./mutation-types";
export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address;
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops;
  },
  [RECIEVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo;
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {};
  },
  [RECIEVE_GOODS](state, { goods }) {
    state.goods = goods;
  },
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings;
  },
  [RECEIEVE_INFO](state, { info }) {
    state.info = info;
  },
  [INCREMENT_FOOD_COUNT](state, { food }) {
    if (!food.count) {
      //第一次增加
      //food.count = 1;//新增count屬性，(但這樣新增沒辦法數據綁定)
      //要使用Vue.set(對象,屬性名,屬性值)
      Vue.set(food, "count", 1); //讓新增的屬性也有數據綁定
      //將food添加到cartFoods中
      state.cartFoods.push(food);
    } else {
      food.count++;
    }
  },
  [DECREMENT_FOOD_COUNT](state, { food }) {
    if (food.count) {
      //要有值才去減
      food.count--;
      if (food.count === 0) {
        //將food從cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
      }
    }
  }
};
