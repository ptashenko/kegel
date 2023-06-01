<template>
  {{backClick}}
    <div class="container-main is-page wait">

      <div class="steps">
        <div class="steps__col d-flex" v-for="(_, idx) of new Array(4)" :key="idx">
          <div class="d-flex align-items-center justify-content-center w-100">
            <img src="@/assets/images/svg/icon_check-no-bg.svg" class="checker" alt="check">
          </div>
        </div>
      </div>

      <div class="wait__content">
        <lottie-animation
          class="wait__animation"
          ref="animJust"
          :animationData="require(`@/assets/images/json/f1_loader.json`)"
          :loop="true"
          :autoPlay="true"
        />

        <template
          v-for="(step, index) in steps"
          :key="step.title"
        >
            <div v-if="step.active" class="wait__body" :class="{active:step.active}">
              <div class="wait__image">
                <img :src="image(index + 1)" alt="">
              </div>
              <h2 class="wait__text">
                {{ step.title }}
              </h2>
            </div>
        </template>

      </div>

    </div>
</template>

<script>
import '../assets/css/animations.css'
export default {
  name: 'Wait-layout',
  data() {
    return {
      show:true,
      list: null,
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
        clearInterval(this.list);
      }
    }
  },
  mounted() {
    this.list = setInterval(() => {
      const index = this.steps.findIndex((step) => step.active === true);
      // const index = 0;
      this.steps.forEach((step) => step.active = false);
      if (this.steps[index + 1]) {
        this.steps[index + 1].active = true;
        this.show= true
        console.log(index + 1);
      } else {
        this.$router.push({ name: 'goodHands' });
        clearInterval(this.list);
      }
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.list);
  }
};
</script>

<style lang="scss" scoped>
.wait {
  padding-bottom: 100px;

  &__body {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
      @media (min-width: 600px) {
          padding-bottom: 50px;
      }

    &.active {
      animation: second 5s;
    }
  }

  &__animation {
    display: flex;
    width: 100%;
    padding: 7px;
    max-width: 311px ;
    margin: 54px auto 17px;
    @media (max-width: 480px) {
      margin: 38px auto 16px;
    }
  }

  &__image {
    text-align: center;
    margin: 15px auto;
    max-width: 373px;
    height: auto;
    display: block;
    position: relative;
    @media (min-width: 600px) {
      margin: 32px auto;
    }
    img {
      max-width: 100%;
      width: 100%;
    }
  }

  &__content {
    text-align: center;
    position: relative;
    display: block;
  }

  &__text {
    max-width: 450px;
    margin: 0 auto;
    font-size: 24px;
    font-family: "SF-Pro-Display-Bold";
    @media (min-width: 600px) {
        max-width: 100%;
        font-size: 30px;
      }
      @media (max-width: 480px) {
        font-size: 20px;
      }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .65s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.steps {
  height: 6px;
  background-color: #111113;
  width: 100%;
  max-width: 280px;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

  &__col {
    background-color: #111113;
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
}
</style>
