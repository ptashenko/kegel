<template>
  <header-layout :fixed="true" :dark="true"/>

  <div class="block__steps" :data-step="content.steps">
    <steps v-if="content.steps !== false" />
  </div>
  
  <div class="questions__title">
    {{ survey.title }}
  </div>
  <div class="questions__thumbnail" v-if="survey.video">
    {{autoPlay}}
    <video  class="questions__thumbnail" width="400" height="240" ref="videoPlayer">
      <source
        :src="video(survey.video)"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
  <div>
    <!-- <button @click="play">play</button> -->
  </div> 
  <div class="questions__thumbnail" v-if="survey.thumbnail">
    <img
      :src="image(survey.thumbnail)"
      :alt="survey.title"
      width="400"
      height="200"
    >
  </div>

  <div v-if="survey.answer.style === 'buttons'" class="questions__rate">
    {{ rateTo }}
  </div>

  <div
    class="answer__list"
    :class="survey.answer.style === 'buttons' ? 'answer__list--flex' : ''"
  >
    <component
      :is="survey.answer.style === 'radio' ? 'question' : 'question-radio'"
      v-for="answer in survey.answer.answerList"
      :key="answer.id"
      :answer="answer"
    />
  </div>

  <div v-if="survey.answer.style === 'buttons'" class="questions__lvl">
    <div>{{survey.answer.textLeft}}</div>
    <div>{{survey.answer.textRight}}</div>
  </div>

  <footer-controls
    :buttonBack="{
        text: 'Back',
        icon: 'prev',
        click: back,
        theme: 'light'
      }"
    :buttonNext="{
        text: 'Next',
        icon: 'next',
        disabled: !selected,
        click: next,
        theme: 'dark'
      }"
  />
</template>

<script>
import Question from '@/components/questions/Question.vue';
import QuestionRadio from '@/components/questions/QuestionButton.vue';
import { mapGetters } from 'vuex';
import Steps from '@/components/Steps.vue';
import history from '@/mixins/history';
import nextContentUrl from '@/mixins/contollers';

export default {
  data(){
    return{
      num: 0,
      timePlay: 0,
    }
    
  },
  computed: {
    rateTo() {
      const list = this.survey.answer.answerList;
      return `Rate from 1 to ${list[list.length - 1]}`;
    },
    autoPlay() {
    const videoplay = setInterval(() => {
        if (this.timePlay == 0) {
          this.play()
          this.timePlay += 1
        } else {
          this.play()
          clearInterval(videoplay);
        }
      }, 2000);
    },
    ...mapGetters(['content', 'track'])
  },
  name: 'Question-layout',
  components: {
    QuestionRadio,
    Question,
    Steps
  },
  methods: {
    image(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/content/${path}`);
    },
    video(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/video/${path}`);
    },
    play() {
      this.$refs.videoPlayer.play();
    },
  },
  mixins: [history, nextContentUrl],
  props: {
    survey: {
      required: true,
      type: [Object],
    },
  },
  mounted() {
    
  }
};
</script>

<style lang="scss" scoped>
.block__steps{
  position: relative;
    padding-top: 100px;
}
.questions {
  &__rate {
    opacity: 0.75;
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 500;

    @media (max-width: 480px) {
      font-size: 16px;
    }
    
  }
  &__title{
    font-family: "SF-Pro-Display-Bold"; 
    font-size: 24px;
    text-align: center;
    padding: 0px 0 32px;
    line-height:135%;
    @media (max-width: 480px) {
      font-size: 20px;
      text-align: left;
    }
  }
  &__thumbnail {
    margin-bottom: 32px;
    text-align: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  &__lvl {
    display: flex;
    max-width: 390px;
    margin: 0 auto;
    margin-top: 16px;
    justify-content: space-between;
    opacity: 0.75;
    font-size: 18px;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
}

.answer {
  &__list {
    &--flex {
      display: flex;
      justify-content: center;
      margin: 0 -8px;
      padding-bottom: 0;
    }
  }
}
</style>
