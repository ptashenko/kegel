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
        <img src="@/assets/images/peoples.svg" alt="">
      </div>

      <review v-for="id in content.reviews" :key="id" :id="id"/>

      <processing />
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
    Steps
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
};
</script>

<style scoped lang="scss">
.container-main.is-page {
  padding-bottom: 30px;
}
.h2{
  font-family: "SF-Pro-Display-Bold"; 
  font-size: 20px;
  color: #FFFFFF;
  text-align: center;
}
.peoples {
  text-align: center;
  margin: 30px 0;

  img {
    max-width: 400px;
    width: 100%;
  }
}

</style>
