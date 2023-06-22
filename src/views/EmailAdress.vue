<template>
        <div class="max-w-600px mx-auto px-40px pt-0 pb-25px h-full flex flex-col max-h-85vh min-h-87vh">
          <div class="h-full flex flex-col justify-between flex-1">
              <div class="max-w-375px mx-auto">
                <img src="@/assets/images/svg/icon_email-img.svg" alt="email" class="mx-auto block">
                <div class="fond-displayBold font-600 text-20px leading-normal text-center mt-24px mx-auto mb-8px sm:(text-30px leading-normal mb-16px)">
                  {{ title }}
                </div>
                <p class="font-sans text-14px leading-normal text-body opacity-75 mx-auto text-center max-w-400px mb-32px sm:(text-18px leading-normal)">to get your Kegel Training Plan & improve {{ purpose }}</p>
                <BaseInput
                    v-model="upValue"
                    id="email"
                    type="email"
                    :placeholder="name || 'Enter your email here'"
                    icon="icon_lock"
                />
                <div
                  v-if="email"
                  class="border-none rounded-9px p-16px font-sansMedium text-18px leading-normal text-[#fff] my-32px mx-auto w-165px text-center bg-red cursor-pointer"
                  @click="nextUrlEmail"
                >
                  See my plan
                </div>
                <div
                  v-else
                  class="bg-[#CACACA] border-none rounded-9px p-16px font-sansMedium text-18px leading-normal text-[#fff] my-32px mx-auto w-165px text-center"
                  :class="{ '!bg-red cursor-pointer': closeActive }"
                  @click="nextUrl"
                >
                  See my plan
                </div>

                <p class="font-sans font-400 text-10px leading-normal text-center text-body opacity-50 sm:(text-14px leading-normal)">
                  Your data is perfectly safe. We won't share your personal information with third parties.
                </p>
              </div>
              <div>
              <p class="font-sans font-400 text-10px leading-normal text-center text-body opacity-50 sm:(text-14px leading-normal)">
                By giving your email address you can also receive offers from Appercut Sp. z o.o. You can unsubscribe at any time.
              </p>
              <div class="mt-16px flex justify-center">
                <a href="/terms.html" target="_blank" class="underline text-body font-sans text-10px leading-normal opacity-50 mr-24px sm:(mr-16px text-14px leading-normal)">Terms</a>
                <a href="/privacy-policy.html" target="_blank" class="underline text-body font-sans text-10px leading-normal opacity-50 sm:(text-14px leading-normal)">Policy</a>
              </div>
            </div>
          </div>
      </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VueScrollTo from "vue-scrollto";
import BaseInput from "@/components/ui/BaseInput.vue";

export default {
  name: 'EmailAdress',
  components: {BaseInput},
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
      } else {
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
