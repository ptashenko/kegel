<template>
  <template v-if="content.answer">
    <div class="survey h-100">
      <!-- <div class="container-main is-page" :data-step="content.steps"> -->
      <div class="container-main is-page SurveyVuew">
        <!-- <steps v-if="content.steps !== false" /> -->
        <questions
          :survey="content"
        />
      </div>
    </div>
  </template>
  <template v-else>
    <component
      :is="content.layoutName"
      :content="content"
    />
  </template>
</template>

<script>
import HeaderLayout from '@/components/Header.vue';
import KegelReview from '@/layouts/KegelReview.vue';
import Processing from '@/layouts/Processing.vue';
import Reviews from '@/layouts/Reviews.vue';
import Standart from '@/layouts/Standart.vue';
import Questions from '@/layouts/Questions.vue';
import { mapGetters } from 'vuex';
// import Steps from '@/components/Steps.vue';

export default {
  components: {
    HeaderLayout,
    KegelReview,
    Processing,
    Reviews,
    Standart,
    Questions,
    // Steps,
  },
  computed: {
    ...mapGetters(['content', 'track']),
  },
};
</script>

<style lang="scss" scoped>
.survey {
  background-color: white;
  padding: 0 32px;
}
</style>
