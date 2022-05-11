<template>
  <div class="loading as"
    @click="openPopup"
  >
    <div class="loading__title">Processing...</div>
    <div class="text__percent d-flex justify-content-beetwen">
      <div>
        {{title}}
      </div>
      <div>
        {{ percent }}%
      </div>
    </div>
    <div class="loading__bar">
      <span></span>
      <span class="loading__percent" :style="`width: ${percent}%`"></span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'analizProcessing',
  props:{
    title:{
      type:String,
      default:''
    },
    percent:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      percent: 0,
    };
  },
  mounted() {
    const as = setInterval(() => {
      if (this.percent < 70) {
        this.percent += 1;
      } else {
        clearInterval(as);
      }
    }, 100);
  },
};
</script>

<style lang="scss" scoped>
.text__percent{
  font-size: 14px;
  line-height: 150%;
  font-family: "SF Pro Text Semibold";
  color: #111113;
}
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
    height: 10px;
    background: #F1F3F9;
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
    background-color: #111113;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 20%;
  }
}
</style>
