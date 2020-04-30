/*使用mockjs提供mock數據接口*/
/*不需要向外暴露，只要可以使用就好 */
import Mock from "mockjs";
import data from "./data.json";
import data02 from "./data02.json";

//返回goods的接口
Mock.mock("/goods", { code: 0, data: data.goods });
//返回ratings的接口
Mock.mock("/ratings", { code: 0, data: data.ratings });
//返回info的接口
Mock.mock("/info", { code: 0, data: data.info });

//返回alredeyOrder的接口
Mock.mock("/alredeyOrder", { code: 0, data: data02.alredeyOrder });
//返回userInfoAlredeyOrder的接口
Mock.mock("/userInfoAlredeyOrder", {
  code: 0,
  data: data02.userInfoAlredeyOrder
});
