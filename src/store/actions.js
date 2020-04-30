/*通過mutation間接更新state的多個方法的對象 */
import {
  reqAddress,
  reqFoodCategorys,
  reqLogout,
  reqSearchShops,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqShops,
  reqUserInfo
} from "../api";
import {
  CLEAR_CART,
  DECREMENT_FOOD_COUNT,
  DELETE_THIS_ITEM,
  INCREMENT_FOOD_COUNT,
  RECEIEVE_INFO,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_RATINGS,
  RECEIVE_SHOPS,
  RECIEVE_ALREADY_ORDER,
  RECIEVE_GOODS,
  RECIEVE_SEARCH_SHOPS,
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
  /* //異步獲取商家圖片
  async getShopImg({ commit }, index) {
    const result = await reqShopImg(index);

    //提交一個mutation

    const shopImg = result;

    commit(RECEIVE_SHOPIMG, { shopImg });
  }, */
  //同步記錄用戶信息
  recordUser({ commit }, userInfo) {
    commit(RECIEVE_USER_INFO, { userInfo });
  },

  //異步獲取用戶登入訊息
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
  async getShopRatings({ commit }, callback) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_RATINGS, { ratings });
      //數據更新了通知一下組件(取得頁面資料後滑動效果才顯示)
      callback && callback();
    }
  },
  //獲取商家資訊
  async getShopInfo({ commit }) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      commit(RECEIEVE_INFO, { info });
    }
  },
  //同步更新food中的count值
  updateFoodCount({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, { food });
    } else {
      commit(DECREMENT_FOOD_COUNT, { food });
    }
  },
  //不需要從後台取資料的都是同步:同步清除購物車
  clearCart({ commit }) {
    commit(CLEAR_CART);
  },
  //異步獲取搜索商家數組
  async searchShops({ commit, state }, keyword) {
    //發送異步ajax請求
    const geohash = state.latitude + "," + state.longitude;
    const result = await reqSearchShops(geohash, keyword);
    //提交一個mutation
    if (result.code === 0) {
      const searchShops = result.data;
      commit(RECIEVE_SEARCH_SHOPS, { searchShops });
    }
  },
  //同步刪除該項訂單
  deleteThisItem({ commit }, index) {
    commit(DELETE_THIS_ITEM, { index });
  },
  //reqAlredeyOrder
  //同步記錄用戶訂單信息
  recordAlredeyOrder({ commit }, alredeyOrder) {
    commit(RECIEVE_ALREADY_ORDER, { alredeyOrder });
  }
};
