<template>
  {{dataP1}}
  {{btnAddPurpose}}
  {{imagePE}}
  <h2 class="page-title">{{ content.title }}</h2>

  <div class="goalDate">
    <h3 class="goalDate__purpose" v-if="AddPurpose && content.id !== 20 && content.id !== 57" v-html="addPurposeText"></h3>
    <h3 class="goalDate__purpose" v-else>Improve {{ track.purpose }}</h3>
    <div class="goalDate__redDate">
      <transition name="slide-fade">
        <span v-if="show">by {{selectedPages ? dataPP1 : dataPP2}}</span> 
      </transition> 
    </div>
  </div>

  <div class="graphic">
    <lottie-animation 
      class="animation" 
      ref="content.ref" 
      :animationData="imageitem" 
      :loop="false" 
      :autoPlay="true" 
      :speed="1" 
      @loopComplete="loopComplete" 
      @complete="complete" 
      @enterFrame="enterFrame" 
      @segmentStart="segmentStart" 
      @stopped="stopped" 
      />
    <div>
      <div class="graphic__date">
        <p 
          class="graphic__month" 
          v-for="(_, idx) of new Array(6)" 
          :key="idx">
          {{setDate(idx)}}
        </p>
      </div>
    </div>
    <p class="graphic__description">
      {{ graphText }}
    </p>
  </div>

  <div class="reviews">
    <div class="reviews__title">Customer reviews</div>
    <review 
      v-for="id in content.reviews" 
      :key="id" 
      :id="id" 
      :light="true"
    />
  </div>

  <footer-controls
    :buttonBack="{
      text: content.buttonsText ? content.buttonsText[0] : 'Back',
      icon: 'prev',
      click: back,
      theme: 'light prevBtnReviews'
    }"
    :buttonNext="{
      icon: false,
      text: content.buttonsText ? content.buttonsText[1] : 'Claim my plan',
      click: next,
      button: false,
      theme: 'red'
    }"
  />
</template>

<script>
import dayjs from 'dayjs';
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
    return{
      base: {},
      numreview: 2,
      dataPP1: sessionStorage.getItem('data1'),
      dataPP2: sessionStorage.getItem('data2'),
      AddPurpose:false,
      imageitem: this.image(this.content.thumbnail),
      numanimate: 1,
      show: false,
      numanim: null,
      version: Number(localStorage.getItem('ver')),
    }
  },

  computed: {
    ...mapGetters(['tracks', 'contentBy']),

    selectedPages() {
      return this.content.id == 20 || this.content.id == 57 || this.content.id == 201;
    },
  
    btnAddPurpose(){
      if (sessionStorage.getItem('resbtn') == 'Yes') {
        this.AddPurpose = true
      } else {
        this.AddPurpose = false
      } 
    },
    graphText() {
      switch (this.version) {
        case 1:
          return 'This diagram is non-personalized data based on scientific research. Each individual’s results may vary from person to person.'
        case 5:
          return 'This diagram is non-personalized data based on scientific research. Each individual’s results may vary from person to person.'
        default: 
          return 'This diagram is non-personalized data based on scientific research'
      }
    },
    addPurposeText() {
      return `<span class="goalDate__purpose--regular">Improve</span> ${this.track.purpose} <span class="goalDate__purpose--regular"> and</span> ${this.track.addpurpose}`
    },
    imagePE() {
      const json = localStorage.getItem('track');
      const obj = JSON.parse(json);
      this.track = obj.id
      if(this.track.id == 2 && sessionStorage.getItem('resbtn') == 'Yes') 
      {
        this.imageitem = require(`@/assets/images/json/ED.json`);
      } else if (this.track.id == 3) {
        this.AddPurpose = false 
      }
      return  console.log(this.imageitem);
    }
  },

  
  mounted(){
    this.numanim = setInterval(() => {
      if (this.numanimate == 1) {
        this.dataPP1 = sessionStorage.getItem('data14')
        this.dataPP2 = sessionStorage.getItem('data24')
        this.numanimate += 1
        this.show = true;
      } else if(this.numanimate == 2){
        this.numanimate += 1
        this.show = false;
        this.dataPP1 = sessionStorage.getItem('data13')
        this.dataPP2 = sessionStorage.getItem('data23')
      } else if(this.numanimate == 3){
        this.numanimate += 1
        this.show = true;
      } else if(this.numanimate == 4){
        this.numanimate += 1
        this.show = false;
        this.dataPP1 = sessionStorage.getItem('data12')
        this.dataPP2 = sessionStorage.getItem('data22')
      } else if(this.numanimate == 5){
        this.numanimate += 1
        this.show = true;
      } else if(this.numanimate == 6){
        this.numanimate += 1
        this.show = false;
        this.dataPP1 = sessionStorage.getItem('data1')
        this.dataPP2 = sessionStorage.getItem('data2')
      } else if(this.numanimate == 7){
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

  methods: {
    image(path) {
      return require(`@/assets/images/json/${path}`);
    },

    setDate(index) {
      return dayjs().add(index,'month').format("MMM")
    },

    getRandomArbitrary(min, max){
      return Math.random() * (max - min) + min;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-title {
  margin-top: 0;
  text-align: center;
  font-family: "SF-Pro-Display-Bold";
  line-height: 1.3;
  font-size: 24px;
    @media (min-width: 600px) {
      font-weight: 600;
      font-size: 30px;
    }
}

.reviews {
  padding-top: 50px;
  padding-bottom: 100px;
  &__title {
    font-family: "SF-Pro-Display-Semibold";
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 25px;
    text-align: center;
    @media (max-width:480px) {
      font-size: 16px;
    }
  }
}

.goalDate {
  margin: 15px 0 35px;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;

  &__purpose {
    font-family: "SF Pro Text Semibold";
    font-size: 18px;
    @media (max-width:480px) {
      font-size: 16px;
    }
  }

  &__redDate {
    font-family: "SF Pro Text Bold";
    font-weight: 700;
    font-size: 19px;
    line-height: 1.5;

    color: #E44240;

    display: flex;
    max-width: 170px;
    margin: 0 auto;
    position: relative;
    justify-content: center;

    min-height: 30px;

    @media (min-width: 600px) {
        max-width: 190px;
        min-height: 36px;
    }
  }
}

::v-deep .goalDate__purpose--regular {
      font-family: 'SF Pro Text Regular';
      font-weight: 400;
        @media (max-width:480px) {
          font-size: 16px;
        }
    }

.graphic {
  text-align: center;

  &__description {
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    opacity: .5;
    margin: 25px auto 0;
    max-width: 400px;
      @media (min-width: 600px) {
        max-width: 100%;
      }
  }

  &__date {
    display: flex;
    justify-content: space-between;
    margin: 0 12%;
  }

  &__month {
    margin: 12px 0 0;
    font-size: 18px;
    @media (max-width: 480px) {
      margin: 9px 0 0;
      font-size: 12px;
    }
  }
  .animation {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
      @media (min-width: 600px) {
          max-width: 520px;
        }
  }
}

</style>
