
<template>
  <div class="orderPay">
    <div class="payHeader">
      <div class="stepGroup">
        <div class="step">
          <div class="round active">
            <span>STEP.1</span>
          </div>
          <div class="bar"></div>
          <div class="stepText">選擇支付方式</div>
        </div>
        <div class="step">
          <div class="round">
            <span>STEP.2</span>
          </div>
          <div class="bar"></div>
          <div class="stepText">確認訂購資訊</div>
        </div>
        <div class="step">
          <div class="round">
            <span>STEP.3</span>
          </div>
          <div class="bar"></div>
          <div class="stepText">支付成功</div>
        </div>
      </div>
    </div>
    <div class="payMethodsGroup">
      <div class="formTitle">選擇支付方式</div>
      <div class="methodButtonGroup">
        <div class="methodButton">信用卡付款</div>
        <div class="methodButton">超商付款</div>
      </div>
      <!--  信用卡 -->
      <div class="creditCardMethod">
        <!--  請輸入信用卡卡號 -->
        <form>
          <div class="creditNumber">請輸入信用卡卡號</div>
          <div v-for="(item,index) in inputCardNumber" :key="index">
            <input
              type="text"
              v-model="item.val"
              class="CardNumberform"
              maxlength="4"
              @keydown="setBlur($event,index)"
            />
          </div>
        </form>
        <!--  請輸入信用卡期限 -->
        <form>
          <div class="creditNumber">請輸入信用卡期限</div>
          <div v-for="(item,index) in inputCardDate" :key="index">
            <input
              type="text"
              v-model="item.val"
              class="inputDate"
              maxlength="2"
              @keydown="setBlur2($event,index)"
            />
          </div>
        </form>
        <!--  請輸入信用卡背後安全碼 -->
        <form>
          <div class="creditNumber">請輸入信用卡背後安全碼</div>
          <div v-for="(item,index) in inputCardSaveNum" :key="index">
            <input type="text" v-model="item.val" class="inputSaveNum" maxlength="3" />
          </div>
        </form>
      </div>
      <!--  超商-->

      <div class="shopMethod">
        <!-- 請選擇超商 -->
        <ul class="chooseShop">
          <li class="checkboxBig">
            <input type="radio" name="shop" id="shop1" checked />
            <label for="shop1">
              <span>7-11 ibon付款</span>
            </label>
            <div class="smcircle"></div>
          </li>
          <li class="checkboxBig">
            <input type="radio" name="shop" id="shop2" />
            <label for="shop2">
              <span>全家FamiPort付款</span>
            </label>
            <div class="smcircle"></div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 優惠代碼 -->
    <div class="couponGroup">
      <span>請輸入優惠代碼</span>
      <input type="text" maxlength="8" />
      <span>優惠代碼12345678</span>
    </div>
    <!-- 同意條款 -->
    <div class="agree">
      <input type="checkbox" />我同意接受雨滴購物網服務條和隱私權政策
    </div>
    <!-- Footer -->
    <div class="payFooter">
      <div class="cancel" @click="$router.back()">回上一頁</div>
      <router-link to="/order">
        <div class="finish">完成</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputCardNumber: [{ val: '' }, { val: '' }, { val: '' }, { val: '' }],
      inputCardDate: [{ val: '' }, { val: '' }],
      inputCardSaveNum: [{ val: '' }]
    }
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
    }
  }
}
</script>
<style scoped>
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
.shopMethod ul {
  list-style: none;
}
.shopMethod ul li {
  position: relative;
  text-align: left;
  color: #aaaaaa;
}

input[type="radio"] {
  margin: 0px;

  visibility: hidden;
}
.shopMethod ul li input::after {
  content: "";
  display: inline-block;

  border: 2px solid #aaaaaa;
  border-radius: 100%;
  visibility: visible;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  margin: auto;
}

input[type="radio"]:checked + label > span {
  color: #26ca28;
}
input[type="radio"]:checked ~ div {
  position: absolute;
  display: inline-block;
  left: 4px;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #26ca28;
}
/*checkbox */
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
  line-height: 19.34;
}
.agree input:checked::after {
  border: 2px solid #26ca28;
}
.agree input:checked:before {
  content: "";
  display: inline-block;
  position: absolute;
  left: 3.5px;
  top: 3.5px;
  width: 8px;
  height: 8px;
  background-color: #26ca28;
  visibility: visible;
  box-sizing: border-box;
  line-height: 19;
}
</style>
