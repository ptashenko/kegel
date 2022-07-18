<template>
  <div class="loading">
    <div class="loading__title">
      <slot></slot>
      </div>

    <div class="loading__bar">
      <span>{{ percent }}%</span>
      <span class="loading__percent" :style="`width: ${percent}%`"></span>
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
    };
  },
  mixins: [history, nextContentUrl],
  mounted() {
    const progress = setInterval(() => {
      if (this.percent < 100) {
        this.percent += 1;
      } else {
        clearInterval(progress);
        this.next();
      }
    }, 100);
  },
  beforeDestroy(){
    clearInterval(progress);
  }
};
</script>

<style lang="scss" scoped>

.loading {
  max-width: 400px;
  margin: 25px auto 0;
  width: 100%;

  &__title {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 8px;
    text-align: center;
    color: #FFFFFF;
  }

  &__bar {
    height: 40px;
    background: #1D1D1F;
    border-radius: 9px;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;

    span {
      &:first-child {
        position: relative;
        z-index: 4;
      }
    }
  }

  &__percent {
    background-color: #E44240;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 20%;
  }
}
</style>
