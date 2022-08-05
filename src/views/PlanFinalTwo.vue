<template>
  <header-layout :fixed="true"/>

  <div class="dark-layout light" id="topPage">
    <div class="container-main is-page Final">
      <div class="mw-520">
        <div 
          v-if="active && open == 1" 
          class="h2 text-center"
          :class="{active: active}"
        >
          Add Groin Fitness 
          <p>to accelerate the result</p>
        </div>
        <div 
          v-else-if="open == 2"
          class="show text-center"
        >
          Did you know?
        </div>
        <div v-else class="h2 text-center">
          <span class="blue"> Final Offer:</span> get Groin Fitness at the best deal!
        </div>
      </div>
      <div
        v-if="open !== 2"
        class="mw-450"
      >
        <video-background
          :src="require('@/assets/video/mini_vid.mp4')"
          :poster="require(`@/assets/video/zaglushki/mini_vid.png`)"
          class="video"
        >
        </video-background>
      </div>
      <div class="mw-450 d-flex flex-column mb-32">
        <div v-if="open !== 2" class="item-li d-flex align-items-center">
          <img v-if="open == 1" class="check" src="@/assets/images/icons/check_red.svg" alt="check">
          <img v-if="open > 2" class="check" src="@/assets/images/icons/icon_check_blue.svg" alt="check">
          <p class="fs-16-14">
            Build groin muscles strength & flexibility
          </p>
        </div>
        <div v-if="open !== 2" class="item-li d-flex align-items-center">
          <img v-if="open == 1" class="check" src="@/assets/images/icons/check_red.svg" alt="check">
          <img v-if="open > 2" class="check" src="@/assets/images/icons/icon_check_blue.svg" alt="check">
          <p class="fs-16-14">
            Increase blood flow to intimate organs
          </p>
        </div>
        <div v-if="open !== 2" class="item-li d-flex align-items-center">
          <img v-if="open == 1" class="check" src="@/assets/images/icons/check_red.svg" alt="check">
          <img v-if="open > 2" class="check" src="@/assets/images/icons/icon_check_blue.svg" alt="check">
          <p class="fs-16-14">
            Every exercise has video & audio instructions from the coach
          </p>
        </div>
        <div v-if="!ios_v1">
          <img v-if="open == 1" class="diskont" src="@/assets/images/icons/diskont_red.png" alt="diskont_red">
          <img v-if="open > 2" class="diskont" src="@/assets/images/icons/diskont_blue.png" alt="diskont_blue">
        </div>
        <div v-else>
          <img v-if="open == 1" class="diskont" src="@/assets/images/icons/discont_red_ios.png" alt="discont_red_ios">
          <img v-if="open > 2" class="diskont" src="@/assets/images/icons/discont_blue_ios.png" alt="discont_blue_ios">
        </div>
      </div>
      <div
        v-if="open == 2"
        class="popup_wraper"
      >
        <p>
          <span class="text-semibold">Groin Fitness</span> improves blood flow to the groin, which has a big impact on sexual performance.
        </p>
        <p>
          Bad blood flow to the groin area can put you at <span class="text-semibold"> 50-70% </span> risk of erectile dysfunction. Moreover, lack of physical activity proved to reduce your sexual stamina.
        </p>
        <img class="content_img" src="@/assets/images/content/Final_modal.png" alt="">
        <p class="opacity_05 text-center text-bottom-img">
          *This diagram is a non-personalized illustration based on scientific research.
        </p>
        <div class="block_blue">
          <div class="block_blue__content d-flex align-items-center">
            <img src="@/assets/images/icons/icon_present.svg" alt="">
            <p>We want you to be successful, so we're offering <span class="text-bold"> 25% off </span> the Groin Fitness just for you!</p>
          </div>
        </div>
      </div>


      <div v-if="open == 1">
        <button-field
          
          text='Add to my plan'
          theme="Back"
          class="footer-controls__button red"
          @click="nextUrl"
        />
        <button-field
          text='Add to my plan'
          theme="Back"
          class="footer-controls__button red loader"
          :class="{ hiden: isActive }"
          @click="loadingBtn"
        />
        <div
          class="footer-controls__button btnLoader loader"
          :class="{ hiden: !isActive }"
        >
          <lottie-animation 
            class="check"
            ref="anim"
            :animationData="require(`@/assets/images/json/loader_white.json`)"
            :loop="mytrue"
            :autoPlay="true"
            :speed="1"
          />
        </div>
      </div>
      <div
        v-if="open == 3"
      >
        <button-field
          text='Add to my plan'
          theme="Back"
          class="footer-controls__button bg-blue"
          @click="nextUrl"
        />
        <button-field
          text='Add to my plan'
          theme="Back"
          class="footer-controls__button loader bg-blue"
          :class="{ hiden: isActive }"
          @click="loadingBtn"
        />
        <div
          class="footer-controls__button btnLoader loader bg-blue"
          :class="{ hiden: !isActive }"
        >
          <lottie-animation 
            class="check"
            ref="anim"
            :animationData="require(`@/assets/images/json/loader_white.json`)"
            :loop="mytrue"
            :autoPlay="true"
            :speed="1"
          />
        </div>
      </div>
      <div v-if="active && open == 1"
        class="btn_popup"
        @click="showModal"
      >
      I don’t want to accelerate my results &gt;
      </div>
      <div v-else-if="open == 2" class="text-center">
        <button 
          class="v-popup__submit_btn active"
          @click="closePopup"
        >
        Continue
        <img src="@/assets/images/arrow-next.svg" class="btn__next" alt="" >
        </button>
      </div>
      <div v-else
        class="btn_popup"
        @click="nextUrl"
      >
      I give up accelerated results forever &gt;
      </div>
    </div>
    <div v-if="!ios_v1">
      <div v-if="open == 1" class="mw-520"> 
        <div  class="footer__text">
        Your account will be charged $9.99 for the selected add-ons as you click Add to My Plan. Items on this page are 3-Month period subscriptions. Each subscription renews automatically at the end of each period, unless you cancel. If you are unsure how to cancel, visit our Subscription Terms.
        </div>
      </div>
      <div v-else-if="open == 3" class="mw-520"> 
        <div  class="footer__text">
        Your account will be charged $9.99 for the selected add-ons as you click Add to My Plan. Items on this page are 3-Month period subscriptions. Each subscription renews automatically at the end of each period, unless you cancel. If you are unsure how to cancel, visit our Subscription Terms.
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="open == 1" class="mw-520"> 
        <div  class="footer__text">
        Your account will be charged $1.74 for the selected add-ons as you click Add to My Plan. Items on this page are 1-Week period subscriptions. Each subscription renews automatically at the end of each period, unless you cancel. If you are unsure how to cancel, visit our Subscription Terms. 
        </div>
      </div>
      <div v-else-if="open == 3" class="mw-520"> 
        <div  class="footer__text">
        Your account will be charged $0.99 for the selected add-ons as you click Add to My Plan. Items on this page are 1-Week period subscriptions. Each subscription renews automatically at the end of each period, unless you cancel. If you are unsure how to cancel, visit our Subscription Terms.
        </div>
      </div>
    </div>
  </div>
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
              <img class="apple_pay" src="@/assets/images/icons/apple_pay_white.svg" alt="apple_pay">
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
import { mapGetters } from 'vuex';
import Review from '@/components/Review.vue';
import vpopup from '@/components/modal/v-popup.vue';
import ButtonField from '@/components/ui/Button.vue';
import VueScrollTo from "vue-scrollto";

