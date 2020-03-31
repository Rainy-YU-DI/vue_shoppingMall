import Login from "@/pages/Login/Login.vue";
import Msite from "@/pages/MSite/msite.vue";
import Order from "@/pages/Order/order.vue";
import Profile from "@/pages/Profile/profile.vue";
import Search from "@/pages/Search/search.vue";
import Shop from "@/pages/Shop/Shop.vue";
import ShopGoods from "@/pages/Shop/ShopGoods/ShopGoods.vue";
import ShopInfo from "@/pages/Shop/ShopInfo/ShopInfo.vue";
import ShopRatings from "@/pages/Shop/ShopRatings/ShopRatings.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/msite",
      component: Msite,
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
