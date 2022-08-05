<template>
<div class="landing">
  <header-layout :fixed="true"/>
  {{MyScrollFixed}}
  {{MyScrollModal}}
  {{btnAddPurpose}}
  {{imagechart}}
  <!-- {{backUrlNot}} -->
  <div 
    class="fixedTime" 
    :class="{'active': blockFixed}"
  >
    <div class="fixedTime__timer">
      <p class="fixedTime__timer__text">7-day free trial offer expires in:</p>
      <div class="fixedTime__timer__number"> 
        <countdown />
      </div>
    </div>
  </div>
  
  <div class="dark-layout light" id="topPage">
    <div class="container-main is-page land">
      <div class="landing__content">
        <div class="d-flex align-items-center justify-content-center flex-column">
          <div class="d-flex flex-column block__timer" >
            <div class="h2">
              Your Kegel Plan to {{ purpose }} is ready!
            </div>
            <p class="p-14">The personal trial is <span class="text-bold">reserved for 15 minutes:</span></p>
            <div class="layout__buttons">
              <div id="blockScroll" class="layout__button"  @click="onScroll">
                <div class="layout__button-icon">
                  <img src="@/assets/images/icons/icon_timer.svg" alt="icon">
                </div>
                <div>
                  <p class="d-flex timer__text">
                    Time left:	&nbsp;  <countdown />
                  </p>
                  <p class="timer__start">Scroll down to start!</p>
                </div>
              </div>
            </div>
            <div id="trigger1" class="date">
              <div class="text-purpose">
                <span class="">
                Based on your personal goals you can 
                </span>
                <br>
                <span class="text-bold">
                  {{ purpose }}
                </span>
                <span v-if="AddPurposeCom"><span class="width-400"> and</span> <span class="text-bold">{{ addpurpose }}</span></span>
              </div>
              <div class="by ">
                <span class="m20">by &nbsp;</span>
                <!-- <div class="blockAnimate"> -->
                  <transition name="slide-fade">
                    <span v-if="show" class="block__anim">{{dataPP3}}</span> 
                  </transition> 
                <!-- </div> -->
              </div>
            </div>

            <div class=" layout__thumbnail">
              <lottie-animation 
                class="animation" 
                ref="content.ref"
                :animationData="imageitem"
                :loop="false"
                :autoPlay="true"
                :speed="1"
                @loopComplete="loopComplete"
                @complete="complete"
                @enterFrame="enterFrame"
                @segmentStart="segmentStart"
                @stopped="stopped"
              />
              <div class="block__data">
                <p class="block__data__item">{{moment().add(0,'month').format("MMM")}}</p>
                <p class="block__data__item">{{moment().add(1,'month').format("MMM")}}</p>
                <p class="block__data__item">{{moment().add(2,'month').format("MMM")}}</p>
                <p class="block__data__item">{{moment().add(3,'month').format("MMM")}}</p>
                <p class="block__data__item">{{moment().add(4,'month').format("MMM")}}</p>
                <p class="block__data__item">{{moment().add(5,'month').format("MMM")}}</p>
              </div>
            </div>
            <p class="p-14 opac_5 bottom_img">This diagram is non-personalized data based on scientific research</p>
            <div class="h2 inside">
              Kegel Plan Benefits
            </div>
            <ul>
              <li class="li">
                <span><img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check"></span>
                <p>Reach your goal and <b class="text-bold"> {{ purpose }} </b></p>
              </li>
              <li class="li">
                <span><img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check"></span>
                {{ addpurpose }}
              </li>
              <li class="li" v-if="addItem">
                <span><img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check"></span>
                Increase stamina
              </li>
              <li class="li">
                <span><img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check"></span>
                Pill-free approach
              </li>
              <li class="li">
                <span><img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check"></span>
                Long-lasting improvement
              </li>
              <li class="li">
                <span><img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check"></span>
                Takes <span class="text-bold">&nbsp;5 min a day</span>
              </li>
              <li class="li">
                <span><img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check"></span>
                More happiness for you and for your partner
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="price">
    <div class="price__text">
      PRICE TODAY
    </div>
  </div>
  <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
    <div>
      7-day trial*
    </div>
    <div>
      <span class="opac_5 line">${{oldprice}}</span>
      <span class="text-bold">${{price}}</span>
    </div>
  </div>
  <hr>
  <div class="mw-450 trial_description opac_5">
    <i>*You'll have 7 days to see how Kegel Plan uses scientific advances in urology to create long-lasting results</i>
  </div>
  <div class="price">
    <div class="price__text">
      PRICE AFTER TRIAL
    </div>
  </div>
  <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
    <div>
      12 weeks plan
    </div>
    <div class="after d-flex flex-column align-items-end">
      <span class="bold">$79.2*</span>
      <span class="small">(just $6.60/week)</span>
    </div>
  </div>
  <hr>
  <div class="mw-450 trial_description opac_5">
    <i>*Billed on {{moment().add(7,'days').format("MMMM DD")}} unless cancelled beforehand</i>
  </div>
  <div class="d-flex flex-column  mw-450">
    <div class="reviews__title">Customer reviews</div>
    {{lengthReviews}}
    <div v-for="(item, key) in base" :key="key" >
      <div class="review light" :class="{'active': key < this.numreview }">
        <div class="review__top">
          <div>
            <div class="review__title">{{ item.title }}</div>
            <div class="review__rating">
              <div v-for="i in item.rating" :key="i">
                <img src="@/assets/images/star.png" alt="star-yellow" class="star-yellow">
              </div>
              <div v-for="i in Number(5 - item.rating)" :key="i">
                <img src="@/assets/images/star.png" alt="star-yellow" class="star-yellow">
              </div>
            </div>
          </div>

          <div class="review__name">
            {{ item.name }}
          </div>
        </div>

        <div class="review__text">
          {{ item.text }}
        </div>
      </div>
      
    </div>
    <button  class="btn__show__more" v-if="this.base.length > this.numreview" @click="showReview">Show more</button>
    <div id="paypal"></div>
  </div>

  <button-field
    v-if="!step_2"
    text='Start my plan'
    theme="Back"
    class="footer-controls__button red"
    @click="showModal2()"
  />
  <div class="h200" v-if="!step_2"></div>
  <div class="step_2" v-if="step_2">
    <div class="mw-450 payment d-flex align-items-center justify-content-beetwen">
      <div class="after"> 
        <span class="bold">Payment method</span>
      </div>
      <div class="d-flex flex-column align-items-end">
        <span class="cursor opacity-75" @click="showModal3">Why now?</span>
      </div>
    </div>
    <hr>
    <div class="mw-450 d-flex mb-32">
      <p class="fs-16-14">
        <i>
          You will only be charged ${{price}} for your 7-day trial.
        </i>
      </p>
    </div>
    <div class="mw-300 block-pay d-flex flex-column align-items-center justify-content-center">
      <PaymentFormCompanent @error="paymentError" @success="nextUrl" :item="this.item"/>
      <div class="d-flex align-items-center justify-content-beetwen flex-wrap">
        <div class="d-flex align-items-center star">
          <img src="@/assets/images/star.png" alt="star">
          <img src="@/assets/images/star.png" alt="star">
          <img src="@/assets/images/star.png" alt="star">
          <img src="@/assets/images/star.png" alt="star">
          <img src="@/assets/images/star.png" alt="star">
        </div>
        <div class="d-flex align-items-center">
          <img src="@/assets/images/icons/out48.svg" alt="out">
        </div>
        <p> <span class="bold">28k</span> 5-star ratings</p>
      </div>
    </div>
    <div class="mw-450 d-flex flex-column mb-32">
      <div class="item-li d-flex align-items-center">
        <img class="check" src="@/assets/images/icons/check_blue.svg" alt="check">
        <p class="fs-16-14">
          7-day trial for ${{price}}
        </p>
      </div>
      <div class="item-li d-flex align-items-center">
        <img class="check" src="@/assets/images/icons/check_blue.svg" alt="check">
        <p class="fs-16-14">
          You will get an email confirmation every time your subscription renews
        </p>
      </div>
    </div>
    <div class="block__text mw-450">
      <p class="title">Your information is safe</p>
      <p class="fs-16-14">We will not sell or rent your personal contact information for any marketing purposes.</p>
    </div>
    <div class="block__text mw-450">
      <p class="title">Secure checkout</p>
      <p class="fs-16-14">All information is encrypted and transmitted using Secure Sockets Layer protocol.</p>
    </div>
    <div class="block__text mw-450">
      <p class="title">Need help?</p>
      <p class="fs-16-14">Contact us here: <span class="red">support@kegel.men</span></p>
    </div>
    <div class="mw-300 block-pay d-flex flex-column align-items-center justify-content-center">
      <button class="btn_bottom" v-scroll-to="'#paypal'">
        Get my plan
      </button>
    </div>
    <div class="mw-450 d-flex flex-column mb-32">
      <p class="text-description">
        <span class="bold">Your 7-day trial will last until {{moment().add(7,'days').format('MMMM Do YYYY, h:mm a')}}.</span> You may cancel at any time before <span class="bold">{{moment().add(7,'days').format('MMMM Do YYYY, h:mm a')}}</span>, and you will not be charged. <span class="bold">If you don’t cancel, Appercut sp z o.o. will automatically continue your membership at the end of your 7-day trial and charge the membership fee (currently US$79.2) on a quarterly basis until you cancel.</span> No partial refunds. You can cancel your subscription anytime on your Subscription Managment page
      </p>
    </div>
  </div>
  <vpopup
  class="popup_wraper"
    textTitle=""
    v-if="popupVisible"
  > 
    <p class="opasity_75">
      In view of the pandemic and global health crisis, we are offering the option to try out Kegel Plan for as little as $1 for a 7-day trial*.
    </p>
    <p class="bold opasity_75       ">
      Money shouldn't stand in the way of a perfect intimate health and well-being goals. So choose an amount that you think is reasonable to try us out.
    </p>
    <p class="opasity_75">
      It costs up $9.73 to cover our expenses for the trial, but please choose an amount you're comfortable with.
    </p>
    <p class="bold desktop-center">
      Choose comfortable amount:
    </p>
    <div class="block-btn d-flex align-items-start justify-content-beetwen vw-450">
      <button
      class="v-popup__btn"
      :class="{ active: isActiveYes }"
      @click="BtnActiveYes"
    >
    $1
    </button>
    <div class="d-flex flex-column align-items-end">
      <button
        class="v-popup__btn"
        :class="{ active: isActiveNo }"
        @click="BtnActiveNo"
      >
      $9.73
      </button>
      <p class="small">Most popular choice*</p>
    </div>
    
    </div>
    
    <button 
      class="v-popup__submit_btn"
      :class="{active: closeActive}"
      @click="closePopup"
    >
    See my plan
    </button>
    <p class="text__bottom_btn">*7-day trial</p>
  </vpopup>
  <vpopup
  class="popup_wraper trial"
    textTitle="Trial commitment"
    v-if="popupVisible2"
  >            
    <p class="opasity_75">
      Dedicate at least 5 minutes a day to Kegel Plan and follow the step-by-step instructions to <span class="text-bold"> {{ purpose }}<span v-if="AddPurposeCom"><span class="width-400"> and </span>{{ addpurpose }}</span></span>.
    </p>
    <p class="opasity_75">
      Reaching your goal is as easy as following the Kegel Plan we prepared for you.
    </p>
    <p class="opasity_75">
      The latest studies support Kegel exercises and consider them the first-line approach to treating intimate health problems. It's an easy, safe, and effective way to improve men's health, quality of life and maintain a perfect relationship with your partner.
    </p>
    <p class="opasity_75">
      Our users tell us they have experienced great improvements by following our Kegel Plan - so try it, and see the results for yourself!
    </p>
    
    <button 
      class="v-popup__submit_btn min180 active"
      :class="{active: closeActive}"
      @click="closePopup2"
      v-scroll-to="'#paypal'"
    >
    I'm in
    </button>
  </vpopup>
  <vpopup
  class="popup_wraper"
    textTitle="Why now?"
    v-if="popupVisible3"
  > 
    <p class="opasity_75">
      We ask for your payment information now, so you can enjoy Kegel Plan uninterrupted after your 7-day trial ends.
    </p>
    <p class="opasity_75">
      If you cancel anytime before the end of the 7-day trial, you won't be charged.
    </p>
    <button 
      class="v-popup__submit_btn min180 active"
      :class="{active: closeActive}"
      @click="closePopup3"
    >
    Got it
    </button>
  </vpopup>
  <vpopup
    class="windowError"
    v-if="windowError"
  > 
    <p class="opasity_75">
      Your payment was declined. Please try again or use a different payment method.
    </p>
    <img 
      class="error" 
      src="@/assets/images/icons/btn_close_communicate.svg" 
      alt="error"
      @click="closeWindowError"
    >
  </vpopup>
