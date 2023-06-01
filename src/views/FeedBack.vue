<template>
  <header-layout :fixed="true"/>
  
  <div class="dark-layout light">
    <div class="container-main is-page Final">
      <div class="mw-520">
        <div class="block_icon">
          <img class="thanks" src="@/assets/images/icons/thanks.svg" alt="thanks">
        </div>
        <div class="h2 text-center">
          Thank you for <br>
          your feedback!
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="footer__text">
      Questions? Feel free to contact me at <br>
      <a class="blue" href="mailto:alex@kegel-plan.com" >alex@kegel-plan.com</a>
    </div>
    <div class="footer__address">
      Appercut sp z o o <br>
      Warsaw, Twarda 18, 00-105
    </div>
    <img class="footer__logo" src="@/assets/images/logo_footer.png" alt="footer__logo">
  </div> 
</template>

<script>
import { isSwitchCase } from '@babel/types';


export default {
  name: 'FeedBack',
  inject: ['mixpanel'],
  data(){
    return{

    }
  },
  computed: {

  },
  components: {

  },
  methods: {
    
  },
  mounted(){
  },
  created () {
    var answer = '';
    console.log(this.$route.query);
    switch(this.$route.query.answer) {
      case "1":
        answer = 'Mistake';
        break;
      case "2":
        answer = 'Lack of time';
        break;
      case "3":
        answer = 'Dont Believe';
        break;
      case "4":
        answer = 'Dont Need';
        break;
      case "5":
        answer = 'Other';
        break;
      default:
        answer = '';
        break;
    }
    this.mixpanel.track('Last Mail Feedback', {
      answer: answer
    })
  }
};
</script>

<style lang="scss" scoped>
.block_icon{
  margin: 64px auto 24px;
  display: block;
  width: 100%;
  text-align: center;
  @media (max-width:480px) {
    margin: 24px auto 24px;
  }
}
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
  padding: 32px 0;
  position: fixed;
  bottom: 0;
  color: #ffffff;
  @media (max-width:480px) {
    font-size: 16px;
  }
  &__text{
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;
    a{
      color: #50BBF8;
    }
  }
  &__address{
    margin: 32px 0;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
  }
  &__logo{
    display: block;
    width: 32px;
    margin: 0 auto;
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
.dark-layout{
  min-height: calc(100vh - 200px);
}
@media (max-width: 480px){
  .container-main {
    padding-bottom: 0px; 
  }
}
</style>