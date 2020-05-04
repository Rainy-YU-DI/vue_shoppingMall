import Login from "@/pages/Login/Login.vue";
import OrderPay from "@/pages/OrderPay/OrderPay.vue";
import Shop from "@/pages/Shop/Shop.vue";
import ShopGoods from "@/pages/Shop/ShopGoods/ShopGoods.vue";
import ShopInfo from "@/pages/Shop/ShopInfo/ShopInfo.vue";
import ShopRatings from "@/pages/Shop/ShopRatings/ShopRatings.vue";
import UserOrderText from "@/pages/UserOrderText/UserOrderText.vue";
import Vue from "vue";
import Router from "vue-router";

/* import Msite from "@/pages/MSite/msite.vue";
import Order from "@/pages/Order/order.vue";
import Profile from "@/pages/Profile/profile.vue";
import Search from "@/pages/Search/search.vue"; */
//使用路由懶加載，將js分割打包
const Msite = () => import("@/pages/MSite/msite.vue");
const Order = () => import("@/pages/Order/order.vue");
const Profile = () => import("@/pages/Profile/profile.vue");
const Search = () => import("@/pages/Search/search.vue");
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/msite",
      component: Msite, //此Msite變函數,不會一開始就調用，只有執行到此路由時才向後臺調用(第一次調用後之後不會再調用)
      meta: {
        showFooter: true
      }
    },
    {
      path: "/order",
      component: Order,

      meta: {
        showFooter: true
      }
    },
    {
      path: "/profile",
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/search",
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/login",
      component: Login,
      meta: {
        showFooter: false
      }
    },

    {
      path: "/UserOrderText",
      component: UserOrderText,
      meta: {
        showFooter: false
      }
    },
    {
      path: "/orderpay",
      component: OrderPay,
      meta: {
        showFooter: false
      }
    },

    {
      path: "/",
      redirect: "msite"
    },
    {
      path: "/shop",
      component: Shop,
      children: [
        {
          path: "/shop/goods",
          component: ShopGoods
        },
        {
          path: "/shop/ratings",
          component: ShopRatings
        },
        {
          path: "/shop/info",
          component: ShopInfo
        },
        {
          path: "",
          redirect: "/shop/goods"
        }
      ]
    }
  ]
});
