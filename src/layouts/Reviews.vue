<template>
  {{ imagePE }}
  <h2 class="mt-0 text-center font-displayBold leading-tight text-24px sm:(text-30px leading-tight font-600)"> {{ $t(`survey.id_${content.id}.title`) }}</h2>

  <div class="mt-15px mb-35px text-center text-18px leading-normal">
    <h3 class="font-sansSemiBold text-16px leading-normal sm:(text-18px leading-normal)"
      v-if="AddPurpose && content.id !== 20 && content.id !== 57">
      <span class="font-sans text-16px sm:(font-400)"
        v-html="$t('reviews.title_add', {
            purpose: $t(`home.tracks.purpose.${track.purpose}`),
            addPurpose: $t(`home.tracks.addpurpose.${track.addpurpose}`)
          })"
      />
    </h3>
    <h3
      v-else
      class="font-sans text-16px leading-normal sm:(text-18px leading-normal)"
      v-html="$t('reviews.title', {
        purpose: $t(`home.tracks.purpose.${track.purpose}`)
      })"
    />
    <div
      class="font-sansBold font-700 text-19px leading-normal text-red flex max-w-170px mx-auto relative justify-center min-h-30px sm:(max-w-190px min-h-36px)">
      <transition name="slide-fade">
        <span v-if="show">{{$t('reviews.date', {dates})}}</span>
      </transition>
    </div>
  </div>

  <div class="text-center">
    <lottie-animation class="w-full max-w-450px mx-auto sm:(max-w-520px)" :animationData="imageitem"
      :loop="false" :autoPlay="true" :speed="1" @loopComplete="loopComplete" @complete="complete" @enterFrame="enterFrame"
      @segmentStart="segmentStart" @stopped="stopped" />
    <div>
      <div class="flex justify-between mx-[12%]">
        <p class="m-0 mt-12px capitalize" v-for="(_, idx) of new Array(6)" :key="idx">
          {{ setDate(idx) }}
        </p>
      </div>
    </div>
    <p class="font-300 text-14px leading-normal opacity-50 mt-25px mx-auto mb-0 max-w-400px sm:(max-w-full)">
      {{ graphText }}
    </p>
  </div>

  <div class="pt-50px pb-100px">
    <div class="font-displaySemiBold text-16px leading-normal mb-25px text-center sm:(text-16px leading-normal)">Customer
      reviews</div>
    <review v-for="id in content.reviews" :key="id" :id="id" />
  </div>

  <footer-controls :buttonBack="{
    text: content.buttonsText ? this.$t(`survey.id_${content.id}.${content.buttonsText[0]}`) : 'Back',
    icon: 'prev',
    click: back,
    theme: 'text-[#4A4A4B] bg-[#F1F3F9] hover:bg-[#E5E9F5]'
  }" :buttonNext="{
  icon: false,
  text: content.buttonsText ? this.$t(`survey.id_${content.id}.${content.buttonsText[1]}`) : 'Claim my plan',
  click: next,
  button: false,
  theme: 'bg-red hover:bg-[#F5423FFF]'
}" />
</template>

<script>
import { mapGetters } from 'vuex';
import nextContentUrl from '@/mixins/contollers';
import Review from '@/components/Review.vue';

export default {
  name: 'Kegel-review-layout',

  components: {
    Review,
  },

  mixins: [nextContentUrl],

  props: {
    content: {
      required: true,
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      base: {},
      numreview: 2,
      dataPP1: sessionStorage.getItem('data1'),
      dataPP2: sessionStorage.getItem('data2'),
      AddPurpose: false,
      imageitem: this.image(this.$t(`survey.id_${this.content.id}.${this.content.thumbnail}`)),
      numanimate: 1,
      show: false,
      numanim: null,
      version: Number(localStorage.getItem('ver')),
    }
  },

  computed: {
    ...mapGetters(['contentBy']),

    dates() {
      if (this.content.id === 20 || this.content.id === 57 || this.content.id === 201) {
        return this.dataPP1
      }
      return this.dataPP2;
    },


    graphText() {
      switch (this.version) {
        case 1:
          return this.$t('landingViewVP5.diagram')
        case 2:
          return this.$t('landingViewVP5.diagram')
        default:
          return this.$t('landingViewVP5.diagram')
      }
    },

    imagePE() {
      const json = localStorage.getItem('track');
      const obj = JSON.parse(json);
      this.track = obj.id
      if (this.track.id == 2 && sessionStorage.getItem('resbtn') == 'Yes') {
        this.imageitem = require(`@/assets/images/json/ED.json`);
      } else if (this.track.id == 3) {
        this.AddPurpose = false
      }
      return console.log(this.imageitem);
    }
  },

  methods: {
    isAddPurpose() {
      if (sessionStorage.getItem('resbtn') == 'Yes') {
        this.AddPurpose = true
      } else {
        this.AddPurpose = false
      }
    },
    image(path) {
      return require(`@/assets/images/json/${path}`);
    },

    setDate(index) {
      return this.$dayjs().add(index, 'month').format("MMM")
    },
  },


  mounted() {
    this.isAddPurpose()
    this.numanim = setInterval(() => {
      if (this.numanimate == 1) {
        this.dataPP1 = sessionStorage.getItem('data14')
        this.dataPP2 = sessionStorage.getItem('data24')
        this.numanimate += 1
        this.show = true;
      } else if (this.numanimate == 2) {
        this.numanimate += 1
        this.show = false;
        this.dataPP1 = sessionStorage.getItem('data13')
        this.dataPP2 = sessionStorage.getItem('data23')
      } else if (this.numanimate == 3) {
        this.numanimate += 1
        this.show = true;
      } else if (this.numanimate == 4) {
        this.numanimate += 1
        this.show = false;
        this.dataPP1 = sessionStorage.getItem('data12')
        this.dataPP2 = sessionStorage.getItem('data22')
      } else if (this.numanimate == 5) {
        this.numanimate += 1
        this.show = true;
      } else if (this.numanimate == 6) {
        this.numanimate += 1
        this.show = false;
        this.dataPP1 = sessionStorage.getItem('data1')
        this.dataPP2 = sessionStorage.getItem('data2')
      } else if (this.numanimate == 7) {
        this.numanimate += 1
        this.show = true;
      } else {
        clearInterval(this.numanim);
      }
    }, 500);
  },

  beforeUnmount() {
    clearInterval(this.numanim);
  },
};
</script>
