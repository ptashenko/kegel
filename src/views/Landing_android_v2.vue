<template>
  <div class="relative max-w-full mx-auto pt-12px pb-64px sm:(max-w-600px pt-16px)">
    <div id="topPage" class="flex flex-col px-32px sm:px-40px">
      <div class="font-displayBold mt-0 mb-16px mx-auto text-32px font-600 leading-normal text-center sm:(text-30px leading-normal mb-24px)">
        Your Kegel Plan is waiting for you!
      </div>
      <div id="trigger1" class="text-center mb-0">
        <div class="text-16px leading-normal sm:(text-18px leading-normal)">
          <span class="">
          You can <span class="font-sansSemiBold">Strengthen erection</span> and <span class="font-sansSemiBold">Increase sexual stamina</span>
          </span>
        </div>
        <div class="font-sansBold text-red font-700 text-20px leading-normal flex w-full mx-auto relative justify-center min-h-30px sm:(text-24px leading-normal min-h-36px)">
          <transition name="slide-fade">
            <span v-if="show" class="relative transform translate-x-0 translate-y-0">by {{dataPP3}}</span>
          </transition>
        </div>
      </div>

      <div class="my-24px mx-auto w-full">
        <lottie-animation
            class="animation"
            ref="content.ref"
            :animationData="imageitem"
            :loop="false"
            :autoPlay="true"
            :speed="1"
        />
        <div class="flex justify-between my-0 mx-33px sm:mx-54px">
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{moment().add(0,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{moment().add(1,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{moment().add(2,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{moment().add(3,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{moment().add(4,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{moment().add(5,'month').format("MMM")}}</p>
        </div>
      </div>
      <p class="text-14px opacity-50 text-center leading-normal font-light font-sansLight sm:(text-16px leading-normal)">This diagram is non-personalized data based on scientific research</p>
      <div class="font-displayBold text-20px mt-16px mb-24px text-center leading-normal sm:(mt-32px mb-52px)">
        Kegel Plan Benefits
      </div>
      <ul class="max-w-310px my-0 mx-auto py-0 px-0">
        <li class="list-none flex items-center font-sans text-16px mb-15px leading-normal">
          <span class="w-16px flex mr-23px h-auto"><img class="w-16px h-16px mr-15px" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          <p>Pill-free approach</p>
        </li>
        <li class="list-none flex items-center font-sans text-16px mb-15px leading-normal">
          <span class="w-16px flex mr-23px h-auto"><img class="w-16px h-16px mr-15px" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          Long-lasting improvement
        </li>
        <li class="list-none flex items-center font-sans text-16px mb-15px leading-normal">
          <span class="w-16px flex mr-23px h-auto"><img class="w-16px h-16px mr-15px" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          Takes <span class="font-sansSemiBold">&nbsp;5 min a day</span>
        </li>
        <li class="list-none flex items-center font-sans text-16px leading-normal">
          <span class="w-16px flex mr-23px h-auto"><img class="w-16px h-16px mr-15px" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          More happiness for you and for your partner
        </li>
      </ul>
    </div>
    <div class="bg-[#F1F3F9] py-16px px-32px mt-48px mx-auto mb-16px">
      <div class="font-displaySemiBold text-14px leading-normal sm:(text-16px leading-normal)">
        PRICE TODAY
      </div>
    </div>
    <div class="text-14px flex items-center justify-between my-16px mx-auto py-0 px-32px leading-normal sm:(text-16px leading-normal px-38px)">
      <div>
        14-day trial*
      </div>
      <div>
        <span class="font-sansSemiBold">FREE</span>
      </div>
    </div>
    <hr class="bg-[#F1F3F9] h-1px max-w-320px my-0 mx-auto px-0 py-0 border-none sm:max-w-520px">
    <div class="my-16px mx-auto py-0 px-32px pt-16px px-32px pb-0 my-0 mx-auto leading-normal text-14px opacity-50 font-sans sm:(text-16px leading-normal)">
      <i>*You'll have 14 days to see how Kegel Plan uses scientific advances in urology to create long-lasting results</i>
    </div>
    <div class="bg-[#F1F3F9] py-16px px-32px mt-48px mx-auto mb-16px">
      <div class="font-displaySemiBold text-14px leading-normal sm:(text-16px leading-normal)">
        PRICE AFTER TRIAL
      </div>
    </div>
    <div class="text-14px flex items-center justify-between my-16px mx-auto py-0 px-32px leading-normal sm:(text-16px leading-normal px-38px)">
      <div>
        Subscription
      </div>
      <div class="flex flex-col items-end">
        <div class="flex"><span class="opacity-50 mr-4px line-through">$6.6 </span><span class="font-sansSemiBold">&nbsp; $4*</span></div>
        <span class="text-11px leading-normal sm:(text-14px leading-normal)">(price per week)</span>
      </div>
    </div>
    <hr class="bg-[#F1F3F9] h-1px max-w-320px my-0 mx-auto px-0 py-0 border-none sm:max-w-520px">
    <div class="my-16px mx-auto py-0 px-32px pt-16px px-32px pb-0 my-0 mx-auto leading-normal text-14px opacity-50 font-sans sm:(text-16px px-38px leading-normal)">
      <i>*Billed on {{moment().add(14,'days').format("MMMM DD")}} unless cancelled beforehand</i>
    </div>
    <div id="paypal" class="px-32px mt-64px sm:(px-40px mt-48px)">
      <div class="mx-auto py-0 flex items-center justify-between text-16px leading-normal sm:mt-64px">
        <div>
          <span class="font-sansSemiBold">Payment method</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="cursor-pointer opacity-75 text-14px leading-normal font-displaySemiBold" @click="showModal3">Why now?</span>
        </div>
      </div>
      <hr class="bg-[#F1F3F9] h-1px max-w-320px my-16px mx-auto border-none sm:(max-w-full)">

      <div class="my-0 mx-auto flex flex-col items-center justify-center">
        <PaymentFormCompanent @error="paymentError" @success="nextUrl" @clickButton="closeWindowError" :item="this.item" id="paymentForm"/>
      </div>
      <RatingStars />

      <div class="mt-48px mb-24px mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">Email confirmation</p>
        <p class="text-14px leading-normal sm:(text-16px leading-normal)">You will get an email confirmation every time your subscription renews.</p>
      </div>
      <div class="mb-24px mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">Your information is safe</p>
        <p class="text-14px leading-normal sm:(text-16px leading-normal)">We will not sell or rent your personal contact information for any marketing purposes.</p>
      </div>
      <div class="mb-24px mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">Secure checkout</p>
        <p class="text-14px leading-normal sm:(text-16px leading-normal)">All information is encrypted and transmitted using Secure Sockets Layer protocol.</p>
      </div>
      <div class="my-0 mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">Need help?</p>
        <p class="text-14px leading-normal sm:(text-16px leading-normal)">Contact us here: <span class="text-[#E44240]">contact@kegel-plan.com</span></p>
      </div>
      <button class="bg-[#E44240] text-[#fff] rounded-9px border-none w-full max-w-310px text-18px leading-normal py-16px my-48px font-sans mx-auto block focus:(bg-[#F5423F]) sm:max-w-373px" v-scroll-to="'#paypal'">
        Get my plan
      </button>
      <p class="text-12px leading-normal opacity-50 text-center sm:(text-14px leading-normal)">
        <span class="font-sansSemiBold text-12px leading-normal sm:(text-14px leading-normal)">Your 14-day trial will last until {{moment().add(14,'days').format('MMMM Do YYYY, h:mm a')}}.</span> You may cancel at any time before <span class="font-sansSemiBold text-12px leading-normal sm:(text-14px leading-normal)">{{moment().add(14,'days').format('MMMM Do YYYY, h:mm a')}}</span>, and you will not be charged. <span class="font-sansSemiBold text-12px leading-normal sm:(text-14px leading-normal)">If you don’t cancel, Appercut sp z o.o. will automatically continue your membership at the end of your 14-day trial and charge the membership fee (currently US$4) on a weekly basis until you cancel.</span> No partial refunds. You can cancel your subscription anytime on your Subscription Managment page
      </p>
    </div>
  </div>
  <Footer />
  <vpopup
      textTitle="Why now?"
      v-if="popupVisible3"
      @closePopup="() => popupVisible3 = false"
  >
    <p class="opacity-75 mb-16px text-14px leading-normal sm:(text-16px leading-normal)">
      We ask for your payment information now, so you can enjoy Kegel Plan uninterrupted after your 14-day trial ends.
    </p>
    <p class="opacity-75 text-14px leading-normal sm:(text-16px leading-normal)">
      If you cancel anytime before the end of the 14-day trial, you won't be charged.
    </p>
    <button
        class="bg-[#E44240] border-none rounded-9px py-16px px-37px font-sansMedium text-18px leading-normal text-[#fff] mt-32px min-w-180px"
        :class="{'bg-[#E44240]': closeActive}"
        @click="closePopup3"
    >
      Got it
    </button>
  </vpopup>
  <vpopup
      class="flex justify-center items-top fixed z-9
    top-32px left-0 right-0 bottom-0 bg-[#ffffff00]"
      v-if="windowError"
      error
  >
    <div class="flex items-center">
      <p class="opacity-75 font-sans font-500 text-red text-14px leading-normal">
        Your payment was declined. Please try again or use a different payment method.
      </p>
      <img
          class="ml-16px"
          src="@/assets/images/svg/icon_btn-close-communicate.svg"
          alt="error"
          @click="closeWindowError"
      >
    </div>
  </vpopup>
  {{dataP3}}
<!-- При выборе оплаты класс active задать одной из button line 223,232, 235 -->
</template>
<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import ButtonField from '@/components/ui/Button.vue';
import vpopup from '@/components/modal/v-popup.vue';
import countdown from '@/components/Countdown.vue';
import PaymentFormCompanent from '@/components/PaymentFormCompanent.vue';
import RatingStars from '@/components/RatingStars.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Landing_android_v2',
  inject: ['mixpanel'],
  components: {
    ButtonField,
    vpopup,
    countdown,
    PaymentFormCompanent,
    RatingStars,
    Footer
},
  data() {
    return {
      item: "kegel_6-USD-Weekly",
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
      price: localStorage.getItem('price'),
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
      this.mixpanel.track('[Web Mail] Trial Started',{
        amount: this.price,
        number: this.$route.query.nr
      })
      setTimeout(() => {
        this.$router.push("Whatsapp");
      }, 0);
    },
    moment() {
      return moment();
    },
    paymentError() {
      this.mixpanel.track('[Web Mail] Payment Error', {
        stage: "Trial",
        number: this.$route.query.nr
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
      sessionStorage.setItem('scrollto', window.pageYOffset)
      console.log(window.pageYOffset);
      this.mixpanel.track('Comfortable Amount Shown')
      let body = document.querySelector('body')
      if  (window.navigator.platform == "iPhone") {
        body = document.querySelector('.landing')
        console.log("iphone")
      }
      this.popupVisible = true
      body.classList.add('fixed');
    },
    showModal2() {
      sessionStorage.setItem('scrollto', window.pageYOffset)
      let body = document.querySelector('body')
      if  (window.navigator.platform == "iPhone") {
        body = document.querySelector('.landing')
        console.log("iphone")
      }
      this.popupVisible2 = true
      this.step_2 = true
      body.classList.add('fixed');
    },
    showModal3() {
      sessionStorage.setItem('scrollto', window.pageYOffset)
      let body = document.querySelector('body')
      if  (window.navigator.platform == "iPhone") {
        body = document.querySelector('.landing')
        console.log("iphone")
      }
      this.popupVisible3 = true
      body.classList.add('fixed');
    },
    closePopup(e){
      const height = sessionStorage.getItem('scrollto')
      setTimeout(function(){ window.scrollTo( 0, height ) })
      console.log(window.pageYOffset);
      localStorage.setItem('Comfortable amount Pop-up', 'true')
      if(this.closeActive){
        this.mixpanel.track('Comfortable Amount Complted', {
          amount: this.price
        })
      }
      let body = document.querySelector('body')
      if  (window.navigator.platform == "iPhone") {
        body = document.querySelector('.landing')
        console.log("iphone")
      }
      let x = e.target
      if(x.classList.contains('active')){
        this.popupVisible = false
        body.classList.remove('fixed');
      }
      // VueScrollTo.scrollTo('#Benefits');

    },
    closePopup2(e){
      localStorage.setItem('Button step_2', 'true')
      this.mixpanel.track('Landing Page 2 Shown')
      let body = document.querySelector('body')
      if  (window.navigator.platform == "iPhone") {
        body = document.querySelector('.landing')
        console.log("iphone")
      }
      let x = e.target
      if(x.classList.contains('active')){
        this.popupVisible2 = false
        body.classList.remove('fixed');
      }

      window.scrollTo({
        top: document.getElementById('paypal').offsetTop,
        left: 0,
        behavior: "smooth",
      });

      //  VueScrollTo.scrollTo('#paymentForm');
     // this.getPayPalIntent();
    },
    async scrollToForm() {

    },
    closePopup3(e) {
      const height = sessionStorage.getItem('scrollto')
      setTimeout(function(){ window.scrollTo( 0, height ) })
      let body = document.querySelector('body')
      if  (window.navigator.platform == "iPhone") {
        body = document.querySelector('.landing')
        console.log("iphone")
      }
      let x = e.target
      if(x.classList.contains('bg-[#E44240]')){
        this.popupVisible3 = false
        body.classList.remove('fixed');
      }
      // VueScrollTo.scrollTo('#paypal');
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
          moment();
          sessionStorage.setItem('disableFitness', true);
      let ppp = (Math.floor(Math.random( ) * (22 - 16 + 1)) + 16);
      function days(numer, param, key){
        if(ppp < numer){
          let m3 = moment().add(3,'month').daysInMonth()
          let ost = m3 - (numer - ppp)
          let param = moment().add(3,'month').format("MMMM") + ' ' + ost ;
          sessionStorage.setItem(key, param);
        }else if(ppp == numer){
          let m3 = moment().add(3,'month').daysInMonth()
          let param = moment().add(3,'month').format("MMMM") + ' ' + m3 ;
          sessionStorage.setItem(key, param);
        }else{
          let ost = ppp - numer
          let param = moment().add(4,'month').format("MMMM") + ' ' + ost ;
          sessionStorage.setItem(key, param);
        }

        return param
      }
      days(28, 'dataPP3_day', 'data3')
      days(24, 'dataPP32_day', 'data32')
      days(20, 'dataPP33_day', 'data33')
      days(16, 'dataPP34_day', 'data34')
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
    this.mixpanel.track('[Web Mail] LP Shown', {
      number: this.$route.query.nr
    })
  }
};
</script>

<style lang="scss" scoped>
input, textarea{outline:none;}
input:active, textarea:active{outline:none;}
:focus {outline:none;}
textarea {resize:none;}
textarea {resize:vertical;}
textarea {resize:horizontal;}
</style>
