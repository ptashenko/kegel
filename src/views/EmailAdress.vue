<template>
        <div class="emailPage__wrapper">
          <div class="emailPage__content">
              <div class="emailPage__body">
                <img src="@/assets/images/icons/email_img.svg" alt="email">
                <div class="emailPage__title">
                  {{ title }}
                </div>
                <p class="email__text">to get your Kegel Training Plan & {{ purpose }}</p>
                <label class="email__label" for="email">
                  <input v-model="upValue" id="email" class="email__input" type="email"
                    :placeholder="email || 'Enter your email here'">
                  <span class="email__lock">
                    <img src="@/assets/images/icons/lock.svg" alt="img">
                  </span>
                </label>
                <div v-if="email" class="v-popup__submit_btn active" @click="nextUrlEmail">
                  See my plan
                </div>
                <div v-else :class="['v-popup__submit_btn', { active: closeActive }]" @click="nextUrl">
                  See my plan
                </div>
              
                <p class="emailPage__dataInfo">
                  Your data is perfectly safe. We won't share your personal information with third parties.
                </p>
              </div>
          </div>
            <div class="block-fixed">
              <p class="emailPage__dataInfo">
                By giving your email address you can also receive offers from Appercut Sp. z o.o. You can unsubscribe at any time.
              </p>
              <div class="emailPage__terms">
                <a href="/terms.html" target="_blank">Terms</a>
                <a href="/privacy-policy.html" target="_blank">Policy</a>
              </div>
            </div>
      </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VueScrollTo from "vue-scrollto";

export default {
  name: 'EmailAdress',
  inject: ['mixpanel'],
  data() {
    return {
      textpurpose:'',
      closeActive: false,
      email: null,
      isEmailTouched: false,
      upValue: this.EMAILUSER,
      title: 'Enter email adress',
      version: localStorage.getItem('ver'),
    };
  },
 
  computed: {
    ...mapGetters(['tracks', 'EMAILUSER']),
    purpose(){
      const json = localStorage.getItem('track');
      const obj = JSON.parse(json);
      this.textpurpose = obj.purpose
      return this.textpurpose;
    },
    ladningView() {
      switch (Number(this.version)) {
        case 5:
          return 'LandingViewV5'
        case 6:
          return 'LandingViewV4'
        default:
          return 'LandingView'
      }
    },
  },

  mounted() {
    this.upValue = this.EMAILUSER
  },

  methods: {
    ...mapActions(['setEmail']),
    nextUrl() {
      if (this.closeActive) {
        VueScrollTo.scrollTo('.dark-layout');
        this.setEmail(this.upValue)
        this.$router.push(this.ladningView);
        this.mixpanel.track('E-mail Screen Completed', {
          email: this.upValue
        })
        gtag('event', 'conversion', {'send_to': 'AW-407765903/QV5XCL7WjdgDEI-HuMIB'});
        this.mixpanel.people.set({ "$email": this.upValue });
      } else {
      } 
    },
  
    nextUrlEmail(){
      VueScrollTo.scrollTo('.dark-layout')
      this.setEmail(this.upValue)
      this.$router.push(this.ladningView)
      
    },
  },

  watch: {
    upValue(value) {
      const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
      if (reg.test(value)) {
        this.closeActive = true
      } else {
        this.closeActive = false
      }
		}
  },
  created () {
    this.mixpanel.track('E-mail Screen Shown')
  },
};
</script>

<style lang="scss" scoped>
.emailPage {

  &__wrapper {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 40px 190px;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: "SF-Pro-Display-Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 135%;
    text-align: center;
    margin: 24px auto 8px;
    @media (min-width: 600px) {
      font-size: 30px;
      margin: 24px auto 16px;
    }
  }

  &__content {
    height: 100%;
    flex-shrink: 0;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    & img {
      display: block;
      margin: 0 auto;
    }
  }

  &__body {
      margin-top: 24px;
      max-width: 375px;
      margin: 0 auto;
  }
  &__dataInfo {
    font-family: 'SF Pro Text Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 135%;
    text-align: center;
    color: #111113;
    opacity: 0.5;
    @media (min-width: 600px) {
      font-size: 14px;
    }
  }
    &__terms {
      margin-top: 16px;
      display: flex;
      justify-content: center;
      & a {
        text-decoration: underline;
        color: #111113;
        font-family: "SF Pro Text Regular";
        font-size: 10px;
        line-height: 135%;
        color: #111113;
        opacity: 0.5;
        &:not(:last-child) {
          margin-right: 24px;
        }
        @media (min-width: 600px) {
          font-size: 14px;
          &:not(:last-child) {
              margin-right: 16px;
            }
        }
      }
    }

}




.v-popup__submit_btn.active {
  background-color: #E44240;
  cursor: pointer;
}

.v-popup__submit_btn {
  background-color: #CACACA;
  border: none;
  border-radius: 9px;
  padding: 16px 16px;
  font-family: "SF Pro Text Medium";
  font-size: 18px;
  line-height: 135%;
  color: #ffffff;
  margin: 32px auto;
  width: 165px;
  text-align: center;
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
      margin: 0 15px;
    }
  }
}

.email {
  &__text {
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
  &__label {
    position: relative;
    text-align: center;
    margin: 0 auto;
    display: block;
    width: fit-content;
    margin: 32px auto 0;
  }
  &__input {
      background: #F1F3F9;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.04);
        border-radius: 9px;
        border: none;
        font-size: 16px;
        padding: 17px;
        line-height: 135%;
        color: #111113;
        width: 375px;
        position: relative;
        font-size: 1em;
        box-sizing: border-box;
      
        @media (max-width: 480px) {
          width: 275px;
        }
      
        &:focus,
        :active {
          border: none;
        }
        &::placeholder {
            color: #111113;
            opacity: 0.5;
        }
  }
  &__lock {
        width: 17px;
    & img {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }
  }
}

.emailPage {
  padding: 16px 0 0;
  height: 100%;
}

a:active, a:focus { outline: none; }

input, textarea {outline:none;}
input:active, textarea:active {outline:none;}
:focus {outline:none;}
textarea {resize:none;}
textarea {resize:vertical;}
textarea {resize:horizontal;}
</style>
