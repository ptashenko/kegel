<template>
  <div class="dark-layout light">
    <div class="container-main is-page AdressPage">
      <div class="block__steps" :data-step=true>
      <img src="@/assets/images/icons/img_progressbar_final.svg" style="height: 18px; width: 100%;"/>
      </div>
      <div class="email__content">
        
        <!-- <div class="d-flex  align-items-center justify-content-center flex-column block"> -->
          <div class="d-flex flex-column">
            <div class="h2">
              You are almost done!
            </div>
            <p class="email__content__text">Enter your Billing Address</p>
            <div class="form">
              <div class="input-label">Country</div>
              <label>
                <div class="select">
              <country-select v-model="country" :country="country" topCountry="US" />
            </div>
              </label>

            <div class="input-label">Address 1</div>
              <label>
                <input 
                  v-model="address1"
                  id="address1" 
                  class="email" 
                  type="address1" 
                  :placeholder="'Street address or P.O. Box'"
                  minlength="5"
                  required
                  @click="diselect('address1')"
                >
              </label>
              <div class="input-label">Address 2(Optional)</div>
              <label>
                <input 
                  v-model="address2"
                  id="address2" 
                  class="email" 
                  type="address2" 
                  :placeholder="'Apartment, suite, etc.'"
                >
              </label>
              <div class="input-label">City</div>
              <label>
                <input 
                  v-model="city"
                  id="city" 
                  class="email" 
                  type="city" 
                  :placeholder="'Enter City here'"
                  minlength="2"
                  required
                  @click="diselect('city')"
                >
              </label>
              <div class="input-label">State</div>
              <label>
                <div id="state" class="select" @click="diselect('state')">
                <region-select v-model="region" :country="country" :region="region" />
              </div>
              </label>
              <div class="input-label">Postal/ZIP Code</div>
              <label>
                <input 
                  v-model="post"
                  id="post" 
                  class="email" 
                  type="post" 
                  :placeholder="'Enter Postal/Zip Code here'"
                  minlength="3"
                  required
                  @click="diselect('post')"
                >
              </label>

              <div
                class="v-popup__submit_btn active red-shadow"
                :class="{ submit: loading }"
                @click="confirm"
              >
              Get my plan
              </div>
            </div>

           
  
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CustomSelect from "../components/CustomSelect.vue";

export default {
  name: 'EmailAdress',
  inject: ['mixpanel'],
  components: {
    CustomSelect
},
  data() {
    return {
      loading: false,
      textpurpose:'',
      closeActive: false,
      email: null,
      valid: false,
      country: 'US',
      region: ''
    };
  },
 
  computed: {
    ...mapGetters(['tracks']),
    purpose(){
      const json = localStorage.getItem('track');
      const obj = JSON.parse(json);
      this.textpurpose = obj.purpose
      return this.textpurpose;
    },
    billingAdress() {
      return {
        country: this.country,
        address1: this.address1,
        address2: this.address2,
        city: this.city,
        region: this.region,
        post: this.post
      }
    }
  },

  mounted() {
    this.checkAdressStore()
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 50)
  },

  methods: {
    // ...mapActions(['setEmail']),
    checkAdressStore() {
      const adressIsNotEmpty = JSON.parse(localStorage.getItem('billingAdress'))
      if (adressIsNotEmpty) {
        for (let [key, value] of Object.entries(adressIsNotEmpty)) {
          this[key] = value
        }
      } else {
        return
      }
    },
    diselect(id) {
      document.getElementById(id).classList.remove("invalid");
    },
    confirm() {
      this.valid = true;
      if(!document.getElementById("address1").checkValidity()) {
        document.getElementById("address1").classList.add("invalid");
        this.valid = false;
      } else {
        document.getElementById("address1").classList.remove("invalid");
      }
      if(!document.getElementById("city").checkValidity()) {
        document.getElementById("city").classList.add("invalid");
        this.valid = false;
      } else {
        document.getElementById("city").classList.remove("invalid");
      }
      if(this.region == "") {
        document.getElementById("state").classList.add("invalid");
        this.valid = false;
      } else {
        document.getElementById("state").classList.remove("invalid");
      }
      if(!document.getElementById("post").checkValidity()) {
        document.getElementById("post").classList.add("invalid");
        this.valid = false;
      } else {
        document.getElementById("post").classList.remove("invalid");
      }
      console.log(this.billingAdress)
      if (this.valid) {
        localStorage.setItem('billingAdress', JSON.stringify(this.billingAdress))
        this.$router.push("PlanFinalTwo");
        this.sendRequest()
      }
    },
    sendRequest() {
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
                      zip: this.post
                    }),
                  };
                  fetch(
                    "https://int2.kegel.men/api/web-payment/accept/card-payment/",
                    requestOptions
                  ).then((response) => {
                    if (response.status == 204 || response.status == 200) {
                    this.loading = false;
                    this.$router.push("PlanFinalTwo");
                    }
                  });
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
    this.mixpanel.track('Address Screen Shown')
    // if(this.$route.params.paymentIntentId == null) {
    //   this.$router.push("LandingViewVP5");
    // }
  }
};
</script>

