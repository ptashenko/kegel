<template>
  <div id="topPage" class="container-mob mx-auto block pb-100px max-w-311px sm:(max-w-520px)">
    <div>
      <div
        v-if="active && open == 1"
        class="mt-0 mb-32px font-displayBold text-24px leading-normal text-center sm:(text-36px leading-normal)"
        :class="{'mb-32px font-displayBold text-32px leading-normal sm:(text-36px leading-normal)': active}"
      >
        Add Groin Fitness
        <p class="font-displayMedium text-20px leading-normal sm:(text-24px leading-normal)">to accelerate the result</p>
      </div>
      <h2
        v-else-if="open == 2"
        class="mb-0 font-displayBold mt-0 text-24px leading-normal text-center sm:(text-30px leading-normal mb-32px)"
      >
        Did you know?
      </h2>
      <h2
        v-else
        class="mt-0 mb-32px font-displayBold text-24px leading-normal text-center sm:(text-36px leading-normal)"
      >
        <span
          class="text-blue"
        > Final Offer:</span>
        get Groin Fitness at the best deal!
      </h2>
    </div>
    <div
      v-if="open !== 2"
    >
      <video-background
        :src="require('@/assets/video/mini_vid.mp4')"
        :poster="require(`@/assets/video/zaglushki/mini_vid.png`)"
        class="video h-100vh max-w-full rounded-14px max-h-180px sm:(max-h-280px)"
        objectFit="fill"
      >
      </video-background>
    </div>
    <div class="flex flex-col mb-24px">
      <div v-if="open !== 2" class="text-14px leading-normal mt-32px sm:(text-18px leading-normal) flex items-center">
        <img
          v-if="open == 1"
          class="w-13px mr-18px sm:(w-18px)"
          src="@/assets/images/svg/icon_check-no-bg-red.svg"
          alt="check"
        >
        <img
          v-if="open > 2"
          class="w-13px mr-18px sm:(w-18px)"
          src="@/assets/images/svg/icon_check_blue.svg"
          alt="check"
        >
        <p>
          Build groin muscles strength & flexibility
        </p>
      </div>
      <div
        v-if="open !== 2"
        class="text-14px leading-normal mt-16px sm:(text-18px leading-normal) flex items-center"
      >
        <img
          v-if="open == 1"
          class="w-13px mr-18px sm:(w-18px)"
          src="@/assets/images/svg/icon_check-no-bg-red.svg" alt="check"
        >
        <img
          v-if="open > 2"
          class="w-13px mr-18px sm:(w-18px)"
          src="@/assets/images/svg/icon_check_blue.svg" alt="check"
        >
        <p>
          Increase blood flow to intimate organs
        </p>
      </div>
      <div
        v-if="open !== 2"
        class="text-14px leading-normal mt-16px sm:(text-18px leading-normal) flex items-center"
      >
        <img
          v-if="open == 1"
          class="w-13px mr-18px sm:(w-18px)"
          src="@/assets/images/svg/icon_check-no-bg-red.svg"
          alt="check"
        >
        <img
          v-if="open > 2"
          class="w-13px mr-18px sm:(w-18px)"
          src="@/assets/images/svg/icon_check_blue.svg"
          alt="check"
        >
        <p>
          Every exercise has video & audio instructions from the coach
        </p>
      </div>
      <DiscountFlag
          v-if="open !== 2"
          :disc-price="open === 1 ? price.discPrice : price.superDiscPrice"
          :full-price="price.fullPrice"
          class="m-0 mt-24px mb-32px"
          :color="open === 1 ? '#E44240' : '#5773D6'"
          :icon="open === 1 ? 'red-discount-flag' : 'blue-discount-flag'"
        />
    </div>
    <div
      v-if="open == 2"
      class=""
    >
      <p class="mb-16px">
        <span
          class="font-sansSemiBold"
        >
          Groin Fitness
        </span>
        improves blood flow to the groin, which has a big impact on sexual performance.
      </p>
      <p class="mb-24px">
        Bad blood flow to the groin area can put you at
        <span
          class="font-sansSemiBold"
        >
          50-70%
        </span>
        risk of erectile dysfunction. Moreover, lack of physical activity proved to reduce your sexual stamina.
      </p>
      <img
        class="w-full"
        src="@/assets/images/content/Final_modal.png"
        alt=""
      >
      <p
        class="font-sans font-300 text-12px leading-normal text-center text-body opacity-50 mx-auto mt-16px mb-32px sm:(text-14px leading-normal)"
      >
        *This diagram is a non-personalized illustration based on scientific research.
      </p>
      <div
        class="bg-[#F9F9F9] border-2px border-blue rounded-9px flex min-h-100px items-center justify-around max-w-310px mx-auto"
      >
        <div
          class="basis-[25%]"
        >
            <img
              :src="require(`@/assets/images/blue-gift.png`)"
              class="block w-[70%] mx-auto"
            />
        </div>
        <div
          class="flex flex-col justify-center basis-[65%]"
        >
            <p
              class="font-400 text-14px leading-tight text-body opacity-75 !m-0"
            >
              We want you to succeed, so we’re giving you <span class="font-displayBold">a super discount on Groin Fitness!</span>
            </p>
        </div>
      </div>
    </div>


    <div v-if="open == 1">
      <button-field

        text='Add to my plan'
        theme="Back"
        class="max-w-310px m-0 mx-auto z-0 bg-red shadow-button-red"
        :class="{ submit: loading }"
        @click="addonRequest"
      />
      <!-- <button-field
        text='Add to my plan'
        theme="Back"
        class="footer-controls__button red loader"
        :class="{ hiden: isActive }"
        @click="loadingBtn"
      /> -->
      <div
        v-show="isActive"
        class="max-w-310px m-0 mx-auto z-0 flex items-center py-16px px-0 justify-center bg-red rounded-9px mx-auto mt-16px mb-0"
      >
        <lottie-animation
          class="w-16px h-16px sm:(w-25px h-25px)"
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
        class="max-w-310px m-0 mx-auto z-0 bg-blue shadow-button-blue"
        :class="{ submit: loading }"
        @click="addonRequest"
      />
      <!-- <button-field
        text='Add to my plan'
        theme="Back"
        class="footer-controls__button loader bg-blue"
        :class="{ hiden: isActive }"
        @click="loadingBtn"
      /> -->
      <div
        v-show="isActive"
        class="max-w-310px m-0 mx-auto z-0 flex items-center py-16px px-0 justify-center bg-blue rounded-9px mx-auto mt-16px mb-0"
      >
        <lottie-animation
          class="w-16px h-16px sm:(w-25px h-25px)"
          ref="anim"
          :animationData="require(`@/assets/images/json/loader_white.json`)"
          :loop="mytrue"
          :autoPlay="true"
          :speed="1"
        />
      </div>
    </div>
    <div v-if="active && open == 1"
      class="relative text-center font-sansMedium text-14px leading-normal opacity-50 mx-auto my-32px cursor-pointer sm:(text-16px leading-normal mb-48px)"
      @click="showModal"
    >
    I don’t want to accelerate my results &gt;
    </div>
    <div v-else-if="open == 2" class="text-center">
      <button
        class="bg-blue border-none rounded-9px py-16px px-37px font-sansMedium text-18px leading-normal text-[#fff] mt-32px cursor-pointer mb-40px w-full shadow-button-blue"
        @click="closePopup"
      >
      Continue
      </button>
    </div>
    <div v-else
      class="relative text-center font-sansMedium text-14px leading-normal opacity-50 mx-auto my-32px cursor-pointer sm:(text-16px leading-normal mb-48px)"
      @click="withoutUpsaleDiscounted"
    >
    I give up accelerated results forever &gt;
    </div>
      <div>
        <p v-if="subscriotionInfo.id === 1 && open !== 2" class="font-sansLight text-12px leading-normal opacity-50 text-center text-14px leading-normal">
          In addition to your subscription, your account will be charged <b>{{ this.open === 1 ? this.price.discPrice : this.price.superDiscPrice }}</b> for the add-on as you click "Add to my plan". Item on this page is a <b>1 month</b> subscription. Unless you cancel it in your profile before the end of then-current period, you agree that the subscription will renew automatically at the end of each period. You can cancel the subscription online by visiting Billing Center in your personal account on website or in the app to avoid being charged for the next billing cycle.
        </p>
        <p v-else-if="subscriotionInfo.id !== 1 && open !== 2" class="font-sansLight text-12px leading-normal opacity-50 text-center text-14px leading-normal">
          In addition to your subscription, your account will be charged <b>{{ this.open === 1 ? this.price.discPrice : this.price.superDiscPrice }}</b> for the add-on as you click "Add to my plan". Item on this page is a <b>{{ this.subscriotionInfo.period }}</b> subscription. Unless you cancel it in your profile before the end of then-current period, you agree that the subscription will renew automatically at the end of each period. You can cancel the subscription online by visiting Billing Center in your personal account on website or in the app to avoid being charged for the next billing cycle.
        </p>
      </div>
  </div>
  <vpopup
    v-if="windowError"
    :error="windowError"
    :close-button="false"
  >
    <div class="flex">
      <div>
        <p class="text-red text-14px leading-normal">
          Your payment was declined.
        </p>
        <p
          class="text-blue text-14px leading-normal underline"
          @click="popupPay"
        >
          Tap here to select a different payment method.
        </p>
      </div>
      <img
        src="@/assets/images/svg/icon_btn-close-communicate.svg"
        alt="error"
        @click="closeWindowError"
      >
    </div>
  </vpopup>
  <vpopup
    v-if="popupWindowPay"
    textTitle="Select Payment method"
    @closePopup="closePopupWindowPay"
  >
    <div class="mw-300 block-pay d-flex flex-column align-items-center justify-content-center">
      <PaymentFormCompanent
        @error="paymentError"
        @success="payingSuccess1"
        @click="closeWindowError"
        :item="this.item"
        :period="subscriotionInfo.period"
        :discPrice="price.discPrice"
        :fullPrice="subscriotionInfo.fullPrice"
      />
    </div>
  </vpopup>
