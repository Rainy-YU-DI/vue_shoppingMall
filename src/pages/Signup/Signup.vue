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
        <div class="signInput" @submit.prevent="signin()">
          <form>
            <div class="inputGroup">
              <label for="email">帳號</label>
              <input id="email" placeholder="請輸入電子郵件信箱地址" v-model="email" />
            </div>
            <div class="inputGroup">
              <label for="password">密碼</label>
              <input type="text" id="password" placeholder="需介於6-8碼" v-model="password" />
            </div>
            <div class="inputGroup">
              <label for="username">暱稱</label>
              <input id="username" type="text" placeholder="需同時有字符(英文)與數字" v-model="username" />
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
      <AlertTip :alertText="alertText" @closeTip="closeTip" v-if="alertShow"></AlertTip>
    </div>
  </div>
</template>

<script>
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import { reqSignin } from '../../api/index'
export default {
  data () {
    return {
      email: '', // 帳號
      password: '',
      username: '', // 暱稱
      alertText: '',
      alertShow: false,
      checkOver: false
    }
  },
  methods: {
    async signin () {
      let result
      console.log(this.email, this.password, this.username)
      // 檢查帳號(信箱)
      var patternEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
      var checkEmail = patternEmail.test(this.email)
      // 檢查密碼
      var patternPwd = /^[A-Za-z\d]{6,8}$/
      var checkPwd = patternPwd.test(this.password)
      // 檢查暱稱
      var patternUsername = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{3,5}$/
      var checkUsername = patternUsername.test(this.username)

      if (!checkEmail) {
        this.alertText = '電子郵件信箱格式錯誤'
        this.alertShow = true
        return
      } else if (!checkPwd) {
        this.alertText = '密碼需介於6-8碼'
        this.alertShow = true
        return
      } else if (!checkUsername) {
        this.alertText = '暱稱需同時有字符與數字'
        this.alertShow = true
        return
      } else {
        this.checkOver = true
      }

      if (this.checkOver) {
        // 異步POST註冊帳號
        const { email, password, username } = this
        result = await reqSignin(email, password, username)
        console.log(result)

        // 處理資訊
        if (result.message === 'User registered successfully!') {
          this.alertShow = true
          this.alertText = '已註冊成功!'

          // 跳轉到個人中心頁面
        } else {
          this.alertText = '註冊失敗,請重新操作!'
          this.alertShow = true
        }
      }
    },
    closeTip () {
      this.alertShow = false
      if (this.alertText === '已註冊成功!') {
        this.$router.replace('/login')
      }
    }
  },
  components: {
    AlertTip,
    reqSignin
  }
}
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
  width: 70%;
  height: 70%;
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

  padding: 5px 20px 0px 20px;
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
</style>
