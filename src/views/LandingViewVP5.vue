<template>
  <div class="landing">
    {{MyScrollFixed}}
    {{MyScrollModal}}
    {{btnAddPurpose}}
    {{imagechart}}
    <!-- {{backUrlNot}} -->
    <div class="land-wrapper">
      <div v-if="subscribe" class="fixedTime" :class="{'active': blockFixed}">
      <p class="fixedTime__timer__text">
        <span :class="`fixedTime__timer__text--${superDiscount.theme}`">
          {{ pickedTarifParams.discount }}% discount<br>
        </span>
        <span>expires in: </span><countdown v-if="timer" style="display: inline;" />
      </p>
    </div>
    
    <div id="topPage" class="content">
      <h2 class="content__title">
        Your Kegel Plan to improve {{ purpose }} is ready!
      </h2>
      <p class="content__subtitle" v-if="subscribe"><b>Limited offer</b> reserved for 15 minutes</p>
      <div id="blockScroll" class="content__timer" @click="onScroll">
        <div class="content__timer--wrapper">
          <img class="content__timer--glow" src="@/assets/img/lp_v5/glow.png" alt="icon" />
          <img class="content__timer--icon" src="@/assets/img/lp_v5/timer.png" alt="icon" />
        </div>
        <div class="content__timer--body">
          <p class="content__timer--start" :class="[superDiscount.theme ? 'blue' : 'red']">{{pickedTarifParams.discount}}% discount</p>
          <p v-if="timer" class="d-flex content__timer--text">
            Expires in:	&nbsp;  <countdown />
          </p>
        </div>
      </div>
      <div id="trigger1" class="content__date">
        <div class="content__purpose">
          <span>
            Based on your personal goals you can 
          </span>
          <br>
          <span v-if="AddPurposeCom" class="content__purpose--bold">
            <span class="content__purpose--regular">imporve</span> {{ purpose }}
            <span class="content__purpose--regular"> and </span>
            <span>{{ addpurpose }}</span>
          </span>
          <span v-if="!AddPurposeCom">
            <span class="content__purpose--bold">
              <span class="content__purpose--regular">imporve</span> {{ purpose }}
            </span>
          </span>
        </div>
        <div class="content__purpose--red">
            <transition name="slide-fade">
              <span v-if="show" class="block__anim">by {{dataPP3}}</span>
            </transition>
        </div>
      </div>
  
      <div class="graphic">
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
        <div class="graphic__date">
          <p class="graphic__month"
            v-for="(_, idx) of new Array(6)" 
            :key="idx">
            {{setDate(idx)}}
          </p>
        </div>
      </div>
      <p class="graphic__description">
        {{graphText}}
      </p>
      <div id="Benefits" class="benefits" >
        <h2 class="benefits__title">Kegel Plan Benefits</h2>
        <ul class="benefits__list">
          <li class="benefits__item">
            <img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check" />
            <p>Reach your goal and improve <b> {{ purpose }} </b></p>
          </li>
          <li v-if="addpurpose" class="benefits__item">
            <img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check" />
            <p>Improve <b> {{ addpurpose }} </b></p>
          </li>
          <li class="benefits__item" v-if="addItem">
            <img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check" />
            <span>Improve <b>Erective Function</b></span>
          </li>
          <li class="benefits__item" v-if="addItem">
            <img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check" />
            <span>Improve <b>Ejaculation Control</b></span>
          </li>
          <li class="benefits__item">
            <img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check" />
            Pill-free approach
          </li>
          <li class="benefits__item">
            <img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check" />
            Long-lasting improvement
          </li>
          <li class="benefits__item">
            <img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check" />
            Takes <span class="text-bold">&nbsp;5 min a day</span>
          </li>
          <li class="benefits__item">
            <img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check" />
            More happiness for you and for your partner
          </li>
        </ul>
        <RatingStars
          :stars="5"
          amount="42k"
          downloads="2M+"
        />
      </div>
    </div>
  
    <div class="price">
        <div class="reviews container-main">
          <div class="reviews__title">Customer reviews</div>
          {{lengthReviews}}
          <div class="reviews__item light" v-for="(item, key) in base" :key="key" :class="{'active': key < this.numreview }">
              <div class="reviews__top">
                <div>
                  <div class="reviews__topic">{{ item.title }}</div>
                  <div class="reviews__rating">
                      <img v-for="i in item.rating" :key="i" src="@/assets/images/star.png" alt="star-yellow" class="star-yellow">
                  </div>
                </div>
        
                <p class="reviews__name">
                  {{ item.name }}
                </p>
              </div>
        
              <p class="reviews__text">
                {{ item.text }}
              </p>
        
          </div>
        
          <button class="reviews__showMore" v-if="this.base.length > this.numreview" @click="showReview">Show more</button>
        </div>
    <div style="position: absolute; top: 100%; width: 100%; height: 70px" id="selectPlan"></div>
    </div>
  </div>
    <div ref="payment-block" class="payment-block">
      <div v-if="superDiscount.theme">
        <SuperDiscountGift :discount="pickedTarifParams.discount" :discountOriginal="pickedTarifParams.discountOriginal" style="margin: 0 auto 32px; max-width: 311px" />
        <h2 class="payment-block__title">
          Choose Your Plan
        </h2>
      </div>
      <h2 v-else class="payment-block__title">
        Get Your Kegel Plan to improve {{ purpose }}
      </h2>
      <div v-if="superDiscount.theme" class="payment-block__list">
        <label 
          v-for="({id, fullprice, cost, text, name, totalCost, superDiscPrice}, idx) of tarifs" 
          :key="idx"
          class="payment-block__item payment-block__item-blue" 
          :class="{
            'checkedValue': subscribe === id,
            'popular': idx === 1,
            'popularChecked-blue': subscribe === id && idx === 1
            }" 
          >
          <div class="payment-block__label payment-block__label-blue">
            <input 
              class="payment-block__input payment-block__input-blue"
              type="radio" 
              name="subscribe"
              :value="id"
              v-model="subscribe"
            />
            <span class="label label-blue" :class="{'checkedValue': subscribe === id}">
              {{name}}
            </span>
            <div class="label__totalCost">
              <span class="label__totalCost-text"><span class="line">{{ totalCost }}</span> {{ superDiscPrice }}</span>
            </div>
          </div>
          <div 
            class="payment-block__right payment-block__right-blue" 
            :class="{'checkedValue': subscribe === id}"
          >
          <div class="payment-block__triangle">
              <svg width="112" height="56" viewBox="0 0 112 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5604 2.5193C15.4506 0.96143 17.1073 0 18.9016 0H107C109.761 0 112 2.23858 112 5V51C112 53.7614 109.761 56 107 56H18.9016C17.1073 56 15.4506 55.0386 14.5604 53.4807L1.41754 30.4807C0.53916 28.9435 0.539161 27.0565 1.41754 25.5193L14.5604 2.5193Z" :fill="subscribe === id ? '#5773D6' : '#fff'"/>
              </svg>
            </div>
            <div class="payment-block__right-price">
              <p 
              class="payment-block__oldPrice payment-block__oldPrice-blue" 
              :class="{'checkedValue': subscribe === id}"
            >
              {{fullprice }}
            </p>
            <p 
              class="payment-block__newPrice payment-block__newPrice-blue" 
              :class="{'checkedValue': subscribe === id}"
            >
              {{ cost }}
            </p>
            <p 
              class="payment-block__text payment-block__text-blue" 
              :class="{'checkedValue': subscribe === id}"
            >
              {{ text }}
            </p>
            </div>
          </div>
        </label>
      </div>
      <div v-else class="payment-block__list">
        <label 
          v-for="({id, fullprice, cost, text, name, totalCost, totalDiscCost}, idx) of tarifs" 
          :key="idx"
          class="payment-block__item" 
          :class="{
            'checkedValue': subscribe === id,
            'popular': idx === 1,
            'popularChecked': subscribe === id && idx === 1
            }" 
          >
          <div class="payment-block__label">
            <input
              class="payment-block__input"
              type="radio" 
              name="subscribe" 
              :value="id"
              v-model="subscribe"
            />
            <span class="label" :class="{'checkedValue': subscribe === id}">
              {{name}}
            </span>
            <div class="label__totalCost">
              <span class="label__totalCost-text"><span class="line">{{ totalCost }}</span> {{ totalDiscCost }}</span>
            </div>
          </div>
          <div 
            class="payment-block__right" 
            :class="{'checkedValue': subscribe === id}">
            <div class="payment-block__triangle">
              <svg width="112" height="56" viewBox="0 0 112 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5604 2.5193C15.4506 0.96143 17.1073 0 18.9016 0H107C109.761 0 112 2.23858 112 5V51C112 53.7614 109.761 56 107 56H18.9016C17.1073 56 15.4506 55.0386 14.5604 53.4807L1.41754 30.4807C0.53916 28.9435 0.539161 27.0565 1.41754 25.5193L14.5604 2.5193Z" :fill="subscribe === id ? '#E44240' : '#fff'"/>
              </svg>
            </div>
            <div class="payment-block__right-price">
              <p 
              class="payment-block__oldPrice" 
              :class="{'checkedValue': subscribe === id}"
            >
              {{fullprice }}
            </p>
            <p 
              class="payment-block__newPrice" 
              :class="{'checkedValue': subscribe === id}"
              >
              {{ cost }}
            </p>
            <p 
              class="payment-block__text" 
              :class="{'checkedValue': subscribe === id}"
              >
              {{ text }}
            </p>
            </div>
          </div>
        </label>
      </div>
      <p v-if="pickedTarifParams.discountType === 1" class="payment-block__description">
        By clicking «Get my plan», I agree to pay <b>{{ pickedTarifParams.discountPrice }}</b> for my plan and that if I do not cancel before the end of the <b>{{ pickedTarifParams.subscriptionPeriod }}</b> introductory plan, Dr. Kegel will automatically charge my payment method the regular price <b>30.99 USD</b> every <b>1 month</b> thereafter until I cancel. I can cancel online by visiting Billing Center in your personal account on website or in the app to avoid being charged for the next billing cycle.
      </p>
      <p v-else class="payment-block__description">
        By clicking «Get my plan», I agree to pay <b>{{ pickedTarifParams.discountPrice }}</b> for my plan and that if I do not cancel before the end of the <b>{{ pickedTarifParams.subscriptionPeriod }}</b> introductory plan, Dr. Kegel will automatically charge my payment method the regular price <b>{{ pickedTarifParams.fullPrice }}</b> every <b>{{ pickedTarifParams.subscriptionPeriod }}</b> thereafter until I cancel. I can cancel online by visiting Billing Center in your personal account on website or in the app to avoid being charged for the next billing cycle.
      </p>
      <button @click="openPaymentPopup" :disabled="!subscribe" class="payment-block__button" :class="[superDiscount.theme ? 'blue blue-shadow' : 'red-shadow']">
        Get my plan
      </button>

      <Guarantee
        :borderColor="superDiscount.theme ? '#5773D6' : '#E44240'"
        textColor="#fff"
        :icon="superDiscount.theme ? 'blue' : 'red'"
      />
    </div>
    <div class="questions">
      <FaqBlock :items="faqQuestions.faq" />
      <div class="info-block">
        <div class="info-block__item">
          <div class="info-block__top">
            <img src="../assets/img/icons/icon_notification.svg" class="info-block__icon" />
            <h3 class="info-block__title">
              Get notifications
            </h3>
          </div>
          <p class="info-block__text">
            You will get an email confirmation every time your subscription renews
          </p>
        </div>
        <div class="info-block__item">
          <div class="info-block__top">
            <img src="../assets/img/icons/icon_safe.svg" class="info-block__icon" />
            <h3 class="info-block__title">
              Your information is safe
            </h3>
          </div>
          <p class="info-block__text">
            We will not sell or rent your personal contact information for any marketing purposes.
          </p>
        </div>
        <div class="info-block__item">
          <div class="info-block__top">
            <img src="../assets/img/icons/icon_secure.svg" class="info-block__icon" />
            <h3 class="info-block__title">
              Secure checkout
            </h3>
          </div>
          <p class="info-block__text">
            All information is encrypted and transmitted using Secure Sockets Layer protocol.
          </p>
        </div>
        <div class="info-block__item">
          <div class="info-block__top">
            <img src="../assets/img/icons/icon_help.svg" class="info-block__icon" />
            <h3 class="info-block__title">
              Need help?
            </h3>
          </div>
          <p class="info-block__text">
            Contact us here: <a href="mailto:contact@kegel.men" class="info-block__link">contact@kegel.men</a>
          </p>
        </div>
        <a @click="scrollToPaymentBlock" class="info-block__button red-shadow">
          Get my plan
        </a>
      </div>
    </div>
    <Footer />
    <vpopup 
      v-if="paymentPopup" 
      textTitle="Select Payment method" 
      class="payment-popup"
      @closePopup="cancelPayment"
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
      class="windowError"
      v-if="windowError"
      :close-button="false"
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
    <SuperDiscountWindow 
      v-if="superDiscount.popup && !superDiscWindow" 
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
  import btnComponent from '@/components/questions/btnPopup.vue';
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
  
  
  export default {
    name: 'LandingView', 
    inject: ['mixpanel'],
    components: {
      ButtonField,
      vpopup,
      btnComponent,
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
        version: getItem('ver'),
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
      paymentPopup(newValue, oldValue) {
        if (oldValue && !newValue && !this.superDiscount.theme) {
          this.superDiscount.popup = true;
          this.superDiscount.theme = true;
          document.body.style.overflow = 'hidden'
        }
      }
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
      },
      nextUrl() {
        this.mixpanel.track('Trial Started',{
          amount: this.price
        })
        // setTimeout(() => {
        //   this.$router.push("AddressPage");
        // }, 0);
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
            chargebeeId: "kegel_1_trial-USD-Monthly"
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
            chargebeeId: "kegel_2_trial-USD-Monthly"
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
            chargebeeId: "kegel-3-trial-USD-Every-3-months"
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
            priceParams.chargebeeId = "kegel_1_trial-USD-Monthly"
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
            priceParams.chargebeeId = "kegel_2_trial-USD-Monthly"
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
            priceParams.chargebeeId = "kegel-3-trial-USD-Every-3-months"
            this.price = this.superDiscount.theme ? 21.49 : 25.99 
            this.item = priceParams.chargebeeId
            break;
        }
        return priceParams;
      },
      graphText() {
        switch (this.version) {
          case 1:
            return 'This diagram is non-personalized data based on scientific research. Each individual’s results may vary from person to person.'
          case 5:
            return 'This diagram is non-personalized data based on scientific research. Each individual’s results may vary from person to person.'
          default:
            return 'This diagram is non-personalized data based on scientific research'
        }
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
  
  <style lang="scss" scoped>
@import '@/assets/css/animations.css';
  .payment-popup {
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
  }
  .questions {
    padding: 48px 32px;
    max-width: 520px;
    margin: 0 auto;
  }
  .info-block {
    margin-top: 48px;

    &__item {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    &__top {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }

    &__text {
      font-family: "SF Pro Text Regular";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #111113;

    }

    &__title {
      margin: 0;
      font-family: "SF-Pro-Display-Bold";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 135%;
      color: #111113;
    }

    &__icon {
      margin-right: 8px;
    }

    &__link {
      color: #E44240;
      text-decoration: none;
      font-weight: 600;
    }

    &__button {
    background: #E44240;
    border-radius: 9px;
    font-family: "SF Pro Text Regular";
    padding: 20px 0;
    width: 100%;
    margin: 32px auto 0;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.16;
    text-align: center;
    color: #FFFFFF;
    border: none;
    display: block;
    text-decoration: none;
    cursor: pointer;
  }
  }

.payment-block {
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
  background: #111113;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 32px;
  }

  &__title {
    color: #fff;
    margin: 0px auto 8px;
    font-size: 36px;
    line-height: 135%;
    margin: 0px auto 24px;
    text-align: center;
    font-family: "SF-Pro-Display-Bold";
    @media (max-width:480px) {
      font-size: 25px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    max-width: 430px;
    margin: 0 auto;
  }

  .label {
    &__totalCost {
      display: flex;
      width: 80%;
      margin-left: auto;

      &-text {
        font-family: "SF Pro Text Regular";
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 1.4;

        & .line {
          text-decoration-line: line-through;
        }
      }
    }
    padding-left: 30px;
  }

  .payment-block__item.checkedValue {
    border: 1px solid #E44240;

    .label.checkedValue {
      color: #fff;
    }

    & .payment-block__right.checkedValue .payment-block__triangle svg {
      opacity: 1;
    }
    & .payment-block__oldPrice.checkedValue {
      color: #000;

    }
    & .payment-block__newPrice.checkedValue {
      color: #fff;
    }
    & .payment-block__text.checkedValue {
      color: #fff;
    }
  }
  .payment-block__item-blue.checkedValue {
    border: 1px solid #5773D6;
    .label-blue.checkedValue {
      color: #fff;
    }

    & .payment-block__oldPrice-blue.checkedValue {
      color: #000;

    }
    & .payment-block__newPrice-blue.checkedValue {
      color: #fff;
    }
    & .payment-block__text-blue.checkedValue {
      color: #fff;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid transparent;
    border-radius: 9px;
    background: #ffffff0e;
    color: #fff;

    width: 100%;
    
    padding: 8px 8px 8px 16px;
    margin: 0 auto;

    position: relative;
    box-sizing: border-box;

    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    &.popular::before {
      content: 'MOST POPULAR';
      position: absolute;
      font-size: 12px;
      top: -10px;
      left: 20px;
      width: fit-content;
      color: #ffffff80;
      background: #29292A;
      border-radius: 50px;
      padding: 3px 10px;
    }
    &.popularChecked::before {
      content: 'MOST POPULAR';
      position: absolute;
      font-size: 12px;
      top: -10px;
      left: 20px;
      width: fit-content;
      background: #E44240;
      color: #fff;
      border-radius: 50px;
      padding: 3px 10px;
    }
    &.popularChecked-blue::before {
      content: 'MOST POPULAR';
      position: absolute;
      font-size: 12px;
      top: -10px;
      left: 20px;
      width: fit-content;
      background: #5773D6;
      color: #fff;
      border-radius: 50px;
      padding: 3px 10px;
    }
  }

  &__label {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 135%;
    color: #ffffff80;
    display: block;
    cursor: pointer;
  }

  &__triangle {
    position: relative;
    & svg {
      opacity: 0.05;
    }
  }

  &__right-price {
    position: absolute;
    top: 11px;
    right: 20px;
  }

  &__oldPrice {
    font-family: "SF Pro Text Regular";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.17;
    text-align: center;
    text-decoration-line: line-through;
    color: #ffffff40;
    mix-blend-mode: normal;
  }

  &__newPrice {
    font-family: "SF Pro Text Regular";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 0.88;
    text-align: center;
    color: #e4424080;
    mix-blend-mode: normal;
    margin: 5px 0;

    &-blue {
      color: #5773d680;
    }
  }

  &__text {
    font-family: "SF Pro Text Regular";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.16;
    text-align: center;
    color: #ffffff80;
    mix-blend-mode: normal;
  }

  &__input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;

    & + span {
      display: flex;
      align-items: center;
    }

    & + span::before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #ffffff26;
      margin-right: 0.75em;
      transition: 0.0s ease all;
      box-sizing: border-box;
      position: absolute;
      margin-left: -30px;
      margin-top: 15px;
    }

    &:checked + span::before {
      background: url('../assets/img/icons/icon_active.png');
      background-size: cover;
      border: none;
    }

    &-blue {
      &:checked + span::before {
        background: url('../assets/img/icons/icon_active-blue.png');
        background-size: cover;
        border: none;
      }
    }
  }

  &__button {
    background: #E44240;
    border-radius: 100px;
    font-family: "SF Pro Text Regular";
    padding: 20px 0;
    width: 100%;
    margin: 0 auto 64px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.16;
    text-align: center;
    color: #FFFFFF;
    border: none;
    display: block;
    cursor: pointer;

    transition: 0.5s ease all;

    &.blue {
      background: #5773D6;
    }

    &:disabled {
      opacity: 0.3;
      cursor: default;
    }
  }

  &__description {
    padding: 16px;
    margin: 32px 0;
    font-family: "SF Pro Text Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #FFFFFF;
    opacity: 0.5;
    border: 2px solid rgba(255, 255, 255, 0.25);
    border-radius: 9px;
  }

}

  .landing {

    .land-wrapper {
      position: relative;
      max-width: 600px;
      padding: 0 40px;
      margin: 0 auto;
      box-sizing: border-box;
      @media (max-width: 480px) {
        padding: 0 32px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      &__title {
        margin: 0px auto 8px;
        font-size: 36px;
        line-height: 135%;
        margin: 0px auto 24px;
        text-align: center;
        font-family: "SF-Pro-Display-Bold";
        @media (max-width:480px) {
          font-size: 24px;
        }

      }
      &__subtitle {
        font-size: 18px;
        text-align: center;
        line-height: 150%;
        margin-bottom: 16px;
        @media (max-width:480px) {
          font-size: 14px;
        }
        &--bold {
          font-family: "SF Pro Text Semibold";
        }
        &--red {
          font-weight: 600;
          color: #E44240;
        }
      }
      &__timer {
        margin-bottom: 32px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        border-radius: 17px;
        background: #111113;
        width: 100%;
        max-width: 311px;
        margin: 0 auto 32px;
        color: #fff;

        &--wrapper {
          position: relative;
          width: 84px;
          height: 84px;
          margin-left: 10px;
        }

        &--body {
          margin-left: 15px;
        }
  
        &--icon {
          position: absolute;
          width: 60%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

        }

        &--glow {
          position: absolute;
          width: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: glowRotating 10s linear infinite;
        }
  
        &--text {
          font-family: "SF Pro Text Regular";
          font-size: 16px;
          line-height: 150%;
          opacity: 1;
          margin: 0;
          color:#FFFFFF;
        }
  
        &--start {
          font-family: "SF Pro Text Regular";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 1.2;

          &.red {
            color: #E44240;
          }
          &.blue {
            color: #5773D6;
          }
        }
      }
      &__date {
        text-align: center;
        margin-bottom: 0px;
      }
      &__purpose {
        font-size: 18px;
        line-height: 150%;
        @media (max-width:480px) {
          font-size: 16px;
        }
        @media (min-width: 600px) {
          font-size: 20px;
        }
        &--bold {
          font-family: "SF Pro Text Semibold";
        }
        &--regular {
          font-family: "SF Pro Text Regular";
        }
        &--red {
          font-family: "SF Pro Text Bold";
          color: #E44240;
          font-weight: 700;
          font-size: 20px;
          line-height: 150%;
          display: flex;
          width: 100%;
          margin: 0 auto;
          position: relative;
          justify-content: center;
          min-height: 30px;
  
          @media (min-width: 600px) {
              font-size: 24px;
              min-height: 36px;
            }
        }
      }
    }
    .reviews {
      display: flex;
      flex-direction: column;
      margin: 16px auto 40px;
      &__title {
        font-family: "SF-Pro-Display-Semibold";
        font-size: 18px;
        line-height: 150%;
        margin-bottom: 16px;
        text-align: center;
        @media (max-width:480px) {
          font-size: 16px;
        }
        @media (min-width: 600px) {
          font-size: 24px;
        }
      }
      &__item {
        padding: 15px;
        border-radius: 9px;
        margin: 0 auto;
        max-width: 370px;
        width: 100%;
        background-color: #F9F9F9;
        display: none;
        transition: .3s;
        box-sizing: border-box;
        &:not(.light) {
          background-color: #1D1D1F;
        }
  
        &:not(:last-child) {
          margin-bottom: 8px;
        }
  
        @media (min-width: 600px) {
          max-width: 520px;
        }
        &.active {
          display: block;
        }
      }
      &__topic {
        font-size: 18px;
        line-height: 150%;
        font-family: "SF Pro Text Bold";
        @media (max-width: 480px) {
          font-size: 14px;
        }
      }
  
      &__rating {
        display: flex;
        margin-top: 5px;
        & img {
            width: 14px;
            height: 14px;
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
  
      &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
  
        @media (max-width: 480px) {
          font-size: 12px;
        }
      }
  
      &__showMore {
        border: none;
        text-align: center;
        font-size: 14px;
        font-family: "SF Pro Text Bold";
        color: #5773D6;
        background: none;
        cursor: pointer;
        width: 100%;
        margin-top: 8px;
        @media (min-width: 600px) {
            font-size: 18px;
        }
      }
  
      &__top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
      }
    }
  }
  
  .payment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 71px auto 16px;
    @media (max-width:480px) {
      margin: 64px auto 16px;
    }
  
    &__method {
      margin: 0;
      font-family: "SF-Pro-Display-Semibold";
      @media (min-width: 600px) {
          font-size: 18px;
        }
    }
  
    &__button {
      border: none;
      background: transparent;
      font-size: 18px;
      opacity: 0.75;
      font-family: "SF-Pro-Display-Medium";
      cursor: pointer;
  
      @media (max-width:480px) {
        font-size: 14px;
      }
    }
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
    @media (min-width: 600px) {
        font-size: 20px;
    }
  }
  .block__text{
    margin-bottom: 24px;
    line-height: 150%;
    @media (min-width: 600px) {
      & p {
        font-size: 18px;
      }
    }
    .title{
      font-family: "SF-Pro-Display-Semibold";
      margin-bottom: 12px;
    }
    a{
      color: #E44240;
    }
  }
  
  .benefit {
    margin-top: 0px;
    line-height: 150%;
  
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  
  .block-pay{
    width: 100%;
    margin-bottom: 32px;
    @media(min-width: 600px) {
      margin-bottom: 48px;
    }
    .w-100{
      width: 100%;
      margin-top: 48px;
    }
    .flex-wrap{
      flex-wrap: wrap;
      width: 450px;
      margin-top: 48px;
      @media (max-width:480px) {
        max-width: 270px;
        justify-content: center;
      }
      p{
        font-family: "SF Pro Text Regular";
        font-size: 16px;
        @media (min-width: 600px) {
          font-size: 18px;
        }
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
      margin-bottom: auto;
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
  
  .mw-300{
    max-width: 300px;
    margin: 0px auto;
  }
  
  .mb-32{
    margin-bottom: 32px;
  }
  .fs-16-14{
    font-size: 18px;
    @media (max-width:480px) {
      font-size: 14px;
    }
  }
  hr{
    color: #F1F3F9;
    background: #F1F3F9;
    border: none;
    height: 1px;
    max-width: 520px;
    margin: 0 auto;
    padding: 0;
    @media (max-width:480px) {
      max-width: 320px;
    }
  }
  
  .popup_wraper{
    h2{
      margin: 0 0 16px;
      font-family: "SF-Pro-Display-Bold";
      font-size:24px;
    }
    p{
      font-size: 18px;
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
      @media (min-width: 600px) {
          font-size: 16px;
        }
    }
    .text__bottom_btn{
      font-size: 12px;
      line-height: 135%;
      margin-top: 8px;
      text-align: center;
      margin-bottom: 0;
        @media (min-width: 600px) {
            font-size: 16px;
          }
    }
    .desktop-center{
      text-align: center;
      margin: 8px 0 12px;
      @media (max-width:480px) {
        text-align: left;
        width: 100%;
      }
      @media (min-width: 600px) {
        margin: 16px 0;
      }
    }
  }
  .windowError{
    display: flex;
    justify-content: center;
    align-items: top;
    position: fixed;
    z-index: 999;
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
    position: fixed;
    display: block;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    padding: 16px 32px;
    background: #111113;
    z-index: 2;
    color: #FFFFFF;
    top:0; left:0; right:0;
    @media (max-width:600px) {
      padding: 21px 0px;
      max-width: 600px;
    }
    p{
      padding: 0;
      margin: 0;
    }

    &__timer__text {
      display: block;
      font-weight: 800;

      &--false {
        color: #E44240;
      }
      &--true {
        color: #5773D6;
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
    @media (min-width: 600px) {
      margin: 57px auto 0;
    }
  }
  // reviews
  
  
  .star-yellow {
    max-width: 14px;;
    height: auto;
  }
  
  .price{
    max-width: 600px;
    margin: 0 auto;
    position: relative;

    &__title {
      background: #F1F3F9;
      padding: 24px 38px;
      font-family: "SF-Pro-Display-Semibold";
      font-size: 18px;
      line-height: 150%;
      @media (max-width:480px) {
        padding: 16px 32px;
        font-size: 14px;
  
      }
    }
    &__list {
      font-size: 18px;
      max-width: 520px;
      margin: 16px auto;
      padding: 0 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width:480px) {
        font-size: 14px;
      }
      &--line {
        text-decoration: line-through;
        margin-right: 4px;
        opacity: 0.5;
      }
      &--bold {
        font-family: "SF Pro Text Semibold";
      }
      &--small {
        font-size: 16px;
        @media (max-width:480px) {
          font-size: 11px;
        }
      }
    }
    &__after {
      display: flex;
      flex-direction: column;
      margin: 0;
      align-items: end;
    }
  
    &__description {
      padding: 16px 32px;
      margin: 0 auto;
      line-height: 150%;
      opacity: 0.5;
      @media (max-width:480px) {
        font-size: 14px;
      }
    }
  }
  
  .graphic {
    margin: 32px auto;
    text-align: center;
    width: 100%;
    @media (min-width: 600px) {
        max-width: 520px;
      }
    img {
      width: 100%;
      height: auto;
    }
  
    &__date {
      display: flex;
      justify-content: space-between;
      margin: 0 12%;
    }
  
    &__month {
      margin: 12px 0 0;
      font-size: 18px;
      color: #111113;
      @media (max-width: 480px) {
          margin: 9px 0 0;
          font-size: 12px;
      }
    }
  
    &__description {
      font-size: 14px!important;
      max-width: 450px;
      margin: 0 auto;
      opacity: 0.5;
      text-align: center;
      @media (min-width: 600px) {
        max-width: 520px;
      }
    }
  }
  
  .benefits {
    &__title {
      font-family: "SF-Pro-Display-Bold";
      font-size: 20px;
      margin: 32px auto;
      text-align: center;
      @media (min-width: 600px) {
        font-size: 24px;
        margin: 32px auto 52px;
      }  
    }
    &__list {
      max-width: 310px;
      margin: 0 auto 48px;
      padding: 0;
      @media (min-width: 600px) {
          max-width: 375px;
        }
    }
    &__item {
      list-style-type: none;
      display: flex;
      align-items: center;
      font-family: "SF Pro Text Regular";
      font-size: 16px;
      margin-bottom: 16px;
      line-height: 150%;
      @media (min-width: 600px) {
        font-size: 18px;
      }
      img{
        margin-right: 20px;
        width: 16px;
        height: 16px;
        display: block;
        @media (min-width: 600px) {
          width: 24px;
          height: 24px;
        }
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
  
  .text-bold{
    font-family: "SF Pro Text Semibold";
  }
  .bottom_img{
    font-size: 14px!important;
    max-width: 450px;
    margin: 0 auto;
    @media (min-width: 600px) {
      max-width: 520px;
    }
  }
  .fixedTime__timer {
    font-family: "SF Pro Text Bold";
  }
  .h200{
    display: block;
    height: 168px;
  }
  
  .mt-64 {
    margin-top: 64px;
  }
  
  .price-padding {
    padding-bottom: 170px;
    @media (min-width: 600px) {
      padding-bottom: 160px;
    }
  }
  
  .check {
    display: block;
    margin-right: 20px;
    width: 14px;
    height: 14px;
  }
  
  .price-trial {
    margin: 16px auto;
  }
  
  input, textarea{outline:none;}
  input:active, textarea:active{outline:none;}
  :focus {outline:none;}
  textarea {resize:none;}
  textarea {resize:vertical;}
  textarea {resize:horizontal;}
  </style>
  