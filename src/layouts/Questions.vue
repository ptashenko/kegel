<template>
    <steps v-if="content.id !== 1" :dark="dark" />
    <transition name="slide" mode="out-in">
      <div v-if="show" class="flex flex-col">
        <div class="font-displayBold text-20px text-left pb-32px leading-normal sm:text-left sm:text-24px sm:leading-normal">
          {{ $t(`survey.id_${content.id}.${survey.title}`) }}
        </div>

        <div v-if="survey.video" class="mb-32px text-center max-w-450px w-full sm:max-w-full">
          <video-background
            :src="video($t(`survey.id_${content.id}.${content.video}`))"
            :poster="video($t(`survey.id_${content.id}.${content.poster}`))"
            class="h-209px rounded-14px max-w-520px w-full sm:h-340px"
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
            ref="answer-btn"
            :is="survey.answer.style === 'radio' ? 'question' : 'question-radio'"
            v-for="answer in survey.answer.answerList"
            :class="survey.answer.answerClass"
            @click="myAvesomeClickFunction($event, answer)"
            :key="answer.id"
            :answer="$t(`survey.id_${content.id}.${answer}`)"
          />
        </div>
        <div v-if="surveyAnswerIsButtons" class="flex max-w-390px w-full mx-auto mt-16px justify-between opacity-75 text-14px sm:text-18px">
          <div>{{ $t(`survey.id_${content.id}.textLeft`) }}</div>
          <div>{{ $t(`survey.id_${content.id}.textRight`) }}</div>
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
      selectedAnswer: false,
      layotname: [2, 6, 61, 9, 333, 14, 20, 201, 24, 28, 32, 321, 322, 323, 35, 353, 352, 36, 39, 41, 47, 48, 50, 51, 57]
    }
  },

  computed: {
    ...mapGetters(['content', 'track', 'myPrewContentId','nextContentId','history']),

    surveyAnswerIsButtons () {
      return this.survey.answer.style === 'buttons'
    },

    rateTo() {
      const list = Object.values(this.survey.answer.answerList);
      return `Rate from 1 to ${list.length}`;
    },

    getBackButtonProps() {
       this.$nextTick()
      return {
          text: 'Back',
          icon: 'prev',
          click: this.backHome,
          style: 'back'
        }
    },
    getNextButtonProps() {
      this.$nextTick()
      return {
        text: 'Next',
        icon: 'next',
        disabled: !this.selectedAnswer,
        click: this.nextWait,
        style: 'next',
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
        console.log('ELSE')
        this.$nextTick(() => {
          this.selectedAnswer = true
          console.log('2', this.selectedAnswer)
        })
        console.log('3', this.selectedAnswer)
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
          this.selectedAnswer = false
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
      const answerButtons = this.$refs['answer-btn'];
      this.selectedAnswer = answerButtons.some((item) => item.selected)
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
      this.selectedAnswer = true
      let str = []
      str = e.target.innerText
      str = str.split(',')[0]
      if (e.target.classList.contains('sexual')){
        sessionStorage.setItem('resbtn', str);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.classActive()
      console.log()
    });
  },

};
</script>
