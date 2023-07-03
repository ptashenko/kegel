<template>
  <div class="container-mob pb-100px">
    <steps finished />

    <div class="text-center relative block">
      <lottie-animation class="flex w-full p-7px max-w-311px mx-auto mt-38px mb-16px sm:(mt-54px)" ref="animJust"
        :animationData="require(`@/assets/images/json/${$t(`wait.loader`)}`)" :loop="true" :autoPlay="true" />

      <template v-for="(step, index) in steps" :key="step.title">
        <div v-if="step.active" class="w-full relative flex flex-col items-stretch justify-between sm:pb-50px"
          :class="{ 'animate-seconds': step.active }">
          <div class="text-center mx-auto my-15px max-w-373px h-auto block relative sm:my-32px">
            <img :src="require(`@/assets/images/wait/${currentImage}.png`)" alt="" class="max-w-full w-full">
          </div>
          <h2 class="max-w-450px mx-auto font-displayBold text-20px sm:(max-w-full text-30px)">
            {{ $t(`wait.titles.${step.title}`) }}
          </h2>
        </div>
      </template>

    </div>

  </div>
</template>

<script>
import '../assets/css/animations.css'
import Steps from '@/components/Steps.vue'
export default {
  name: 'Wait-layout',
  components: {
    Steps
  },
  data() {
    return {
      show: true,
      list: null,
      currentImage: 1,
      steps: [
        {
          title: 't_1',
          active: true,
        },
        {
          title: 't_2',
          active: false,
        },
        {
          title: 't_3',
          active: false,
        },
        {
          title: 't_4',
          active: false,
        },
        {
          title: 't_5',
          active: false,
        },
        {
          title: 't_6',
          active: false,
        },
        {
          title: 't_7',
          active: false,
        },
        {
          title: 't_8',
          active: false,
        },
      ],
    };
  },
  computed: {
    image() {
      return require(`@/assets/images/wait/${this.currentImage}.png`);
    },
  },
  methods: {
    startInterval() {
      this.list = setInterval(() => {
        const index = this.steps.findIndex((step) => step.active === true);
        this.currentImage++
        // const index = 0;
        this.steps.forEach((step) => step.active = false);
        if (this.steps[index + 1]) {
          this.steps[index + 1].active = true;
          this.show = true
          console.log(index + 1);
        } else {
          this.$router.push({ name: 'goodHands' });
          clearInterval(this.list);
        }
      }, 5000);
    }
  },
  mounted() {
    this.startInterval()
  },
  beforeUnmount() {
    clearInterval(this.list);
  }
};
</script>
