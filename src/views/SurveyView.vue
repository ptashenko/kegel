<template>
    <template v-if="content && content.answer">
        <div class="survey h-100">
          <div class="container-main is-page SurveyVuew">
            <questions
              :survey="content"
            />
          </div>
        </div>
    </template>
    <template v-else>
      <div :class="[content.id === 20 || content.id === 200 || content.id === 601 || content.id === 322  ? 'light-layout' : 'dark']">
        <div class="container-main is-page standart">
          <component :is="content && content.layoutName" :content="content" />
        </div>
      </div>
    </template>
</template>

<script>
import HeaderLayout from '@/components/Header.vue';
import KegelReview from '@/layouts/KegelReview.vue';
import Processing from '@/layouts/Processing.vue';
import Reviews from '@/layouts/Reviews.vue';
import ReviewsV4 from '@/layouts/ReviewsV4.vue';
import WeMatch from '@/layouts/WeMatch.vue';
import Standart from '@/layouts/Standart.vue';
import StandartTwo from '@/layouts/StandartTwo.vue';
import Questions from '@/layouts/Questions.vue';
import AfterMap from '@/views/TimePlan.vue';
import { mapGetters } from 'vuex';
import Steps from '@/components/Steps.vue';
import nextContentUrl from '@/mixins/contollers';
import { Transition} from 'vue'

export default {
  mixins: [nextContentUrl],
  components: {
    HeaderLayout,
    KegelReview,
    Processing,
    Reviews,
    Standart,
    StandartTwo,
    Questions,
    AfterMap,
    Steps,
    Transition,
    WeMatch,
    ReviewsV4
  },
  computed: {
    ...mapGetters(['content', 'track']),
    
  },
  mounted() {
    console.log(this.content)
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
</style>