</div>
<!-- При выборе оплаты класс active задать одной из button line 223,232, 235 -->
</template>
<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import ButtonField from '@/components/ui/Button.vue';
import vpopup from '@/components/modal/v-popup.vue';
import btnComponent from '@/components/questions/btnPopup.vue';
import countdown from '@/components/Countdown.vue';
import VueScrollTo from "vue-scrollto";
import PaymentFormCompanent from '@/components/PaymentFormCompanent.vue';


export default {
  name: 'LandingView', 
  inject: ['mixpanel'],
  components: {
    ButtonField,
    vpopup,
    btnComponent,
    countdown,
    PaymentFormCompanent
},
  data() {
    return {

      VueScrollTo: require('vue-scrollto'),
      blockFixed: false,
      apple_pay: true, 
      dataPP2:'September 25',
      ggg:0,
      textBtn:'Start my plan',
      email: null,
      isEmailTouched: false,
      upValue: '',
      step_2: false,
      base: {},
      numreview: 3,
      track: 0,
      windowError: false,
      numTimeError:0,
      polling: null,
      popupVisible: false,
      popupVisible2: false,
      popupVisible3: false,
      isActiveYes: false,
      isActiveNo: false,
      closeActive: false,
      scrollPosition: 0,
      price: 1,
      oldprice: 19.88,
      numanimate: 1,
      show: false,
      imageitem: require(`@/assets/images/json/Step_1_1.json`),
      imgProba: false,
      AddPurposeCom: false,
      addItem: false,
      numanim: null,
    };
  },   
  methods: {
    nextUrl() {
      this.mixpanel.track('Trial Started',{
        amount: this.price
      })
      setTimeout(() => {
        this.$router.push("PlanFinal");
      }, 0);
    },
    moment() {
      return moment();
    },
    paymentError() {
      this.mixpanel.track('Payment Error', {
        stage: "Trial"
      })
      console.log(this.numTimeError);
      this.windowError = true;
      this.numTimeError = 0;
      this.polling = setInterval(() => {
        if (this.numTimeError < 9) {
          console.log(this.numTimeError);
          this.numTimeError += 1;
        } else {
          console.log(this.numTimeError);
          clearInterval(this.polling);
          this.numTimeError = 0;
          this.windowError = false;
        }
      }, 1000);
    },
    closeWindowError(e) {
      clearInterval(this.polling);
      this.windowError = false;
    },
    showModal() {
      this.mixpanel.track('Comfortable Amount Shown')
      localStorage.setItem('Comfortable amount Pop-up', 'true')
      let body = document.querySelector('body')
      body.classList.add('fixed');
      this.popupVisible = true
    },
    showModal2() {
      localStorage.setItem('Button step_2', 'true')
      let body = document.querySelector('body')
      body.classList.add('fixed');
      this.popupVisible2 = true
      this.step_2 = true
    },
    showModal3() {
      let body = document.querySelector('body')
      body.classList.add('fixed');
      this.popupVisible3 = true
    },
    closePopup(e){
      if(this.closeActive){
        this.mixpanel.track('Comfortable Amount Complted', {
          amount: this.price
        })
      }
      let body = document.querySelector('body')
      let x = e.target
      if(x.classList.contains('active')){
        this.popupVisible = false
        body.classList.remove('fixed');
      }


    },
    closePopup2(e){
      this.mixpanel.track('Landing Page 2 Shown')
      let body = document.querySelector('body')
      let x = e.target
      if(x.classList.contains('active')){
        this.popupVisible2 = false
        body.classList.remove('fixed');
      }
      VueScrollTo.scrollTo('#paypal');
     // this.getPayPalIntent();
    },
    closePopup3(e) {
      let body = document.querySelector('body')
      let x = e.target
      if(x.classList.contains('active')){
        this.popupVisible3 = false
        body.classList.remove('fixed');
      }
    },
    BtnActiveYes() {
      this.isActiveYes = this.closeActive = true;
      this.isActiveNo = false;
      this.price = 1;
      this.item = "kegel_1-USD-Every-3-months"
      this.oldprice = 19.88;
      sessionStorage.setItem("price", 1);
    },
    BtnActiveNo() {
      this.isActiveYes = false;
      this.isActiveNo = this.closeActive = true;
      this.price = 9.73;
      this.item = "kegel_2-USD-Every-3-months"
      this.oldprice = 19.88;
      sessionStorage.setItem("price", 9.73);
    },
    showReview() {
      this.numreview = this.numreview + 2;
      console.log(this.base.length);
    },
  },
  watch:{
    ggg(){
      if(this.ggg == 1){
        this.showModal("this.popupVisible" , false)
      }
    },

  },
  computed: {cal(){
      let json = localStorage.getItem('track');
      let obj = JSON.parse(json);
      this.track = obj.id
      return this.track
    },
    imagechart(){
      if(this.jsLocal == 2){
        if(sessionStorage.getItem('resbtn') == 'Yes'){
          this.imageitem = require(`@/assets/images/json/Step_1_1.json`);
        }else{
          this.imageitem = require(`@/assets/images/json/Step_1_2.json`);
          this.imgProba = true
        }
      }else{
        this.imageitem = require(`@/assets/images/json/Step_1_1.json`);
      }
    },
    MyScrollFixed(){
      document.addEventListener('scroll', (e) => {
        let x = window.scrollY
        if(x>310){
          
          this.blockFixed = true
        }else{
          this.blockFixed = false
        }
      });
      
    },
    MyScrollModal(){
        document.addEventListener('scroll', (e) => {
        let x = window.scrollY
        if(x>400){
          if(localStorage.getItem('Comfortable amount Pop-up')){
            this.ggg = 0
          }else{
            this.ggg = 1
          }
        }
        if(localStorage.getItem('Button step_2')){
          this.step_2 = true
        }else{
          this.step_2 = false
        }
      })
    },
    ...mapGetters(['tracks']),
    purpose(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      return obj.purpose;
    },
    addpurpose(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      console.log(obj.addpurpose);
      return obj.addpurpose;
      
    },
    btnAddPurpose(){
      if(sessionStorage.getItem('resbtn') == 'Yes'){
        this.AddPurposeCom = true
      }else{
        this.AddPurposeCom = false
      } 
    },
    lengthReviews(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      this.track = obj.id
      if(this.track == 3){
        this.addItem = true
        this.base =  this.$store.state.review.msgOkLand
        this.AddPurposeCom = false
      }else if(this.track == 2){
        this.base = this.$store.state.review.msgPeLand
      }else{
        this.base = this.$store.state.review.msgEdLand
      }
      return console.log(this.track);  ; 
    },
  },
  beforeUnmount () {
    clearInterval(this.polling)
    clearInterval(this.numanim)
  },
  mounted() {
    // this.payPalSelect();
    this.apple_pay = true;
        // if (window.ApplePaySession) {
    //     var merchantIdentifier = 'merchant.appercut.stripe';
    //     var promise = ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
    //     promise.then(function (canMakePayments) {
    //       this.apple_pay = canMakePayments;
    //     });
    // }
    this.numanim = setInterval(() => {
      if (this.numanimate == 1) {
        this.dataPP3 = sessionStorage.getItem('data34')
        this.numanimate += 1
        this.show = true;
      }else if(this.numanimate == 2){
        this.numanimate += 1
        this.show = false;
        this.dataPP3 = sessionStorage.getItem('data33')
      }else if(this.numanimate == 3){
        this.numanimate += 1
        this.show = true;
      }else if(this.numanimate == 4){
        this.numanimate += 1
        this.show = false;
        this.dataPP3 = sessionStorage.getItem('data32')
      }else if(this.numanimate == 5){
        this.numanimate += 1
        this.show = true;
      }else if(this.numanimate == 6){
        this.numanimate += 1
        this.show = false;
        this.dataPP3 = sessionStorage.getItem('data3')
      }else if(this.numanimate == 7){
        this.numanimate += 1
        this.show = true;
      }else{
        clearInterval(this.numanim);
      }
    }, 500);
  },
  created () {
    this.mixpanel.track('Landing Page 1 Shown')
  }
};
</script>

