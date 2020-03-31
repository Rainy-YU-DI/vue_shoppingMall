/*直接更新state的多個方法的對象 */
import {
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
  }
};
