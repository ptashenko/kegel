<template>
    <div class="container-mob pb-100px">

      <create-plan-bar :timer="fullTime" />

      <div class="text-center relative block">
        <template
          v-for="step in steps"
          :key="step.title"
        >
            <div v-if="step.active" class="w-full relative flex flex-col items-stretch justify-between sm:pb-50px" :class="{'animate-seconds': step.active}">
              <h2 class="max-w-450px mx-auto font-displayBold text-20px leading-normal my-32px sm:(max-w-full text-30px leading-normal)" v-html="step.title" />
              <div class="text-center mx-auto max-w-373px h-auto block relative">
                <img :src="image" alt="" class="max-w-full w-full">
              </div>
            </div>
        </template>

      </div>

    </div>
</template>

<script>
import CreatePlanBar from "@/components/CreatingPlanBar.vue";
export default {
  name: 'Wait-layout',
  components: {
    CreatePlanBar,
  },
  data() {
    return {
      show:true,
      list: null,
      currentImage: 1,
      timePerStep: 5000,
      steps: [
        {
          title: 'Dr. Kegel is the most popular Kegel exercise plan in the World!',
          active: true,
        },
        {
          title: 'The Dr. Kegel Plan is based on the latest scientific studies',
          active: false,
        },
        {
          title: 'It includes only the proven and the most effective Kegel exercises',
          active: false,
        },
        {
          title: 'Simply follow interactive guided workouts in a handy mobile app',
          active: false,
        },
        {
          title: 'The best part?<br>It only takes 5 minutes a day',
          active: false,
        },
      ],
    };
  },
  computed: {
    image() {
      return require(`@/assets/images/wait/baseline_v2/${this.currentImage}.png`);
    },
    fullTime() {
      return this.timePerStep * this.steps.length
    }
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
          this.show= true
          console.log(index + 1);
        } else {
          this.$router.push({ name: 'efficacy' });
          clearInterval(this.list);
        }
      }, this.timePerStep);
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
