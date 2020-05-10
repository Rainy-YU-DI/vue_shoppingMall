/*ajax請求函數模塊 */
import axios from "axios";
//原始方式
/* export default function ajax(url,data={},type="GET"){
  let promise
  if(type="GET"){
promise=axios.get(url)
  }else{promise=axios.push(url,data)}
  return promise
}
const response=await ajax();
const result=response.data */

//可以直接包一層promise方式:這樣就可以設定直接成功時回傳response.data
export default function ajax(url, data = {}, type = "GET") {
  return new Promise(function(resolve, reject) {
    //執行異步ajax請求
    let promise;
    if (type === "GET") {
      //準備url query參數
      let dataStr = ""; //數據拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        //substring第一個字Index為0:(第一個要被顯示的，從哪一個Index開始排除)
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      promise = axios.get(url, {
        headers: {
          Authorization: localStorage.getItem("x-token")
        }
      });
      /*使用fetch法 */
      /*  promise = fetch(url); */
    } else {
      promise = axios.post(url, data, {
        headers: {
          Authorization: localStorage.getItem("x-token")
        }
      });
      /*使用fetch法 */
      /*   promise = fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }); */
      /*  console.log(JSON.stringify(data)); */
    }

    promise
      .then(function(response) {
        //成功調用resolve()
        /*  console.log(data); */
        resolve(response.data);
        //失敗調用reject()
      })
      .catch(function(error) {
        reject(error);
      });
  });
}
