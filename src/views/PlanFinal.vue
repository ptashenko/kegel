<template>
  <header-layout :fixed="true"/>
  {{btnAddPurpose}}
  {{imagePE}}
  <div class="dark-layout light">
    <div class="container-main is-page Final">
      <div class="mw-520">
        <div class="h2 text-center">
          Looking to increase your chance of success by 4 times? 
        </div>
        <div class="purpose">
          <p>Studies show that people feel more obligated to follow through with something once they've made a strong commitment.</p>
          <p>This principle also applies to improving intimate health. You can 
            <span>{{ purpose }}<span v-if="!AddPurpose">.</span>
            <span v-if="AddPurpose">
              <span class="width-400"> and</span> 
              {{ addpurpose }}.
            </span>
            </span>
              You just need to commit.
            </p>
          <p>
            Kegel Plan users who have a strong commitment at the beginning are 4 times more likely to achieve improvements, than users who choose trial. 
          </p>
        </div>                    
      </div>
      <div class="mw-450"> 
        <div class=" layout__thumbnail">
          <img src="@/assets/images/content/Step_2_img.png" :alt="Step_2_img">
        </div>

        <div class="desc text-center">
          *According to studies, it takes 12 weeks of Kegel exercises to achieve improvements. Kegel Plan users who have strong commitment are 4 times more likely to finish 12 weeks of Kegel exercises, than users who choose trial
        </div>
      </div>
      <div class="price">
        <div class="price__text">
          Price breakdown
        </div>
      </div>
      <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
          <p class="">
            12-week plan with trial
          </p>
          <span class="bold">$80-${{price}}</span>
      </div>
      <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
        <p class="">
          Skip trial
        </p>
        <span class="bold">-${{trial}}</span>
      </div>
      <hr v-if="!addToDo">
      <div v-if="addToDo">
        <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
          <p class="bg_blue">
            20% off
          </p>
          <span class="bold">-$16</span>
        </div>
        <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
          <p class="">
              Total saving
            </p>
            <span class="bold"> $36</span>
        </div>
        <hr>
      </div>
      <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
        <p class="bold">
            Total
          </p>
          <span class="bold"><span class="opacity_05 underline">$80</span> ${{pricenew}}</span>
      </div>
      <button-field
        text='Skip trial and start plan'
        theme="Back"
        class="footer-controls__button red"
        :class="{ submit: loading }"
        @click="changePlanRequest"
      />
      <!-- <button-field
        text='Skip trial and start plan'
        theme="Back"
        class="footer-controls__button red loader"
        :class="{ hiden: isActive }"
        @click="loadingBtn"
      /> -->
      <div
      class="footer-controls__button btnLoader "
        :class="{ hiden: !isActive }"
      >
        <lottie-animation 
          class="check"
          ref="anim"
          :animationData="require(`@/assets/images/json/loader_white.json`)"
          :loop="mytrue"
          :autoPlay="true"
          :speed="1"
          @loopComplete="loopComplete"
          @complete="complete"
          @enterFrame="enterFrame"
          @segmentStart="segmentStart"
          @stopped="stopped"
        />
      </div>

      <div v-if="btnModal"
        class="btn_popup"
        @click="showModal"
      >
      Continue with trial &gt;
      </div>
      <div v-else
        class="btn_popup"
        @click="nextUrl"
      >
      Continue with trial &gt;
      </div>
    </div>
    <div class="mw-520">
      <div class="footer__text" v-if="!addToDo">
        When you click "Skip Trial and Start Plan", your original trial payment will be charged $60. Your payment method will then be automatically charged $60 every 3 months (your "subscription period") until you cancel. You can cancel anytime before the first day of your next subscription period to avoid automatic renewal. If you cancel before the end of a subscription period, you will not receive a partial refund.
      </div>
      <div class="footer__text" v-else>
        When you click "Skip Trial and Start Plan", your original trial payment will be charged $44. Your payment method will then be automatically charged $44 every 3 months (your "subscription period") until you cancel. You can cancel anytime before the first day of your next subscription period to avoid automatic renewal. If you cancel before the end of a subscription period, you will not receive a partial refund.
      </div>
    </div>  

    
  </div>
    <vpopup
    class="popup_wraper"
    textTitle="Are you sure?"
    v-if="popupVisible"
  > 
    <p>
      We want to help you succeed. Your chances of that increase if you make a commitment now.
    </p>
    <p>
      If you skip your trial and start your plan today, we'll refund your trial payment AND take <span class="text-bold"> an extra 20% off </span>your total.
    </p>
    <button 
      class="v-popup__submit_btn red active"
      @click="closePopup"
    >
    Continue
    </button>
  </vpopup>
  <vpopup
    class="windowError"
    v-if="windowError"
  > 
    <div>
      <p class="opasity_75">
        Your payment was declined.
      </p>
      <p 
        class="opasity_75 blue"
        @click="popupPay"
      >
        Tap here to select a different payment method.
      </p>
    </div>
    <img 
      class="error" 
      src="@/assets/images/icons/btn_close_communicate.svg" 
      alt="error"
      @click="closeWindowError"
    >
  </vpopup>
  <vpopup
    v-if="popupWindowPay"
    textTitle="Select Payment method"
    class="popup_wraper"
  >
    <div 
      class="closeBtn" 
      @click="closePopupWindowPay"
    >
      <img src="@/assets/images/icons/btn_close_cwindow.svg" alt="apple_pay">
    </div>
    <div class="mw-300 block-pay d-flex flex-column align-items-center justify-content-center">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div id="solid-payment-form-container">
          <button class="pay cursor" v-if="apple_pay">
            <img src="@/assets/images/icons/apple_pay.svg" alt="apple_pay">
          </button>
          <button class="pay cursor" v-else>
            <img src="@/assets/images/icons/google_pay.svg" alt="apple_pay">
          </button>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-beetwen">
        <button class="pay small mr-2 cursor">
          <img src="@/assets/images/icons/paypal.png" alt="apple_pay">
        </button>
        <button class="pay small ml-2 cursor">
          <img src="@/assets/images/icons/card.png" alt="apple_pay">
        </button>
      </div>
      <div class="w-100 d-flex flex-column align-items-center justify-content-center">
        <div id="apple-pay-button-container">
          <div
            v-if="apple_pay"
          >
            <button 
              class="aple_pay d-flex align-items-center justify-content-beetwen cursor"
              @click="nextUrl"
            >
              Buy with&nbsp;
              <img src="@/assets/images/icons/apple_pay_white.svg" alt="apple_pay">
            </button>
            <button 
              class="aple_pay error d-flex align-items-center justify-content-beetwen cursor"
              @click="closePopupWindowPayError"
            >
              Error button
            </button>
          </div>
          <div
            v-else
          >
            <button class="Pay_pay d-flex align-items-center justify-content-beetwen cursor">
              <img src="@/assets/images/icons/PayPal_img_2.svg" alt="apple_pay">&nbsp;Buy Now
            </button>
          </div>
          
        </div>
      </div>
    </div>
  </vpopup>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
