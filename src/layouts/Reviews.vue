<template>
  <header-layout :fixed="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page Reviews">
      <div class="h2 text-center">
        {{ content.title }}
      </div>

      <div class="date">
        <div class="purpose">
          {{ track.purpose }}
        </div>

        <!-- <div class="purpose" v-if="content.id !== 20 && 54"> -->
        {{dataP1}}
        <div class="purpose" v-if="content.id !== 20 && 54">
          <span>and</span> {{ track.addpurpose }}
        </div>
        <span  class="red" v-if="content.id == 20 && 54">by {{dataPP1}}</span>
        <span class="red" v-else>by {{dataPP2}}</span>
      </div>

      <div class=" layout__thumbnail">
        <img src="@/assets/images/content/reviews.svg" :alt="content.title">
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
        *This diagram is a non personalized data based on scientific research
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
        theme: 'light'
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
    }
  },
  computed: {
    ...mapGetters(['tracks', 'contentBy']),
  },
  components: {
    Review,
  },
  methods: {
    image(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/content/${path}`);
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
};
</script>

<style lang="scss" scoped>
.purpose{
  font-family: "SF Pro Text Semibold";
  font-size: 18px;
  span{
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
  img {
    width: 100%;
    max-width: 450px;
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
