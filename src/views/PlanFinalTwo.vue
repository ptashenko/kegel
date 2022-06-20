<template>
  <header-layout :fixed="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page Final">
      <div class="mw-520">
        <div 
          v-if="active" 
          class="h2 text-center"
          :class="{active: active}"
        >
          Add Groin Fitness 
          <p>to accelerate the result</p>
        </div>
        <div v-else class="h2 text-center">
          <span class="blue"> Final Offer:</span> get Groin Fitness at the best deal!
        </div>
      </div>
      <div class="mw-450">
        <video-background 
          :src="require('@/assets/video/mini_vid.mp4')"
          :poster="require(`@/assets/video/mini_vid.png`)"
          class="video"
        >
        </video-background>
      </div>
      <div class="mw-450 d-flex flex-column mb-32">
        <div class="item-li d-flex align-items-center">
          <img v-if="active" class="check" src="@/assets/images/icons/check_red.svg" alt="check">
          <img v-else class="check" src="@/assets/images/icons/icon_check_blue.svg" alt="check">
          <p class="fs-16-14">
            Build groin muscles strength & flexibility
          </p>
        </div>
        <div class="item-li d-flex align-items-center">
          <img v-if="active" class="check" src="@/assets/images/icons/check_red.svg" alt="check">
          <img v-else class="check" src="@/assets/images/icons/icon_check_blue.svg" alt="check">
          <p class="fs-16-14">
            Increase blood flow to intimate organs
          </p>
        </div>
        <div class="item-li d-flex align-items-center">
          <img v-if="active" class="check" src="@/assets/images/icons/check_red.svg" alt="check">
          <img v-else class="check" src="@/assets/images/icons/icon_check_blue.svg" alt="check">
          <p class="fs-16-14">
            Every exercise has video & audio instructions from the coach
          </p>
        </div>
        <img v-if="active" class="diskont" src="@/assets/images/icons/diskont_red.png" alt="">
        <img v-else class="diskont" src="@/assets/images/icons/diskont_blue.png" alt="">
      </div>
      <button-field
        text='Add to my plan'
        theme="Back"
        class="footer-controls__button "
        :class="{ 'bg-blue': !active, 'red': active }"
        @click="nextUrl"
      />
      
      <div v-if="active"
        class="btn_popup"
        @click="showModal"
      >
      I don’t want to accelerate my results &gt;
      </div>
      <div v-else
        class="btn_popup"
        @click="nextUrl"
      >
      I give up accelerated results forever &gt;
      </div>
    </div>
    <div class="mw-520"> 
      <div class="footer__text">
        *Your account will be charged immediately for the add-on services or products selected. Add-on items do not come with a free trial. Sales tax included in order total.
      </div>
    </div>  

    
  </div>
    <vpopup
    class="popup_wraper"
    textTitle="Did you know?"
    v-if="popupVisible"
  > 
    <p>
      <span class="text-semibold">Groin Fitness</span> improves blood flow to the groin, which has a big impact on sexual performance.
    </p>
    <p>
      Bad blood flow to the groin area can put you at <span class="text-semibold"> 50-70% </span> risk of erectile dysfunction. Moreover, lack of physical activity proved to reduce your sexual stamina.
    </p>
    <img src="@/assets/images/content/Final_modal.png" alt="">
    <p class="opacity_05 text-center text-bottom-img">
      *This diagram is a non-personalized illustration based on scientific research.
    </p>
    <div class="block_blue d-flex align-items-center">
      <img src="@/assets/images/icons/icon_present.svg" alt="">
      <p>We want you to be successful, so we're offering <span class="text-bold"> 25% off </span> the Groin Fitness just for you!</p>
    </div>

    <button 
      class="v-popup__submit_btn red active"
      @click="closePopup"
    >
    Continue
    <img src="@/assets/images/arrow-next.svg" class="btn__next" alt="" >
    </button>
  </vpopup>
</template>

<script>
import { mapGetters } from 'vuex';
import Review from '@/components/Review.vue';
import vpopup from '@/components/modal/v-popup.vue';
import ButtonField from '@/components/ui/Button.vue';

export default {
  name: ' ',
  data(){
    return{
      popupVisible: false,
      active: true,
    }
  },
  computed: {
    ...mapGetters(['tracks', 'contentBy']),
    purpose(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      return obj.purpose;
    },
    addpurpose(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      return obj.addpurpose;
    },
  },
  components: {
    Review,
    vpopup,
    ButtonField,
  },
  methods: {
    video(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/video/${path}`);
    },
    image(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/video/${path}`);
    },
    nextUrl(){
      this.$router.push('CodeQR')
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
        this.active = false
      }
    },
  },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
  mounted(){
  }
};
</script>

