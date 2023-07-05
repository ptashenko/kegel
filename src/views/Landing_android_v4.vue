<template>
  <div class="relative max-w-full mx-auto pt-12px pb-64px sm:max-w-600px sm:pt-16px">
    <div id="topPage" class="flex flex-col px-32px sm:px-40px">
      <div class="font-displayBold mt-0 mb-16px mx-auto text-32px font-600 leading-normal text-center sm:text-30px sm:leading-normal sm:mb-24px">
        {{ $t('landing.title') }}
      </div>
      <div id="trigger1" class="text-center mb-0">
        <div class="text-16px leading-normal sm:text-18px sm:leading-normal">
          <p v-html="$t('landing.textFirst')"></p>
        </div>
        <div class="font-sansBold text-red font-700 text-20px leading-normal flex w-full mx-auto relative justify-center min-h-30px sm:text-24px sm:leading-normal sm:min-h-36px">
          <transition name="slide-fade">
            <span v-if="show" class="relative transform translate-x-0 translate-y-0">{{ $t('landing.date', { dataPP3 }) }}</span>
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
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:text-18px sm:mt-12px sm:mb-0 sm:mx-0 leading-normal">{{$dayjs().add(0,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:text-18px sm:mt-12px sm:mb-0 sm:mx-0 leading-normal">{{$dayjs().add(1,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:text-18px sm:mt-12px sm:mb-0 sm:mx-0 leading-normal">{{$dayjs().add(2,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:text-18px sm:mt-12px sm:mb-0 sm:mx-0 leading-normal">{{$dayjs().add(3,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:text-18px sm:mt-12px sm:mb-0 sm:mx-0 leading-normal">{{$dayjs().add(4,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:text-18px sm:mt-12px sm:mb-0 sm:mx-0 leading-normal">{{$dayjs().add(5,'month').format("MMM")}}</p>
        </div>
      </div>
      <p class="text-14px opacity-50 text-center leading-normal font-light font-sansLight sm:text-16px sm:leading-normal">{{ $t('landing.diagram') }}</p>
      <div class="font-displayBold text-20px mt-16px mb-24px text-center leading-normal sm:text-24px sm:leading-normal sm:mt-32px sm:mb-52px">
        {{ $t('landing.benefits') }}
      </div>
      <ul class="max-w-310px my-0 mx-auto py-0 px-0">
        <li class="list-none flex items-center font-sans text-16px mb-15px leading-normal sm:text-18px sm:leading-normal">
          <span class="w-16px flex mr-23px h-auto sm:w-24px sm:h-24px"><img class="w-16px h-16px mr-20px block sm:w-24px sm:h-24px" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          <p>{{ $t('landing.firstBenefit') }}</p>
        </li>
        <li class="list-none flex items-center font-sans text-16px mb-15px leading-normal sm:text-18px sm:leading-normal">
          <span class="w-16px flex mr-23px h-auto sm:w-24px sm:h-24px"><img class="w-16px h-16px mr-20px block sm:w-24px sm:h-24px" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          {{ $t('landing.secondBenefit') }}
        </li>
        <li class="list-none flex items-center font-sans text-16px mb-15px leading-normal sm:text-18px sm:leading-normal">
          <span class="w-16px flex mr-23px h-auto sm:w-24px sm:h-24px"><img class="w-16px h-16px mr-20px block sm:w-24px sm:h-24px" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          <span v-html="$t('landing.thirdBenefit')"></span>
        </li>
        <li class="list-none flex items-center font-sans text-16px mb-15px leading-normal sm:text-18px sm:leading-normal">
          <span class="w-16px flex mr-23px h-auto sm:w-24px sm:h-24px"><img class="w-16px h-16px mr-23px block sm:w-24px sm:h-24px" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          {{ $t('landing.fourthBenefit') }}
        </li>
      </ul>
    </div>
    <div class="bg-[#F1F3F9] py-16px px-32px mt-48px mx-auto mb-16px">
      <div class="font-displaySemiBold text-14px leading-normal sm:text-16px sm:leading-normal">
        {{ $t('landing.priceToday') }}
      </div>
    </div>
    <div class="text-14px flex items-center justify-between my-16px mx-auto py-0 px-32px leading-normal sm:text-16px sm:leading-normal sm:px-38px">
      <div>
        {{ $t('landing.dayTrial14') }}
      </div>
      <div>
        <span class="font-sansSemiBold">{{ $t('landing.free') }}</span>
      </div>
    </div>
    <hr class="bg-[#F1F3F9] h-1px max-w-320px my-0 mx-auto px-0 py-0 border-none sm:max-w-520px">
    <div class="my-16px mx-auto py-0 px-32px pt-16px px-32px pb-0 my-0 mx-auto leading-normal text-14px opacity-50 font-sans sm:text-16px sm:leading-normal">
      <i>{{ $t('landing.trialText14') }}</i>
    </div>
    <div class="bg-[#F1F3F9] py-16px px-32px mt-48px mx-auto mb-16px">
      <div class="font-displaySemiBold text-14px leading-normal sm:text-16px sm:leading-normal">
        {{ $t('landing.priceAfter') }}
      </div>
    </div>
    <div class="text-14px flex items-center justify-between my-16px mx-auto py-0 px-32px leading-normal sm:text-16px sm:leading-normal sm:px-38px">
      <div>
        {{ $t('landing.subscription') }}
      </div>
      <div class="flex flex-col items-end">
        <div class="flex"><span class="opacity-50 mr-4px line-through">$79.2 </span><span class="font-sansSemiBold">&nbsp; $5.97*</span></div>
        <span class="text-11px leading-normal sm:text-14px sm:leading-normal">{{ $t('landing.priceMonth') }}</span>
      </div>
    </div>
    <hr class="bg-[#F1F3F9] h-1px max-w-320px my-0 mx-auto px-0 py-0 border-none sm:max-w-520px">
    <div class="my-16px mx-auto py-0 px-32px pt-16px px-32px pb-0 my-0 mx-auto leading-normal text-14px opacity-50 font-sans sm:text-16px sm:px-38px sm:leading-normal">
      <i v-html="$t('landing.billedOn', {lastDate: $dayjs().add(14,'days').format('MMMM D YYYY, h:mm a')})"></i>
    </div>
    <div id="paypal" class="px-32px mt-64px sm:px-40px sm:mt-48px">
      <div class="mx-auto py-0 flex items-center justify-between text-16px leading-normal sm:mt-64px">
        <div>
          <span class="font-sansSemiBold">{{ $t('landing.payment') }}</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="cursor-pointer opacity-75 text-14px leading-normal font-displaySemiBold"  @click="toggleModal">{{ $t('landing.whyNow') }}</span>
        </div>
      </div>
      <hr class="bg-[#F1F3F9] h-1px max-w-320px my-16px mx-auto border-none sm:max-w-full">

      <div class="my-0 mx-auto flex flex-col items-center justify-center">
        <PaymentFormCompanent @error="paymentError" @success="nextUrl" @clickButton="closeWindowError" :item="this.item" id="paymentForm"/>
      </div>
      <RatingStars />

      <div class="mt-48px mb-24px mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">{{ $t('landing.email') }}</p>
        <p class="text-14px leading-normal sm:text-16px sm:leading-normal">{{ $t('landing.emailSubscription') }}</p>
      </div>
      <div class="mb-24px mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">{{ $t('landing.safeInfo') }}</p>
        <p class="text-14px leading-normal sm:text-16px sm:leading-normal">{{ $t('landing.info') }}</p>
      </div>
      <div class="mb-24px mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">{{ $t('landing.secure') }}</p>
        <p class="text-14px leading-normal sm:text-16px sm:leading-normal">{{ $t('landing.secureInfo') }}</p>
      </div>
      <div class="my-0 mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">{{ $t('landing.help') }}</p>
        <p class="text-14px leading-normal sm:text-16px sm:leading-normal" v-html="$t('landing.contact', {email: 'contact@kegel-plan.com'})"></p>
      </div>
      <base-button
          :label="$t('landing.plan')"
          tag="a"
          rounded="half"
          class="max-w-310px !my-48px sm:max-w-373px"
          :shadow="false"
          url="#paypal"
      />
      <p class="text-12px leading-normal opacity-50 text-center sm:text-14px sm:leading-normal" v-html="$t('landing.trialEnd14_57', {lastDate: $dayjs().add(14,'days').format('MMMM D YYYY, h:mm a')})">
      </p>
    </div>
  </div>
  <Footer />
  <vpopup
      textTitle="Why now?"
      v-if="modal"
      @closePopup="toggleModal"
  >
    <p class="opacity-75 mb-16px text-14px leading-normal sm:text-16px sm:leading-normal">
      {{ $t('landing.popupTop14') }}
    </p>
    <p class="opacity-75 text-14px leading-normal sm:text-16px sm:leading-normal">
      {{ $t('landing.popupBottom14') }}
    </p>
    <base-button
        :label="$t('landing.button')"
        rounded="half"
        tag="a"
        url="#paypal"
        class="max-w-180px !mt-48px !mb-0"
        :shadow="false"
        @click="toggleModal"
    />
  </vpopup>
  <vpopup
      class="flex justify-center items-top fixed z-9
    top-32px left-0 right-0 bottom-0 bg-[#ffffff00]"
      v-if="windowError"
      error
  >
    <div class="flex items-center">
      <p class="opacity-75 font-sans font-500 text-red text-14px leading-normal">
        {{ $t('landing.error') }}
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
import ButtonField from '@/components/ui/Button.vue';
import vpopup from '@/components/modal/v-popup.vue';
import countdown from '@/components/Countdown.vue';
import PaymentFormCompanent from '@/components/PaymentFormCompanent.vue';
import RatingStars from '@/components/RatingStars.vue';
import Footer from '@/components/Footer.vue';
import BaseButton from "@/components/ui/BaseButton.vue";


export default {
  name: 'Landing_android_v4',
  inject: ['mixpanel'],
  components: {
    ButtonField,
    vpopup,
    countdown,
    PaymentFormCompanent,
    RatingStars,
    Footer,
    BaseButton
},
  data() {
    return {
      item: "kegel_8-USD-Every-3-months",
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
      modal: false
    };
  },
  methods: {
    nextUrl() {
      this.mixpanel.track('[Web Mail] Trial Started',{
        amount: this.price,
        number: this.$route.query.nr
      })
      setTimeout(() => {
        this.$router.push({name: "Whatsapp"});
      }, 0);
    },
    toggleModal () {
      this.modal = !this.modal
      this.modal ? window.document.body.style.overflow = 'hidden' : window.document.body.style.overflow = 'unset'
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
      if (window.navigator.platform == "iPhone") {
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
        this.toggleModal()
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
          sessionStorage.setItem('disableFitness', true);
      let ppp = (Math.floor(Math.random( ) * (22 - 16 + 1)) + 16);
      function days(numer, param, key){
        if(ppp < numer){
          let m3 = this.$dayjs().add(3,'month').daysInMonth()
          let ost = m3 - (numer - ppp)
          let param = this.$dayjs().add(3,'month').format("MMMM") + ' ' + ost ;
          sessionStorage.setItem(key, param);
        }else if(ppp == numer){
          let m3 = this.$dayjs().add(3,'month').daysInMonth()
          let param = this.$dayjs().add(3,'month').format("MMMM") + ' ' + m3 ;
          sessionStorage.setItem(key, param);
        }else{
          let ost = ppp - numer
          let param = this.$dayjs().add(4,'month').format("MMMM") + ' ' + ost ;
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
