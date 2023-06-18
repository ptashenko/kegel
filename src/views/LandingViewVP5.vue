<template>
  <div class="landing">
    {{MyScrollFixed}}
    {{btnAddPurpose}}
    {{imagechart}}
    <div class="relative max-w-600px px-32px mx-auto sm:(px-40px)">
      <div v-if="subscribe" class="max-w-536px opacity-0 fixed block mx-auto w-full text-center py-16px px-32px bg-body z-2 text-[#fff] top-0 left-0 right-0 sm:(py-21px px-0 max-w-600px)" :class="{'!opacity-100': blockFixed}">
      <p class="p-0 m-0 block font-800">
        <span :class="[superDiscount.theme ? 'text-blue' : 'text-red']">
          {{ pickedTarifParams.discount }}% discount<br>
        </span>
        <span>expires in: </span>
        <countdown
          v-if="timer"
          class="inline"
        />
      </p>
    </div>

    <div id="topPage" class="flex flex-col">
      <h2 class="m-0 mx-auto mb-24px text-24px leading-normal text-center font-displayBold sm:(text-36px leading-normal)">
        Your Kegel Plan to improve {{ purpose }} is ready!
      </h2>
      <p v-if="subscribe" class="text-14px leading-normal text-center mb-16px sm:(text-18px leading-normal)">
        <b>Limited offer</b>
        reserved for 15 minutes
      </p>
      <div id="blockScroll" class="mb-32px font-500 text-14px leading-tight flex items-center rounded-17px bg-body w-full max-w-311px m-0 mx-auto mb-32px text-[#fff]">
        <div class="relative w-84px h-84px ml-10px">
          <img class="glow absolute w-full top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] rotation" src="@/assets/images/glow.png" alt="icon" />
          <img class="absolute w-[60%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]" src="@/assets/images/timer.png" alt="icon" />
        </div>
        <div class="ml-15px">
          <p class="font-sans font-700 text-20px leading-tight" :class="[superDiscount.theme ? 'text-blue' : 'text-red']">{{pickedTarifParams.discount}}% discount</p>
          <p v-if="timer" class="flex font-sans text-16px leading-normal m-0 text-[#fff]">
            Expires in:	&nbsp;  <countdown />
          </p>
        </div>
      </div>
      <div id="trigger1" class="text-center mb-0">
        <div class="text-16px leading-normal sm:(text-20px leading-normal)">
          <span>
            Based on your personal goals you can
          </span>
          <br>
          <span v-if="AddPurposeCom" class="font-sansSemiBold">
            <span class="font-sans">imporve</span> {{ purpose }}
            <span class="font-sans"> and </span>
            <span>{{ addpurpose }}</span>
          </span>
          <span v-if="!AddPurposeCom">
            <span class="font-sansSemiBold">
              <span class="font-sans">imporve</span> {{ purpose }}
            </span>
          </span>
        </div>
        <div class="font-sansBold text-red font-700 text-20px leading-normal flex w-full mx-auto relative justify-center min-h-30px sm:(text-24px leading-normal min-h-36px)">
            <transition name="slide-fade">
              <span v-if="show" class="relative transform translate-x-0 translate-y-0">by {{dataPP3}}</span>
            </transition>
        </div>
      </div>

      <div class="my-32px mx-auto text-center w-full sm:(max-w-520px)">
        <lottie-animation
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
        <div class="flex justify-between mx-[12%]">
          <p class="m-0 mt-9px text-12px leading-normal text-body sm:(text-18px leading-normal mt-12px)"
            v-for="(_, idx) of new Array(6)"
            :key="idx">
            {{setDate(idx)}}
          </p>
        </div>
      </div>
      <p class="!text-14px !leading-normal max-w-450px mx-auto opacity-50 text-center sm:(max-w-520px)">
        {{graphText}}
      </p>
      <div id="Benefits">
        <h2 class="font-displayBold text-20px leading-normal my-32px mx-auto text-center sm:(text-24px leading-normal mb-52px)">Kegel Plan Benefits</h2>
        <ul class="max-w-310px m-0 mx-auto mb-48px p-0 sm:(max-w-375px)">
          <li class="list-none flex items-center font-sans text-16px leading-normal mb-16px sm:(text-18px leading-normal)">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:(w-24px h-24px)" />
            <p>Reach your goal and improve <b> {{ purpose }} </b></p>
          </li>
          <li v-if="addpurpose" class="list-none flex items-center font-sans text-16px leading-normal mb-16px sm:(text-18px leading-normal)">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:(w-24px h-24px)" />
            <p>Improve <span class="font-sansSemiBold">{{ addpurpose }}</span></p>
          </li>
          <li class="list-none flex items-center font-sans text-16px leading-normal mb-16px sm:(text-18px leading-normal)" v-if="addItem">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:(w-24px h-24px)" />
            <p>Improve <span class="font-sansSemiBold">Erective Function</span></p>
          </li>
          <li class="list-none flex items-center font-sans text-16px leading-normal mb-16px sm:(text-18px leading-normal)" v-if="addItem">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:(w-24px h-24px)" />
            <p>Improve <span class="font-sansSemiBold">Ejaculation Control</span></p>
          </li>
          <li class="list-none flex items-center font-sans text-16px leading-normal mb-16px sm:(text-18px leading-normal)">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:(w-24px h-24px)" />
            <p>Pill-free approach</p>
          </li>
          <li class="list-none flex items-center font-sans text-16px leading-normal mb-16px sm:(text-18px leading-normal)">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:(w-24px h-24px)" />
            <p>Long-lasting improvement</p>
          </li>
          <li class="list-none flex items-center font-sans text-16px leading-normal mb-16px sm:(text-18px leading-normal)">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:(w-24px h-24px)" />
            <p>Takes <span class="font-sansSemiBold">&nbsp;5 min a day</span></p>
          </li>
          <li class="list-none flex items-center font-sans text-16px leading-normal mb-16px sm:(text-18px leading-normal)">
            <img src="@/assets/images/svg/icon_check-no-bg-black.svg" alt="check" class="mr-20px w-16px h-16px block sm:(w-24px h-24px)" />
            <p>More happiness for you and for your partner</p>
          </li>
        </ul>
        <RatingStars
          :stars="5"
          amount="42k"
          downloads="2M+"
        />
      </div>
    </div>

    <div class="max-w-600px mx-auto relative">
        <div class="flex flex-col my-16px mt-48px mx-auto mb-40px container-mob">
          <div class="font-displaySemiBold text-16px leading-normal mb-16px text-center sm:(text-24px leading-normal)">Customer reviews</div>
          {{lengthReviews}}
          <template v-for="(item, key) in base" :key="key">
            <div
              v-show="key < this.numreview"
              class="p-15px rounded-9px mx-auto max-w-370px w-full bg-[#F9F9F9] duration-300 mb-8px sm:(max-w-520px)"
            >
              <div class="flex justify-between mb-15px">
                <div>
                  <div class="text-14px leading-normal font-sansBold sm:(text-18px leading-normal)">{{ item.title }}</div>
                  <div class="flex mt-5px">
                    <img v-for="i in item.rating" :key="i" src="@/assets/images/svg/icon_star.svg" alt="star-yellow" class="w-14px h-14px max-w-14px h-auto">
                  </div>
                </div>

                <p class="font-500 text-12px leading-normal opacity-50 sm:(text-16px leading-normal)">
                  {{ item.name }}
                </p>
              </div>

              <p class="text-12px leading-normal font-400 sm:(text-16px leading-normal)">
                {{ item.text }}
              </p>

            </div>
          </template>


          <button
            v-if="this.base.length > this.numreview"
            class="text-center text-14px leading-normal font-sansBold text-blue bg-none cursor-pointer w-full mt-8px sm:(text-18px leading-normal)"
            @click="showReview"
          >
            Show more
          </button>
        </div>
    <div class="absolute top-[100%] w-full h-70px" id="selectPlan"></div>
    </div>
  </div>
    <div ref="payment-block" class="p-32px max-w-600px mx-auto bg-body sm:(px-40px)">
      <div v-if="superDiscount.theme">
        <SuperDiscountGift
          :discount="pickedTarifParams.discount"
          :discountOriginal="pickedTarifParams.discountOriginal"
          class="m-0 mx-auto mb-32px max-w-311px"
        />
        <h2 class="text-25px leading-normal text-[#fff] m-0 mx-auto mb-24px text-center font-displayBold sm:(text-36px leading-normal)">
          Choose Your Plan
        </h2>
      </div>
      <h2 v-else class="text-25px leading-normal text-[#fff] m-0 mx-auto mb-24px text-center font-displayBold sm:(text-36px leading-normal)">
        Get Your Kegel Plan to improve {{ purpose }}
      </h2>
      <div v-if="superDiscount.theme" class="flex flex-col max-w-430px mx-auto">
        <label
          v-for="({id, fullprice, cost, text, name, totalCost, superDiscPrice}, idx) of tarifs"
          :key="idx"
          class="flex justify-between p-8px pl-16px bg-[#fff] bg-opacity-5 rounded-9px mb-16px border-1px border-transparent cursor-pointer"
          :class="{'border-1px border-blue': subscribe === id}"
        >
          <div class="flex items-center">
            <div>
              <input
                class="appearance-none absolute"
                type="radio"
                name="subscribe"
                :value="id"
                v-model="subscribe"
              />
              <span
                class="relative block w-20px h-20px rounded-full border-2px border-[#ffffff26] mr-16px"
                :class="{'bg-blue border-none': subscribe === id}"
              >
                <img
                  v-if="subscribe === id"
                  src="@/assets/images/svg/icon_check-no-bg-black.svg"
                  class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                />
              </span>
            </div>
            <div>
              <p
                class="font-displayBold leading-normal text-[#fff] opacity-50"
                :class="{ '!opacity-100' : subscribe === id }"
              >
                {{name}}
              </p>
              <p
                class="font-sans text-10px leading-normal text-[#fff] opacity-25"
                :class="{ '!opacity-75' : subscribe === id }"
              >
                <span class="line-through">{{totalCost}}</span>
                {{superDiscPrice}}
              </p>
            </div>
          </div>
          <div class="relative">
            <div :class="[subscribe === id ? 'opacity-100' : 'opacity-5']">
              <svg width="112" height="56" viewBox="0 0 112 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5604 2.5193C15.4506 0.96143 17.1073 0 18.9016 0H107C109.761 0 112 2.23858 112 5V51C112 53.7614 109.761 56 107 56H18.9016C17.1073 56 15.4506 55.0386 14.5604 53.4807L1.41754 30.4807C0.53916 28.9435 0.539161 27.0565 1.41754 25.5193L14.5604 2.5193Z" :fill="subscribe === id ? '#5773D6' : '#fff'" />
              </svg>
            </div>
            <div class="absolute flex flex-col items-center gap-2px w-full top-[50%] left-[50%] transform translate-x-[-45%] translate-y-[-50%]">
              <p
                class="font-sans font-600 text-12px leading-tight text-[#fff] opacity-25 line-through"
                :class="{ '!text-body !opacity-100' : subscribe === id }"
              >
                {{fullprice}}
              </p>
              <p
                class="font-sans font-700 text-16px leading-none text-center text-blue opacity-50"
                :class="{ '!text-[#fff] !opacity-100' : subscribe === id }"
              >
                {{cost}}
              </p>
              <p
                class="font-sans font-600 text-12px leading-none text-center text-[#fff] opacity-50"
                :class="{ '!opacity-100' : subscribe === id }"
              >
                per day
              </p>
            </div>
          </div>
        </label>
      </div>
      <div v-else class="flex flex-col max-w-430px mx-auto">
        <label
          v-for="({id, fullprice, cost, text, name, totalCost, totalDiscCost}, idx) of tarifs"
          :key="idx"
          class="flex justify-between p-8px pl-16px bg-[#fff] bg-opacity-5 rounded-9px mb-16px border-1px border-transparent cursor-pointer"
          :class="{'border-1px border-red': subscribe === id}"
        >
          <div class="flex items-center">
            <div>
              <input
                class="appearance-none absolute"
                type="radio"
                name="subscribe"
                :value="id"
                v-model="subscribe"
              />
              <span
                class="relative block w-20px h-20px rounded-full border-2px border-[#ffffff26] mr-16px"
                :class="{'bg-red border-none': subscribe === id}"
              >
                <img
                  v-if="subscribe === id"
                  src="@/assets/images/svg/icon_check-no-bg-black.svg"
                  class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                />
              </span>
            </div>
            <div>
              <p
                class="font-displayBold leading-normal text-[#fff] opacity-50"
                :class="{ '!opacity-100' : subscribe === id }"
              >
                {{name}}
              </p>
              <p
                class="font-sans text-10px leading-normal text-[#fff] opacity-25"
                :class="{ '!opacity-75' : subscribe === id }"
              >
                <span class="line-through">{{totalCost}}</span>
                {{totalDiscCost}}
              </p>
            </div>
          </div>
          <div class="relative">
            <div :class="[subscribe === id ? 'opacity-100' : 'opacity-5']">
              <svg width="112" height="56" viewBox="0 0 112 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5604 2.5193C15.4506 0.96143 17.1073 0 18.9016 0H107C109.761 0 112 2.23858 112 5V51C112 53.7614 109.761 56 107 56H18.9016C17.1073 56 15.4506 55.0386 14.5604 53.4807L1.41754 30.4807C0.53916 28.9435 0.539161 27.0565 1.41754 25.5193L14.5604 2.5193Z" :fill="subscribe === id ? '#E44240' : '#fff'" />
              </svg>
            </div>
            <div class="absolute flex flex-col items-center gap-2px w-full top-[50%] left-[50%] transform translate-x-[-45%] translate-y-[-50%]">
              <p
                class="font-sans font-600 text-12px leading-tight text-[#fff] opacity-25 line-through"
                :class="{ '!text-body !opacity-100' : subscribe === id }"
              >
                {{fullprice}}
              </p>
              <p
                class="font-sans font-700 text-16px leading-none text-center text-red opacity-50"
                :class="{ '!text-[#fff] !opacity-100' : subscribe === id }"
              >
                {{cost}}
              </p>
              <p
                class="font-sans font-600 text-12px leading-none text-center text-[#fff] opacity-50"
                :class="{ '!opacity-100' : subscribe === id }"
              >
                per day
              </p>
            </div>
          </div>
        </label>
      </div>
      <p v-if="pickedTarifParams.discountType === 1" class="p-16px my-32px mx-0 font-sans font-400 text-12px leading-normal text-[#fff] opacity-50 border-2px border-[#FFFFFF3F] rounded-9px">
        By clicking «Get my plan», I agree to pay <b>{{ pickedTarifParams.discountPrice }}</b> for my plan and that if I do not cancel before the end of the <b>{{ pickedTarifParams.subscriptionPeriod }}</b> introductory plan, Dr. Kegel will automatically charge my payment method the regular price <b>30.99 USD</b> every <b>1 month</b> thereafter until I cancel. I can cancel online by visiting Billing Center in your personal account on website or in the app to avoid being charged for the next billing cycle.
      </p>
      <p v-else class="p-16px my-32px mx-0 font-sans font-400 text-12px leading-normal text-[#fff] opacity-50 border-2px border-[#FFFFFF3F] rounded-9px">
        By clicking «Get my plan», I agree to pay <b>{{ pickedTarifParams.discountPrice }}</b> for my plan and that if I do not cancel before the end of the <b>{{ pickedTarifParams.subscriptionPeriod }}</b> introductory plan, Dr. Kegel will automatically charge my payment method the regular price <b>{{ pickedTarifParams.fullPrice }}</b> every <b>{{ pickedTarifParams.subscriptionPeriod }}</b> thereafter until I cancel. I can cancel online by visiting Billing Center in your personal account on website or in the app to avoid being charged for the next billing cycle.
      </p>
      <button @click="openPaymentPopup" :disabled="!subscribe" class="rounded-100px font-sans py-20px px-0 w-full mx-auto mt-0 mb-64px font-700 text-18px leading-tight text-center text-[#fff] border-none block cursor-pointer" :class="[superDiscount.theme ? 'bg-blue shadow-button-blue' : 'bg-red shadow-button-red']">
        Get my plan
      </button>

      <Guarantee
        :borderColor="superDiscount.theme ? '#5773D6' : '#E44240'"
        textColor="#fff"
        :icon="superDiscount.theme ? 'blue' : 'red'"
      />
    </div>
    <div class="py-48px px-32px max-w-600px mx-auto">
      <FaqBlock :items="faqQuestions.faq" />
      <div class="mt-48px">
        <div class="mb-24px">
          <div class="flex items-center mb-12px">
            <img src="../assets/images/svg/icon_notification.svg" class="mr-8px" />
            <h3 class="m-0 font-displayBold font-600 text-16px leading-normal text-body">
              Get notifications
            </h3>
          </div>
          <p class="font-sans font-400 text-14px leading-normal text-body">
            You will get an email confirmation every time your subscription renews
          </p>
        </div>
        <div class="mb-24px">
          <div class="flex items-center mb-12px">
            <img src="../assets/images/svg/icon_safe.svg" class="mr-8px" />
            <h3 class="m-0 font-displayBold font-600 text-16px leading-normal text-body">
              Your information is safe
            </h3>
          </div>
          <p class="font-sans font-400 text-14px leading-normal text-body">
            We will not sell or rent your personal contact information for any marketing purposes.
          </p>
        </div>
        <div class="mb-24px">
          <div class="flex items-center mb-12px">
            <img src="../assets/images/svg/icon_secure.svg" class="mr-8px" />
            <h3 class="m-0 font-displayBold font-600 text-16px leading-normal text-body">
              Secure checkout
            </h3>
          </div>
          <p class="font-sans font-400 text-14px leading-normal text-body">
            All information is encrypted and transmitted using Secure Sockets Layer protocol.
          </p>
        </div>
        <div >
          <div class="flex items-center mb-12px">
            <img src="../assets/images/svg/icon_help.svg" class="mr-8px" />
            <h3 class="m-0 font-displayBold font-600 text-16px leading-normal text-body">
              Need help?
            </h3>
          </div>
          <p class="font-sans font-400 text-14px leading-normal text-body">
            Contact us here: <a href="mailto:contact@kegel-plan.com" class="info-block__link">contact@kegel-plan.com</a>
          </p>
        </div>
        <a @click="scrollToPaymentBlock" class="bg-red rounded-9px py-20px px-0 w-full mx-auto mt-48px mb-0 font-700 text-18px leading-tight text-center text-[#fff] border-none block no-underline cursor-pointer shadow-button-red">
          Get my plan
        </a>
      </div>
    </div>
    <Footer />
    <vpopup
        v-if="paymentPopup"
        textTitle="Select Payment method"
        position="bottom"
        @closePopup="cancelPayment"
        close-button
    >
      <PaymentFormCompanentModal
          @error="paymentError"
          @success="nextUrl"
          @clickButton="closeWindowError"
          :item="this.item"
          :auth_price="this.price"
          :discount="pickedTarifParams.discount"
          :discountAmount="pickedTarifParams.discountAmount"
          :discountPrice="pickedTarifParams.discountPrice"
          :fullPrice="pickedTarifParams.fullPrice"
          :subscription="pickedTarifParams.subscriptionName"
          :subscriptionDate="pickedTarifParams.subscriptionPeriod"
          :theme="superDiscount.theme"
          id="paymentForm" />
    </vpopup>
    <vpopup
      v-if="windowError"
      error
      :close-button="false"
    >
      <div class="flex items-center">
        <p class="opacity-75 font-sans font-500 text-red text-14px leading-normal">
          Your payment was declined. Please try again or use a different payment method.
        </p>
        <img
          class="ml-16px cursor-pointer"
          src="@/assets/images/svg/icon_btn-close-communicate.svg"
          alt="error"
          @click="closeWindowError"
        >
      </div>
    </vpopup>
    <SuperDiscountWindow
      v-if="superDiscount.popup"
      :goal="purpose"
      @close="closeSuperDiscountPopup"
    />
  </div>
  <!-- При выборе оплаты класс active задать одной из button line 223,232, 235 -->
  </template>
  <script>
  import { mapGetters } from 'vuex';
  import ButtonField from '@/components/ui/Button.vue';
  import vpopup from '@/components/modal/v-popup.vue';
  import faqQuestions from "@/constants/landingV3";
  import countdown from '@/components/Countdown.vue';
  import SuperDiscountWindow from '@/components/SuperDiscountWindow.vue';
  import SuperDiscountGift from '@/components/SuperDiscountGift.vue';
  import Guarantee from '@/components/Guarantee.vue';
  import FaqBlock from '@/components/common/FaqBlock.vue';
  import Footer from '@/components/Footer.vue';
  import RatingStars from '@/components/RatingStars.vue';
  import PaymentFormCompanentModal from '@/components/PaymentFormCompanentModal.vue';
  import { getItem } from '@/common/localStorage';
  import dayjs from 'dayjs';
  import '@/assets/css/animations.css'

  export default {
    name: 'LandingView',
    inject: ['mixpanel'],
    components: {
      ButtonField,
      vpopup,
      countdown,
      PaymentFormCompanentModal,
      SuperDiscountWindow,
      SuperDiscountGift,
      Guarantee,
      FaqBlock,
      Footer,
      RatingStars
  },
    data() {
      return {
        item: localStorage.getItem('LandingItem'),
        superDiscount: {
          popup: false,
          theme: false,
        },
        timer: true,
        superDiscWindow: localStorage.getItem('superDiscWindow'),
        subscribe: 2,
        apple_pay: true,
        paymentPopup: false,
        faqQuestions,
        blockFixed: false,
        base: {},
        numreview: 3,
        track: 0,
        windowError: false,
        numTimeError:0,
        polling: null,
        price: localStorage.getItem('price'),
        numanimate: 1,
        show: false,
        imageitem: require(`@/assets/images/json/Step_1_1.json`),
        AddPurposeCom: false,
        addItem: false,
        numanim: null,
      };
    },
    watch: {
      timer(newValue) {
        if (!newValue) {
          console.log('destroued')
          setTimeout(() => {
            this.timer = true
          }, 200)
        }
      },
    },
    methods: {
      scrollToPaymentBlock() {
        const el = this.$refs["payment-block"];
        const y = el.getBoundingClientRect().top + window.pageYOffset - 50;

        window.scrollTo({top: y, behavior: 'smooth'});
        //.scrollIntoView({ behavior: "smooth", block: 'center'})
      },
      superDiscountCheck() {
        const superDiscount = JSON.parse(localStorage.getItem('superDiscount'))
        this.superDiscount.theme = superDiscount ? superDiscount : false;
        if (this.superDiscount.theme) {
          this.superDiscount.popup = true        }
      },
      setDate(index) {
        return dayjs().add(index,'month').format("MMM")
      },
      closeSuperDiscountPopup() {
        this.superDiscount.popup = false;
        localStorage.setItem('superDiscWindow', true)
        localStorage.removeItem('timer')
        this.timer = false
        const tarifSelectorElem = document.getElementById('selectPlan');
        tarifSelectorElem.scrollIntoView()
        document.body.style.overflow = 'unset'
        this.subscribe = 2;
      },
      openPaymentPopup() {
        this.paymentPopup = true;
        document.body.style.overflow = 'hidden'
        localStorage.setItem('superDiscount', true)
        const pickedSubscription = {
          id: this.pickedTarifParams.discountType,
          name: this.pickedTarifParams.subscriptionPeriod,
          superDiscount: this.pickedTarifParams.superDiscount,
          period: this.pickedTarifParams.subscriptionPeriod,
          fullPrice: this.pickedTarifParams.fullPrice
        }
        this.$store.commit('SET_SUBSCRIPTION', pickedSubscription)
        localStorage.setItem('usersSubscriptionInfo', JSON.stringify(pickedSubscription))
      },
      cancelPayment() {
        this.paymentPopup = false;
        document.body.style.overflow = 'auto'
        if (!this.superDiscount.theme) {
          this.superDiscount.popup = true;
          this.superDiscount.theme = true;
          document.body.style.overflow = 'hidden'
        }
      },
      nextUrl() {
        this.mixpanel.track('Trial Started',{
          amount: this.price
        })
        this.paymentPopup = false
        document.body.style.overflow = 'unset'
        this.localStorage.setItem("LandingItem", this.item)
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
        }, 10000);
      },
      closeWindowError(e) {
        clearInterval(this.polling);
        this.windowError = false;
      },
      showReview() {
        this.numreview = this.numreview + 2;
        console.log(this.base.length);
      },
    },
    computed: {
      ...mapGetters([
        'tracks',
      ]),
      tarifs() {
        return [
          {
            id: 1,
            name: '1-WEEK PLAN',
            fullprice: '1.50 USD',
            cost: this.superDiscount.theme ? '0.79 USD' : '0.99 USD',
            text: 'per day',
            totalCost: '10.49 USD',
            totalDiscCost: '6.93 USD',
            superDiscPrice: '5.50 USD',
            chargebeeId: this.superDiscount.theme ? "kegel-4-trial-USD-Monthly" : "kegel_1_trial-USD-Monthly"
          },
          {
            id: 2,
            name: '1-MONTH PLAN',
            fullprice: '1.00 USD',
            cost: this.superDiscount.theme ? '0.39 USD' : '0.49 USD',
            text: 'per day',
            totalCost: '30.99 USD',
            totalDiscCost: '15.19 USD',
            superDiscPrice: '11.99 USD',
            chargebeeId: this.superDiscount.theme ? "kegel-5-trial-USD-Monthly" : "kegel-2-trial-USD-Monthly"
          },
          {
            id: 3,
            name: '3-MONTH PLAN',
            fullprice: '0.59 USD',
            cost: this.superDiscount.theme ? '0.24 USD' : '0.29 USD',
            text: 'per day',
            totalCost: '53.19 USD',
            totalDiscCost: '25.99 USD',
            superDiscPrice: '21.49 USD',
            chargebeeId: this.superDiscount.theme ? "kegel-6-trial-USD-Every-3-months" : "kegel-3-trial-USD-Every-3-months"
          }
        ]
      },
      pickedTarifParams() {
        const priceParams = {
          subscriptionPeriod: '',
          fullPrice: '',
          discountPrice: '',
          discountAmount: '',
          subscriptionName: '',
          discount: null,
          discountOriginal: null,
          superDiscount: this.superDiscount.theme ? true : false,
          discountType: this.subscribe
        };
        switch (priceParams.discountType) {
          case 1:
            priceParams.subscriptionPeriod = '1 week'
            priceParams.fullPrice = '10.49 USD'
            priceParams.discountPrice = this.superDiscount.theme ? '5.50 USD' : '6.93 USD'
            priceParams.discountAmount = this.superDiscount.theme ? '4.99 USD' : '3.56 USD'
            priceParams.subscriptionName = '1-week  Kegel Plan'
            priceParams.discount = this.superDiscount.theme ? 48 : 34
            priceParams.discountOriginal = 34
            priceParams.chargebeeId = this.superDiscount.theme ? "kegel-4-trial-USD-Monthly" : "kegel_1_trial-USD-Monthly"
            this.price = this.superDiscount.theme ? 5.50 : 6.93
            this.item = priceParams.chargebeeId
            break;
          case 2:
            priceParams.subscriptionPeriod = '1 month'
            priceParams.fullPrice = '30.99 USD'
            priceParams.discountPrice = this.superDiscount.theme ? '11.99 USD' : '15.19 USD'
            priceParams.discountAmount = this.superDiscount.theme ? '19.00 USD' : '15.80 USD'
            priceParams.subscriptionName = '1-month  Kegel Plan'
            priceParams.discount = this.superDiscount.theme ? 61 : 51
            priceParams.discountOriginal = 51
            priceParams.chargebeeId = this.superDiscount.theme ? "kegel-5-trial-USD-Monthly" : "kegel-2-trial-USD-Monthly"
            this.price = this.superDiscount.theme ? 11.99 : 15.19
            this.item = priceParams.chargebeeId
            break;
          case 3:
            priceParams.subscriptionPeriod = '3 months'
            priceParams.fullPrice = '53.19 USD'
            priceParams.discountPrice = this.superDiscount.theme ? '21.49 USD' : '25.99 USD'
            priceParams.discountAmount = this.superDiscount.theme ? '31.70 USD' : '27.20 USD'
            priceParams.subscriptionName = '3-months  Kegel Plan'
            priceParams.discount = this.superDiscount.theme ? 60 : 51
            priceParams.discountOriginal = 51
            priceParams.chargebeeId = this.superDiscount.theme ? "kegel-6-trial-USD-Every-3-months" : "kegel-3-trial-USD-Every-3-months"
            this.price = this.superDiscount.theme ? 21.49 : 25.99
            this.item = priceParams.chargebeeId
            break;
        }
        return priceParams;
      },
      graphText() {
        return 'This diagram is non-personalized data based on scientific research. Each individual’s results may vary from person to person.'
      },
      imagechart(){
        if(this.jsLocal == 2){
          if(sessionStorage.getItem('resbtn') == 'Yes'){
            this.imageitem = require(`@/assets/images/json/Step_1_1.json`);
          }else{
            this.imageitem = require(`@/assets/images/json/Step_1_2.json`);
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
    beforeRouteLeave(to, from, next) {
      if (this.paymentPopup) {
        this.paymentPopup = false
        next(false)
      } else {
        next()
      }
    },
    mounted() {
      this.timer = true
      this.superDiscountCheck()
      this.apple_pay = true;
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
    },
  };
  </script>
