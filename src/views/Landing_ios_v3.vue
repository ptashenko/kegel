<template>
  <div class="relative max-w-full mx-auto pt-12px pb-64px sm:(max-w-600px pt-16px)">
    <div id="topPage" class="flex flex-col px-32px sm:px-40px">
      <div class="font-displayBold mt-0 mb-16px mx-auto text-32px font-600 leading-normal text-center sm:(text-30px leading-normal mb-24px)">
        {{ $t('landing.title') }}
      </div>
      <div id="trigger1" class="text-center mb-0">
        <div class="text-16px leading-normal sm:(text-18px leading-normal)">
          <p v-html="$t('landing.textFirst')"></p>
        </div>
        <div class="font-sansBold font-sansBold text-red font-700 text-20px leading-normal flex w-full mx-auto relative justify-center min-h-30px sm:(text-24px leading-normal min-h-36px)[#e44240] font-700 text-20px leading-normal flex w-full mt-4px mb-0 mx-auto relative text-center justify-center">
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
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{$dayjs().add(0,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{$dayjs().add(1,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{$dayjs().add(2,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{$dayjs().add(3,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{$dayjs().add(4,'month').format("MMM")}}</p>
          <p class="mt-9px mb-0 mx-0 text-12px text-[#111113] opacity-75 leading-normal sm:(text-18px mt-12px mb-0 mx-0) leading-normal">{{$dayjs().add(5,'month').format("MMM")}}</p>
        </div>
      </div>
      <p class="text-14px opacity-50 text-center leading-normal font-light font-sansLight sm:(text-16px leading-normal)">{{ $t('landing.diagram') }}</p>
      <div class="font-displayBold text-20px mt-16px mb-24px text-center leading-normal sm:(text-24px leading-normal mt-32px mb-52px)">
        {{ $t('landing.benefits') }}
      </div>
      <ul class="max-w-310px my-0 mx-auto py-0 px-0">
        <li class="list-none flex items-center font-sans text-16px mb-15px leading-normal sm:(text-18px leading-normal)">
          <span class="w-16px flex mr-23px h-auto sm:(w-24px h-24px)"><img class="w-16px h-16px mr-20px block sm:(w-24px h-24px)" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          <p>{{ $t('landing.firstBenefit') }}</p>
        </li>
        <li class="list-none flex items-center font-sans text-16px mb-15px leading-normal sm:(text-18px leading-normal)">
          <span class="w-16px flex mr-23px h-auto sm:(w-24px h-24px)"><img class="w-16px h-16px mr-20px block sm:(w-24px h-24px)" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          {{ $t('landing.secondBenefit') }}
        </li>
        <li class="list-none flex items-center font-sans text-16px mb-15px leading-normal sm:(text-18px leading-normal)">
          <span class="w-16px flex mr-23px h-auto sm:(w-24px h-24px)"><img class="w-16px h-16px mr-20px block sm:(w-24px h-24px)" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          <span v-html="$t('landing.thirdBenefit')"></span>
        </li>
        <li class="list-none flex items-center font-sans text-16px mb-15px leading-normal sm:(text-18px leading-normal)">
          <span class="w-16px flex mr-23px h-auto sm:(w-24px h-24px)"><img class="w-16px h-16px mr-23px block sm:(w-24px h-24px)" src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check"></span>
          {{ $t('landing.fourthBenefit') }}
        </li>
      </ul>
    </div>
    <div class="bg-[#F1F3F9] py-16px px-32px mt-48px mx-auto mb-16px">
      <div class="font-displaySemiBold text-14px leading-normal sm:(text-16px leading-normal)">
        {{ $t('landing.priceToday') }}
      </div>
    </div>
    <div class="text-14px flex items-center justify-between my-16px mx-auto py-0 px-32px leading-normal sm:(text-16px leading-normal px-38px)">
      <div>
        {{ $t('landing.dayTrial14') }}
      </div>
      <div>
        <span class="font-sansSemiBold">{{ $t('landing.free') }}</span>
      </div>
    </div>
    <hr class="bg-[#F1F3F9] h-1px max-w-320px my-0 mx-auto px-0 py-0 border-none sm:max-w-520px">
    <div class="pt-16px px-32px pb-0 leading-normal text-14px opacity-50 font-sans mb-48px mx-auto mt-0 sm:(text-16px leading-normal)">
      <i>{{ $t('landing.trialText14') }}</i>
    </div>
    <div class="bg-[#F1F3F9] py-16px px-32px mx-auto mb-16px">
      <div class="font-displaySemiBold text-14px leading-normal sm:(text-16px leading-normal)">
        {{ $t('landing.upgrade') }}
      </div>
    </div>
    <div class="text-14px flex items-center justify-between my-16px mx-auto py-0 px-32px leading-normal sm:(text-16px leading-normal px-38px)">
      <div>
        {{ $t('landing.upgradeTitle') }}
      </div>
      <div>
        <span class="font-sansSemiBold">{{ $t('landing.free') }}</span>
      </div>
    </div>
    <div class="bg-[#F1F3F9] py-16px px-32px mx-auto mb-16px">
      <div class="font-displaySemiBold text-14px leading-normal sm:(text-16px leading-normal)">
        {{ $t('landing.priceAfter') }}
      </div>
    </div>
    <div class="text-14px flex items-center justify-between my-16px mx-auto py-0 px-32px leading-normal sm:(text-16px leading-normal px-38px)">
      <div>
        {{ $t('landing.subscription') }}
      </div>
      <div class="flex flex-col items-end">
        <div class="flex"><span class="opacity-50 mr-4px line-through">$6.6 </span><span class="font-sansSemiBold">&nbsp; $4*</span></div>
        <span class="text-11px leading-normal sm:(text-14px leading-normal)">{{ $t('landing.priceWeek') }}</span>
      </div>
    </div>
    <hr class="bg-[#F1F3F9] h-1px max-w-320px my-0 mx-auto px-0 py-0 border-none sm:max-w-520px">
    <div class="my-16px mx-auto py-0 px-32px pt-16px px-32px pb-0 my-0 mx-auto leading-normal text-14px opacity-50 font-sans sm:(text-16px px-38px leading-normal)">
      <i v-html="$t('landing.billedOn', {lastDate: $dayjs().add(14,'days').format('MMMM D YYYY, h:mm a')})"></i>
    </div>
    <div id="paypal" class="px-32px mt-64px sm:(px-40px mt-48px)">
      <div class="mx-auto py-0 flex items-center justify-between text-16px leading-normal sm:mt-64px">
        <div>
          <span class="font-sansSemiBold">{{ $t('landing.payment') }}</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="cursor-pointer opacity-75 text-14px leading-normal font-displaySemiBold"  @click="showModal3">{{ $t('landing.whyNow') }}</span>
        </div>
      </div>
      <hr class="bg-[#F1F3F9] h-1px max-w-320px my-16px mx-auto border-none sm:(max-w-full)">

      <div class="my-0 mx-auto flex flex-col items-center justify-center">
        <PaymentFormCompanent @error="paymentError" @success="nextUrl" @clickButton="closeWindowError" :item="this.item" id="paymentForm"/>
      </div>
      <RatingStars />

      <div class="mt-48px mb-24px mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">{{ $t('landing.email') }}</p>
        <p class="text-14px leading-normal sm:(text-16px leading-normal)">{{ $t('landing.emailSubscription') }}</p>
      </div>
      <div class="mb-24px mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">{{ $t('landing.safeInfo') }}</p>
        <p class="text-14px leading-normal sm:(text-16px leading-normal)">{{ $t('landing.info') }}</p>
      </div>
      <div class="mb-24px mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">{{ $t('landing.secure') }}</p>
        <p class="text-14px leading-normal sm:(text-16px leading-normal)">{{ $t('landing.secureInfo') }}</p>
      </div>
      <div class="my-0 mx-auto py-0 leading-normal">
        <p class="font-displaySemiBold mb-12px">{{ $t('landing.help') }}</p>
        <p class="text-14px leading-normal sm:(text-16px leading-normal)" v-html="$t('landing.contact', {email: 'contact@kegel-plan.com'})"></p>
      </div>
      <button class="bg-[#E44240] text-[#fff] rounded-9px border-none w-full max-w-310px text-18px leading-normal py-16px my-48px font-sans mx-auto block focus:(bg-[#F5423F]) sm:max-w-373px" v-scroll-to="'#paypal'">
        {{ $t('landing.plan') }}
      </button>
      <p class="text-12px leading-normal opacity-50 text-center sm:(text-14px leading-normal)" v-html="$t('landing.trialEnd14_4', {lastDate: $dayjs().add(14,'days').format('MMMM D YYYY, h:mm a')})">
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
      {{ $t('landing.popupTop14') }}
    </p>
    <p class="opacity-75 text-14px leading-normal sm:(text-16px leading-normal)">
      {{ $t('landing.popupBottom14') }}
    </p>
    <button
        class="bg-[#E44240] border-none rounded-9px py-16px px-37px font-sansMedium text-18px leading-normal text-[#fff] mt-32px min-w-180px"
        :class="{'bg-[#E44240]': closeActive}"
        @click="closePopup3"
    >
    {{ $t('landing.button') }}
    </button>
  </vpopup>
  <vpopup
      class="flex justify-center items-top fixed z-9 top-32px left-0 right-0 bottom-0 bg-[#ffffff00]"
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

export default {
  name: 'Landing_ios_v3',
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
        this.$router.push('Whatsapp');
      }, 0);
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
  width: 350px;
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
    max-width: 153px;
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
.mw-310{
  max-width: 310px;
  margin: 0px auto;
}
.mb-64{
  margin-bottom: 64px;
  @media (max-width:480px) {
    margin-bottom: 64px;
  }
}
.fs-16-14{
  font-size: 16px;
  @media (max-width:480px) {
    font-size: 14px;
  }
}
.block__timer .p-14{
  margin-bottom: 16px;
}
.answer{
  width: 45%;
}
// hr{
//   color: #F1F3F9;
//   background: #F1F3F9;
//   border: none;
//   height: 1px;
//   max-width: 450px;
//   margin: 0 auto;
//   padding: 0;
//   @media (max-width:480px) {
//     max-width: 320px;
//   }
// }
.payment{
  margin: 64px auto 16px;
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
  padding: 25px 32px 0;
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
  padding: 6px 32px 0px;
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
