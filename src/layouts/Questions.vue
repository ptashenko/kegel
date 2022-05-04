<template>
  <header-layout :fixed="true" :dark="true"/>

  <div class="h2">
    {{ survey.title }}
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
    <div>Not hard</div>
    <div>Very hard</div>
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
import history from '@/mixins/history';
import nextContentUrl from '@/mixins/contollers';

export default {
  computed: {
    rateTo() {
      const list = this.survey.answer.answerList;
      return `Rate from ${list[0]} to ${list[list.length - 1]}`;
    },
  },
  name: 'Question-layout',
  components: {
    QuestionRadio,
    Question,
  },
  methods: {
    image(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/content/${path}`);
    },
  },
  mixins: [history, nextContentUrl],
  props: {
    survey: {
      required: true,
      type: [Object],
    },
  },
};
</script>

<style lang="scss" scoped>
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

  &__thumbnail {
    margin-bottom: 30px;
    text-align: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  &__lvl {
    display: flex;
    margin-top: 15px;
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
      justify-content: space-between;
      margin: 0 -8px;
      padding-bottom: 0;
    }
  }
}
</style>
