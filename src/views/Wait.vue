<template>
  <header-layout :fixed="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page wait">
      <steps/>

      <div class="wait__content">
        <img src="@/assets/images/wait/animation.svg" alt="">

        <template
          v-for="(step, index) in steps"
          :key="step.title"
        >
          <div v-show="step.active">
            <div class="wait__image">
              <img :src="image(index + 1)" alt="" width="310" height="310">
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
      return require(`@/assets/images/wait/${name}.svg`);
    },
  },
  mounted() {
    setInterval(() => {
      const index = this.steps.findIndex((step) => step.active === true);
      // eslint-disable-next-line no-param-reassign,no-return-assign
      this.steps.forEach((step) => step.active = false);
      if (this.steps[index + 1]) {
        this.steps[index + 1].active = true;
      } else {
        this.$router.push({ name: 'goodHands' });
      }
    }, 5000);
  },
};
</script>

<style lang="scss" scoped>
.h2 {
  margin: 0;
}

.wait {
  &__image {
    text-align: center;
    margin: 15px 0;

    img {
      max-width: 100%;
    }
  }

  &__content {
    text-align: center;
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