export default {
  name: 'PlanFinalTwo',
  inject: ['mixpanel'],
  data(){
    return{
      VueScrollTo: require('vue-scrollto'),
      popupVisible: false,
      open: 1,
      active: true,
      isActive: false,
      mytrue: true,
      windowError: false,
      numTimeError:0,
      popupWindowPay: false,
      apple_pay:true ,
      pollingTwo: null,
      polling: null,
      ios_v1:  sessionStorage.getItem('ios_v1')
    }
  },
  computed: {
    ...mapGetters(['tracks', 'contentBy']),
    purpose(){
      const json = localStorage.getItem('track');
      const obj = JSON.parse(json);
      return obj.purpose;
    },
    addpurpose(){
      const json = localStorage.getItem('track');
      const obj = JSON.parse(json);
      return obj.addpurpose;
    },
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
        stage: open == 1 ? "Add Fitness" : "Add Fitness Downsale"
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
            console.log(this.numTimeError);
            this.windowError = false
            this.numTimeError += 1;
          } else {
            console.log(this.numTimeError);
            clearInterval(this.pollingTwo)
            this.numTimeError = 0
            this.isActive = false
            this.paymentError() 
          }
        }, 1000)
    },
    video(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/video/${path}`);
    },
    image(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/video/${path}`);
    },
    nextUrl(){
      this.mixpanel.track('Upsale Answered',{
        Trial_Skipped: "No"
      })
      if(this.open == 1){
        this.mixpanel.track('Upsale',{
          price: "19.99"
        })
      }else if(this.open == 3){
        this.mixpanel.track('Upsale',{
          price: "9.99"
        })
      }
      let body = document.querySelector('body')
      body.classList.remove('fixed');
      this.$router.push('CodeQR')
    },
    showModal(){
      this.mixpanel.track('Upsale Answered',{
        Trial_Skipped: "Yes"
      })
      var element = document.getElementById("topPage");
      var top = element.offsetTop;
      window.scrollTo(0, top);
      this.open = 2
      localStorage.setItem('addPlan', 2)
    },
    closePopup(){
      this.mixpanel.track('Discunted Upsale Offered')
      var element = document.getElementById("topPage");
      var top = element.offsetTop;
      window.scrollTo(0, top);
      this.open = 3
      localStorage.setItem('addPlan', 3)
    },
    storeEdit(){
      if(localStorage.getItem('addPlan') == 2){
        this.open = 2
      }else if(localStorage.getItem('addPlan') == 3){
        this.open = 3
      }else{
        this.open = 1
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
    this.storeEdit()
  },
  created () {
    this.mixpanel.track('Upsale Offered')
  }
};
</script>

