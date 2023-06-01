<template>
    <div :class="{content: true, 'dark-layout': content.dark, minHeight: content.id === 50}" >
        <questions v-if="content && content.answer" :survey="content" />
        <component v-else :is="content && content.layoutName" :content="content" />
    </div>
</template>

<script>
import KegelReview from '@/layouts/KegelReview.vue';
import Processing from '@/layouts/Processing.vue';
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

.content {
  max-width: 600px;
  padding: 0 32px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-bottom: 100px;

  @media (min-width: 600px) {
    padding: 0 40px;
  }
}
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
