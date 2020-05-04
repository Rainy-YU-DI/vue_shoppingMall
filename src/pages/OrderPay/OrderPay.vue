<template>
  <div class="orderPay">
    <div class="payHeader">
      <div class="stepGroup">
        <div class="step">
          <div class="round" :class="{ active: page === 'payMethodsGroup' }">
            <span>STEP.1</span>
          </div>
          <div class="bar"></div>
          <div class="stepText">選擇支付方式</div>
        </div>
        <div class="step">
          <div class="round" :class="{ active: page === 'confirmGroup' }">
            <span>STEP.2</span>
          </div>
          <div class="bar"></div>
          <div class="stepText">確認訂購資訊</div>
        </div>
        <div class="step">
          <div class="round" :class="{ active: page === 'finishPay' }">
            <span>STEP.3</span>
          </div>
          <div class="bar"></div>
          <div class="stepText">支付成功</div>
        </div>
      </div>
    </div>
    <div class="payMethodsGroup" v-if="page === 'payMethodsGroup'">
      <div class="scrollY">
        <div class="formTitle">選擇支付方式</div>
        <div class="methodButtonGroup">
          <div
            class="methodButton"
            :class="{ activePayMethod: changeMethod }"
            @click="payMethod(true)"
          >信用卡付款</div>
          <div
            class="methodButton"
            :class="{ activePayMethod: !changeMethod }"
            @click="payMethod(false)"
          >超商付款</div>
        </div>
        <!--  信用卡 -->
        <div class="creditCardMethod" v-if="changeMethod">
          <!--  請輸入信用卡卡號 -->
          <form>
            <div :class="{ wrongText: wrongText[0].state }">
              <div class="creditText">
                請輸入信用卡卡號
                <span>{{ wrongText[0].message }}</span>
              </div>
              <div class="formInGroup">
                <div class="formIn" v-for="(item, index) in inputCardNumber" :key="index">
                  <input
                    type="text"
                    v-model="item.val"
                    class="CardNumberform"
                    maxlength="4"
                    @keydown="setBlur($event, index)"
                  />
                  <div class="symbol">-</div>
                </div>
              </div>
            </div>
          </form>
          <!--  請輸入信用卡期限 -->
          <form>
            <div :class="{ wrongText: wrongText[1].state }">
              <div class="creditText">
                請輸入信用卡期限
                <span>{{ wrongText[1].message }}</span>
              </div>
              <div class="formInGroup">
                <div class="formIn" v-for="(item, index) in inputCardDate" :key="index">
                  <input
                    type="text"
                    v-model="item.val"
                    class="inputDate"
                    maxlength="2"
                    @keydown="setBlur2($event, index)"
                  />
                  <div class="symbol">/</div>
                </div>
              </div>
            </div>
          </form>
          <!--  請輸入信用卡背後安全碼 -->
          <form>
            <div :class="{ wrongText: wrongText[2].state }">
              <div class="creditText">
                請輸入信用卡背後安全碼
                <span>{{ wrongText[2].message }}</span>
              </div>
              <div class="formInGroup">
                <div class="formIn" v-for="(item, index) in inputCardSaveNum" :key="index">
                  <input type="text" v-model="item.val" class="inputSaveNum" maxlength="3" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <!--  超商-->

        <div class="shopMethod" v-if="!changeMethod">
          <!-- 請選擇超商 -->
          <ul class="chooseShop">
            <li class="checkboxBig">
              <input
                type="radio"
                name="shop"
                id="shop1"
                checked
                v-model="shopMethod1"
                value="7-11 ibon付款"
              />
              <div class="smcircle">
                <label for="shop1">7-11 ibon付款</label>
              </div>
            </li>
            <li class="checkboxBig">
              <input type="radio" name="shop" id="shop2" v-model="shopMethod1" value="全家FamiPort付款" />
              <div class="smcircle">
                <label for="shop2">全家FamiPort付款</label>
              </div>
            </li>
          </ul>
        </div>

        <!-- 優惠代碼 -->
        <div class="couponGroup">
          <div :class="{ wrongText: wrongText[3].state }">
            <div class="creditText">
              請輸入優惠碼
              <span>{{ wrongText[3].message }}</span>
            </div>
            <div class="formInGroup">
              <input type="text" maxlength="8" v-model="coupon" class="couponInput" />
              <div class="creditText02">優惠代碼12345678</div>
            </div>
          </div>
        </div>
        <!-- 同意條款 -->
        <div class="agree">
          <div :class="{ wrongText: wrongText[4].state }">
            <input type="checkbox" v-model="agree" />
            <div class="creditText02">我同意接受雨滴購物網服務條和隱私權政策</div>
            <span class="creditText03">{{ wrongText[4].message }}</span>
          </div>
        </div>
      </div>
      <!-- 付款方式Footer -->
      <div class="payFooter">
        <div class="nextButtom" @click="$router.back()">
          <span>回訂單頁面</span>
        </div>

        <div class="nextButtom" @click="changePage('confirmGroup')">
          <span>下一頁</span>
        </div>
      </div>
    </div>
    <!-- 確認訂購資訊頁面-->
    <div class="confirmGroup" v-if="page === 'confirmGroup'">
      <div class="formTitle">確認付款資訊</div>
      <div class="group">
        <div class="creditText">選購商品:</div>
        <div class="confirmContext03" v-for="(food, index) in cartFoods" :key="index">
          <span>{{ food.name }}X{{ food.count }}={{ sigleItemPrice(food) }}</span>
        </div>
        <span class="confirmContext04">共計:${{ totalPrice }}</span>
      </div>
      <div class="group">
        <div class="creditText">購買者資訊:</div>
        <div class="confirmContext">{{ userInfo.name ? `會員:${userInfo.name} 君` : "非會員" }}</div>
      </div>
      <div class="group">
        <div class="creditText">付款方式:</div>
        <div class="confirmContext">{{ changeMethod ? "信用卡支付" : "超商支付" }}</div>
      </div>
      <div class="group">
        <div class="creditText">優惠代碼:</div>
        <div class="confirmContext">{{ coupon ? coupon : "未使用任何優惠卷" }}</div>
      </div>
      <!-- 確認訂購資訊Footer -->
      <div class="payFooter">
        <div class="nextButtom" @click="changePage('payMethodsGroup')">
          <span>回支付方式</span>
        </div>

        <div class="nextButtom" @click="changePage('finishPay')">
          <span>確認付款</span>
        </div>
      </div>
    </div>

    <!-- 支付成功頁面-->
    <div class="finishPayGroup" v-if="page === 'finishPay'">
      您的訂單
      <span class="orderNo">編號{{alredeyOrder.orderNo}}</span>已成立!
      <alreadyPayList></alreadyPayList>
      <!-- 確認支付成功Footer -->
      <div class="payFooter">
        <div class="nextButtom" @click="$router.back()">
          <span>回訂單頁面</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reqAlredeyOrder } from '../../api/index'
