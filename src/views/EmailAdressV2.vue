<template>
  <header-layout :fixed="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page">

      <div class="email__content">

        <div class="d-flex  align-items-center justify-content-center flex-column block">
          <img src="@/assets/images/icons/email_img.svg" alt="email">
          <div class="d-flex flex-column">
            <div class="h2">
              Enter email adress
            </div>
            <p class="email__content__text">to get the Dr. Kegel Plan</p>

              <label for="email">

                <input
                  v-model="upValue"
                  id="email"
                  class="email"
                  type="email"
                  :placeholder="email || 'Enter your email here'"
                >
                <span class="lock">
                  <img src="@/assets/images/icons/lock.svg" alt="img">
                </span>
              </label>
              <div
                v-if="email"
                class="v-popup__submit_btn active"
                :class="{ submit: loading }"
                @click="nextUrlEmail"
              >
              Get my plan
              </div>
              <div
                v-else
                :class="['v-popup__submit_btn', {active: closeActive}, {submit: loading}]"
                @click="nextUrlEmail"
              >
              Get my plan
              </div>

            <p class="email__content__text__small">
              Your data is perfectly safe. We won't share your personal information with third parties.
            </p>

            <div class="block-fixed">
              <p class="email__content__text__small">
                By giving your email address you can also receive offers from Appercut Sp. z o.o. You can unsubscribe at any time.
              </p>
              <div class="footer__terms">
                <a href="/terms.html" target="_blank">Terms</a>
                <a href="/privacy-policy.html" target="_blank">Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VueScrollTo from "vue-scrollto";

export default {
  name: 'EmailAdress2',
  inject: ['mixpanel'],
  data() {
    return {
      textpurpose:'',
      closeActive: false,
      email: null,
      isEmailTouched: false,
      upValue: this.EMAILUSER,
      loading: false,
      title: 'Enter email adress',
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
  },

  mounted() {
    this.upValue = this.EMAILUSER
  },

  methods: {
    ...mapActions(['setEmail']),
    sendPayPalRequest(token) {
      this.loading = true;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test",
        },
        body: JSON.stringify({
          web_user_uuid: localStorage
            .getItem("web_user_uuid")
            .replaceAll('"', ""),
          token_id: token,
          item: this.$route.params.item,
        }),
      };
      fetch(
        "https://int2.kegel.men/api/web-payment/accept/pay-pal-payment",
        requestOptions
      )
        .then((response) => {
          this.loading = false;
          if (response.status == 204 || response.status == 200) {
            this.$router.push('PlanFinal')
          } else {
            //this.$router.push('LandingViewV2')
          }
        });
    },
    sendCardRequest() {
      this.loading = true;
      const requestOptions = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer test",
                    },
                    body: JSON.stringify({
                      web_user_uuid: localStorage
                        .getItem("web_user_uuid")
                        .replaceAll('"', ""),
                      intent_id: this.$route.params.paymentIntentId,
                      item: this.$route.params.item,
                      name: this.$route.params.name,
                      address1: this.address1,
                      address2: this.address2,
                      city: this.city,
                      state: this.region,
                      country: this.country,
                      zip: this.$route.params.zip
                    }),
                  };
                  fetch(
                    "https://int2.kegel.men/api/web-payment/accept/card-payment/",
                    requestOptions
                  ).then((response) => {
                    this.loading = false;
                    if (response.status == 204 || response.status == 200) {
                    this.$router.push('PlanFinal')
                    } else {
                      //this.$router.push('LandingViewV2')
                    }
                    //this.nextUrl();
                  });
    },
    nextUrl(){
      if (this.closeActive) {
        VueScrollTo.scrollTo('.dark-layout');
        this.$router.push('PlanFinal');
        this.mixpanel.track('E-mail Screen Completed', {
          email: this.upValue
        })
        gtag('event', 'conversion', {'send_to': 'AW-407765903/QV5XCL7WjdgDEI-HuMIB'});
        this.mixpanel.people.set({ "$email": this.upValue });
      } else {
      }
    },

    nextUrlEmail(){
      // VueScrollTo.scrollTo('.dark-layout')
      if (this.closeActive) {
        this.setEmail(this.upValue)
        this.mixpanel.track('E-mail Screen Completed', {
          email: this.upValue
        })
        gtag('event', 'conversion', {'send_to': 'AW-407765903/QV5XCL7WjdgDEI-HuMIB'});
        this.mixpanel.people.set({ "$email": this.upValue });
        setTimeout(() => {
          if (this.$route.params.flow == "CC") {
            this.sendCardRequest()
          } else {
            this.sendPayPalRequest(this.$route.params.token)
          }
        }, 2);
    }
      

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
  }
};
</script>

<style lang="scss" scoped>
input[type="email"]{font-size:1em;}
.h2 {
  font-family: "SF-Pro-Display-Bold";
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
      font-size: 16px;
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
    border-radius: 100px;
    padding: 16px 37px;
    font-family: "SF Pro Text Medium";
    font-size: 18px;
    line-height: 135%;
    color: #ffffff;
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
      margin: 0 15px;
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

.v-popup__submit_btn.submit {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWxvYWRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQwIDcyQzIyLjQgNzIgOCA1Ny42IDggNDBTMjIuNCA4IDQwIDhzMzIgMTQuNCAzMiAzMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJjMC0xNS40LTEyLjYtMjgtMjgtMjhTMTIgMjQuNiAxMiA0MHMxMi42IDI4IDI4IDI4YzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNDAgNDAiIHRvPSIzNjAgNDAgNDAiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 20px;
  color: transparent !important;
  transition-duration: 0s;
}
</style>
