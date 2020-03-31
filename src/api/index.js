/*包含n個請求函數的模快
函數的返回值:promise對象 */

import ajax from "./ajax";
const BASE = "/api";
//[1、根据经纬度获取位置详情]
export const reqAddress = geohash => ajax(`${BASE}/position/${geohash}`);
//[2、获取食品分类列表]
export const reqFoodCategorys = () => ajax(BASE + "/index_category");
//[3、根据经纬度获取商铺列表]
export const reqShops = (longitude, latitude) =>
  ajax(BASE + "/shops", { longitude, latitude });
//[4、根据经纬度和关键字搜索商铺列表]
//[5、获取一次性验证码]:不用,直接用src="http://localhost:4000/captcha"
//[6、用户名密码登陆]
/* export const reqPwdLogin = ({ name, pwd, captcha }) =>
  ajax(BASE + "/login_pwd", { name, pwd, captcha }, "POST"); */
export const reqPwdLogin = ({ password, username }) =>
  ajax(
    "http://207.148.96.113:9420/api/auth/signin",
    { password, username },
    "POST"
  );
//[7、发送短信验证码]
export const reqSendCode = phone => ajax(BASE + "/sendcode", phone, "POST");
//[8、手机号验证码登陆]
export const reqSmsLogin = ({ phone, code }) =>
  ajax(BASE + "/login_sms", { phone, code }, "POST");
//[9、根据会话获取用户信息]
/* export const reqUserInfo = () => ajax(BASE + "/userinfo"); */
export const reqUserInfo = () =>
  ajax("http://207.148.96.113:9420/api/test/user");
//[10、用户登出]
export const reqLogout = () => ajax(BASE + "/logout");

//goods獲取商家商品數組
export const reqShopGoods = () => ajax("/goods");
//ratings獲取商家評價數組
export const reqShopRatings = () => ajax("/ratings");
//info獲取商家信息
export const reqShopInfo = () => ajax("/info");