import alreadyPayList from '../../components/alreadyPayList/alreadyPayList'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      inputCardNumber: [{ val: '' }, { val: '' }, { val: '' }, { val: '' }],
      inputCardDate: [{ val: '' }, { val: '' }],
      inputCardSaveNum: [{ val: '' }],
      shopMethod1: '7-11 ibon付款',
      coupon: '',
      agree: false,
      page: 'payMethodsGroup',
      changeMethod: true, // 顯示哪個支付方式
      wrongText: [
        { state: false, message: '' },
        { state: false, message: '' },
        { state: false, message: '' },
        { state: false, message: '' },
        { state: false, message: '' }
      ],
      // POST訂單資料
      /*  name: this.$store.state.userInfo.name, */
      userId: this.$store.state.userInfo._id
        ? this.$store.state.userInfo._id
        : '尚未登入用戶',
      productList: {}
    }
  },
  mounted: function () {
    const aa = []
    this.$store.state.cartFoods.forEach(function (e) {
      aa.push({ count: e.count, name: e.name, price: e.price })
    })
    console.log(aa)
    this.productList = aa
  },
  components: {
    alreadyPayList
  },
  computed: {
    ...mapState(['userInfo', 'cartFoods', 'alredeyOrder']),
    ...mapGetters(['totalCount', 'totalPrice'])
  },
  methods: {
    setBlur (el, index) {
      var dom0 = document.getElementsByClassName('CardNumberform')

      if (this.inputCardNumber[index].val.length === 4) {
        dom0[index + 1].focus()
      }
    },
    setBlur2 (el, index) {
      var dom1 = document.getElementsByClassName('inputDate')

      if (this.inputCardDate[index].val.length === 2) {
        dom1[index + 1].focus()
      }
    },
    payMethod (boolean) {
      this.changeMethod = boolean
    },
    changePage (PAGE) {
      const { wrongText } = this
      const { inputCardNumber } = this
      const { inputCardDate } = this
      const { inputCardSaveNum } = this
      const { coupon } = this
      const { agree } = this
      // 驗證
      if (this.page === 'payMethodsGroup' && this.changeMethod === true) {
        console.log(1)

        // 信用卡卡號
        for (var i = 0; i < 4; i++) {
          if (inputCardNumber[i].val.length !== 4) {
            console.log(inputCardNumber)
            wrongText[0].state = true
            wrongText[0].message = '請輸入正確'
          } else {
            wrongText[0].state = false
            wrongText[0].message = ''
          }
        }
        // 信用卡期限
        for (var b = 0; b < 2; b++) {
          if (inputCardDate[b].val.length !== 2) {
            wrongText[1].state = true
            wrongText[1].message = '請輸入正確'
          } else {
            wrongText[1].state = false
            wrongText[1].message = ''
          }
        }
        // 信用卡安全碼

        if (inputCardSaveNum[0].val.length !== 3) {
          wrongText[2].state = true
          wrongText[2].message = '請輸入正確'
        } else {
          wrongText[2].state = false
          wrongText[2].message = ''
        }
      }

      // 不管怎樣都要驗證:只要在payMethodsGroup這頁都要驗證
      if (this.page === 'payMethodsGroup') {
        // 優惠碼檢查
        // 如果有輸入但未滿8位數:顯示必須是8碼
        // 如果有輸入&&且滿8位數&&但不符合12345678:顯示優惠碼無效
        if (coupon.length > 0 && coupon.length !== 8) {
          wrongText[3].state = true
          wrongText[3].message = '需輸入8個字元'
        } else if (
          coupon.length > 0 &&
          coupon.length === 8 &&
          coupon !== '12345678'
        ) {
          wrongText[3].state = true
          wrongText[3].message = '優惠碼無效'
        } else {
          wrongText[3].state = false
          wrongText[3].message = ''
        }
        // 同意條款

        if (agree === false) {
          wrongText[4].state = true
          wrongText[4].message = '須同意'
        } else {
          wrongText[4].state = false
          wrongText[4].message = ''
        }
        // 統一檢查此頁面都通過驗證:才使頁面跳轉下一頁
        var endCheck = wrongText.filter(function (item, index, array) {
          return item.state === true
        })

        if (endCheck.length === 0) {
          this.page = PAGE
        }
      } else {
        if (PAGE === 'finishPay') {
          this.showAlredeyOrder()
          this.page = PAGE
          this.$store.dispatch('clearCart')
        }
        this.page = PAGE
      }
    },
    sigleItemPrice (food) {
      let sum = food.count * food.price
      return sum
    },
    // 異步付款訂單POST
    // 異步POST資料
    async showAlredeyOrder () {
      let result
      const { userId, productList } = this
      console.log(productList)
      // 發ajax請求:已訂定單
      result = await reqAlredeyOrder({
        userId,
        productList
      })
      // 將返回的訂單編號存起來
      if (result.code === '00') {
        const alredeyOrder = result.data
        // 將alredeyOrder保存到state
        this.$store.dispatch('recordAlredeyOrder', alredeyOrder)
      }
    }
  },
  watch: {
    // 為了使表單驗證"及時"監控,需要深度監聽
    inputCardNumber: {
      deep: true,
      handler: function () {
        console.log(555)
        const { inputCardNumber } = this
        const { wrongText } = this
        for (var i = 0; i < 4; i++) {
          if (inputCardNumber[i].val.length !== 4) {
            wrongText[0].state = true
            wrongText[0].message = '請輸入正確'
          } else {
            wrongText[0].state = false
            wrongText[0].message = ''
          }
        }
      }
    },
    inputCardDate: {
      deep: true,
      handler: function () {
        const { inputCardDate } = this
        const { wrongText } = this
        for (var b = 0; b < 2; b++) {
          if (inputCardDate[b].val.length !== 2) {
            wrongText[1].state = true
            wrongText[1].message = '請輸入正確'
          } else {
            wrongText[1].state = false
            wrongText[1].message = ''
          }
        }
      }
    },
    inputCardSaveNum: {
      deep: true,
      handler: function () {
        const { inputCardSaveNum } = this
        const { wrongText } = this
        if (inputCardSaveNum[0].val.length !== 3) {
          wrongText[2].state = true
          wrongText[2].message = '請輸入正確'
        } else {
          wrongText[2].state = false
          wrongText[2].message = ''
        }
      }
    },
    coupon: {
      deep: true,
      handler: function () {
        const { coupon } = this
        const { wrongText } = this
        if (coupon.length > 0 && coupon.length !== 8) {
          wrongText[3].state = true
          wrongText[3].message = '需輸入8個字元'
        } else if (
          coupon.length > 0 &&
          coupon.length === 8 &&
          coupon !== '12345678'
        ) {
          wrongText[3].state = true
          wrongText[3].message = '優惠碼無效'
        } else {
          wrongText[3].state = false
          wrongText[3].message = ''
        }
      }
    },
    agree: {
      deep: true,
      handler: function () {
        const { agree } = this
        const { wrongText } = this
        if (agree === false) {
          wrongText[4].state = true
          wrongText[4].message = '須同意'
        } else {
          wrongText[4].state = false
          wrongText[4].message = ''
        }
      }
    },
    // 選擇支付方式變動時，將所有驗證state變false
    changeMethod: function () {
      this.wrongText.forEach(wrongText => {
        wrongText.state = false
        wrongText.message = ''
      })
    }
  }
}
</script>
<style scoped>
.orderPay {
  overflow: hidden;
}
.payHeader {
  position: relative;
  height: 70px;
  background-color: rgb(114, 20, 143);
  padding: 5px 0px;
  margin: auto;
}
.stepGroup {
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 80%;
  height: 90%;
}
.step {
  position: relative;
  flex: 1;
}
.round {
  position: relative;
  width: 55px;
  height: 55px;
  margin: auto;
  border-radius: 30px;
  background-color: rgb(230, 200, 250);
  vertical-align: middle;
  z-index: 1;
}
.round.active {
  background-color: rgb(78, 202, 53);
  color: white;
}
.round.active > span {
  color: white;
  font-weight: 600;
}