<style lang="scss" scoped>
select {
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  padding: 0 1em;
  color: #111113;
  font-weight: 400;
  font-size: 14px;
  line-height: 135%;
  background-color: #fff;
  background-image: none;
  cursor: pointer;
  
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select wrapper */
.select {
  margin-top: 8px;
  margin-bottom: 16px;
  border: 2px solid #F1F3F9;

  position: relative;
  display: flex;
  width: 100%;
  height: 51px;
  border-radius: 9px;
  overflow: hidden;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 1em;
  pointer-events: none;
}



input[type="email"]{font-size:1em;}
.h2 {
  font-family: "SF-Pro-Display-Bold";
  margin: 24px auto 8px;
  line-height: 135%;
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 36px;
    margin: 24px auto 16px;
  }
}
.form {
  margin-top: 32px;
}
.input-label {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 135%;
    @media (max-width: 480px) {
    letter-spacing: -0.5px;
  }
  }
.email__content{
  form{
    text-align: center;
  }
  &__text{
    font-family: "SF Pro Text Regular";
    font-size: 20px;
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
.invalid {
          border-color: #E44240;
          border-width: 2px;
          border-style: solid;
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
      padding-top: 17px;
      padding-bottom: 17px;
      padding-left: 0px;
      padding-right: 0px;
      text-indent: 17px;
      line-height: 135%;
      color: #111113;
      margin-top: 8px;
      margin-bottom: 16px;
      width: 100%;
      position: relative;
      &:focus,:active{
        border: none;
      }
    }
    input::placeholder{
      color: #111113;
      opacity: 0.5;
    }
  }
  .v-popup__submit_btn{
      background-color: #CACACA;
      border:none;
      border-radius: 100px;
      padding: 18px;
      margin-top: 32px;
      font-family: "SF Pro Text Medium";
      font-size: 18px;
      line-height: 135%;
      color: #ffffff;
      margin: 32px auto 0;
      // width: 165px;
      text-align: center;
      max-width: 311px;
      @media (min-width: 600px) {
        margin: 48px auto 0;
      }
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

.AdressPage {
  padding-bottom: 50px;
}

.v-popup__submit_btn.submit {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWxvYWRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQwIDcyQzIyLjQgNzIgOCA1Ny42IDggNDBTMjIuNCA4IDQwIDhzMzIgMTQuNCAzMiAzMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJjMC0xNS40LTEyLjYtMjgtMjgtMjhTMTIgMjQuNiAxMiA0MHMxMi42IDI4IDI4IDI4YzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNDAgNDAiIHRvPSIzNjAgNDAgNDAiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 20px;
  color: transparent !important;
  transition-duration: 0s;
}

a:active, a:focus { outline: none; }

input, textarea {outline:none;}
input:active, textarea:active {outline:none;}
:focus {outline:none;}
textarea {resize:none;}
textarea {resize:vertical;}
textarea {resize:horizontal;}
</style>
