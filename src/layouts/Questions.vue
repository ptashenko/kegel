<template>
    <steps :dark="dark" />
    <transition name="slide" mode="out-in">
      <div v-if="show" class="flex flex-col">
        <div class="font-displayBold text-20px text-left pb-32px leading-normal sm:(text-left text-24px leading-normal)">
          {{ $t(`survey.id_${content.id}.${survey.title}`) }}
        </div>

        <div v-if="survey.video" class="mb-32px text-center max-w-450px w-full sm:max-w-full">
          <video-background
            :src="video($t(`survey.id_${content.id}.${content.video}`))"
            :poster="video($t(`survey.id_${content.id}.${content.poster}`))"
            class="h-209px rounded-14px max-w-520px w-full sm:(h-340px)"
          />
        </div>

        <div v-if="survey.thumbnail" class="mb-32px text-center max-w-450px w-full sm:max-w-full">
          <img
            :src="image(survey.thumbnail)"
            :alt="survey.title"
            class="max-w-full h-auto sm:max-w-520px"
            width="400"
            height="200"
          />
        </div>

        <div class="mb-32px text-center max-w-450px w-full sm:max-w-full" v-if="survey.json">
          <lottie-animation
            ref="survey.ref"
            :animationData="json(survey.json)"
            :loop="false"
            :autoPlay="true"
            :speed="1"
            @loopComplete="loopComplete"
            @complete="complete"
            @enterFrame="enterFrame"
            @segmentStart="segmentStart"
            @stopped="stopped"
          />
        </div>

        <div
          v-if="surveyAnswerIsButtons"
          class="opacity-75 text-center mb-30px text-16px font-500 sm:text-16px"
        >
          {{ rateTo }}
        </div>
        <div :class="{'flex justify-center mx-[-8px] pb-0': surveyAnswerIsButtons}">
          <component
            :is="survey.answer.style === 'radio' ? 'question' : 'question-radio'"
            v-for="answer in survey.answer.answerList"
            :class="survey.answer.answerClass"
            @click="myAvesomeClickFunction"
            :key="answer.id"
            :answer="$t(`survey.id_${content.id}.${answer}`)"
          />
        </div>
        <div v-if="surveyAnswerIsButtons" class="flex max-w-390px w-full mx-auto mt-16px justify-between opacity-75 text-14px sm:text-18px">
          <div>{{survey.answer.textLeft}}</div>
          <div>{{survey.answer.textRight}}</div>
        </div>
      </div>

    </transition>
    <footer-controls
      :buttonBack="getBackButtonProps"
      :buttonNext="getNextButtonProps"
    />
</template>

<script>
import Question from '@/components/questions/Question.vue';
import QuestionRadio from '@/components/questions/QuestionButton.vue';
import {  mapGetters, mapMutations } from 'vuex';
import Steps from '@/components/Steps.vue';
import history from '@/mixins/history';
import nextContentUrl from '@/mixins/contollers';
import '@/assets/css/animations.css'
export default {
  inject: ['mixpanel'],
  name: 'Question-layout',
  components: {
    QuestionRadio,
    Question,
    Steps,
  },

  mixins: [history, nextContentUrl],

  props: {
    survey: {
      required: true,
      type: Object,
      default: () => ({})
    },
    dark: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      show: true,
      selectedAnswer: true,
      layotname: [2, 6, 61, 9, 333, 14, 20, 201, 24, 28, 32, 321, 322, 323, 35, 353, 352, 36, 39, 41, 47, 48, 50, 51, 57]
    }
  },

  computed: {
    ...mapGetters(['content', 'track', 'myPrewContentId','nextContentId','history']),

    surveyAnswerIsButtons () {
      return this.survey.answer.style === 'buttons'
    },

    rateTo() {
      const list = this.survey.answer.answerList;
      return `Rate from 1 to ${list[list.length - 1]}`;
    },

    getBackButtonProps() {
       this.$nextTick()
      return {
          text: 'Back',
          icon: 'prev',
          click: this.backHome,
          theme: 'text-[#4A4A4B] bg-[#F1F3F9] hover:bg-[#E5E9F5]'
        }
    },
    getNextButtonProps() {
      this.$nextTick()
      return {
        text: 'Next',
        icon: 'next',
        disabled: this.selectedAnswer,
        click: this.nextWait,
        theme: 'bg-body hover:bg-[#1B1B1E] disabled:opacity-30',
        short: this.content.short
      }
    }
  },
  methods: {
    ...mapMutations(['clearHistory', 'saveContent', 'setHistory', 'saveVariant']),
    backHome(){
      if (this.survey.id === 1) {
        this.$router.push({
          path: '/',
        });
      } else {
        this.selectedAnswer = false
        this.show = false
        if (this.layotname.includes(this.myPrewContentId)) {
          this.show = true
          this.back()
        } else {
          setTimeout(() => {
            this.show = true
            this.back()
          }, 500);
        }
      }
    },
    nextWait(){
      const answeres = document.querySelectorAll('.answer'),
            active = document.querySelector('.answer.active'),
            index = Array.prototype.indexOf.call(answeres, active),
        userAnswer = this.content.answer.answerList[index];
      this.mixpanel.track('Quiz Answer', {
        question: this.content.title,
        answer: userAnswer,
      })
        if (this.survey.id === 3) {
          this.mixpanel.people.set({ "Age Group": userAnswer })
        }
        if (this.survey.id === 34) {
          this.$router.push({
            name: 'wait',
          });
        } else {
          this.selectedAnswer = true
          if (this.layotname.includes(this.nextContentId)) {
            this.next()
          } else {
            this.show = false
            setTimeout(() => {
              this.show = true
              this.next()
              setTimeout(() => {
                this.classActive()
              }, 500)
            }, 500);
          }
        }
    },

    classActive(){
        const answeres = document.querySelectorAll('.answer')
        const divsArr = Array.from(answeres);
        this.selectedAnswer = !divsArr.some((item) => item.classList.contains('active'))
    },

    json(json) {
      return require(`@/assets/images/json/${json}`);
    },

    image(path) {
      return require(`@/assets/images/content/${path}`);
    },

    video(path) {
      return require(`@/assets/video/${path}`);
    },

    myAvesomeClickFunction(e){
      let str = []
      str = e.target.innerText
      str = str.split(',')[0]
      this.selectedAnswer = false
      if (e.target.classList.contains('sexual')){
        sessionStorage.setItem('resbtn', str);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.classActive()
    });
  },

};
</script>