<style lang="scss" scoped>

.token {
  color: #555;
  padding: 10px;
  text-align: center;
  font-weight: 500;
}

.cursor{
  cursor: pointer;
}
.text-description{
  font-size: 14px;
  line-height: 150%;
  opacity: 0.5; 
  text-align: center;
  .bold{
    font-family: "SF Pro Text Semibold";
  }
  @media (max-width:480px) {
    font-size: 12px;
  }
}
.btn_bottom{
  background: #E44240;
  color:#FFFFFF;
  border-radius: 9px;
  border:none;
  margin-bottom:10px ;
  width: 310px;
  font-size: 18px;
  line-height: 21px;
  padding: 16px 0;
  margin: 48px 0;
  cursor: pointer;
  &:focus{
    background: #F5423F;
  }
}
.block__text{
  margin-bottom: 24px;
  line-height: 150%;
  .title{
    font-family: "SF-Pro-Display-Semibold";
    margin-bottom: 12px;
  }
  a{
    color: #E44240;
  }
}
.li, .item-li{
  margin-top: 0px;
  line-height: 150%;
  .check{
    margin-right: 15px;
    width: 16px;
    height: 16px;
  }
}

.block-pay{
  width: 310px;
  .w-100{
    width: 100%;
    margin-top: 48px;
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
    max-width: 300px;
    display: block;
    &:focus, &:hover, &:active{
      background: rgba(87, 115, 214, 0.1);
      border: 2px solid #5773D6;
    }
    img{
      max-width: 100%;
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
.ml-2{
  margin-left: 2px;
}
.mr-2{
  margin-right: 2px;
}
.mw-450{
  max-width: 450px;
  margin: 16px auto;
  padding: 0 32px;
}
.mw-300{
  max-width: 300px;
  margin: 0px auto;
}
.mb-32{
  margin-bottom: 48px;
  @media (max-width:480px) {
    margin-bottom: 32px;
  }
}
.fs-16-14{
  font-size: 16px;
  @media (max-width:480px) {
    font-size: 14px;
  }
}
.landing{
  padding-bottom: 32px;
}
.block__timer .p-14{
  margin-bottom: 16px;
}
.container-main{
  @media (max-width:480px) {
    padding-bottom: 50px;
  }
}
.answer{
  width: 45%;
}
hr{
  color: #F1F3F9;
  background: #F1F3F9;
  border: none;
  height: 1px;
  max-width: 450px;
  margin: 0 auto;
  padding: 0;
  @media (max-width:480px) {
    max-width: 320px;
  }
}
.payment{
  margin: 84px auto 16px;
  @media (max-width:480px) {
    margin: 64px auto 16px;
  }
  p{
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 150%;
  }
  .bold{
    font-family: "SF-Pro-Display-Semibold";
  }
  .opacity-75{
    opacity: 0.75;
    font-family: "SF-Pro-Display-Medium";
    @media (max-width:480px) {
      font-size: 14px;
    }
  }
}
.popup_wraper{
  h2{
    margin: 0 0 16px;
    font-family: "SF-Pro-Display-Bold";
    font-size:24px;
  }
  p{
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 150%;
    @media (max-width:480px) {
      font-size: 14px;
    }
  }
  p.opasity_75{
    opacity: 0.75;
  }
  p.bold{
    font-family: "SF Pro Text Semibold";
  }
  span.width-400{
    font-family: "SF Pro Text Regular";
  }
  p.small{
    position: relative;
    text-align: center;
    width: 125px;
    font-size: 10px;
    line-height: 135%;
    margin-top: 18px;
    margin-bottom: 0;
    opacity: 0.75;
  }
  .text__bottom_btn{
    font-size: 12px;
    line-height: 135%;
    margin-top: 8px;
    text-align: center;
    margin-bottom: 0;
  }
  .desktop-center{
    text-align: center;
    margin: 8px 0 12px;
    @media (max-width:480px) {
      text-align: left;
      width: 100%;
    }
  }
}
.windowError{
  display: flex;
  justify-content: center;
  align-items: top;
  position: fixed;
  z-index: 9;
  top: 32px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0);
  .v-popup{
    box-shadow:(6px 6px 13px rgba(0, 0, 0, 0.25));
    background: #FFE4E4!important;
    border: 2px solid #E44240;
    border-radius: 9px;
    .error{
      margin-left: 16px;
    }
  }
}
.small::before{
  content: "";
  width: 1px;
  height: 14px;
  position: absolute;
  display: block;
  background: #11111350;
  top: -15px;
  left: 50%;
}
.v-popup{
  max-width: 260px;
  top: 20px;
}
.block-btn{
    width: 100%;
    max-width: 270px;
  }
.v-popup__submit_btn, .v-popup__btn{
  background-color: #CACACA;
  border:none;
  border-radius: 9px;
  padding: 16px 37px;
  font-family: "SF Pro Text Medium";
  font-size: 18px;
  line-height: 135%;
  color: #ffffff;
  margin-top: 32px;
}
.v-popup__submit_btn.min180{
  min-width: 180px;
}
.v-popup__submit_btn.active{
  background: #E44240;
}
.v-popup__btn{
  margin-top: 0px;
  color: #111113;
  background: #F1F3F9;
  width: 125px;
  padding: 20px 35px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-popup__btn.active{
  color: #FFFFFF;
  background-color: #111113;
}
// fixed timer
.fixedTime{
  max-width: 536px;
  opacity: 0;
  @media (max-width:600px) {
    max-width: 600px;
  }
  &__timer{
    position: fixed;
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: inherit;
    text-align: center;
    padding: 16px 32px;
    background: #111113;
    z-index: 2;
    color: #FFFFFF;
    top:0; left:0; right:0;
    @media (max-width:600px) {
      padding: 16px 0px;
    }
    p{
      padding: 0;
      margin: 0;
    }
  }
}
.fixedTime.active{
  opacity: 1;
}
.footer-controls__button{
  max-width: 310px;
  margin: 48px auto 0;
  z-index: 0;
}
// reviews
.reviews__title {
    font-family: "SF-Pro-Display-Semibold";
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 25px;
    text-align: center;
    @media (max-width:480px) {
      font-size: 16px;
    }
  }

.review {
  padding: 15px;
  border-radius: 10px;
  margin: 8px auto 0;
  max-width: 370px;
  background-color: #F1F1F1;
  display: none;
  transition: .3s;
  &:not(.light) {
    background-color: #1D1D1F;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  &__title {
    font-size: 18px;
    line-height: 150%;
    font-family: "SF Pro Text Bold";
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  &__name {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    opacity: .5;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  &__rating {
    display: flex;
    margin-top: 5px;

    div {
      width: 14px;
      height: 14px;

      @media (max-width: 480px) {
        width: 14px;
        height: 14px;

        svg {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
}

.star-yellow {
  max-width: 14px;;
  height: auto;
}
.review.active{
  display: block;
}
// 


.opac_5{
  opacity: 0.5;
}
.line{
  text-decoration: line-through;
  margin-right: 4px;
}
.trial_description{
  padding: 16px 32px 25px;
  margin: 0 auto;
  line-height: 150%;
  @media (max-width:480px) {
    font-size: 14px;
  }
}
.price{
  background: #F1F3F9;
  padding: 16px 74px;
  @media (max-width:480px) {
    padding: 16px 32px;
  }
  &__text{
    font-family: "SF-Pro-Display-Semibold";
    font-size: 16px;
    line-height: 150%;
    @media (max-width:480px) {
      font-size: 14px;
    }
  }
}
ul{
  max-width: 310px;
  margin: 0 auto;
  padding: 0;
  li.li {
    list-style-type: none;
    display: flex;
    align-items: center;
    font-family: "SF Pro Text Regular";
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 150%;
    span{
      width: 16px;
      height: auto;
      display: flex;
      margin-right: 23px;
    }
    span.text-bold{
      font-family: "SF Pro Text Semibold";
      display: block;
      width: 100%;
      margin-right: 0;
      height: 150%
    }
  }
}

.h2 {
  margin: 0px auto 8px;
  font-size: 30px;
  line-height: 135%;
  margin: 0px auto 24px;
  font-family: "SF-Pro-Display-Bold";
  @media (max-width:480px) {
    font-size: 24px;
  }
}
.h2.inside {
  font-family: "SF-Pro-Display-Bold";
  font-size: 20px;
  margin-top: 16px;
}
.dark-layout{
  padding: 84px 32px 0px;
  .p-14{
    font-size: 16px;
    text-align: center;
    line-height: 150%;
    @media (max-width:480px) {
      font-size: 14px;
    }
  }
  .opac_5{
    opacity: 0.5;
    font-family: "SF Pro Text Light";
  }

}
.price__today{
  font-size: 16px;
  @media (max-width:480px) {
    font-size: 14px;
  }
  .after{
    .bold{
      font-family: "SF Pro Text Semibold";
    }
    .small{
      font-size: 14px;
      @media (max-width:480px) {
        font-size: 11px;
      }
    }
  }
}
.date{
  text-align: center;
  margin-bottom: 0px;
  .by{
    font-family: "SF Pro Text Bold";
    color: #E44240;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    display: flex;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
}
.timer__text{
  font-size: 16px;
  line-height: 150%;
  font-family: "SF Pro Text Bold"; 
}
.layout__button .timer__start{
  font-size: 14px;
  line-height: 150%;
  opacity: 0.75;
  
}
.layout {
  &__buttons{
    margin-bottom: 32px;
    position: relative;
    .bg-fixed-top{
      position: fixed;
      width: 100%;
      max-width: 500px;
      height: 50px;
      background: linear-gradient(to top, #ffffff00, #ffffff);
    }
    .bg-fixed-top::after{
      content:"";
      position: fixed;
      width: 100%;
      max-width: 500px;
      height: 50px;
      background: linear-gradient(to top, #ffffff, #ffffff00);
      top: 435px;
      @media (max-width: 528px) {
        top: 460px;
      }
    }
  }
  &__button{
    border-radius: 17px;
    padding: 17px 24px;
    background: #111113;
    max-width: 270px;
    margin: 0 auto;
  }
  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 135%;
    text-align: center;
    margin-bottom: 32px;
    color: #111113;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  &__thumbnail {
    margin: 32px auto;
    text-align: center;
    width: 100%;
    max-width: 450px;
    img {
      width: 100%;
      height: auto;
    }
  }

  &__button {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &-icon {
      width: 52px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(#FFFFFF, .07);
      margin-right: 24px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      opacity: 1;
      padding: 0;
      margin: 0;
      color:#FFFFFF;
    }
  }

  &__bottom-text {
    font-family: "SF Pro Text Regular";
    font-weight: 400;
    font-size: 18px;
    margin-top: 32px;
    line-height: 150%;
    text-align: center;
    color: #111113;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
} 
.text-purpose{
  font-size: 18px;
  line-height: 150%;
  @media (max-width:480px) {
    font-size: 16px;
  }
}
.text-bold{
  font-family: "SF Pro Text Semibold";
}
.bottom_img{
  font-size: 14px!important;
  max-width: 450px;
  margin: 0 auto;
}
.fixedTime__timer, .fixedTime__timer__text{
  font-family: "SF Pro Text Bold";
}
.h200{
  display: block;
  height: 168px;
}


input, textarea{outline:none;}
input:active, textarea:active{outline:none;}
:focus {outline:none;}
textarea {resize:none;}
textarea {resize:vertical;}
textarea {resize:horizontal;}



</style>
