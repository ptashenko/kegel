<template>
  <div class="z-9999 fixed h-[calc(100dvh)] w-full bg-[#fff] overflow-hidden" v-if="LOADER">
    <div class="w-full h-[calc(100dvh)] flex items-center justify-center">
      <lottie-animation
        class="w-48px h-auto"
        ref="anim"
        :animationData="require(`@/assets/images/json/f5_loader.json`)"
        :loop="true"
        :autoPlay="true"
        :speed="1"
      />
    </div>
  </div>
  <transition name="translate" mode="out-in">
    <div>
      <img v-if="!device.mobile" src="@/assets/images/header-desktop.jpg" class="inline-block w-full" />
      <img v-else src="@/assets/images/header.png" class="inline-block w-full" />
      <div class="relative max-w-311px top-[-16vw] mx-auto sm:top-[-8vw] sm:px-40px sm:max-w-600px sm:box-border">
        <h2 class="font-displayBold text-32px leading-tight text-center text-shadow-title mb-16px sm:font-600 sm:text-40px sm:leading-tight" v-html="$t('home.title')" />
        <h3 class="font-displaySemiBold text-18px leading-normal text-center opacity-76 sm:font-600 sm:text-24px">
          {{$t('home.subtitle')}}
        </h3>
        <div class="w-20px h-auto text-center mx-auto my-16px">
          <lottie-animation
              ref="arrowmain"
              :animationData="require(`@/assets/images/json/main_arrow.json`)"
              :loop="true"
              :autoPlay="true"
              :speed="1"
          />
        </div>
        <div>
          <button
              class="relative w-full py-21px duration-400 rounded-9px bg-body cursor-pointer border-none hover:(bg-[#1B1B1E])"
              v-for="(track, idx) in tracks"
              :key="track.id"
              :class="{'mb-15px': idx !== tracks.length -1}"
              @click="getData(track)"
          >
                  <span class="font-sans font-700 text-16px text-center text-[#fff] sm:text-22px">
                    {{ $t(`home.tracks.titleShortQuiz.${track.titleShortQuiz}`) }}
                  </span>
            <span v-if="track.text" class="font-sansMedium block text-14px mt-4px font-500 text-[#fff] sm:text-18px">
                    {{ $t(`home.tracks.text.${track.text}`)}}
                  </span>
            <lottie-animation
                v-if="track.id === 1 && isActiveHand"
                class="absolute w-84px h-auto top-0 right-[-10px]"
                ref="animhand"
                :animationData="require(`@/assets/images/json/main_hand.json`)"
                :loop="true"
                :autoPlay="true"
            />
          </button>

          <div class="font-sansLight opacity-50 text-center mx-auto mt-32px text-12px leading-normal sm:text-14px sm:leading-normal">
            {{ $t(`home.description`) }}
          </div>
        </div>
      </div>
      <div class="pt-48px pb-50px bg-[#C4C4C433] sm:pt-51px">
        <div class="max-w-311px mx-auto box-border sm:px-40px sm:pb-32px sm:max-w-600px">
          <div
          v-for="(advantage, idx) in advantages"
            :key="advantage.title"
            class="text-center mx-auto mb-48px sm:max-w-373px sm:mb-15px"
          >
            <img :src="advantage.img" :alt="advantage.title" class="block mx-auto mb-19px" :class="[idx === 0 ? 'w-44px' : 'w-50px']">
            <div class="font-displayBold font-700 text-20px leading-normal text-center text-shadow-title sm:font-600 sm:text-24px sm:leading-tight">
              {{ $t(`home.advantages.titles.${advantage.title}`) }}
            </div>
            <div class="font-sans text-14px font-400 opacity-65 leading-normal mt-8px sm:text-18px sm:leading-normal sm:p-0">{{ $t(`home.advantages.texts.${advantage.text}`) }}</div>
            <p v-if="advantage.email" class="font-sans mt-8px block text-red no-underline text-14px sm:text-18px sm:leading-normal">{{ advantage.email }}</p>
          </div>
          <FooterHomeView />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import dayjs from 'dayjs';
import HeaderLayout from '@/components/Header.vue';
import FooterHomeView from '@/components/FooterHomeView.vue';
import { addItem } from "../common/localStorage";
import { useDevice } from 'next-vue-device-detector';
import settings from "@/mixins/settings";
import '@/assets/css/animations.css'

