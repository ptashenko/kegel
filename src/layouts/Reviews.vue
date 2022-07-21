<template>
  <header-layout :fixed="true"/>
  {{dataP1}}
  {{btnAddPurpose}}
  {{imagePE}}
  <div class="dark-layout light">
    <div class="container-main is-page Reviews">
      <div class="h2 text-center">
        {{ content.title }}
      </div>

      <div class="date">
          <div class="purpose" >
            {{ track.purpose }} <span v-if="AddPurpose"><span class="width-400"> and</span> {{ track.addpurpose }}</span>
          </div>
        <div  class="red by" v-if="content.id == 20 || content.id == 57 || content.id == 201">
          <span>by&nbsp;</span> 
          <div class="">
            <transition name="slide-fade">
              <span v-if="show" class="block__anim">{{dataPP1}}</span> 
            </transition> 
          </div>
        </div>
        <div class="red by" v-else>
          <span>by&nbsp;</span> 
          <div class="">
            <transition name="slide-fade">
              <span v-if="show" class="block__anim">{{dataPP2}}</span> 
            </transition> 
          </div>
        </div>
      </div>

      <div class=" layout__thumbnail">
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

        <div  style="max-width:450px; margin: 0 auto">
          <div class="block__data">
            <p class="block__data__item">{{moment().add(0,'month').format("MMM")}}</p>
            <p class="block__data__item">{{moment().add(1,'month').format("MMM")}}</p>
            <p class="block__data__item">{{moment().add(2,'month').format("MMM")}}</p>
            <p class="block__data__item">{{moment().add(3,'month').format("MMM")}}</p>
            <p class="block__data__item">{{moment().add(4,'month').format("MMM")}}</p>
            <p class="block__data__item">{{moment().add(5,'month').format("MMM")}}</p>
          </div>
        </div>
      </div>

      <div class="desc text-center">
        This diagram is non-personalized data based on scientific research
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
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
import nextContentUrl from '@/mixins/contollers';
import Review from '@/components/Review.vue';

export default {
  name: 'Kegel-review-layout',
  mixins: [nextContentUrl],
  data(){
    return{
      base: {},
      numreview: 2,
      dataPP1: sessionStorage.getItem('data1'),
      dataPP2: sessionStorage.getItem('data2'),
      AddPurpose:false,
      imageitem: this.image(this.content.thumbnail),
      numanimate: 1,
      show: false
    }
  },
  computed: {
    ...mapGetters(['tracks', 'contentBy']),
    btnAddPurpose(){
      if(sessionStorage.getItem('resbtn') == 'Yes'){
        this.AddPurpose = true
      }else{
        this.AddPurpose = false
      } 
    },
    imagePE(){
      let json = localStorage.getItem('track');
      let obj = JSON.parse(json);
      this.track = obj.id
      if(this.track.id == 2 && sessionStorage.getItem('resbtn') == 'Yes'){
        this.imageitem = require(`@/assets/images/json/ED.json`);
      }else if(this.track.id == 3){
        this.AddPurpose = false
      }
      return  console.log(this.imageitem);
    }
  },
  components: {
    Review,
  },
  methods: {
    image(path) {
      return require(`@/assets/images/json/${path}`);
    },
    moment(){
      return moment();
    },
    getRandomArbitrary(min, max){
      return Math.random() * (max - min) + min;
    },
  },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
  mounted(){
    const numanim = setInterval(() => {
      if (this.numanimate == 1) {
        this.dataPP1 = sessionStorage.getItem('data14')
        this.dataPP2 = sessionStorage.getItem('data24')
        this.numanimate += 1
        this.show = true;
      }else if(this.numanimate == 2){
        this.numanimate += 1
        this.show = false;
        this.dataPP1 = sessionStorage.getItem('data13')
        this.dataPP2 = sessionStorage.getItem('data23')
      }else if(this.numanimate == 3){
        this.numanimate += 1
        this.show = true;
      }else if(this.numanimate == 4){
        this.numanimate += 1
        this.show = false;
        this.dataPP1 = sessionStorage.getItem('data12')
        this.dataPP2 = sessionStorage.getItem('data22')
      }else if(this.numanimate == 5){
        this.numanimate += 1
        this.show = true;
      }else if(this.numanimate == 6){
        this.numanimate += 1
        this.show = false;
        this.dataPP1 = sessionStorage.getItem('data1')
        this.dataPP2 = sessionStorage.getItem('data2')
      }else if(this.numanimate == 7){
        this.numanimate += 1
        this.show = true;
      }else{
        clearInterval(numanim);
      }
    }, 500);
  },
  beforeDestroy(){
    clearInterval(numanim);
  }
};
</script>

<style lang="scss" scoped>
.purpose{
  font-family: "SF Pro Text Semibold";
  font-size: 18px;
  .width-400{
    font-size: 18px;
    font-family: 'SF Pro Text Regular';
    @media (max-width:480px) {
      font-size: 16px;
    }
  }
  @media (max-width:480px) {
    font-size: 16px;
  }
}
.reviews {
  padding-top: 50px;
  padding-bottom: 50px;
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

.date {
  margin: 15px 0 35px;
  text-align: center;
  font-size: 18px;
  line-height: 150%;

  span.red {
    display: block;
    color: color(red);
    font-family: "SF Pro Text Bold";
    font-size: 20px;
  }
}

.desc {
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  opacity: .5;
  margin: 25px auto 0;
  max-width: 400px;
}

.layout__thumbnail {
  text-align: center;
  .animation {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
  }
}
.text-center{
  
  text-align: center;
}
.h2 {
  margin-bottom: 16px;
  font-family: "SF-Pro-Display-Bold";
  line-height:32.4px;
  font-size: 24px;
}
</style>
