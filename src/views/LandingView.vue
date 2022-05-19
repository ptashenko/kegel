<template>
<div class="landing">
  <header-layout :fixed="true"/>
  {{MyScrollFixed}}
  {{MyScrollModal}}
  <div 
    class="fixed" 
    :class="{'active': blockFixed}"
  >
    <div class="fixed__timer">
      <p class="fixed__timer__text">7-day free trial offer expires in:</p>
      <div class="fixed__timer__number"> 
        <countdown />
      </div>
    </div>
  </div>
  
  <div class="dark-layout light" >
    <div class="container-main is-page land">
      <div class="landing__content">
        <div class="d-flex align-items-center justify-content-center flex-column">
          <div class="d-flex flex-column block__timer" >
            <div class="h2">
              Your Kegel Plan to {{ purpose }} is ready!
            </div>
            <p class="p-14">The personal trial is <b>reserved for 15 minutes:</b></p>
            <div class="layout__buttons">
              <div id="blockScroll" class="layout__button"  @click="onScroll">
                <div class="layout__button-icon">
                  <img src="@/assets/images/icons/icon_timer.svg" alt="icon">
                </div>
                <div>
                  <p>
                    Time left: 
                    <countdown />
                  </p>
                  <p>Scroll down to start!</p>
                </div>
              </div>
            </div>
            <div id="trigger1" class="date">
              <div >
                Based on your personal goals you can 
                {{ purpose }}
              </div>
              <div>
                and  {{ addpurpose }}
              </div>
              <span class="by">by {{moment().add(getRandomArbitrary(1, 7),'days').format("DD")}}  {{moment().add(3,'month').format("MMM")}}</span>
            </div>

            <div class=" layout__thumbnail">
              <img src="@/assets/images/content/reviews.svg" alt="img">
              <div class="block__data">
                <p class="block__data__item">{{moment().add(0,'month').format("MMM")}}</p>
                <p class="block__data__item">{{moment().add(1,'month').format("MMM")}}</p>
                <p class="block__data__item">{{moment().add(2,'month').format("MMM")}}</p>
                <p class="block__data__item">{{moment().add(3,'month').format("MMM")}}</p>
                <p class="block__data__item">{{moment().add(4,'month').format("MMM")}}</p>
                <p class="block__data__item">{{moment().add(5,'month').format("MMM")}}</p>
              </div>
            </div>
            <p class="p-14 opac_5">*This diagram is a non personalized data based on scientific research</p>
            <div class="h2 inside">
              Kegel Plan Benefits
            </div>
            <ul>
              <li class="li">
                <span><img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check"></span>
                Reach your goal and {{textpurpose}}
              </li>
              <li class="li">
                <span><img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check"></span>
                Reach your goal and {{textaddpurpose}}
              </li>
              <li class="li"  v-for="benefit in Benefits" :key="benefit.id">
                <span><img src="@/assets/images/icons/check_no_bg_black.svg" alt="check" class="check"></span>
                {{benefit}}
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
      <span>${{price}}</span>
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
    <i>*Billed on [дата] unless cancelled beforehand</i>
  </div>
  <div class="d-flex flex-column  mw-450">
    <div class="reviews__title">Customer reviews</div>
    {{lengthReviews}}
    <div v-for="(item, key) in base" :key="key" >
      <div class="review light" :class="{'active': key == this.numreview}">
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
  </div>

  <button-field
    text='Start my plan'
    theme="Back"
    class="footer-controls__button red"
    @click="showModal"
  />

  <vpopup
  class="popup_wraper"
    textTitle=""
    v-if="popupVisible"
  > 
    <p>
      In view of the pandemic and global health crisis, we are offering the option to try out Kegel Plan for as little as $1 for a 7-day trial*.
    </p>
    <p class="bold">
      Money shouldn't stand in the way of a perfect intimate health and well-being goals. So choose an amount that you think is reasonable to try us out.
    </p>
    <p>
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
</div>

