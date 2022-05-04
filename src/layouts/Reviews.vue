<template>
  <header-layout :fixed="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page">
      <div class="h2 text-center">
        {{ content.title }}
      </div>

      <div class="date">
        [цель] and [доп .цель]

        <span>by [дата]</span>
      </div>

      <div class=" layout__thumbnail">
        <img src="@/assets/images/content/reviews.svg" :alt="content.title">
      </div>

      <div class="desc text-center">
        *This diagram is a non personalized data based on scientific research
      </div>

      <div class="reviews">
        <div class="reviews__title">Customer reviews</div>
        <review v-for="id in content.reviews" :key="id" :id="id" :light="true"/>
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
import nextContentUrl from '@/mixins/contollers';
import Review from '@/components/Review.vue';

export default {
  name: 'Kegel-review-layout',
  mixins: [nextContentUrl],
  components: {
    Review,
  },
  methods: {
    image(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/content/${path}`);
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
.reviews {
  padding-top: 50px;

  &__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 25px;
    text-align: center;
  }
}

.date {
  margin: 15px 0 35px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;

  span {
    display: block;
    color: color(red);
  }
}

.desc {
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  opacity: .5;
  margin-top: 25px;
}

.layout__thumbnail {
  text-align: center;
  img {
    width: 100%;
    max-width: 400px;
  }
}

.h2 {
  margin-bottom: 16px;
  font-size: 24px;
}
</style>
