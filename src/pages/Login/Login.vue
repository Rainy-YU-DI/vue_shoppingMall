<template>
  <div class="login">
    <div class="loginContainer">
      <div class="loginHeader">
        <h2 class="login_logo">雨滴購物網</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">短信登入</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">密碼登入</a>
        </div>
      </div>
      <div class="login_content">
        <from @submit.prevent="loginCheck">
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手機號" />
              <button
                :disabled="!rightPhone"
                class="get_verification"
                :class="{right_phone:rightPhone}"
                @click.prevent="getCode"
              >{{computeTime>0?`已發送(${computeTime})`:'獲取驗證'}}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="驗證碼" />
            </section>
            <section class="login_hint">
              溫馨提示:未註冊雨滴購物網帳號的手機號，登入時將自動註冊，且代表已同意
              <a href="javascript:;">《用戶服務協議》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section class="login_message">
              <input type="text" placeholder="手機/郵箱/用戶名" maxlength="11" />
            </section>
            <section class="login_verification">
              <input type="text" placeholder="密碼" maxlength="8" v-if="showPwd" />
              <input type="password" placeholder="密碼" maxlength="8" v-else />
              <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                <div class="switch_circle" :class="{right: showPwd}"></div>
                <span class="switch_text">{{showPwd?'abc':'...'}}</span>
              </div>
            </section>
            <section class="login_message">
              <input type="text" maxlength="4" placeholder="驗證碼" />
              <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" />
            </section>
          </div>
        </from>
        <buttom class="login_submit">登入</buttom>
        <a href="javascript:;" class="about_us">關於我們</a>
      </div>
    </div>
    <a href="javascript:" class="go_back" @click="$router.back()">
      <i class="iconfont icon-chevron-right"></i>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginWay: true,
      showPwd: false
    }
  }
}
</script>

<style>
@import url("../../common/download/font_batbg34t7tl/iconfont.css");
* {
  margin: 0;
  padding: 0;
}
.loginContainer {
  padding-top: 60px;
  margin-left: 30px;
  margin-right: 30px;
}
.loginHeader {
  top: 0px;
  vertical-align: text-top;
}
.login_logo {
  color: rgb(114, 20, 143);
  font-weight: bolder;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 30px;
}
.login_header_title > a {
  color: rgb(114, 20, 143);
  font-size: 16px;
  text-decoration: none;
}
.login_header_title > a.on {
  color: rgb(245, 110, 20);
  border-bottom: 2px solid rgb(245, 110, 20);
}
.login_content {
  margin-top: 10px;
}
.login_content > from > div.on {
  display: block;
}
.login_content > from > div {
  display: none;
}
.login_message {
  position: relative;
}
.login_message:nth-child(2) {
  position: relative;
}
.login_message > input {
  width: 100%;
  height: 50px;
  border-radius: 3px;
  border: 1px solid palevioletred;
}

.get_verification {
  position: absolute;
  margin-right: 10px;
  right: 0px;
  top: 14.5px;
  background-color: burlywood;
  border: 0px;
}
.login_verification {
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
}
.login_verification > input {
  width: 100%;
  height: 50px;
  border-radius: 3px;
  border: 1px solid palevioletred;
}
.login_hint {
  font-size: 10px;
  text-align: left;
}
.login_hint > a {
  text-decoration: none;
  color: blueviolet;
}
.switch_button {
  position: absolute;
  width: 35px;
  height: 13px;
  border: 1px solid purple;
  border-radius: 10px;
  top: 18.5px;
  right: 10px;
  line-height: 13px;
  transition: background-color 0.3s, translateX 0.3s;
}
.switch_button.on {
  background-color: rgb(247, 100, 247);
}

.switch_circle {
  position: absolute;
  content: "";
  width: 13px;
  height: 13px;
  background-color: purple;
  border-radius: 10px;
}
.switch_circle.right {
  transform: translateX(22px);
}
.switch_text {
  font-size: 6px;
  vertical-align: middle;
  display: inline-block;
}
.login_message > img {
  position: absolute;
  width: 90px;
  height: 45px;
  top: 2.5px;
}

.login_submit {
  position: relative;
  display: block;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 50px;
  height: 50px;
  color: white;
  background-color: rgb(114, 20, 143);
}
.about_us {
  text-decoration: none;
  color: rgb(138, 43, 226);
}
.go_back {
  position: fixed;
  top: 20px;
  left: 20px;
  text-decoration: none;
}
</style>