</template>
<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import ButtonField from '@/components/ui/Button.vue';
import vpopup from '@/components/modal/v-popup.vue';
import btnComponent from '@/components/questions/btnPopup.vue';
import countdown from '@/components/Countdown.vue';

export default {
  name: 'LandingView',
  components: {
    ButtonField,
    vpopup,
    btnComponent,
    countdown
  },
  data() {
    return {
      blockFixed: false,
      ggg:0,
      textBtn:'Start my plan',
      textpurpose:'',
      textaddpurpose:'',
      email: null,
      isEmailTouched: false,
      upValue: '',
      Benefits: [
          'Pill-free approach',
          'Long-lasting improvement',
          'Takes 5 min a day',
          'More happiness for you and for your partner',
      ],
      base: {},
      numreview: 0,
      track: 0,
      popupVisible: false,
      isActiveYes: false,
      isActiveNo: false,
      closeActive: false,
      scrollPosition: 0,
      price: 1,
      oldprice: 19.88,
    };
  },
  methods: {
    moment(){
      return moment();
    },
    getRandomArbitrary(min, max){
      return Math.random() * (max - min) + min;
    },
    addLand(){
      console.log('Добавить ленд');
    },
    showModal(){
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
      }
    },
    BtnActiveYes(){
      this.isActiveYes = this.closeActive = true 
      this.isActiveNo = false
      this.price = 1
      this.oldprice = 19.88
    },
    BtnActiveNo(){
      this.isActiveYes = false
      this.isActiveNo = this.closeActive = true
      this.price = 9.73
      this.oldprice = 19.88
    },
  },
  watch:{
    ggg(){
      if(this.ggg == 1){
        this.showModal()
      }
    },

  },
  computed: {
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
          this.ggg = 1
        }else{
        }
      })
    },
    ...mapGetters(['tracks']),
    purpose(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      this.textpurpose = obj.purpose
      return this.textpurpose;
    },
    addpurpose(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      this.textaddpurpose = obj.addpurpose
      return this.textaddpurpose;
    },
    lengthReviews(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      this.track = obj.id
      if(this.track == 3){
        this.base =  this.$store.state.review.msgOkLand
      }else if(this.track == 2){
        this.base = this.$store.state.review.msgPeLand
      }else{
        this.base = this.$store.state.review.msgEdLand
      }
      return console.log(this.track);  ; 
    },
  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
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
.popup_wraper{
  p{
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 150%;
    @media (max-width:480px) {
      font-size: 14px;
    }
  }
  p.bold{
    font-family: "SF Pro Text Semibold";
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
.fixed{
  max-width: 536px;
  opacity: 0;
  transition: .3s;
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
.fixed.active{
  opacity: 1;
}
.footer-controls__button{
  max-width: 310px;
  margin: 48px auto 0;
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
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;

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

// 
.mw-450{
  max-width: 450px;
  margin: 16px auto;
  padding: 0 32px;
}

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
      width: 13px;
      height: 10px;
      display: flex;
      margin-right: 23px;
    }
  }
}

.h2 {
  margin: 0px auto 8px;
  font-size: 30px;
  line-height: 150%;
  margin: 32px auto 24px;
  @media (max-width:480px) {
    font-size: 24px;
  }
}
.h2.inside {
  font-family: "SF Pro Text Semibold";
  font-size: 20px;
  font-weight: 600;
}
.dark-layout{
  padding: 84px 32px 0px;
  .p-14{
    font-size: 14px;
    text-align: center;
    line-height: 150%;
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
  margin-bottom: 59px;
  .by{
    font-family: "SF Pro Text Bold";
    color: #E44240;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    
  }
}

.layout {
  &__buttons{
    margin-bottom: 32px;
    // overflow-y: auto;
    // -ms-overflow-style: none;
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
a:active, a:focus { outline: none; }

input, textarea {outline:none;}
input:active, textarea:active {outline:none;}
:focus {outline:none;}
textarea {resize:none;}
textarea {resize:vertical;}
textarea {resize:horizontal;}
</style>
