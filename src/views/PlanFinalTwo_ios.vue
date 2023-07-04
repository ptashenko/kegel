<template>
  <div class="relative mx-auto pb-48px sm:(max-w-600px mt-16px)" id="topPage">
    <div v-if="active && open == 1" class="px-32px sm:px-40px">
      <h2 class="font-displayBold text-32px leading-normal text-center">{{ $t('planFinalTwo.title') }}</h2>
      <p class="text-20px leading-normal font-displayMedium text-center">{{ $t('planFinalTwo.subtitle') }}</p>
    </div>
    <div v-else-if="open == 2" class="px-32px sm:px-40px">
      <h2 class="mb-32px font-displayBold text-24px leading-normal text-center sm:(text-30px leading-normal)">
        {{ $t('planFinalTwo.didYouKnow') }}
      </h2>
    </div>
    <div v-else class="font-displayBold font-bold text-24px leading-normal text-center px-32px sm:(px-40px text-36px leading-normal)" v-html="$t('planFinalTwo.offer')">
    </div>
    <div
        v-if="open !== 2"
        class="mt-24px mb-32px px-32px sm:(my-32px px-40px)"
    >
      <video-background
          :src="require('@/assets/video/mini_vid.mp4')"
          :poster="require(`@/assets/video/zaglushki/mini_vid.png`)"
          class="h-[calc(100dvh)] max-h-210px max-w-full rounded-14px sm:(max-h-280px)"
      >
      </video-background>
    </div>
    <div v-if="open !== 2" class="px-32px sm:px-40px">
      <div v-if="open !== 2" class="text-14px leading-normal flex items-center sm:(text-18px leading-normal)">
        <img v-if="open == 1" class="mr-18px w-13px sm:w-18px" src="@/assets/images/svg/icon_check-no-bg-red.svg" alt="check">
        <img v-if="open > 2" class="mr-18px w-13px sm:w-18px" src="@/assets/images/svg/icon_check_blue.svg" alt="check">
        <p class="fs-16-14">
          {{ $t('planFinalTwo.build') }}
        </p>
      </div>
      <div v-if="open !== 2" class="mt-16px text-14px leading-normal flex items-center sm:(text-18px leading-normal)">
        <img v-if="open == 1" class="mr-18px w-13px sm:w-18px" src="@/assets/images/svg/icon_check-no-bg-red.svg" alt="check">
        <img v-if="open > 2" class="mr-18px w-13px sm:w-18px" src="@/assets/images/svg/icon_check_blue.svg" alt="check">
        <p class="fs-16-14">
          {{ $t('planFinalTwo.increase') }}
        </p>
      </div>
      <div v-if="open !== 2" class="mt-16px text-14px leading-normal flex items-center sm:(text-18px leading-normal)">
        <img v-if="open == 1" class="mr-18px w-13px sm:w-18px" src="@/assets/images/svg/icon_check-no-bg-red.svg" alt="check">
        <img v-if="open > 2" class="mr-18px w-13px sm:w-18px" src="@/assets/images/svg/icon_check_blue.svg" alt="check">
        <p class="fs-16-14">
          {{ $t('planFinalTwo.instructions') }}
        </p>
      </div>
      <div v-if="!ios_v1" class="max-w-420px mt-26px mx-auto sm:mt-48px">
        <img v-if="open == 1" class="w-full" src="@/assets/images/icons/diskont_red.png" alt="diskont_red">
        <img v-if="open > 2" class="w-full" src="@/assets/images/icons/diskont_blue.png" alt="diskont_blue">
      </div>
      <div v-else class="max-w-420px mt-48px mx-auto">
        <img v-if="open == 1" class="w-full" src="@/assets/images/icons/discont_red_ios.png" alt="discont_red_ios">
        <img v-if="open > 2" class="w-full" src="@/assets/images/icons/discont_blue_ios.png" alt="discont_blue_ios">
      </div>
    </div>
    <div
        v-if="open == 2"
        class="overflow-y-inherit"
    >
      <div class="px-32px sm:px-40px">
        <p class="font-sans text-14px leading-normal mb-16px sm:(text-18px leading-normal)">
          <span v-html="$t('planFinalTwo.groin')"></span>
        </p>
        <p class="font-sans text-14px leading-normal mb-27px sm:(text-18px leading-normal)" v-html="$t('planFinalTwo.flow')">
        </p>
        <img class="w-full mt-0px mx-auto mb-16px flex sm:(my-32px mx-auto)" src="@/assets/images/content/Final_modal.png" alt="">
        <p class="opacity-50 text-12px leading-normal text-center font-sansLight mb-32px sm:(text-16px leading-normal)">
          {{ $t('planFinalTwo.diagram') }}
        </p>
      </div>

      <div v-if="ios_v1" class="flex items-center justify-around min-h-100px rounded-9px bg-[#f9f9f9] border-2px border-[#5773D6] mb-32px pt-21px pr-24px pb-18px pl-8px mr-32px ml-32px">
        <div class="basis-1/4">
          <img :src="require(`@/assets/images/blue-gift.png`)" class="block w-3/4 my-0 mx-auto" />
        </div>
        <div class="flex flex-col justify-center basis-2/3">
          <p class="text-14px leading-normal font-sans text-[#111113] opacity-100 m-0 sm:(text-18px leading-normal)" v-html="$t('planFinalTwo.discount')">
          </p>
        </div>
      </div>

      <div v-else class="flex items-center justify-around min-h-100px bg-blue border-2px border-[#5773D6] mb-32px py-16px px-32px sm:(py-20px px-40px rounded-9px)">
        <img src="@/assets/images/svg/icon_present.svg" alt="">
        <p class="text-14px leading-normal font-sans text-[#fff] m-0 ml-16px sm:(text-18px leading-normal ml-32px)" v-html="$t('planFinalTwo.offering')">
        </p>
      </div>
    </div>
    <div class="my-32px mx-auto max-w-311px sm:max-w-373px" v-if="open == 1">
      <base-button
          label='Add to my plan'
          rounded="half"
          :loader="loading"
          @click="addonRequest"
      />
    </div>
    <div class="my-32px mx-auto max-w-311px sm:max-w-373px"
         v-if="open == 3"
    >
      <base-button
          label='Add to my plan'
          theme="blue"
          rounded="half"
          :loader="loading"
          @click="addonRequest"
      />
    </div>
    <base-button
        v-if="active && open == 1"
        :label="$t('planFinalTwo.results')"
        text-only
        class="font-sansMedium !text-body text-14px leading-normal opacity-50 mb-32px sm:(text-16px leading-normal mb-48px)"
        @click="showModal"
    />
    <div v-else-if="open == 2" class="text-center max-w-311px mt-32px mb-40px sm:max-w-373px mx-auto">
      <base-button
          v-if="ios_v1"
          :label="$t('planFinalTwo.continue')"
          theme="blue"
          class=""
          rounded="half"
          :loader="loading"
          @click="closePopup"
      />

      <button v-else
              class="bg-[#5773D6] border-none rounded-9px py-16px px-37px font-sansMedium text-18px leading-normal text-[#fff] cursor-pointer flex justify-center items-center w-full shadow-button-blue mb-52px"
              @click="closePopup"
      >
      {{ $t('planFinalTwo.continue') }}
        <img src="@/assets/images/svg/icon_arrow-next.svg" class="max-w-14px my-0 ml-12px mr-0" alt="" >
      </button>
    </div>
    <base-button
        v-else
        :label="$t('planFinalTwo.giveUp')"
        text-only
        class="font-sansMedium !text-body text-14px leading-normal opacity-50 mb-32px sm:(text-16px leading-normal mb-48px)"
        @click="withoutUpsaleDiscounted"
    />
    <div v-if="!ios_v1" class="px-32px sm:px-40px">
      <div v-if="open == 1" class="block my-0 mx-auto">
        <div class="font-sansLight text-12px leading-normal opacity-50 text-center px-0 pt-0  sm:(text-14px leading-normal)">
          {{ $t('planFinalTwo.charged_19') }}
        </div>
      </div>
      <div v-else-if="open == 3" class="block my-0 mx-auto">
        <div  class="font-sansLight text-12px leading-normal opacity-50 text-center px-0 pt-0 sm:(text-14px leading-normal)">
          {{ $t('planFinalTwo.charged_9') }}
        </div>
      </div>
      <div v-else>
        <div v-if="open == 1" class="block my-0 mx-auto">
          <div class="font-sansLight text-12px leading-normal opacity-50 text-center px-0 pt-0 sm:(text-14px leading-normal)">
            {{ $t('planFinalTwo.charged_1') }}
          </div>
        </div>
        <div v-else-if="open == 3" class="block my-0 mx-auto">
          <div class="font-sansLight text-12px leading-normal opacity-50 text-center px-0 pt-0 pb-48px sm:(text-14px leading-normal)">
            {{ $t('planFinalTwo.charged_0') }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <vpopup
    class="z-999"
    v-if="windowError"
  >
    <div>
      <p class="opacity-75">
        {{ $t('planFinalTwo.error') }}
      </p>
      <p
        class="opacity-75 text-blue mt-4px cursor-pointer underline"
        @click="popupPay"
      >
      {{ $t('planFinalTwo.tap') }}
      </p>
    </div>
    <img
      class="w-full flex items-center bg-red border-3px border-red focus:(bg-[#eb6967] border-3px border-[#E44240])"
      src="@/assets/images/svg/icon_btn-close-communicate.svg"
      alt="error"
      @click="closeWindowError"
    >
  </vpopup>
  <vpopup
    v-if="popupWindowPay"
    textTitle="Select Payment method"
    class="overflow-y-inherit"
  >
    <div
      class="absolute right-8px top-8px cursor-pointer"
      @click="closePopupWindowPay"
    >
      <img src="@/assets/images/svg/icon_btn-close-window.svg" alt="apple_pay">
    </div>
    <div class="flex flex-col items-center justify-center">
      <PaymentFormCompanent @error="paymentError" @success="payingSuccess" @click="closeWindowError" :item="this.item"/>
    </div>
  </vpopup>
</template>

<script>
import { mapGetters } from 'vuex';
import Review from '@/components/Review.vue';
import vpopup from '@/components/modal/v-popup.vue';
import ButtonField from '@/components/ui/Button.vue';
import VueScrollTo from "vue-scrollto";
import PaymentFormCompanent from '@/components/PaymentFormCompanent.vue';
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
  name: 'PlanFinalTwo',
  inject: ['mixpanel'],
  data(){
    return{
      item: "Fitness-1-trial-USD-Monthly",
      VueScrollTo: require('vue-scrollto'),
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
    BaseButton,
    Review,
    vpopup,
    ButtonField,
    PaymentFormCompanent
},
  methods: {
    async addonRequest(){
      this.loading = true;
      const payload = {
        web_user_uuid: localStorage.getItem("web_user_uuid").replaceAll('\"',''),
        item: this.item,
      }

      try {
        const { status } = await this.$store.dispatch('addonFetch', payload)
        status === 200 || status === 204
            ? this.payingSuccess()
            : this.paymentError()

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
      setTimeout(function(){ window.scrollTo( 0, height ) })
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
      this.$router.push({name: "Whatsapp"})
    },
    showModal(){
      this.mixpanel.track('Upsale Answered',{
        Upsale: "No"
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
      if (this.open == 1) {
        //1.74
        this.item = "Fitness_2-USD-Weekly"
      }
      if (this.open == 3) {
        //0.99
        this.item = "Fitness_3-USD-Weekly"
      }
    // }
  },
  created () {
    this.mixpanel.track('Upsale Offered')
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
