<template>
  <div class="max-w-400px mt-25px mx-auto mb-0 w-full"
    @click="openPopup"
  >
    <div class="font-400 text-14px leading-normal mb-8px text-center text-[#fff]">{{ $t('analizProcessing.title') }}</div>
    <div class="bg-[#111113] absolute left-0 top-0 bottom-0 w-1/5 flex justify-beetwen">
      <div>
        {{title}}
      </div>
      <div>
        {{ percent }}%
      </div>
    </div>
    <div class="h-10px bg-[#F1F3F9] rounded-9px font-700 text-18px leading-normal flex items-center justify-center relative overflow-hidden text-[#fff]">
      <span class="relative z-4"></span>
      <span class="bg-[#111113] absolute left-0 top-0 bottom-0 w-1/5 " :style="`width: ${percent}%`"></span>
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
      poolling: null,
    };
  },

  mounted() {
    this.poolling = setInterval(() => {
      if (this.percent < 70) {
        this.percent += 1;
      } else {
        clearInterval(this.poolling);
      }
    }, 100);
  },

  beforeUnmount() {
    clearInterval(this.poolling);
  }
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
