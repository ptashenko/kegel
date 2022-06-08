<template>
  <header-layout :fixed="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page wait">
      <steps/>

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
        

        <template
          v-for="(step, index) in steps"
          :key="step.title"
        >
          <div v-show="step.active">


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
import Steps from '@/components/Steps.vue';

export default {
  name: 'Wait-layout',
  components: {
    Steps,
  },
  data() {
    return {
      steps: [
        {
          title: 'Kegel exercises are supported by the multinational studies',
          active: true,
        },
        {
          title: 'Kegel exercises will help you to change your sex life',
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
          title: 'If you miss training, that\'s okay',
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
  mounted() {
    const list = setInterval(() => {
      const index = this.steps.findIndex((step) => step.active === true);
      // eslint-disable-next-line no-param-reassign,no-return-assign
      this.steps.forEach((step) => step.active = false);
      if (this.steps[index + 1]) {
        this.steps[index + 1].active = true;
      } else {
        this.$router.push({ name: 'goodHands' });
        clearInterval(list);
      }
    }, 5000);
  },
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
    img {
      max-width: 400px;
      width: 100%;
    }
  }

  &__content {
    text-align: center;
    
    .h2{
      max-width: 450px;
      margin: 0 auto;
      font-size: 24px;
      
      @media (max-width: 480px) {
        font-size: 20px;
      }
    }
    .d-flex.block{
      padding: 7px;
      max-width: 311px ;
      margin: 54px auto;
      @media (max-width: 480px) {
        margin: 38px auto;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}
</style>
