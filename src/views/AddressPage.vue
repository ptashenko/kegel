<template>
  <div class="block__steps" :data-step=true>
    <img src="@/assets/images/svg/img_progressbar_final.svg" class="h-18px w-full"/>
  </div>
  <div class="px-32px mx-auto pb-20 mt-24px sm:max-w-600px sm:px-40px">

    <!-- <div class="d-flex  align-items-center justify-content-center flex-column block"> -->
    <div class="flex flex-col">
      <h2 class="font-displayBold text-24px leading-normal mb-8px text-center sm:text-36px sm:leading-normal sm:mb-16px">
        {{ $t('address.title') }} </h2>
      <p class="font-sans text-14px leading-normal text-body opacity-75 text-center sm:text-20px sm:leading-normal">
        {{ $t('address.subtitle') }}
      </p>
      <div class="form mt-32px">
        <div class="font-bold text-14px leading-normal">{{ $t('address.country') }}</div>
        <label>
          <div class="select appereance-none outline-none px-1em mt-8px mb-16px border-2px border-[#F1F3F9] relative flex w-full h-51px rounded-9px overflow-hidden">
            <country-select v-model="country" :country="country" topCountry="US" class="appearance-none flex-1" />
          </div>
        </label>

        <div class="font-bold text-14px leading-normal">{{ $t('address.firstAddress') }}</div>
        <label>
          <input
              v-model="address1"
              id="address1"
              class="relative px-20px bg-[#F1F3F9] shadow-input rounded-9px border-none text-16px py-15px px-0 leading-normal text-body mt-8px mb-16px w-full focus:border-none active:border-none placeholder-body placeholder-opacity-50"
              type="address1"
              :placeholder="$t('address.firstStreet')"
              minlength="5"
              required
              @click="diselect('address1')"
          >
        </label>
        <div class="font-bold text-14px leading-normal">{{ $t('address.secondAddress') }}</div>
        <label>
          <input
              v-model="address2"
              id="address2"
              class="relative px-20px bg-[#F1F3F9] shadow-input rounded-9px border-none text-16px py-15px px-0 leading-normal text-body mt-8px mb-16px w-full focus:border-none active:border-none placeholder-body placeholder-opacity-50"
              type="address2"
              :placeholder="$t('address.secondStreet')"
          >
        </label>
        <div class="font-bold text-14px leading-normal">{{ $t('address.city') }}</div>
        <label>
          <input
              v-model="city"
              id="city"
              class="relative px-20px bg-[#F1F3F9] shadow-input rounded-9px border-none text-16px py-15px px-0 leading-normal text-body mt-8px mb-16px w-full focus:border-none active:border-none placeholder-body placeholder-opacity-50"
              type="city"
              :placeholder="$t('address.enterCity')"
              minlength="2"
              required
              @click="diselect('city')"
          >
        </label>
        <div class="font-bold text-14px leading-normal">{{ $t('address.state') }}</div>
        <label>
          <div id="state" class="select outline-none px-1em mt-8px mb-16px border-2px border-[#F1F3F9] relative flex w-full h-51px rounded-9px overflow-hidden" @click="diselect('state')">
            <region-select v-model="region" :country="country" :region="region" class="appearance-none flex-1" />
          </div>
        </label>
        <div class="font-bold text-14px leading-normal">{{ $t('address.postalCode') }}</div>
        <label>
          <input
              v-model="post"
              id="post"
              class="relative px-20px bg-[#F1F3F9] shadow-input rounded-9px border-none text-16px py-15px px-0 leading-normal text-body mt-8px mb-16px w-full focus:border-none active:border-none placeholder-body placeholder-opacity-50"
              type="post"
              :placeholder="$t('address.enterCode')"
              minlength="5"
              maxlength="5"
              required
              @click="diselect('post')"
          >
        </label>

        <div
            class="border-none rounded-100px p-18px mt-32px font-sansMedium leading-normal text-[#fff] mx-auto text-center max-w-311px sm:mt-48px bg-red cursor-pointer shadow-button-red"
            :class="{ submit: loading }"
            @click="confirm"
        >
        {{ $t('address.getPlan') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AddressPage',
  inject: ['mixpanel'],
  data() {
    return {
      loading: false,
      textpurpose:'',
      closeActive: false,
      email: null,
      valid: false,
      country: 'US',
      region: '',
      submited: false
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
    },
    isIphone() {
      return window.navigator.platform == "iPhone"
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.submited) {
      next()
    } else {
      next(false)
    }
  },
  mounted() {
    this.checkAdressStore()
    setTimeout(() => {
      window.scrollTo(0, 0)
      document.body.style.overflow = 'unset'
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
        this.submited = true
        localStorage.setItem('billingAdress', JSON.stringify(this.billingAdress))
        // let isiPhone = window.navigator.platform == "iPhone"
        // // let mediaQuery = window.matchMedia('(max-width: 480px)');
        // // if (isiPhone) {
        //   let body = document.querySelector('body')
        //   body.classList.remove('fixed');
        //   if (sessionStorage.getItem('ios_v1')) {
        //     this.$router.push('PlanFinalTwo_ios')
        //   } else {
        //     this.$router.push('PlanFinalTwo')
        //   }
        // }else{
        //   let body = document.querySelector('body')
        //   body.classList.remove('fixed');
        //   this.$router.push('Whatsapp')
        // }
        //this.$router.push("PlanFinalTwo");
        if (this.$route.params.item?.includes('Fitness')) {
          this.sendRequestAddon()
        } else {
          this.sendRequest()
        }
      }
    },
    async sendRequestAddon() {
      this.loading = true;
      const payload = {
        web_user_uuid: localStorage.getItem("web_user_uuid").replaceAll('\"',''),
        item: this.$route.params.item,
      }

      try {
        const { status } = await this.$store.dispatch('addonFetch', payload)
        status === 200 || status === 204 && this.$router.push({name: "Whatsapp"});

      } catch (err) {
        console.error(err)
      } finally {
        this.loading = false;
      }
    },
    async sendRequest() {
      this.loading = true;
      const payload = {
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
      }

      try {
        const {data, status} = await this.$store.dispatch('acceptPayment', payload)
        if (status === 204 || status === 200) {
          window.document.body.classList.remove('fixed')
          const disableFitness = sessionStorage.getItem('disableFitness')
          const ios_v1 = sessionStorage.getItem('ios_v1');
          if (!disableFitness) {
            ios_v1 ? this.$router.push('PlanFinalTwo_ios') : this.$router.push('PlanFinalTwo')
          } else {
            this.$router.push({name: "Whatsapp"});
          }
        }
      } catch (err) {
          console.error(err)
      } finally {
          this.loading = false
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
    this.mixpanel.track('Address Screen Shown')
    // if(this.$route.params.paymentIntentId == null) {
    //   this.$router.push("LandingViewVP5");
    // }
  }
};
</script>

<style lang="scss" scoped>

select::-ms-expand {
  display: none;
}

.select::after {
  content: '\25BC';
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
}

.submit {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWxvYWRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQwIDcyQzIyLjQgNzIgOCA1Ny42IDggNDBTMjIuNCA4IDQwIDhzMzIgMTQuNCAzMiAzMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJjMC0xNS40LTEyLjYtMjgtMjgtMjhTMTIgMjQuNiAxMiA0MHMxMi42IDI4IDI4IDI4YzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNDAgNDAiIHRvPSIzNjAgNDAgNDAiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 20px;
  color: transparent !important;
  transition-duration: 0s;
}

.invalid {
  border-color: #E44240;
  border-width: 2px;
  border-style: solid;
}

a:active, a:focus { outline: none; }

input, textarea {outline:none;}
input:active, textarea:active {outline:none;}
:focus {outline:none;}
textarea {resize:none;}
textarea {resize:vertical;}
textarea {resize:horizontal;}
</style>
