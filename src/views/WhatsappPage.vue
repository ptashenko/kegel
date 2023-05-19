<template>
  <div class="dark-layout light">
    <div class="container-main is-page Final">
      <div class="mw-520">
        <div class="h2 text-center">
          Your Kegel Plan is waiting for you on your email
        </div>
      </div>
      <p class="mw-520 instructions">
        Instruction on <b>how to access and activate your personal plan</b> has been sent to you at <span style="color: #5773D6; font-weight: bold;">{{ EMAILUSER }}</span>
      </p>

      <div class="mw-450 d-flex flex-column mb-32 text-center">
        <div class="block-bg d-flex flex-column align-items-center justify-content-center">
          <div class="item-li d-flex align-items-center justify-content-center">
            <img class="check" src="@/assets/images/icons/attantion_icon.svg" alt="check">
            <p class="fs-16-14">
              Check your spam or promotions folder <b>if you can't find the instruction in your inbox</b>
            </p>
          </div>
        </div>
        <hr class="divider" />
      </div>
      <div class="block-bottom text-center">
        <p class="contacts__questions">
          <img src="@/assets/img/lp_v5/help.svg" />
          Any questions or concerns?
        </p>
       <button class="whatsapp-btn">
        <img src="@/assets/img/lp_v5/svg_watsapp.svg" />
        Text us on WhatsApp
       </button>
      </div>
      <div class="contacts">
        <p class="contacts__email">
          or by email <span class="red">contact@kegel.men</span>
        </p>
        <p class="mw-520 contacts__offer">
          We offer personalized assistance and will promptly contact you to help with any issues or inquiries &#9786;
        </p>
      </div>
    </div>
    <Footer :disclaimer="false" />
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import Footer from '@/components/Footer.vue';

export default {
  name: 'WhatsappPage',
  inject: ['mixpanel'],
  data(){
    return{
      popupVisible: false,
      active: true,
      url: ""
    }
  },
  computed: {
    ...mapGetters(['tracks', 'contentBy']),
    ...mapGetters(['EMAILUSER'])
  },
  components: {
    Footer
  },
  created () {
    this.mixpanel.track('Final Screen Shown')
  },
  beforeRouteLeave (to, from, next) {
    next(false)
  }
};
</script>

<style lang="scss" scoped>
.divider {
  margin: 32px 0;
  opacity: 0.1;
}

.fs-16-14 {
  text-align: left;
  font-family: "SF Pro Text Regular";
}

.contacts {
display: flex;
flex-direction: column;
align-items: center;

  &__questions {
    font-family: "SF-Pro-Display-Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 135%;
    color: #111113;
    margin-bottom: 24px;
  }

  &__email {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #111113;
    margin-bottom: 32px;
  }

  &__offer {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: rgba(17, 17, 19, 0.75);
    padding: 0;
  }
}

.whatsapp-btn {
  background: linear-gradient(0deg, #20CB42, #20CB42), #111113;
  box-shadow: 0px 15px 37px rgba(32, 203, 66, 0.64);
  border-radius: 9px;
  border: none;
  color: #fff;
  font-family: "SF Pro Text Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  padding: 12px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 311px;

  & img {
    width: 36px;
    height: 36px;
    margin-right: 16px;
  }
}

.instructions {
  font-family: "SF Pro Text Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding: 24px 0 0;

  text-align: center;

  /* 111113 */

  color: #111113;
}
.Final{
  max-width: 311px;
  padding-bottom: 64px !important;
  @media (min-width: 600px) {
    max-width: 600px;
  }
  .h2 {
    font-family: "SF-Pro-Display-Bold";
    line-height: 135%;
    font-size: 36px;
    line-height: 135%;
    @media (max-width:480px) {
      font-size: 24px;
    }
    p{
      font-family: "SF Pro Text Semibold";
      font-size: 20px;
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
    padding: 16px;
    background: #F1F3F9;
    border-radius: 9px;
    .text{
      font-size: 18px;
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
        margin-right: 16px;
        width: 32px;
        height: 32px;
      }
    }
  }
  .mw-450{
    max-width: 450px;
    margin: 32px auto 32px;
    @media (max-width:480px) {
      margin: 32px auto 0;
    }
    .layout__thumbnail{
      display: block;
      // max-width: 310px;
      margin: 0 auto 32px;
      @media (max-width:480px) {
        // max-width: 210px;
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
    margin-bottom: 24px;
    @media (max-width:480px) {
      font-size: 16px;
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
.qr-footer{
  background: #111113;
  width: 100%;
  display: block;
  width: 100%;
  font-family: "SF Pro Text Regular";
  font-size: 18px;
  line-height: 142.34%;
  padding: 0;
  @media (max-width:480px) {
    font-size: 16px;
  }
  &__text{
    color: #ffffff;
    text-align: center;
    padding: 24px 48px;
    @media (min-width: 600px) {
      padding: 32px 48px;
    }
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
