<template>
  <header-layout :fixed="true" :dark="false"/>

  <div class="dark-layout">
    <div class="container-main is-page Processing__layouts">
      <processing>
        Processing...
      </processing>


      <div class="layout__thumbnail">
        <img src="@/assets/images/content/s7.png" alt="">
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
    survey: {
      required: true,
      type: [Object],
    },
  },
  computed: {
    ...mapGetters(['review','content', 'track']),
  },
};
</script>

<style scoped lang="scss">
.peoples {
  text-align: center;
  margin: 30px 0;

  img {
    max-width: 100%;
    width: 100%;
  }
}

.loading {
  margin-top: 0;
  margin-bottom: 65px;
}

.layout__thumbnail{
  margin: 0 -32px;
  @media (max-width: 480px) {
    margin: 0 -30px;
  }
  img {
    width: 100%;
  }
}
</style>
