<template>
  <div class="max-w-400px mx-auto mb-64px w-full">
    <div class="font-400 text-14px leading-normal mb-8px text-center text-[#fff]">
      <slot></slot>
      </div>

    <div class="h-32px bg-[#1D1D1F] rounded-9px font-700 text-16px leading-normal flex items-center justify-center relative overflow-hidden text-[#fff]">
      <span class="relative z-4">{{ percent }}%</span>
      <span class="bg-red absolute left-0 top-0 bottom-0 w-[20%]" :style="`width: ${percent}%`"></span>
    </div>
  </div>
</template>

<script>
import history from '@/mixins/history';
import nextContentUrl from '@/mixins/contollers';

export default {
  name: 'Processing-item',

  data() {
    return {
      percent: 0,
      progress: null,
    };
  },

  mixins: [history, nextContentUrl],

  mounted() {
    this.progress = setInterval(() => {
      if (this.percent < 100) {
        this.percent += 1;
      } else {
        clearInterval(this.progress);
        this.next();
      }
    }, 100);
  },

  beforeUnmount(){
    clearInterval(this.progress);
  }
};
</script>