<style lang="scss" scoped>
.Final{
  .h2 {
    margin-bottom: 32px;
    font-family: "SF-Pro-Display-Bold";
    line-height: 135%;
    font-size: 32px;
    line-height: 135%;
    @media (max-width:480px) {
      font-size: 24px;
    }
  }
  .h2.active {
    margin-bottom: 32px;
    font-family: "SF-Pro-Display-Bold";
    line-height: 135%;
    font-size: 36px;
    line-height: 135%;
    @media (max-width:480px) {
      font-size: 32px;
    }
    p{
      font-family: "SF-Pro-Display-Medium";
      font-size: 24px;
      line-height: 135%;
      @media (max-width:480px) {
        font-size: 20px;
      }
    }

  }
  .blue{
    color: #5773D6;
  }
  .bg-blue{
    background: #5773D6;
  }
  .purpose{
    font-family: "SF Pro Text Regular";
    font-size: 18px;
    line-height: 150%;
    p{
      margin-bottom: 16px;
      @media (max-width:480px) {
        font-size: 14px;
        line-height: 150%;
      }
      span{
        font-family: "SF Pro Text Medium";
      }
    }
  }
  .mw-450{
    max-width: 450px;
    margin: 47px auto 48px;
    @media (max-width:480px) {
      margin: 32px auto 32px;
    }
    .layout__thumbnail{
      display: block;
      max-width: 450px;
      margin: 0 auto 32px;
      img{
        width: 100%;
      }
    }
    .item-li{
      line-height: 150%;
      margin-top: 16px;
      font-size: 18px;
      @media (max-width:480px) {
        font-size: 14px;
      }
      .check{
        margin-right: 18px;
        width: 18px;
        @media (max-width:480px) {
          width: 13px;
        }
      }
    }
    .diskont{
      width: 100%;
      margin: 50px 0 0px;
      @media (max-width:480px) {
        margin: 28px 0 0px;
      }
    }
  }
  .price{
    background: #F1F3F9;
    padding: 16px 74px;
    margin: 0 -32px;
    @media (max-width:480px) {
      padding: 16px 32px;
    }
    &__text{
      font-family: "SF-Pro-Display-Semibold";
      font-size: 16px;
      line-height: 150%;
    }
    &__today{
      font-size: 16px;
      margin-top: 16px ;
      @media (max-width:480px) {
        font-size: 14px;
      }
      .bold{
        font-family: "SF Pro Text Semibold";
      }
      .small{
        font-size: 14px;
        @media (max-width:480px) {
          font-size: 11px;
        }
      }
      .bg_blue{
        padding: 4px 12px;;
        background: #5773D6;
        border-radius: 70px;
        color: #ffffff;
        font-size: 16px;
        line-height: 150%;
        :hover{
          background: #5773D6;
        }
      }
    }
    &__today.mt-32{
      margin-top: 32px;
    }
  }
  .footer-controls__button{
    max-width: 310px;
    margin: 0 auto 0;
    z-index: 0;
  }
  .btn_popup{
    position: relative;
    text-align: center;
    font-family: "SF Pro Text Medium";
    font-size: 16px;
    line-height: 150%;
    opacity: 0.5;  
    margin: 16px auto 48px;  
    cursor: pointer;
    
  }
  
  .mw-520{
    max-width: 520px;
    margin: 0 auto;
    display: block;
  }
  .video{
    max-height: 260px; 
    height: 100vh; 
    max-width: 100%;
    border-radius: 14px;
    @media (max-width:480px) {
      max-height: 210px;
    }
    @media (max-width:440px) {
      max-height: 195px;
    }
    @media (max-width:400px) {
      max-height: 180px;
    }
  }
}
.footer__text{
    font-family: "SF Pro Text Light";
    font-size: 14px;
    line-height: 150%;
    opacity: 0.5;
    text-align: center;
    padding-bottom: 48px;
    @media (max-width:480px) {
      font-size: 12px;
    }
  }
.v-popup__submit_btn, .v-popup__btn{
  background-color: rgb(228, 66, 64);
  border:none;
  border-radius: 9px;
  padding: 16px 37px;
  font-family: "SF Pro Text Medium";
  font-size: 18px;
  line-height: 135%;
  color: #ffffff;
  margin-top: 32px;
}
@media (max-width: 480px){
  .container-main {
    padding-bottom: 0px; 
  }
}
.popup_wraper{
  // max-width: 450px;
  h2{
    font-family: "SF-Pro-Display-Bold";
    font-size: 24px;
    line-height: 135%;
    margin: 16px auto 16px;
    @media (max-width:480px) {
      font-size: 20px;
    }
  }
  p{
    font-size: 16px;
    line-height: 150%;
    font-family: "SF Pro Text Regular";
    opacity: 0.75;
    margin-bottom: 16px;
    .text-semibold{
        font-family: "SF Pro Text Semibold";
      }
      .text-bold{
        font-family: "SF Pro Text Bold";
      }
  }
  img{
    width: 100%;
    margin: 24px 0 16px;
  }
  .text-bottom-img{
    font-size: 14px;
    opacity: 0.5;
    font-family: "SF Pro Text Light";
    @media (max-width:480px) {
      font-size: 12px;
    }
  }
  .block_blue{
    padding: 16px 24px;
    background: #5773D6;
    width: 100%;
    margin:0 -21px ;
    color: #ffffff;
    img{
      max-width: 70px;
      margin: 0;
    }
    p{
      margin: 0;
      margin-left: 16px;
      font-size: 16px;

      @media (max-width:480px) {
        font-size: 13px;
      }
    }
  }
  .v-popup__submit_btn{
    background: #5773D6;
  }
  .btn__next{
    max-width: 14px;
    margin: 0 0 0 12px;
  }
}
</style>