.step:not(:nth-child(1)):before {
  left: 0;
  position: absolute;
  content: "";
  height: 4px;
  top: 40%;
  width: 50%;
  display: inline-block;
  background-color: rgb(230, 200, 250);
}
.step:not(:nth-child(3)):after {
  right: 0;
  position: absolute;
  content: "";
  height: 4px;
  top: 40%;
  width: 50%;
  display: inline-block;
  background-color: rgb(230, 200, 250);
}
.round > span {
  line-height: 55px;
  color: rgb(114, 20, 143);
  font-size: 15px;
  font-weight: 600;
}
.stepText {
  margin-top: 2px;
  font-size: 10px;
  color: white;
}
input:focus {
  outline: none;
  border-color: #26ca28;
}
/*radio */
.shopMethod {
  margin: 20px 0px;
}
.shopMethod ul {
  list-style: none;
  padding-left: 4px;
}
.shopMethod ul li {
  position: relative;
  text-align: left;
  color: #aaaaaa;
  margin-bottom: 5px;
}

input[type="radio"] {
  margin: 0px;
  visibility: hidden;
}
.shopMethod ul li input::before {
  content: "";
  display: inline-block;
  position: relative;
  left: -1px;
  top: -1px;

  border: 2px solid #aaaaaa;
  border-radius: 100%;
  visibility: visible;

  width: 18px;
  height: 18px;
  box-sizing: border-box;
  margin: auto;
}