export default {
  name: 'HomePage',
  inject: ['mixpanel'],
  mixins: [settings],
  components: {
    HeaderLayout,
    FooterHomeView
  },
  data() {
    return {
      device: useDevice(),
      advantages: [
        {
          title: 't_1',
          text: 'txt_1',
          logo: 'logo',
          img: require(`../assets/images/logos/logo_footer.png`),
          width: 44
        },
        {
          title: 't_2',
          text: 'txt_2',
          email: 'contact@kegel-plan.com',
          logo: 'icon_support',
          img: require(`../assets/images/svg/icon_support.svg`),
          width: 48
        },
      ],
      isActiveHand: false,
      randomData: 0,
    };
  },
  computed: {
    ...mapGetters(['contentBy', 'LOADER']),
    locales() {
      return this.$t('track1_subtitle')
    }
  },
  methods: {
    ...mapMutations(['clearHistory', 'saveContent', 'saveTrack']),
    setData () {
      const dataPP1_day = `${dayjs().add(4,'month').format("MMMM")} ${this.randomData}`;
      const dataPP12_day = `${dayjs().add(4,'month').format("MMMM")} ${this.randomData + 2}`;
      const dataPP13_day = `${dayjs().add(4,'month').format("MMMM")} ${this.randomData + 4}`;
      const dataPP14_day = `${dayjs().add(4,'month').format("MMMM")} ${this.randomData + 6}`;
      sessionStorage.setItem('data1', dataPP1_day);
      sessionStorage.setItem('data12', dataPP12_day);
      sessionStorage.setItem('data13', dataPP13_day);
      sessionStorage.setItem('data14', dataPP14_day);
      this.$store.commit('SET_DATAPP1', dataPP1_day)

      const dataPP2_day = `${dayjs().add(4,'month').format("MMMM")} ${this.randomData - 14}`;
      const dataPP22_day = `${dayjs().add(4,'month').format("MMMM")} ${this.randomData - 10}`;
      const dataPP23_day = `${dayjs().add(4,'month').format("MMMM")} ${this.randomData - 6}`;
      const dataPP24_day = `${dayjs().add(4,'month').format("MMMM")} ${this.randomData - 2}`;
      sessionStorage.setItem('data2', dataPP2_day);
      sessionStorage.setItem('data22', dataPP22_day);
      sessionStorage.setItem('data23', dataPP23_day);
      sessionStorage.setItem('data24', dataPP24_day);
      this.$store.commit('SET_DATAPP2', dataPP2_day);

      let ppp = this.randomData
      function days(number, param, key){
        if(ppp < number){
          let m3 = dayjs().add(3,'month').daysInMonth()
          let ost = m3 - (number - ppp)
          let param = dayjs().add(3,'month').format("MMMM") + ' ' + ost ;
          sessionStorage.setItem(key, param);
        }else if(ppp == number){
          let m3 = dayjs().add(3,'month').daysInMonth()
          let param = dayjs().add(3,'month').format("MMMM") + ' ' + m3 ;
          sessionStorage.setItem(key, param);
        }else{
          let ost = ppp - number
          let param = dayjs().add(4,'month').format("MMMM") + ' ' + ost ;
          sessionStorage.setItem(key, param);
        }

        return param
      }
      days(28, 'dataPP3_day', 'data3')
      days(24, 'dataPP32_day', 'data32')
      days(20, 'dataPP33_day', 'data33')
      days(16, 'dataPP34_day', 'data34')

    },
    getData(track) {
      const content = this.contentBy({
        field: 'id',
        value: track.layouts[0].id,
      });
      gtag('event', 'conversion', {'send_to': 'AW-407765903/WY4yCKfLjdgDEI-HuMIB'});
      this.mixpanel.track('Quize Started', {
        "flow": track.id
      })

      this.saveContent(content);
      this.saveTrack(track);
      this.$router.push({
        name: 'survey',
        params: { survey: content.id },
      });
    },
  },
  mounted() {
    this.randomData = (Math.floor(Math.random( ) * (22 - 16 + 1)) + 16);
    setTimeout(() => {
      this.isActiveHand = true
    }, 10000)
    this.setData()
    document.onreadystatechange = () => {
      let body = document.querySelector('body')
      body.classList.add('fixed');
      if (document.readyState == "complete") {
        body.classList.remove('fixed');
        this.$store.commit('setLOADER', false);
        let fbp = /_fbp=(fb\.1\.\d+\.\d+)/.exec(window.document.cookie);
        if (fbp && fbp[1]) {
          addItem("fbp", fbp[1]);
        }
        let fbc = /_fbc=(fb\.1\.\w+\.\w+)/.exec(window.document.cookie);
        if (fbc && fbc[1]) {
          addItem("fbc", fbc[1]);
        }
      }
    }
  },
  created () {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '739994357762334');
    fbq.disablePushState = true
    fbq('track', 'PageView');
    this.mixpanel.track('Start Screen Shown')
  }
};
</script>
