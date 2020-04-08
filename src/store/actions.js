/*通過mutation間接更新state的多個方法的對象 */
import {
  reqAddress,
  reqFoodCategorys,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqShops,
  reqUserInfo
} from "../api";
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
  //異步獲取地址
  async getAddress({ commit, state }) {
    //發送異步ajax請求
    const geohash = state.latitude + "," + state.longitude;
    const result = await reqAddress(geohash);
    //提交一個mutation
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, { address });
    }
  },

  //異步獲取食品分類列表
  async getCategorys({ commit }) {
    //發送異步ajax請求
    const result = await reqFoodCategorys();
    //提交一個mutation
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, { categorys });
    }
  },
  //異步獲取地址
  async getShops({ commit, state }) {
    //發送異步ajax請求
    const { longitude, latitude } = state;
    const result = await reqShops(longitude, latitude);
    //提交一個mutation
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, { shops });
    }
  },
  //同步記錄用戶信息
  recordUser({ commit }, userInfo) {
    commit(RECIEVE_USER_INFO, { userInfo });
  },

  //異步獲取用戶會繣訊息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo();
    if (result.code === 0) {
      const userInfo = result.data;
      commit(RECIEVE_USER_INFO, { userInfo });
    }
  },
  //異步退出
  async logout({ commit }) {
    const result = await reqLogout();
    if (result.code === 0) {
      commit(RESET_USER_INFO);
    }
  },

  //獲取商家店
  async getShopGoods({ commit }, callback) {
    const result = await reqShopGoods();
    if (result.code === 0) {
      const goods = result.data;
      commit(RECIEVE_GOODS, { goods });
      //數據更新了通知一下組件(取得頁面資料後滑動效果才顯示)
      callback && callback();
    }
  },
  //獲取商家評論
  async getShopRatings({ commit }) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_RATINGS, { ratings });
    }
  },
  //獲取商家資訊
  async getShopInfo({ commit }) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      commit(RECEIEVE_INFO, { info });
    }
  }
};