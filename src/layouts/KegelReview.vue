<template>
  <header-layout :fixed="true" :dark="false"/>

  <div class="dark-layout">
    <div class="container-main is-page">
      <div class="h2 text-center">
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
import Review from '@/components/Review.vue';
import Processing from '@/components/Processing.vue';

export default {
  name: 'Kegel-review-layout',
  components: {
    Processing,
    Review,
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

.peoples {
  text-align: center;
  margin: 30px 0;

  img {
    max-width: 400px;
    width: 100%;
  }
}
</style>
