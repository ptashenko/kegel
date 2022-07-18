<template>
  <header-layout :fixed="true"/>
  {{backClick}}
  <div class="dark-layout light">
    <div class="container-main is-page wait">
      <!-- <steps/> -->


      <div class="steps">
        <div class="steps__col d-flex">
          <div class="d-flex align-items-center justify-content-center w-100">
            <img src="@/assets/images/icons/check_no_bg.svg" class="checker" alt="check">
          </div>
        </div>
        <div class="steps__col d-flex">
          <div class="d-flex align-items-center justify-content-center w-100">
            <img src="@/assets/images/icons/check_no_bg.svg" class="checker" alt="check">
          </div>
        </div>
        <div class="steps__col d-flex">
          <div class="d-flex align-items-center justify-content-center w-100">
            <img src="@/assets/images/icons/check_no_bg.svg" class="checker" alt="check">
          </div>
        </div>
        <div class="steps__col d-flex">
          <div class="d-flex align-items-center justify-content-center w-100">
            <img src="@/assets/images/icons/check_no_bg.svg" class="checker" alt="check">
          </div>
        </div>

        <span style="`width: 100%`">  </span>
      </div>

      <div class="wait__content">
        
        <div class="d-flex  align-items-center block">
          <lottie-animation 
            class="Just"
            ref="animJust"
            :animationData="require(`@/assets/images/json/f1_loader.json`)"
            :loop="true"
            :autoPlay="true"
          />
        </div>
        
      
        <div></div>
        <template
          v-for="(step, index) in steps"
          :key="step.title"
        >
            <div v-if="step.active" class="wail__block__img" :class="{active:step.active}">
              <div class="wait__image">
                <img :src="image(index + 1)" alt="">
              </div>
              <div class="h2 text-center">
                {{ step.title }}
              </div>
            </div>
        </template>
      

      </div>
    </div>
  </div>
</template>

<script>
// import Steps from '@/components/Steps.vue';

export default {
  name: 'Wait-layout',
  components: {
    // Steps,
  },
  data() {
    return {
      show:true,
      steps: [
        {
          title: 'Kegel exercises will help you to change your sex life',
          active: true,
        },
        {
          title: 'Kegel exercises are supported by the multinational studies',
          active: false,
        },
        {
          title: 'The best thing? It takes only 5 min a day to exercise',
          active: false,
        },
        {
          title: 'You can do Kegel exercises even  laying on the couch',
          active: false,
        },
        {
          title: 'or standing in line for your favourite coffee',
          active: false,
        },
        {
          title: 'Nobody will notice that you exercise',
          active: false,
        },
        {
          title: 'If you miss a training session, that\'s okay',
          active: false,
        },
        {
          title: 'No one is perfect and we all can go astray. We\'ll help you to get back on track',
          active: false,
        },
      ],
    };
  },
  methods: {
    image(name) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/wait/${name}.png`);
    },
    
  },
  computed: {
    backClick(){
      window.onbeforeunload = function(){
        clearInterval(list);
      }
    }
  },
  mounted() {
    const list = setInterval(() => {
      const index = this.steps.findIndex((step) => step.active === true);
      // const index = 0;
      this.steps.forEach((step) => step.active = false);
      if (this.steps[index + 1]) {
        this.steps[index + 1].active = true;
        this.show= true
        console.log(index + 1);
      } else {
        this.$router.push({ name: 'goodHands' });
        clearInterval(list);
      }
    }, 5000);
  },
  beforeDestroy(){
    clearInterval(list);
  }
};
</script>

<style lang="scss" scoped>
.h2 {
  margin: 0;
}
.Just{
  width: 100%;
}
.wait {
  &__text__animate{
    font-family: "SF-Pro-Display-Medium";
    font-size: 14px;
    line-height: 135%;
    margin: 0;
    padding: 0;
    text-align: left;
  }
  &__image {
    text-align: center;
    margin: 15px auto;
    max-width: 400px;
    height: auto;
    display: block;
    position: relative;
    img {
      max-width: 400px;
      width: 100%;
    }
  }

  &__content {
    text-align: center;
    position: relative;
    display: block;
    .h2{
      max-width: 450px;
      margin: 0 auto;
      font-size: 24px;
      font-family: "SF-Pro-Display-Bold";
      @media (max-width: 480px) {
        font-size: 20px;
      }
    }
    .d-flex.block{
      padding: 7px;
      max-width: 311px ;
      margin: 54px auto 17px;
      @media (max-width: 480px) {
        margin: 38px auto 16px;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .65s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}
// Step
.steps {
  height: 6px;
  background-color: #F1F3F9;
  width: 100%;
  max-width: 280px;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

  &.light {
    background-color: #F1F3F9;

    .steps {
      &__col {
        background-color: #111113;
      }
    }

    span {
      background-color: color(red);
    }
  }

  span {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: .2s;
    background-color: #111113;
    border-radius: 5px;
  }

  &__col {
    width: 18px;
    height: 18px;
    border-radius: 50%;

    svg {
      position: relative;
      z-index: 4;
    }

    &.active {
      background-color: #111113;
    }
  }
}
.wail__block__img{
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
}
.wail__block__img.active{
  animation: second 5s;
}
@keyframes second{
  0% {
    opacity: 0;
  }
  7%{
    opacity: 1;
  }
  93%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes secondTwo{
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.dark-layout .steps__col img {
    position: relative;
    z-index: 1;
    width: 10px;
} 
</style>
