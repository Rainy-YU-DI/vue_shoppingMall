<template>
  <div class="singUp">
    <div class="backGround">
      <div class="go_backButton">
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-chevron-left"></i>
        </a>
      </div>
      <div class="block">
        <div class="head">
          <h3 class="purpleCircle">註冊中心</h3>
        </div>
        <div class="signInput">
          <form>
            <div class="inputGroup">
              <label for="email">帳號</label>
              <input type="email" id="email" pattern="+@" placeholder="請輸入電子郵件信箱地址" />
            </div>
            <div class="inputGroup">
              <label for="password">密碼</label>
              <input type="text" id="password" placeholder="需介於6-8碼" minlength="6" maxlength="8" />
            </div>
            <div class="inputGroup">
              <label for="username">暱稱</label>
              <input id="username" type="text" placeholder="需同時有字符與數字" />
            </div>
            <div class="text">
              點選「
              <span>註冊</span>」，即表示您同意接受服務條款 及隱私權保護政策
            </div>
            <button>註冊</button>
          </form>
        </div>
        <div class="bottom">
          <p>已經有帳號了?</p>
          <router-link to="/login">登入</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url("../../common/download/font_batbg34t7tl/iconfont.css");
* {
  margin: 0px;
  padding: 0px;
}
.go_backButton > a {
  position: fixed;
  top: 20px;
  left: 20px;
  text-decoration: none;
}
.go_backButton > a > i {
  font-size: 20px;
  color: purple;
}
.backGround {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0px auto;
  z-index: -999;
  background-image: url("../../common/img/signinBG.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.block {
  position: absolute;
  margin: auto;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  width: 350px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}
.purpleCircle {
  position: absolute;
  margin: auto;
  left: 0px;
  right: 0px;
  top: -50px;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  color: rgb(255, 255, 255);
  width: 100px;
  height: 100px;
  background-color: purple;
  border-radius: 50px;
}
.signInput {
  margin-top: 50px;

  padding: 20px 30px 0px 30px;
}
label {
  display: block;
  color: rgb(233, 32, 172);
  font-weight: 600;
  font-size: 20px;
  text-shadow: 0 0 3px rgb(155, 154, 154);
}
input {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid rgb(173, 173, 173);
}
.inputGroup {
  text-align: left;
  margin: 10px 0px;
}
.text {
  text-align: left;
}
.text > span {
  color: purple;
}
button {
  width: 50%;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: purple;
  border-radius: 20px;
  color: rgb(255, 255, 255);
}
.bottom {
}
</style>
