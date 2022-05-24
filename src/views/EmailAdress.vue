<template>
  <header-layout :fixed="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page">

      <div class="email__content">
        
        <div class="d-flex  align-items-center justify-content-center flex-column block">
          <img src="@/assets/images/icons/email_img.svg" alt="email">
          <div class="d-flex flex-column">
            <div class="h2">
              {{title}}
            </div>
            <p class="email__content__text">to get your Kegel Training Plan & {{ purpose }}</p>
            
              <label for="email">
                <input 
                  v-model="upValue"
                  id="email" 
                  class="email" 
                  type="email" 
                  placeholder="Your email here"
                >
                <span class="lock">
                  <img src="@/assets/images/icons/lock.svg" alt="img">
                </span>
              </label>
              <div 
                class="v-popup__submit_btn"
                :class="{active: closeActive}"
                @click="nextUrl"
              >
              See my plan
              </div>
           
            <p class="email__content__text__small">
              Your data is perfectly safe. We won't share your personal information with third parties.
            </p>

            <div class="block-fixed">
              <p class="email__content__text__small">
                By giving your email address you can also receive offers from Appercut Sp. z o.o. You can unsubscribe at any time.
              </p>
              <div class="footer__terms">
                <a href="https://appercut.co/privacy-policy.html">Privacy Policy</a>
                <a href="https://appercut.co/terms.html">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EmailAdress',
  components: {
  },
  data() {
    return {
      textpurpose:'',
      closeActive: false,
      email: null,
      isEmailTouched: false,
      upValue: '',
      title:'Enter email adress'
    };
  },
  methods: {
    nextUrl(){
      if(this.closeActive){
        this.$router.push('LandingView');
        return;
      }else{
        console.log('Введите email');
      } 
    },
  },
  watch:{
    upValue(value) {
      const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
      if(reg.test(value)){
        this.closeActive = true
      }else{
        this.closeActive = false
      }
		}
  },
  computed: {
    ...mapGetters(['tracks']),
    purpose(){
      var json = localStorage.getItem('track');
      var obj = JSON.parse(json);
      this.textpurpose = obj.purpose
      return this.textpurpose;
    },
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
.h2 {
  font-family: "SF-Pro-Display-Semibold";
  margin: 24px auto 8px;
  line-height: 135%;
  font-size: 24px;
  @media (max-width: 480px) {
    font-size: 20px;
  }
}
.email__content{
  form{
    text-align: center;
  }
  &__text{
    font-family: "SF Pro Text Regular";
    font-size: 18px;
    line-height: 135%;  
    color: #111113;
    opacity: 0.75;
    margin: 0 auto;
    text-align: center;
    max-width: 400px;
    @media (max-width: 480px) {
    font-size: 14px;
  }
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
      text-align: center;
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
    max-width: 400px;
    @media (max-width:480px) {
      font-size: 10px;
    }
  }
  .block-fixed{
    position: relative;
    bottom: 32px;
    margin: 480px auto 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 540px;
    @media (max-width:480px) {
        max-width: 310px;
        margin: 270px auto 0;
      }
    .email__content__text__small{
      max-width: 520px;
      font-size: 14px;
      @media (max-width:480px) {
        max-width: 310px;
        font-size: 10px;
      }
    }
  }
}
.footer {
  &__terms {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    a {
      text-decoration: underline;
      color: #111113;
      font-family: "SF Pro Text Regular";
      font-size: 10px;
      line-height: 135%; 
      color: #111113;
      opacity: 0.5;
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
