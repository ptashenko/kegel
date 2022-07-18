<template>
  <header-layout :fixed="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page Final">
      <div class="mw-520">
        <div class="h2 text-center">
          Your Kegel Plan is waiting for you in the Dr. Kegel app
          <p>Download the app to start</p>
        </div>
      </div>
      <div class="mw-450 d-flex flex-column mb-32 text-center">
        <div class="block-bg d-flex flex-column align-items-center justify-content-center">
          <div class="item-li d-flex align-items-center justify-content-center">
            <img class="check" src="@/assets/images/icons/attantion_icon.svg" alt="check">
            <p class="fs-16-14">
              Important
            </p>
          </div>
          <p class="text"><span class="text-bold">Use only the button or QR code below!</span> If you'll try to use other ways to download the app you'll have to complete the questionnaire and make a purchase again</p>
        </div>
        <button-field
          text='Download now'
          theme="Back"
          class="footer-controls__button "
          :class="{ 'bg-blue': !active, 'red': active }"
        />
        <div class="text-center">
          <div class="text-line">
            <span>or</span>
          </div>
          <p class="title_code">Scan the QR code below</p>
        </div>
        <div class="layout__thumbnail">
          <img src="@/assets/images/content/qr_code_img.svg" alt="qr code img">
        </div>
      </div>
      <div class="block-bottom text-center">
        <p>Special link to your plan was also sent to your email: <span class="blue"> {{email}} </span></p>
      </div>
    </div>
  </div>
  <div class="footer">
      <div class="footer__text">
        Any questions? Contact us at <span class="blue">contact@kegel.men</span>
      </div>
    </div>  
</template>

<script>
import { mapGetters } from 'vuex';
import Review from '@/components/Review.vue';
import vpopup from '@/components/modal/v-popup.vue';
import ButtonField from '@/components/ui/Button.vue';

export default {
  name: 'CodeQR',
  data(){
    return{
      popupVisible: false,
      active: true,
      email:this.$store.state.dataPurporse.emailUser
    }
  },
  computed: {
    ...mapGetters(['tracks', 'contentBy']),
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
    font-size: 30px;
    line-height: 135%;
    @media (max-width:480px) {
      font-size: 24px;
    }
    p{
      font-family: "SF Pro Text Semibold";
      font-size: 18px;
      line-height: 150%;
      margin-top: 24px;
      @media (max-width:480px) {
        font-size: 14px;
        margin-top: 16px;
      }
    }

  }
  .block-bg{
    max-width: 100%;
    padding: 16px 26px;
    background: #F1F3F9;
    border-radius: 9px;
    .text{
      font-size: 16px;
      line-height: 150%;
      margin-top: 16px;
      .text-bold{
        font-family: "SF Pro Text Semibold";
      }
      @media (max-width:480px) {
        font-size: 14px;
      }
    }
    .item-li{
      line-height: 150%;
      font-size: 18px;
      font-family: "SF Pro Text Semibold";
      @media (max-width:480px) {
        font-size: 14px;
      }
      .check{
        margin-right: 4px;
        width: 24px;
        @media (max-width:480px) {
          width: 19px;
        }
      }
    }
  }
  .mw-450{
    max-width: 450px;
    margin: 32px auto 32px;
    @media (max-width:480px) {
      margin: 32px auto 32px;
    }
    .layout__thumbnail{
      display: block;
      max-width: 310px;
      margin: 0 auto 32px;
      @media (max-width:480px) {
        max-width: 210px;
        margin: 0 auto 0px;
      }
      img{
        width: 100%;
      }
    }
    .text-line{
      font-family: "SF Pro Text Medium";
      font-size: 18px;
      line-height: 140%;
      opacity: 0.5;
      width: 100%;
      margin-top: 32px;
      display: block;
      @media (max-width:480px) {
        font-size: 16px;
      }
      :before,:after {
          content: "";
          display: inline-block;
          vertical-align: middle;
          width: 44%;
          height: 1px;
          background-color: #EEEEEE;
          position: relative;
      }
      :before {
          margin-left: -44%;
          left: -8px;
      }
      :after {
          margin-right: -44%;
          right: -8px;
      }
    }
    .title_code{
      font-family: "SF Pro Text Bold";
      font-size: 18px;
      line-height: 140%;
      margin: 32px auto 16px;
      @media (max-width:480px) {
        font-size: 16px;
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
  .block-bottom{
    font-family: "SF Pro Text Semibold";
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 14px;
    @media (max-width:480px) {
      font-size: 16px;
      margin-bottom: 64px;
    }
  }
  .mw-520{
    max-width: 520px;
    margin: 0 auto;
    display: block;
  }
  .footer-controls__button{
    max-width: 230px;
    margin: 48px auto 0;
    z-index: 0;
  }
}
.blue{
    color: #5773D6;
  }
  .bg-blue{
    background: #5773D6;
  }
.footer{
  background: #111113;
  width: 100%;
  display: block;
  max-width: 600px;
  font-family: "SF Pro Text Regular";
  font-size: 18px;
  line-height: 142.34%;
  padding: 0;
  @media (max-width:480px) {
    font-size: 16px;
  }
  .footer__text{
    color: #ffffff;
    text-align: center;
    padding: 48px;
  }
}

.v-popup__submit_btn, .v-popup__btn{
  background-color: rgb(228, 66, 64);
  max-width: 230px;
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
</style>
