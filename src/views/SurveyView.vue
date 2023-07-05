<template>
    <div class="max-w-600px px-32px mx-auto box-border pb-100px sm:px-40px" :class="{'dark-layout': content.dark, 'min-h-700px sm:min-h-800px': content.id === 50}" >
        <questions v-if="content && content.answer" :survey="content"  />
        <component v-else :is="content && content.layoutName" :content="content" :dark="content.dark" />
    </div>
</template>

<script>
import KegelReview from '@/layouts/KegelReview.vue';
import Processing from '@/layouts/Processing.vue';
import Processing_v2 from '@/layouts/baseline_v2/Processing.vue';
import Reviews from '@/layouts/Reviews.vue';
import Standart from '@/layouts/Standart.vue';
import StandartTwo from '@/layouts/StandartTwo.vue';
import Questions from '@/layouts/Questions.vue';
import { mapGetters } from 'vuex';
import nextContentUrl from '@/mixins/contollers';

export default {
  mixins: [nextContentUrl],
  components: {
    KegelReview,
    Processing,
    Processing_v2,
    Reviews,
    Standart,
    StandartTwo,
    Questions,
  },
  computed: {
    ...mapGetters(['content', 'track']),
  },
};
</script>

<style lang="scss" scoped>
.dark {
  background: #111113;
  min-height: 100%;
}
.survey {
  background-color: white;
  padding: 0 32px;
  height: 100vh;
}

.minHeight {
  min-height: 700px;
  @media (min-width: 600px) {
    min-height: 800px;
  }
}

</style>
