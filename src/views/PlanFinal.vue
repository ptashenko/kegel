<template>
  <header-layout :fixed="true"/>
  {{btnAddPurpose}}
  {{imagePE}}
  <div class="dark-layout light">
    <div class="container-main is-page Final">
      <div class="mw-520">
        <div class="h2 text-center">
          Looking to increase your chance of success by 4 times? 
        </div>
        <div class="purpose">
          <p>Studies show that people feel more obligated to follow through with something once they've made a strong commitment.</p>
          <p>This principle also applies to improving intimate health. You can 
            <span>{{ purpose }}
            <span v-if="AddPurpose">
              <span class="width-400"> and</span> 
              {{ track.addpurpose }}</span>. 
            </span>
              You just need to commit.
            </p>
          <p>Kegel Plan users who have a strong commitment at the beginning are 4 times more likely to achieve improvements, than users who choose trial</p>
        </div>                    
      </div>
      <div class="mw-450"> 
        <div class=" layout__thumbnail">
          <img src="@/assets/images/content/Step_2_img.png" :alt="Step_2_img">
        </div>

        <div class="desc text-center">
          *According to studies, it needs 12 weeks of Kegel exercises to achieve improvements. Kegel Plan users who have strong commitment are 4 times more likely to finish 12 weeks of Kegel exercises, than users who choose trial
        </div>
      </div>
      <div class="price">
        <div class="price__text">
          Price breakdown
        </div>
      </div>
      <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
          <p class="">
            12-week plan with trial
          </p>
          <span class="bold">$80-${{price}}</span>
      </div>
      <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
        <p class="">
          Skip trial
        </p>
        <span class="bold">-${{trial}}</span>
      </div>
      <hr v-if="!addToDo">
      <div v-if="addToDo">
        <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
          <p class="bg_blue">
            20% off
          </p>
          <span class="bold">-$16</span>
        </div>
        <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
          <p class="">
              Total saving
            </p>
            <span class="bold"> $36</span>
        </div>
        <hr>
      </div>
      <div class="price__today d-flex mw-450 align-items-center justify-content-beetwen">
        <p class="bold">
            Total
          </p>
          <span class="bold"><span class="opacity_05 underline">$80</span> ${{pricenew}}</span>
      </div>
      <button-field
        text='Skip trial and start plan'
        theme="Back"
        class="footer-controls__button red"
        @click="nextUrl"
      />
      <div v-if="btnModal"
        class="btn_popup"
        @click="showModal"
      >
      Continue with trial &gt;
      </div>
      <div v-else
        class="btn_popup"
        @click="nextUrl"
      >
      Continue with trial &gt;
      </div>
    </div>
    <div class="mw-520">
      <div class="footer__text" v-if="!addToDo">
        When you click "Skip Trial and Start Plan", your original trial payment will be charged $60. Your payment method will then be automatically charged $60 every 3 months (your "subscription period") until you cancel. You can cancel anytime before the first day of your next subscription period to avoid automatic renewal. If you cancel before the end of a subscription period, you will not receive a partial refund.
      </div>
      <div class="footer__text" v-else>
        When you click "Skip Trial and Start Plan", your original trial payment will be charged $44. Your payment method will then be automatically charged $44 every 3 months (your "subscription period") until you cancel. You can cancel anytime before the first day of your next subscription period to avoid automatic renewal. If you cancel before the end of a subscription period, you will not receive a partial refund.
      </div>
    </div>  

    
  </div>
    <vpopup
    class="popup_wraper"
    textTitle="Are you sure?"
    v-if="popupVisible"
  > 
    <p>
      We want to help you succeed. Your chances of that increase if you make a commitment now.
    </p>
    <p>
      If you skip your trial and start your plan today, we'll refund your trial payment AND take <span class="text-bold"> an extra 20% off </span>your total.
    </p>
    <button 
      class="v-popup__submit_btn red active"
      @click="closePopup"
    >
    Continue
    </button>
  </vpopup>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
import Review from '@/components/Review.vue';
import vpopup from '@/components/modal/v-popup.vue';
import ButtonField from '@/components/ui/Button.vue';

export default {
  name: 'PlanFinal',
  data(){
    return{
      base: {},
      numreview: 2,
      dataPP1: sessionStorage.getItem('data1'),
      dataPP2: sessionStorage.getItem('data2'),
      popupVisible: false,
      addToDo: false,
      price: sessionStorage.getItem('price'),
      pricenew: 60, 
      trial: 20 - sessionStorage.getItem('price'),
      btnModal: true,
      AddPurpose:false,
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
    btnAddPurpose(){
      if(sessionStorage.getItem('resbtn') == 'Yes'){
        this.AddPurpose = true
      }else{
        this.AddPurpose = false
      } 
    },
    imagePE(){
      let json = localStorage.getItem('track');
      let obj = JSON.parse(json);
      this.track = obj.id
      if(this.track.id == 2 && sessionStorage.getItem('resbtn') == 'Yes'){
        this.imageitem = require(`@/assets/images/json/ED.json`);
      }else if(this.track.id == 3){
        this.AddPurpose = true
      }
      return  console.log(this.imageitem);
    }
  },
  components: {
    Review,
    vpopup,
    ButtonField,
  },
  methods: {
    nextUrl(){
      this.$router.push('PlanFinalTwo')
    },
    image(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/content/${path}`);
    },
    moment(){
      return moment();
    },
    getRandomArbitrary(min, max){
      return Math.random() * (max - min) + min;
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
        this.addToDo = true
        this.pricenew = 44
        this.btnModal = false
      }
    },
  },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.Final{
  .h2 {
    margin-bottom: 32px;
    font-family: "SF-Pro-Display-Bold";
    line-height: 135%;
    font-size: 30px;
    @media (max-width:480px) {
      font-size: 24px;
    }
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
    margin: 0 auto;
    .layout__thumbnail{
      display: block;
      max-width: 450px;
      margin: 0 auto 32px;
      img{
        width: 100%;
      }
    }
    .desc{
      font-family: "SF Pro Text Light";
      font-size: 14px;
      line-height: 150%;
      opacity: 0.5;
      text-align: center;
      margin-bottom: 48px;
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
      }
    }
    &__today.mt-32{
      margin-top: 32px;
    }
  }
  .footer-controls__button{
    max-width: 310px;
    margin: 48px auto 0;
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
  hr{
    color: #F1F3F9;
    background: #F1F3F9;
    border: none;
    height: 1px;
    max-width: 450px;
    margin: 16px auto 0;
    padding: 0;
    @media (max-width:480px) {
      max-width: 320px;
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
    .text-bold{
      font-family: "SF Pro Text Semibold";
    }
  }
}
</style>