.smcircle {
  display: inline-block;
}

input[type="radio"]:checked + div::before {
  content: "";
  position: absolute;
  left: 2.5px;
  top: 7px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: #26ca28;
}
input[type="radio"]:checked ~ div > label {
  color: #26ca28;
}

/*checkbox */
.agree {
  margin-top: 20px;
  vertical-align: middle;
}
.agree input {
  position: relative;
  visibility: hidden;
  vertical-align: middle;
}
.agree input::after {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 2px solid #aaaaaa;
  visibility: visible;
  box-sizing: border-box;
}
.agree input:checked::after {
  border: 2px solid #26ca28;
}
.agree input:checked:before {
  content: "";
  display: inline-block;
  position: absolute;
  left: 4px;
  top: 4px;
  width: 8px;
  height: 8px;
  background-color: #26ca28;
  visibility: visible;
  box-sizing: border-box;
  line-height: 19;
}
/*標題 */
.formTitle {
  margin-top: 20px;
  font-weight: 800;
  font-size: 20px;
  vertical-align: middle;
  display: inline-block;
}
.formTitle::after {
  content: "";
  margin-left: 10px;
  vertical-align: middle;
  display: inline-block;
  width: 20px;
  height: 5px;
  background-color: rgb(114, 20, 143);
  border-radius: 30px;
}
/*選擇支付方式頁面 */
.payMethodsGroup,
.confirmGroup {
  width: 70%;
  margin: 0px auto 0px;
  text-align: left;
  overflow-y: auto;
}
.scrollY {
  position: absolute;

  bottom: 80px;
  top: 80px;
  overflow-y: auto;
  margin: 0px;
}
.methodButtonGroup {
  margin: 5px 0px;
}
.methodButton {
  border: 1px solid #aaaaaa;
  display: inline-block;
  margin-right: 5px;
  width: 90px;
  height: 25px;
  border-radius: 5px;
  text-align: center;
  vertical-align: middle;
  line-height: 25px;
  cursor: pointer;
}
/* 選中的支付方式*/
.activePayMethod {
  border: 3px solid #26ca28;
}
/* 次標題*/
.creditText {
  display: flex;
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 5px;
}
.creditText::before {
  align-self: center;
  margin-right: 5px;
  content: "";
  width: 8px;
  display: inline-block;
  height: 8px;
  border-radius: 8px;
  background-color: #26ca28;
}
.creditText > span {
  flex-wrap: nowrap;
}
.creditText02,
.confirmContext {
  display: inline-block;
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 5px;
}
.confirmContext03 {
  display: block;
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 5px;
}
.confirmContext04 {
  display: block;
  text-align: right;
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 5px;
  color: tomato;
}

