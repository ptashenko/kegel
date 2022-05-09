<template>
  <header-layout :fixed="true" :dark="false"/>

  <div class="dark-layout">
    <div class="container-main is-page Processing__layouts">
      <processing />

      <div class="layout__thumbnail">
        <img src="@/assets/images/content/process.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Processing from '@/components/Processing.vue';

export default {
  name: 'Processing-review-layout',
  components: {
    Processing,
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
.peoples {
  text-align: center;
  margin: 30px 0;

  img {
    max-width: 400px;
    width: 100%;
  }
}

.loading {
  margin-top: 0;
  margin-bottom: 65px;
}

.layout__thumbnail{
  margin: 0 10px;
  @media (max-width: 480px) {
    margin: 0 -30px;
  }
  img {
    width: 100%;
  }
}
</style>
