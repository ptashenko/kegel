<template>
  <div class="dark-layout light">
    <div class="container-main is-page Reviews">
      <div class="h2 text-center">
        {{ content.title }}
      </div>

      <div class=" layout__thumbnail">
        <img class="layout__image" :src="imageitem" />
      </div>

      <div class="desc">
        Men with similar lifestyle achieve <span>significant results</span> by following this Kegel Plan.
      </div>

      <div class="reviews">
        <div class="reviews__title">Customer reviews</div>
        <review
          v-for="id in content.reviews"
          :key="id"
          :id="id"
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
        icon: 'next',
  text: content.buttonsText ? content.buttonsText[1] : 'Continue',
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
      imageitem: this.image(this.content.image),
      numanimate: 1,
      show: false,
      numanim: null,
    }
  },

  computed: {
    ...mapGetters(['tracks', 'contentBy']),

  },


  methods: {
    image(path) {
      return require(`@/assets/img/land_v6/${path}`);
    },

    moment() {
      return moment();
    },

  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.layout__image {
  width: 100%;
}
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
  padding-top: 25px;
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
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #111113;
  margin-top: 35px;

  & span {
    font-weight: 600;
  }
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