/*信用卡卡號input */
.CardNumberform,
.inputDate,
.inputSaveNum {
  display: inline-block;
  text-align: center;
  border: 1px solid #aaaaaa;
  display: inline-block;
  border-radius: 5px;
  width: 50px;
  height: 20px;
}
.couponInput {
  text-align: center;
  border: 1px solid #aaaaaa;
  display: inline-block;
  border-radius: 5px;
  width: 100px;
  height: 20px;
}
.symbol {
  position: relative;
  display: inline-block;
  line-height: 20px;
  margin: 0px 3px 0px 0px;
}
.symbol:not(:last-of-type) {
  display: none;
}

/*form */
.creditCardMethod {
  margin-top: 20px;
}
.creditCardMethod > form {
  margin-bottom: 15px;
}
.formInGroup {
  display: block;
}
.formIn {
  display: inline-block;
}
/*錯誤顯示 */

.wrongText > div > span {
  display: inline-block;
  margin-left: 5px;
  color: crimson;
  font-size: 8px;
}
.creditText03 {
  display: inline-block;
  margin-left: 5px;
  color: crimson;
  font-size: 8px;
}
/*payFooter */
.payFooter {
  position: absolute;
  left: 0px;
  height: 80px;
  width: 100%;
  bottom: 0px;
  display: block;
  background-color: rgb(114, 20, 143);
  border-radius: 2px;
  text-align: center;

  line-height: 80px;
}

.nextButtom {
  position: relative;
  background-color: rgb(230, 200, 250);
  color: rgb(114, 20, 143);
  font-weight: 600;
  display: inline-block;
  margin-right: 5px;
  width: 90px;
  height: 30px;
  border-radius: 4px;
  line-height: 30px;
  cursor: pointer;
}
/*訂單編號顏色 */
.orderNo {
  color: crimson;
  font-weight: 600;
}
</style>
