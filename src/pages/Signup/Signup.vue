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
              <label for="username">用戶名</label>
              <input
                id="username"
                type="text"
                placeholder="可書寫中英文(3-20字元)"
                v-model="username"
              />
            </div>
            <div class="inputGroup">
              <label for="password">密碼</label>
              <input
                type="text"
                id="password"
                placeholder="需介於6-8碼"
                v-model="password"
              />
            </div>
            <div class="inputGroup">
              <label for="email">信箱</label>
              <input
                id="email"
                placeholder="請輸入電子郵件信箱地址"
                v-model="email"
              />
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
      <AlertTip
        :alertText="alertText"
        @closeTip="closeTip"
        v-if="alertShow"
      ></AlertTip>
    </div>
  </div>
</template>

<script>
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import { Toast } from 'mint-ui'
import { reqSignin } from '../../api/index'
export default {
  data () {
    return {
      email: '',
      password: '',
      username: '', // 用戶名稱
      alertText: '',
      alertShow: false,
      checkOver: false
    }
  },
  methods: {
    async signin () {
      let result
      console.log(this.email, this.password, this.username)
      // 檢查信箱
      var patternEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
      var checkEmail = patternEmail.test(this.email)
      // 檢查密碼
      var patternPwd = /^[A-Za-z\d]{6,8}$/
      var checkPwd = patternPwd.test(this.password)
      // 檢查暱稱
      /* var patternUsername = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{3,5}$/
      var checkUsername = patternUsername.test(this.username)
 */
      if (!this.username) {
        this.alertText = '用戶名稱需介於3-20字元'
        this.alertShow = true
        return
      } else if (!checkPwd) {
        this.alertText = '密碼需介於6-8碼'
        this.alertShow = true
        return
      } else if (!checkEmail) {
        this.alertText = '電子郵件信箱格式錯誤'
        this.alertShow = true
        return
      } else {
        this.checkOver = true
      }

      if (this.checkOver) {
        // 異步POST註冊帳號
        const { email, password, username } = this
        // result = await reqSignin(email, password, username)

        result = reqSignin(email, password, username)
        console.log(result) // 這邊回傳為promise
        /* 後端要把這種是可能用戶名重覆或是信箱重覆這種的讓他是Status Code=200 OK，這樣我才抓的到資料回傳內容，如果這種設Status Code=400 Bad Request,前端抓資料只抓的到  "Error: Request failed with status code 400"
        所以只有真的錯誤的設400 信箱用戶名格式對只是已被申請過的應該設200'
        然後前端就可以抓到到response.code === '00'或01來判斷要提示什麼
        這種情況是200才對,400是請求有問題 */

        result
          .then(response => {
            console.log('註冊成功', response)
            if (response.code === '00') {
              Toast('註冊成功')
              // 跳轉到個人中心頁面
              this.$router.replace('/login')
            } else if (
              response.code === '01' &&
              response.msg === 'Error: Username is already taken!'
            ) {
              this.alertText = '此用戶名稱已經被註冊'
              this.alertShow = true
            } else if (
              response.code === '01' &&
              response.msg === 'Error: Email is already in use!'
            ) {
              this.alertText = '此信箱已經被註冊'
              this.alertShow = true
            }
          })
          .catch(error => {
            console.log('失敗', error)

            this.alertText = '註冊失敗'
            this.alertShow = true
          })
        /*   // 處理資訊
        result
          .then(res => {
            Toast('註冊成功')
            console.log('成功', res)
            // 跳轉到個人中心頁面
            this.$router.replace('/login')
          })
          .catch(error => {
            console.log('失敗', error)
            this.alertText = '註冊失敗'
            this.alertShow = true
          }) */
        /*   if (result.code === '00') {
          Toast('註冊成功')
          console.log(result)
          // 跳轉到個人中心頁面
          this.$router.replace('/login')
        } else {
          this.alertText = '此用戶名稱已被使用'
          this.alertShow = true
        } */
      }
    },
    closeTip () {
      this.alertShow = false
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