<style lang="scss" scoped>
.Final{
  .h2 {
    margin-bottom: 32px;
    font-family: "SF-Pro-Display-Bold";
    line-height: 135%;
    font-size: 32px;
    line-height: 135%;
    @media (max-width:480px) {
      font-size: 24px;
    }
  }
  .h2.active {
    margin-bottom: 32px;
    font-family: "SF-Pro-Display-Bold";
    line-height: 135%;
    font-size: 36px;
    line-height: 135%;
    @media (max-width:480px) {
      font-size: 32px;
    }
    p{
      font-family: "SF-Pro-Display-Medium";
      font-size: 24px;
      line-height: 135%;
      @media (max-width:480px) {
        font-size: 20px;
      }
    }

  }
  .show{
    margin-bottom: 32px;
    font-family: "SF-Pro-Display-Bold";
    line-height: 135%;
    font-size: 30px;
    line-height: 135%;
    @media (max-width:480px) {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
  .blue{
    color: #5773D6;
  }
  .bg-blue{
    background: #5773D6;
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
    margin: 47px auto 48px;
    @media (max-width:480px) {
      margin: 32px auto 32px;
    }
    .layout__thumbnail{
      display: block;
      max-width: 450px;
      margin: 0 auto 32px;
      img{
        width: 100%;
      }
    }
    .item-li{
      line-height: 150%;
      margin-top: 16px;
      font-size: 18px;
      @media (max-width:480px) {
        font-size: 14px;
      }
      .check{
        margin-right: 18px;
        width: 18px;
        @media (max-width:480px) {
          width: 13px;
        }
      }
    }
    .diskont{
      width: 100%;
      margin: 50px 0 0px;
      @media (max-width:480px) {
        margin: 28px 0 0px;
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
        :hover{
          background: #5773D6;
        }
      }
    }
    &__today.mt-32{
      margin-top: 32px;
    }
  }
  .footer-controls__button{
    max-width: 310px;
    margin: 0 auto 0;
    z-index: 0;
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
  .video{
    max-height: 260px; 
    height: 100vh; 
    max-width: 100%;
    // border-radius: 14px;
    @media (max-width:480px) {
      max-height: 210px;
    }
    @media (max-width:440px) {
      max-height: 195px;
    }
    @media (max-width:400px) {
      max-height: 180px;
    }
  }
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
  background-color: #5773D6;
  border:none;
  border-radius: 9px;
  padding: 16px 37px;
  font-family: "SF Pro Text Medium";
  font-size: 18px;
  line-height: 135%;
  color: #ffffff;
  margin-top: 32px;
  margin-bottom: 132px;
  cursor: pointer;
  @media (max-width: 480px){
    margin-bottom: 40px;
  }
}
@media (max-width: 480px){
  .container-main {
    padding-bottom: 0px; 
  }
}
.popup_wraper{
  overflow-y: inherit!important;;
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
    font-size: 18px;
    line-height: 150%;
    font-family: "SF Pro Text Regular";
    opacity: 1;
    margin-bottom: 16px;
    .text-semibold{
        font-family: "SF Pro Text Semibold";
      }
      .text-bold{
        font-family: "SF Pro Text Bold";
      }
    @media (max-width:480px) {
      font-size: 14px;
    }  
  }
  img{
    // width: 100%;
    max-width: 450px;
    margin: 32px auto;
    display: flex;
    @media (max-width:480px) {
      margin: 0px auto 0px;
    }
  }
  .text-bottom-img{
    font-size: 14px;
    opacity: 0.5;
    font-family: "SF Pro Text Light";
    margin: 0 auto 32px;
    max-width: 450px;
    text-align: center;
    @media (max-width:480px) {
      font-size: 12px;
    }
  }
  .block_blue{
    padding: 16px 24px;
    background: #5773D6;
    color: #ffffff;
    @media (max-width:480px){
      margin-left: -32px;
      margin-right: -32px;
    }
    &__content{
      max-width: 450px;
      margin: 0 auto;
      @media (max-width:480px){
        max-width: 400px;
      }
    }
    img{
      max-width: 70px;
      margin: 0;
    }
    p{
      margin: 0;
      margin-left: 16px;
      font-size: 16px;

      @media (max-width:480px) {
        font-size: 13px;
      }
    }
  }
  .v-popup__submit_btn{
    background: #5773D6;
  }
  .btn__next{
    max-width: 14px;
    margin: 0 0 0 12px;
  }
}
// Logic
#app .popup_wraper{
  height: 100%;
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
    opacity: 1;
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
.dark-layout.light .loader {
  margin-top: 16px;
}
@media (max-width: 480px){
  .dark-layout.light .loader {
    margin-top: 16px;
  }
  div.loader{
    padding: 20.5px 0;
  }
}
img.apple_pay{
  max-width: 65px;
}
.content_img{
  width: 100%;
}
</style>
