<template>
  <header-layout :fixed="true" :dark="false"/>

  <div class="dark-layout">
    <div class="block__steps" :data-step="content.steps">
      <steps v-if="content.steps !== false" />
    </div>

    <div class="container-main is-page KegalReview">
      <div class="h2 text-center">
        <span class="red" v-if="content.tilteRed !== false">{{content.tilteRed}}</span>
        <span v-else></span>
        {{ content.title }}
        
      </div>

      <div class="peoples">

        <lottie-animation 
          v-if="content.thumbnail"
          class="animation" 
          ref="anim"
          :animationData="require(`@/assets/images/json/${content.thumbnail}`)"
        />
      </div>

      <review v-for="id in content.reviews" :key="id" :id="id"/>

      <processing>
        Connecting to the database
      </processing>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Steps from '@/components/Steps.vue';
import Review from '@/components/Review.vue';
import Processing from '@/components/Processing.vue';

export default {
  name: 'Kegel-review-layout',
  components: {
    Processing,
    Review,
    Steps,
  },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapGetters(['review']),
  },
  methods: {
    
  }
};
</script>

<style scoped lang="scss">
.container-main.is-page {
  padding-bottom: 30px;
}
.h2{
  font-family: "SF-Pro-Display-Semibold"; 
  font-size: 24px;
  color: #FFFFFF;
  text-align: center;
  @media (max-width:480px) {
    font-size: 20px;
  }
}
.peoples {
  text-align: center;
  margin: 30px auto;
  display: block;
  max-width: 400px;
  width: 100%;
  svg {
    max-width: 400px;
    width: 100%;
  }
}

</style>
