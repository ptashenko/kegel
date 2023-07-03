<template>
  <div className="font-800">
    {{ timer }}
  </div>
</template>

<script>
export default {
  name: 'countdown',
  props: {
    totalSeconds: {
      type: Number,
      default: 900
    },
    restart: {
      type: Boolean
    }
  },
  data() {
    return {
      timer: "15:00",
      intervalId: null,
      timerCount: null
    }
  },
  methods: {
    startTimer() {
      this.timer = this.formatTime(this.timerCount);
      if (!!Number(this.timerCount)) {
        this.intervalId = setInterval(() => {
          this.timerCount--;
          this.timer = this.formatTime(this.timerCount);
          console.log(this.timerCount)

          if (this.timerCount <= 0) {
            this.stopTimer(this.intervalId);
          }
        }, 1000);
      }
    },
    stopTimer() {
      clearInterval(this.intervalId);
    },
    formatTime(totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60)
          .toString()
          .padStart(2, "0");
      const seconds = (totalSeconds % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    }
  },
  created() {
    const savedTimer = localStorage.getItem("timer");
    if (savedTimer) {
      this.timerCount = savedTimer;
    } else {
      this.timerCount = this.totalSeconds
    }
  },
  watch: {
    timerCount(newValue) {
      localStorage.setItem("timer", newValue);
    },
    restart(newValue) {
      if (newValue) {
        localStorage.removeItem('timer')
        this.timerCount = this.totalSeconds
        this.$emit('update:restart', false)
      }
    }
  },
  mounted() {
    this.startTimer()
  },
  deactivated() {
    this.stopTimer()
  }
}
</script>
