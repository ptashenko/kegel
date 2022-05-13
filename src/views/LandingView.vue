<template>
  <header-layout :fixed="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page">
      <div class="landing__content">
        <div class="d-flex align-items-center justify-content-center flex-column">
          <div class="d-flex flex-column">
            <div class="h2">
              Your Kegel Plan to {{ purpose }} is ready!
            </div>
            <p class="p-14">The personal trial is <b>reserved for 15 minutes:</b></p>
            <div class="layout__buttons">
              <div class="layout__button">
                <div class="layout__button-icon">
                  <img src="@/assets/images/icons/icon_timer.svg" alt="icon">
                </div>
                <div>
                  <p>Time left: XX:XX</p>
                  <p>Scroll down to start!</p>
                </div>
              </div>
            </div>
            <div class="date">
              <div >
                Based on your personal goals you can 
                {{ purpose }} and  {{ addpurpose }}
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
              <li class="li">Reach your goal and [цель]</li>
              <li class="li">[доп .цель]</li>
              <li class="li">Pill-free approach</li>
              <li class="li">Long-lasting improvement</li>
              <li class="li">Takes 5 min a day</li>
              <li class="li">More happiness for you and for your partner</li>
            </ul>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'LandingView',
  components: {
  },
  data() {
    return {
      textpurpose:'',
      textaddpurpose:'',
      closeActive: false,
      email: null,
      isEmailTouched: false,
      upValue: '',
    };
  },
  methods: {
    moment(){
      return moment();
    },
    getRandomArbitrary(min, max){
      return Math.random() * (max - min) + min;
    }
  },
  watch:{
  
  },
  computed: {
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
    }
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
.h2 {
  margin: 0px auto 8px;
  font-size: 24px;
  line-height: 150%;
  margin: 32px auto 24px;
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
    overflow-y: auto;
    -ms-overflow-style: none;
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
   
  &__buttons::-webkit-scrollbar{
      width: 0;
      height: 0;
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
