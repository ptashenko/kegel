<template>
{{displayLine}}
  <header-layout :fixed="true"/>
  <div 
    class="fixed" 
    :class="{'active': blockFixed}"
  >
    <div class="fixed__timer">
      <p class="fixed__timer__text">7-day free trial offer expires in:</p>
      <div class="fixed__timer__number"> XX:XX</div>
    </div>
  </div>
  
  <div class="dark-layout light" >
    <div class="container-main is-page">
      <div class="landing__content">
        <div class="d-flex align-items-center justify-content-center flex-column">
          <div class="d-flex flex-column">
            <div class="h2">
              Your Kegel Plan to {{ purpose }} is ready!
            </div>
            <p class="p-14">The personal trial is <b>reserved for 15 minutes:</b></p>
            <div class="layout__buttons">
              <div class="layout__button"  @click="onScroll">
                <div class="layout__button-icon">
                  <img src="@/assets/images/icons/icon_timer.svg" alt="icon">
                </div>
                <div>
                  <p>Time left: XX:XX</p>
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
  <div class="d-flex mw-450 align-items-center justify-content-beetwen">
    <div>
      7-day trial*
    </div>
    <div>
      <span class="opac_5">$19.88</span>
      <span>$1</span>
    </div>
  </div>
  <div class="mw-450 trial_description opac_5">
    *You'll have 7 days to see how Kegel Plan uses scientific advances in urology to create long-lasting results
  </div>
  <div class="price">
    <div class="price__text">
      PRICE AFTER TRIAL
    </div>
  </div>
  <div class="d-flex mw-450 align-items-center justify-content-beetwen">
    <div>
      12 weeks plan
    </div>
    <div class="d-flex flex-column align-items-end">
      <span>$79.2*</span>
      <span>(just $6.60/week)</span>
    </div>
  </div>
  <div class="mw-450 trial_description opac_5">
    *Billed on [дата] unless cancelled beforehand
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
    textTitle="Do you want to enhance the orgasms?"
    v-if="popupVisible"
  > 
    <div class="h2"></div>
    <btnComponent
      :class="{ active: isActiveYes }"
      @clickBtn="BtnActiveYes"
      answer="Yes, I do"
    >
    </btnComponent>
    <btnComponent
      :class="{ active: isActiveNo }"
      @clickBtn="BtnActiveNo"
      answer="No, I don't"
    >
    </btnComponent>
    <button 
      class="v-popup__submit_btn"
      :class="{active: closeActive}"
      @click="closePopup"
    >
    Ok 
    </button>
  </vpopup>


</template>
<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import ButtonField from '@/components/ui/Button.vue';
import vpopup from '@/components/modal/v-popup.vue';
import btnComponent from '@/components/questions/btnPopup.vue';


export default {
  name: 'LandingView',
  components: {
    ButtonField,
    vpopup,
    btnComponent,
  },
  data() {
    return {
      blockFixed: true,
      ggg:0,
      textBtn:'Start my plan',
      textpurpose:'',
      textaddpurpose:'',
      closeActive: false,
      email: null,
      isEmailTouched: false,
      upValue: '',
      Benefits: [
          'Reach your goal and [цель]',
          '[доп .цель]',
          'Pill-free approach',
          'Long-lasting improvement',
          'Takes 5 min a day',
          'More happiness for you and for your partner',
      ],
      base: {},
      numreview: 0,
      track: 0,
      popupVisible: false,
      scrollPosition: 0
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
      this.popupVisible = true
    },
    pr(num){
      this.ggg = num;
      console.log(this.ggg);
    },
  },
  watch:{
  
  },
  computed: {
    displayLine(){
      let scrolling = 0
      window.addEventListener('scroll', function() {
            scrolling = pageYOffset;
            this.pr(scrolling)
            return this.pr()
      })
      if(scrolling >= 300){
        this.blockFixed = false 
        console.log(scrolling);   
      }
      
      return console.log(scrolling);
    },
    
    ...mapGetters(['tracks']),
    purpose(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      this.textpurpose = obj.purpose
      return this.textpurpose;
    },
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
.v-popup__submit_btn{
      background-color: #CACACA;
      border:none;
      border-radius: 9px;
      padding: 16px 64px;
      font-family: "SF Pro Text Medium";
      font-size: 18px;
      line-height: 135%;
      color: #ffffff;
      margin-top: 32px;
    }
.v-popup__submit_btn.active{
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
    z-index: 999;
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
  margin: 48px auto;
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
.trial_description{
  padding: 33px 32px 25px;
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
.email__content{
  form{
    text-align: center;
  }
  &__text{
    font-family: "SF Pro Text Regular";
    font-size: 14px;
    line-height: 135%;  
    color: #111113;
    opacity: 0.75;
    margin: 0;
    text-align: center;
  }
  label{
    position: relative;
    text-align: center;
    input{
      background: #F1F3F9;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.04);
      border-radius: 9px;
      border:none;
      font-size: 14px;
      padding: 17px;
      line-height: 135%;
      color: #111113;
      margin: 32px 0;
      width: 375px;
      position: relative;
      @media (max-width: 480px) {
        width: 275px;
      }
      &:focus,:active{
        border: none;
      }
    }
    input::placeholder{
      color: #111113;
      opacity: 0.5;
    }
    .lock{
      position: relative;
      width: 17px;
      img{
        position: absolute;
        top: 0px;
        right: 20px;
      }
    }
  }
  .v-popup__submit_btn{
      background-color: #CACACA;
      border:none;
      border-radius: 9px;
      padding: 16px 16px;
      font-family: "SF Pro Text Medium";
      font-size: 18px;
      line-height: 135%;
      color: #ffffff;
      margin: 0 auto;
      width: 165px;
      
  }
  .v-popup__submit_btn.active{
    background-color: #E44240;
    cursor: pointer;
  }
  &__text__small{
    font-family: "SF Pro Text Regular";
    font-size: 14px;
    line-height: 135%; 
    color: #111113;
    opacity: 0.5;
    text-align: center;
    margin: 32px auto;
    @media (max-width:480px) {
      font-size: 10px;
    }
  }
  .block-fixed{
    position: fixed;
    bottom: 32px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 540px;
    @media (max-width:480px) {
        max-width: 310px;
      }
    .email__content__text__small{
      max-width: 430px;
      font-size: 10px;
      @media (max-width:480px) {
        max-width: 310px;
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
    margin-bottom: 32px;
    text-align: center;

    img {
      max-width: 100%;
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
