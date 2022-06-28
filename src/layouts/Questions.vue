<template>
    <header-layout :fixed="true" :dark="true"/>

    <div class="block__steps" :data-step="content.steps">
      <steps v-if="content.steps !== false" />
    </div>
    <transition name="slide" mode="out-in">
      <div
      v-if="show"
      >
        <div class="questions__title">
          {{ survey.title }}
        </div>
        <div class="questions__thumbnail" v-if="survey.video">
          <video-background 
            :src="video(content.video)"
            :poster="video(content.poster)"
            class="video"
          >
          </video-background>
        </div>
        <div>
        </div> 
        <div class="questions__thumbnail" v-if="survey.thumbnail">
          <img
            :src="image(survey.thumbnail)"
            :alt="survey.title"
            width="400"
            height="200"
          >
        </div>
        <div class="questions__thumbnail" v-if="survey.json">
          <lottie-animation 
              class="animation" 
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
            :class="survey.answer.answerClass"
            @click="myAvesomeClickFunction"
            :key="answer.id"
            :answer="answer"
          />
        
        </div>
        <div v-if="survey.answer.style === 'buttons'" class="questions__lvl">
          <div>{{survey.answer.textLeft}}</div>
          <div>{{survey.answer.textRight}}</div>
        </div>
      </div>
    </transition>
    <footer-controls
      :buttonBack="{
          text: 'Back',
          icon: 'prev',
          click: backHome,
          theme: 'light'
        }"
      :buttonNext="{
          text: 'Next',
          icon: 'next',
          disabled: !selected,
          click: nextWait,
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
  name: 'Question-layout',
  data(){
    return{
      num: 0,
      timePlay: 0,
      show:true,
      layotname: [2, 6, 61, 9, 333, 14, 20, 201, 24, 28, 32, 321, 322, 323, 35, 353, 352, 36, 39, 41, 47, 48, 50, 51, 57]
    }
  },
  computed: {
    
    rateTo() {
      const list = this.survey.answer.answerList;
      return `Rate from 1 to ${list[list.length - 1]}`;
    },
    ...mapGetters(['content', 'track', 'myPrewContentId','nextContentId'])
  },
  
  components: {
    QuestionRadio,
    Question,
    Steps,
    
  },
  methods: {
    backHome(){
      if(this.survey.id === 1){
        this.$router.push({
          path: '/',
        });
      }
      else{
        this.show= false
        if(this.layotname.includes(this.myPrewContentId)){
          this.back()
        }else{
          this.show= false
          setTimeout(() => {
            this.show= true
            this.back()
          }, 500);
        }
      }
    },
    nextWait(){
      if(this.survey.id === 34){
        this.$router.push({
          name: 'wait',
        });
      }
      else{
        if(this.layotname.includes(this.nextContentId)){
          this.next()
        }else{
          this.show= false
          setTimeout(() => {
            this.show= true
            this.next()
          }, 500);
        }
      }
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
      if (e.target.classList.contains('sexual')){
        sessionStorage.setItem('resbtn', str);
      }
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
    margin: 0px auto 32px;
    text-align: center;
    max-width: 450px;
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
.video{
      max-width: 520px;
      width: 100%;
      margin: 0 auto;
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
.slide-enter-active, .slide-leave-active {
  transition: opacity .5s ease
}

.slide-enter-from, .slide-leave-to {
  opacity: 0
}
</style>
