<template>
  <div class="flex items-center bg-[#F9F9F9] rounded-140px p-8px pr-32px justify-between max-w-311px mx-auto mt-16px">
    <img src="@/assets/images/svg/baseline_v2/icon_gear.svg" />
    <div class="">
      <p class="font-display font-500 text-16px leading-normal text-body opacity-75">{{ $t('wait.plan') }}</p>
      <div class="relative bg-[#4c4c4d] bg-opacity-25 rounded-54px h-7px w-full mt-6px">
        <span class="absolute top-0 left-0 h-7px bg-red rounded-54px duration-250" :style="{width: progress + '%'}" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatePlanBar',
  props: {
    timer: {
      type: Number,
      default: 25000
    }
  },
  data() {
    return {
      totalTime: 0,
      currentTime: 0,
      progress: 0,
      intervalId: null
    }
  },
  methods: {
    startProgressBar() {
      this.intervalId = setInterval(() => {
        if (this.currentTime >= this.timer) {
          clearInterval(this.intervalId);
        } else {
          this.currentTime = this.currentTime + 100;
          console.log(this.currentTime)
          this.progress = (this.currentTime / this.timer) * 100;
        }
      }, 100);
    }
  },
  mounted() {
    this.startProgressBar()
  }
}
</script>