</template>

<script>
import { mapGetters } from 'vuex';
import Review from '@/components/Review.vue';
import DiscountFlag from '@/components/DiscountFlag.vue';
import vpopup from '@/components/modal/v-popup.vue';
import ButtonField from '@/components/ui/Button.vue';
import PaymentFormCompanent from '@/components/PaymentFormCompanent.vue';

export default {
  name: 'PlanFinalTwo',
  inject: ['mixpanel'],
  props: {
    content: {
      required: true,
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      item: "Fitness-1-trial-USD-Monthly",
      popupVisible: false,
      open: 1,
      active: true,
      isActive: false,
      mytrue: true,
      loading: false,
      windowError: false,
      numTimeError:0,
      popupWindowPay: false,
      apple_pay:true ,
      pollingTwo: null,
      polling: null,
      ios_v1:  sessionStorage.getItem('ios_v1')
    }
  },
  components: {
    Review,
    vpopup,
    ButtonField,
    PaymentFormCompanent,
    DiscountFlag
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
    subscriotionInfo() {
      return JSON.parse(localStorage.getItem('usersSubscriptionInfo'))
    },
    price() {
      let currPrice = {
        discPrice: null,
        fullPrice: null,
        superDiscPrice: null,
      }
      switch(this.subscriotionInfo.id) {
        case 1:
          currPrice.discPrice = '6.69 USD';
          currPrice.fullPrice = '9.99 USD';
          currPrice.superDiscPrice = '3.30 USD';
          this.item = this.open === 1 ? "Fitness-1-trial-USD-Monthly" : "Fitness-3-trial-USD-Monthly"
          break;
        case 2:
          currPrice.discPrice = '6.69 USD';
          currPrice.fullPrice = '9.99 USD';
          currPrice.superDiscPrice = '3.30 USD';
          this.item = this.open === 1 ? "Fitness-1-trial-USD-Monthly" : "Fitness-3-trial-USD-Monthly"
          break;
        case 3:
          currPrice.discPrice = '19.99 USD';
          currPrice.fullPrice = '29.99 USD';
          currPrice.superDiscPrice = '9.99 USD';
          this.item = this.open === 1 ? "Fitness-2-trial-USD-Every-3-months" : "Fitness-4-trial-USD-Every-3-months"
          break
        default:
          currPrice.discPrice = '6.69 USD';
          currPrice.fullPrice = '9.99 USD';
          currPrice.superDiscPrice = '3.30 USD';
          this.item = this.open === 1 ? "Fitness-1-trial-USD-Monthly" : "Fitness-3-trial-USD-Monthly"
      }
      return currPrice;
    }
  },
  methods: {
    async addonRequest(){
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
        try {
          const { status } = await fetch("https://int2.kegel.men/api/web-payment/addons/", requestOptions)
          if (status === 200 || status === 204) {
            this.payingSuccess()
          } else {
            this.paymentError()
          }
        } catch (err) {
          this.paymentError()
        } finally {
          this.loading = false;
        }
    },
    popupPay(){
      let body = document.querySelector('body')
      sessionStorage.setItem('scrollto', body.scrollHeight)
      clearInterval(this.polling)
      this.windowError = false
      this.isActive = false
      this.popupWindowPay = true
      body.classList.add('fixed');
    },
    closePopupWindowPay(){
      const height = sessionStorage.getItem('scrollto')
      setTimeout(function(){ window.scrollTo( 0, -100) })
      this.popupWindowPay = false
      let body = document.querySelector('body')
      body.classList.remove('fixed');
    },
    closePopupWindowPayError(){
      const height = sessionStorage.getItem('scrollto')
      setTimeout(function(){ window.scrollTo( 0, height ) })
      this.popupWindowPay = false
      let body = document.querySelector('body')
      body.classList.remove('fixed');
      this.loadingBtn()
    },
    paymentError(){
      this.mixpanel.track('Payment Error', {
        stage: this.open == 1 ? "Add Fitness" : "Add Fitness Downsale"
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
        }, 10000)
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
    payingSuccess1() {
      this.closePopupWindowPay()
    },
    payingSuccess() {
      this.nextUrl()

      if(this.open == 1){
        this.mixpanel.track('Upsale Answered',{
          Upsale: "Yes"
        })
        this.mixpanel.track('Upsale',{
          price: "19.99",
          type: "regular"
        })
      }else if(this.open == 3){
        this.mixpanel.track('Discounted Upsale Answered',{
          Upsale: "Yes"
        })
        this.mixpanel.track('Upsale',{
          price: "9.99",
          type: "discounted"
        })
      }
    },
    withoutUpsaleDiscounted(){
      this.mixpanel.track('Discounted Upsale Answered',{
        Upsale: "No"
      })
      this.nextUrl();
    },
    nextUrl(){
      let body = document.querySelector('body')
      body.classList.remove('fixed');
      this.$router.push('Whatsapp')
    },
    showModal(){
      this.mixpanel.track('Upsale Answered',{
        Upsale: "No"
      })
      var element = document.getElementById("topPage");
      var top = element.offsetTop;
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 50)
      this.open = 2
      localStorage.setItem('addPlan', 2)
    },
    closePopup(){
      this.mixpanel.track('Discunted Upsale Offered')
      var element = document.getElementById("topPage");
      var top = element.offsetTop;
      setTimeout(() => {
        window.scrollTo(0, -100)
      }, 50)
      setTimeout(() => {
        window.scrollTo(0, -100)
      }, 100)
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
  beforeUnmount () {
    clearInterval(this.polling)
    clearInterval(this.pollingTwo)
  },
  mounted() {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 50)
    this.storeEdit()
    // if (!this.ios_v1) {
    //   if (open == 1) {
    //     //19.99
    //     this.item = "Fitness-1-trial-USD-Monthly"
    //   }
    //   if (open == 3) {
    //     //9.99
    //     this.item = "Fitness-3-trial-USD-Monthly"
    //   }
    // } else {
    //   if (open == 1) {
    //     //1.74
    //     this.item = "Fitness_2-USD-Weekly"
    //   }
    //   if (open == 3) {
    //     //0.99
    //     this.item = "Fitness_3-USD-Weekly"
    //   }
    // }
  },
  created () {
    this.mixpanel.track('Upsale Offered')
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === 'Whatsapp' || to.name === "AddressPage") {
      next()
    } else {
      next(false)
    }
  }
};
</script>

<style lang="scss" scoped>
.submit {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWxvYWRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQwIDcyQzIyLjQgNzIgOCA1Ny42IDggNDBTMjIuNCA4IDQwIDhzMzIgMTQuNCAzMiAzMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJjMC0xNS40LTEyLjYtMjgtMjgtMjhTMTIgMjQuNiAxMiA0MHMxMi42IDI4IDI4IDI4YzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNDAgNDAiIHRvPSIzNjAgNDAgNDAiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 20px;
  color: transparent !important;
  transition-duration: 0s;
  pointer-events: none;
}
</style>