import Review from '@/components/Review.vue';
import vpopup from '@/components/modal/v-popup.vue';
import ButtonField from '@/components/ui/Button.vue';

export default {
  name: 'PlanFinal',
  inject: ['mixpanel'],
  data(){
    return{
      item: "kegel_3-USD-Every-3-months",
      base: {},
      loading: false,
      numreview: 2,
      dataPP1: sessionStorage.getItem('data1'),
      dataPP2: sessionStorage.getItem('data2'),
      popupVisible: false,
      addToDo: false,
      price: sessionStorage.getItem('price'),
      pricenew: 60, 
      trial: 20 - sessionStorage.getItem('price'),
      btnModal: true,
      AddPurpose:true,
      isActive: false,
      mytrue: true,
      windowError: false,
      numTimeError:0,
      popupWindowPay: false,
      apple_pay: true,
      pollingTwo: null,
      polling: null,
    }
  },
  computed: {
    ...mapGetters(['tracks', 'contentBy']),
    purpose(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      console.log(obj.purpose);
      return obj.purpose;
    },
    addpurpose(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      return obj.addpurpose;
    },
    jsLocal(){
      let json = localStorage.getItem('track');
      let obj = JSON.parse(json);
      this.track = obj.id
      return this.track
    },
    btnAddPurpose(){
      if(sessionStorage.getItem('resbtn') == 'Yes'){
        this.AddPurpose = true
        if(this.jsLocal === 3 ){
          this.AddPurpose = false
        }
      }else{
        if(this.jsLocal === 3 ){
          this.AddPurpose = false
        }else{
          this.AddPurpose = false
        }
      } 
    },
    imagePE(){
      if(this.jsLocal == 2 && sessionStorage.getItem('resbtn') == 'Yes'){
        this.imageitem = require(`@/assets/images/json/ED.json`);
      }else if(this.jsLocal == 3){
        this.AddPurpose = true
      }
      return  console.log(this.imageitem);
    }
  },
  components: {
    Review,
    vpopup,
    ButtonField,
  },
  methods: {
    popupPay(){
      clearInterval(this.polling)
      this.windowError = false
      this.isActive = false
      this.popupWindowPay = true
      let body = document.querySelector('body')
      body.classList.add('fixed');
    },
    closePopupWindowPay(){
      this.popupWindowPay = false
      let body = document.querySelector('body')
      body.classList.remove('fixed');
    },
    closePopupWindowPayError(){
      this.popupWindowPay = false
      let body = document.querySelector('body')
      body.classList.remove('fixed');
      this.loadingBtn()
    },
    paymentError(){
      this.mixpanel.track('Payment Error', {
        stage: this.pricenew == 60 ? "Skip Trial" : "Skip Trial DownSale"
      })
      this.windowError = true
      this.numTimeError = 0
      this.polling = setInterval(() => {
          if (this.numTimeError < 8) {
            this.numTimeError += 1;
          } else {
            clearInterval(this.polling)
            this.numTimeError = 0
            this.windowError = false
          }
        }, 1000)
    },
    closeWindowError(e){
      clearInterval(this.polling)
      this.windowError = false
      this.isActive = false
    },
    loadingBtn(){
      this.isActive = true
      this.numTimeError = 0
      this.pollingTwo = setInterval(() => {
          if (this.numTimeError < 1) {
            this.windowError = false
            this.numTimeError += 1;
          } else {
            clearInterval(this.pollingTwo)
            this.numTimeError = 0
            this.isActive = false
            this.paymentError() 
          }
        }, 1000)
    },
    changePlanRequest(){
      this.loading = true;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test",
        },
        body: JSON.stringify({
          web_user_uuid: localStorage.getItem("web_user_uuid").replaceAll('\"',''),
          item: this.item,
        }),
      };
      fetch(
        "https://int2.kegel.men/api/web-payment/change-subscription/",
        requestOptions
      ).then((response) => {
        this.loading = false;
        this.nextUrl();
      });
    },
    nextUrl(){ 
      let mediaQuery = window.matchMedia('(max-width: 480px)');
      if (mediaQuery.matches) {
        let body = document.querySelector('body')
        body.classList.remove('fixed');
        this.$router.push('PlanFinalTwo')
      }else{
        let body = document.querySelector('body')
        body.classList.remove('fixed');
        this.$router.push('CodeQR')
      }
    },
    image(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/content/${path}`);
    },
    moment(){
      return moment();
    },
    getRandomArbitrary(min, max){
      return Math.random() * (max - min) + min;
    },
    showModal(){
      localStorage.setItem('sale 20%', true)
      let body = document.querySelector('body')
      body.classList.add('fixed');
      this.popupVisible = true
    },
    closePopup(e){
      let body = document.querySelector('body')
      let x = e.target
      if(x.classList.contains('active')){
        this.popupVisible = false
        body.classList.remove('fixed');
        this.addToDo = true
        this.pricenew = 44
        this.item = "kegel_4-USD-Every-3-months"
        this.btnModal = false
      }
    },
    checkingDiscount(){
      if(localStorage.getItem('sale 20%')){
        this.addToDo = true
        this.addToDo = 44
        this.btnModal = false
      }
    }
  },
  props: {
    content: {
      required: true,
      type: Object,
      default: () => ({}),
    },
  },
  beforeUnmount () {
    clearInterval(this.polling)
    clearInterval(this.pollingTwo)
  },
  mounted(){
    this.$nextTick(function (){
      // chrome
      document.body.scrollTop = 0
      // firefox
      document.documentElement.scrollTop = 0
      // safari
      window.pageYOffset = 0
    }),
    this.checkingDiscount()
  },
  created () {
    this.mixpanel.track('Trial Skip Offered')
  }
};
</script>

<style lang="scss" scoped>
.Final{
  .h2 {
    margin-bottom: 32px;
    font-family: "SF-Pro-Display-Bold";
    line-height: 135%;
    font-size: 30px;
    @media (max-width:480px) {
      font-size: 24px;
    }
  }
  .purpose{
    font-family: "SF Pro Text Regular";
    font-size: 18px;
    line-height: 150%;
    p{
      margin-bottom: 16px;
      @media (max-width:480px) {
        font-size: 14px;
        line-height: 150%;
      }
      span{
        font-family: "SF Pro Text Medium";
      }
    }
  }
  .mw-450{
    max-width: 450px;
    margin: 0 auto;
    .layout__thumbnail{
      display: block;
      max-width: 450px;
      margin: 0 auto 32px;
      img{
        width: 100%;
      }
    }
    .desc{
      font-family: "SF Pro Text Light";
      font-size: 14px;
      line-height: 150%;
      opacity: 0.5;
      text-align: center;
      margin-bottom: 48px;
      @media (max-width:480px) {
        font-size: 12px;
      }
    }
  }
  .price{
    background: #F1F3F9;
    padding: 16px 74px;
    margin: 0 -32px;
    @media (max-width:480px) {
      padding: 16px 32px;
    }
    &__text{
      font-family: "SF-Pro-Display-Semibold";
      font-size: 16px;
      line-height: 150%;
    }
    &__today{
      font-size: 16px;
      margin-top: 16px ;
      @media (max-width:480px) {
        font-size: 14px;
      }
      .bold{
        font-family: "SF Pro Text Semibold";
      }
      .small{
        font-size: 14px;
        @media (max-width:480px) {
          font-size: 11px;
        }
      }
      .bg_blue{
        padding: 4px 12px;;
        background: #5773D6;
        border-radius: 70px;
        color: #ffffff;
        font-size: 16px;
        line-height: 150%;
        border: 0px solid #5773d681;
        animation: blick .75s ease-in-out infinite;
      }
    }
    &__today.mt-32{
      margin-top: 32px;
    }
  }
  
  .footer-controls__button{
    max-width: 310px;
    margin: 48px auto 0;
    z-index: 0;
  }
  .footer-controls__button.loader{
    max-width: 310px;
    margin: 16px auto 0;
    z-index: 0;
  }
  .footer-controls__button.btnLoader{
    max-width: 310px;
    margin: 16px auto 0;
  }
  .footer-controls__button.submit {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWxvYWRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQwIDcyQzIyLjQgNzIgOCA1Ny42IDggNDBTMjIuNCA4IDQwIDhzMzIgMTQuNCAzMiAzMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJjMC0xNS40LTEyLjYtMjgtMjgtMjhTMTIgMjQuNiAxMiA0MHMxMi42IDI4IDI4IDI4YzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNDAgNDAiIHRvPSIzNjAgNDAgNDAiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 20px;
  color: transparent !important;
  transition-duration: 0s;
}
  .btn_popup{
    position: relative;
    text-align: center;
    font-family: "SF Pro Text Medium";
    font-size: 16px;
    line-height: 150%;
    opacity: 0.5;  
    margin: 16px auto 48px;  
    cursor: pointer;
  }
  .mw-520{
    max-width: 520px;
    margin: 0 auto;
    display: block;
  }
  hr{
    color: #F1F3F9;
    background: #F1F3F9;
    border: none;
    height: 1px;
    max-width: 450px;
    margin: 16px auto 0;
    padding: 0;
    @media (max-width:480px) {
      max-width: 320px;
    }
  }
}
@keyframes blick {
  0% {box-shadow:0px 0px 0px 0px #5773d681;}
  50%{box-shadow:0px 0px 0px 4px #5773d681;}
  100%{box-shadow:0px 0px 0px 0px #5773d681;}
}
.footer__text{
    font-family: "SF Pro Text Light";
    font-size: 14px;
    line-height: 150%;
    opacity: 0.5;
    text-align: center;
    padding-bottom: 48px;
    @media (max-width:480px) {
      font-size: 12px;
    }
  }
.v-popup__submit_btn, .v-popup__btn{
  background-color: rgb(228, 66, 64);
  border:none;
  border-radius: 9px;
  padding: 16px 37px;
  font-family: "SF Pro Text Medium";
  font-size: 18px;
  line-height: 135%;
  color: #ffffff;
  margin-top: 32px;
}
@media (max-width: 480px){
  .container-main {
    padding-bottom: 0px; 
  }
}
.popup_wraper{
  // max-width: 450px;
  h2{
    font-family: "SF-Pro-Display-Bold";
    font-size: 24px;
    line-height: 135%;
    margin: 16px auto 16px;
    @media (max-width:480px) {
      font-size: 20px;
    }
  }
  p{
    font-size: 16px;
    line-height: 150%;
    font-family: "SF Pro Text Regular";
    opacity: 0.75;
    margin-bottom: 16px;
    .text-bold{
      font-family: "SF Pro Text Semibold";
    }
  }
}
.btnLoader{
  display: flex;
  align-items: center;
  padding: 16px 0;
  justify-content: center;
  background: #E44240;
  border-radius: 9px;
  margin: 16px auto 0;
  @media (max-width: 480px) {
    padding: 20.5px 0;
  }
}
.hiden{
  display: none;
}
.check{
  width: 25px;
  height: 25px;
  
  @media (max-width:480px) {
    width: 16px;
    height: 16px;
  }
}
.check svg{
  color: #ffffff;
  stroke: red;
  fill: red;
}
.windowError{
  .blue{
    color:#5773D6;
    margin-top: 4px;
    text-decoration: underline;
    cursor: pointer;
  }
}
.block-pay{
  width: 350px;
  
  .d-flex{
    width: 100%;
    max-width: 310px;
  }
  .w-100{
    width: 100%;
    margin-top: 32px;
  }
  .flex-wrap{
    flex-wrap: wrap;
    width: 380px;
    margin-top: 48px;
    @media (max-width:480px) {
      max-width: 270px;
      justify-content: center;
    }
    p{
      font-family: "SF Pro Text Regular";
      font-size: 16px;
      .bold{
        font-family: "SF Pro Text Semibold";
      }
      @media (max-width:480px) {
        font-size: 14px;
        margin-top: 11px;
      }
    }
  }
  .star{
    img{
      max-width: 20px;
      height: auto;
    }
    @media (max-width:480px) {
      margin-right: 9px;
    }
  }
  button.pay{
    background: #F9F9F9;
    border: 2px solid #F9F9F9;
    border-radius: 9px;
    margin-bottom:10px ;
    max-width: 310px;
    &:focus{
      background: rgba(87, 115, 214, 0.1);
      border: 2px solid #5773D6;
    }
  }
  button.pay.active {
    background: rgba(87, 115, 214, 0.1);
    border: 2px solid #5773D6;
  }
  button.pay.small{
    max-width: 150px;
    img{
      width: 100%;
    }
  }
  .aple_pay{
    background: #111113;
    color: #FFFFFF;
    border: 3px solid #111113;
    border-radius: 100px;
    margin-bottom:10px ;
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    padding: 15px 65px;
    font-family: "SF Pro Text Semibold";
    &:focus{
      background: #1B1B1E;
      border: 3px solid #C7C7C7;
    }
  }
  .error{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #E44240;
    border: 3px solid #E44240;
    &:focus{
      background: #eb6967;
      border: 3px solid #E44240;
    }
  }
  .Pay_pay{
    background: #FFBB1B;
    color: #2D2F2F;
    border: 3px solid #FFBB1B;
    border-radius: 100px;
    margin-bottom:10px ;
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    padding: 15px 55px;
    font-family: "SF Pro Text Regular";
    &:focus{
      background: #FFBB1B;
      border: 3px solid #F3F3F3;
    }
  }
}
.closeBtn{
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }
</style>
