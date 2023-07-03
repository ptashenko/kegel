<template>
    <div class="container-mob pb-100px">

      <create-plan-bar :timer="fullTime" />

      <div class="text-center relative block">
        <template
          v-for="step in steps"
          :key="step.title"
        >
            <div v-if="step.active" class="w-full relative flex flex-col items-stretch justify-between sm:pb-50px" :class="{'animate-seconds': step.active}">
              <h2 class="max-w-450px mx-auto font-displayBold text-20px leading-normal my-32px sm:(max-w-full text-30px leading-normal)" v-html="$t(`wait_v2.titles.${step.title}`)" />
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
