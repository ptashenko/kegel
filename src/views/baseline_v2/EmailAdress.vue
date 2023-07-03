<template>
        <div class="max-w-600px mx-auto px-32px pt-0 pb-25px h-full flex flex-col max-h-85vh min-h-87vh">
          <div class="h-full flex flex-col justify-between flex-1">
              <div class="mt-24px max-w-375px mx-auto">
                <img src="@/assets/images/svg/icon_email-img.svg" alt="email" class="mx-auto block">
                <div class="fond-displayBold font-bold text-24px leading-normal text-center my-24px mx-auto sm:(text-30px leading-normal mb-16px)">
                  {{ $t('emailAdress_v2.title') }}
                </div>
                <p class="font-sans text-14px leading-normal text-body opacity-75 mx-auto text-center max-w-400px mb-32px sm:(text-18px leading-normal)">
                  <span class="font-bold">{{ $t('emailAdress_v2.textFirst') }}</span> {{ $t('emailAdress_v2.textSecond') }}
                </p>
                <label class="relative text-center mx-auto block w-fit" for="email">
                  <input v-model="upValue" id="email" class="bg-[#F1F3F9] shadow-input rounded-9px border-none text-14px leading-normal p-17px text-body w-311px sm:w-375px relative outline-none focus:(border-none outline-none) active:(border-none outline-none) placeholder-body/50" type="email"
                    :placeholder="email || $t('emailAdress_v2.enterEmail')">
                  <span class="w-17px">
                    <img src="@/assets/images/svg/icon_lock.svg" alt="img" class="absolute top-[50%] right-20px transform translate-y-[-50%]">
                  </span>
                </label>
                <div
                  v-if="email"
                  class="border-none rounded-9px p-16px font-sansMedium text-18px leading-normal text-[#fff] my-32px mx-auto max-w-311px text-center bg-red cursor-pointer"
                  @click="nextUrlEmail"
                >
                {{ $t('emailAdress_v2.plan') }}
                </div>
                <div
                  v-else
                  class="bg-[#CACACA] border-none rounded-9px p-16px font-sansMedium text-18px leading-normal text-[#fff] max-w-311px my-32px mx-auto text-center"
                  :class="{ '!bg-red cursor-pointer shadow-button-red': closeActive }"
                  @click="nextUrl"
                >
                {{ $t('emailAdress_v2.plan') }}
                </div>

                <p class="font-sans font-400 text-10px leading-normal text-center text-body opacity-50 sm:(text-14px leading-normal)">
                  {{ $t('emailAdress_v2.data') }}
                </p>
              </div>
              <div>
              <p class="font-sans font-400 text-10px leading-normal text-center text-body opacity-50 sm:(text-14px leading-normal)">
                {{ $t('emailAdress_v2.offers') }}
              </p>
              <div class="mt-16px flex justify-center">
                <a href="/terms.html" target="_blank" class="underline text-body font-sans text-10px leading-normal opacity-50 mr-24px sm:(mr-16px text-14px leading-normal)">{{ $t('emailAdress_v2.terms') }}</a>
                <a href="/privacy-policy.html" target="_blank" class="underline text-body font-sans text-10px leading-normal opacity-50 sm:(text-14px leading-normal)">{{ $t('emailAdress_v2.policy') }}</a>
              </div>
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
  },

  mounted() {
    this.upValue = this.EMAILUSER
  },

  methods: {
    ...mapActions(['setEmail']),
    nextUrl() {
      console.log('ss')
      if (this.closeActive) {
        VueScrollTo.scrollTo('.dark-layout');
        this.setEmail(this.upValue)
        this.$router.push('LandingViewVP5');
        this.mixpanel.track('E-mail Screen Completed', {
          email: this.upValue
        })
        gtag('event', 'conversion', {'send_to': 'AW-407765903/QV5XCL7WjdgDEI-HuMIB'});
        this.mixpanel.people.set({ "$email": this.upValue });
      }
    },

    nextUrlEmail(){
      console.log('nextUrlEmail')
      VueScrollTo.scrollTo('.dark-layout')
      this.setEmail(this.upValue)
      this.$router.push('LandingViewVP5')

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
