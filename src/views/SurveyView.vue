<template>
    <template v-if="content.answer">
        <div class="survey h-100">
          <div class="container-main is-page SurveyVuew">
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
    Transition
  },
  computed: {
    ...mapGetters(['content', 'track']),
    
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.survey {
  background-color: white;
  padding: 0 32px;
  height: 100vh;
}

</style>
