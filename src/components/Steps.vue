<template>
  <div
    v-if="layoutSeparationsIds"
    class="h-6px w-full max-w-280px mx-auto mb-32px flex items-center relative justify-between"
    :class="[dark ? 'bg-[#2C2C2E]' : 'bg-[#F1F3F9]']"
  >
    <div
      class="w-18px h-18px rounded-full flex z-999"
      v-for="(separation, index) in layoutSeparationsIds"
      :key="separation"
      :class="[
        dark || finished ? 'bg-[#2C2C2E]' : 'bg-[#F1F3F9]',
         {'!bg-red': index < activeDisplay && dark},
         {'!bg-body': index < activeDisplay && !dark},
         {'ml-[-15px]': index === 0},
         {'mr-[-15px]': index === layoutSeparationsIds.length - 1}
         ]"
    >
      <div class="flex items-center w-25rem justify-center" v-if="separations.indexOf(separation) !== -1 || loadPercent >= 100 || finished">
        <img src="@/assets/images/svg/icon_check-no-bg.svg" class="checker" alt="check" v-if="!dark && index !== 0">
        <img src="@/assets/images/svg/icon_check-no-bg-black.svg" class="checker" :class="{'invert-80': dark}" alt="check" v-if="dark && index !== 0" >
      </div>
    </div>
    <span
      class="absolute left-0 right-0 top-0 bottom-0 duration-200 rounded-5px"
      :class="[dark ? 'bg-red' : 'bg-body']"
      :style="`width: ${loadPercent}%`"
    />
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import nextContentUrl from '@/mixins/contollers';

export default {
  name: 'Steps-item',
  props: {
    dark: {
      default: false,
      type: Boolean,
    },
    finished: {
      type: Boolean,
      default: false
    }
  },
  mixins: [nextContentUrl],
  data(){
    return {
      num: true,
      activeDisplay: this.$store.state.survey.layotStep,
      myStep: 0
    }
  },
  computed: {
    ...mapGetters(['layoutSeparationsIds','layoutSeparations', 'content', 'separations', 'track']),
    loadPercent() {
      const index = ( this.track.layouts.findIndex((layout) => layout?.id == this.content?.id) ) ;
      console.log(this.activeDisplay);
      console.log(this.myStep)
      if(index <= this.layoutSeparations[1]){
        this.myStep = (((index / this.layoutSeparations[1]) * 100).toFixed(2))/3;
        if(this.myStep > 31){
          this.activeDisplay = 2
        }else{
          this.activeDisplay = 1
        }
      }else if(index <= this.layoutSeparations[2] && index > this.layoutSeparations[1]){
        this.myStep = 33.33 + ((((index - this.layoutSeparations[1]) / (this.layoutSeparations[2] - this.layoutSeparations[1])) * 100).toFixed(2))/3;
        if(this.myStep > 64){
          this.activeDisplay = 3
        }else{
          this.activeDisplay = 2
        }
      }else{
        this.myStep = 66.67 + ((((index - this.layoutSeparations[2]) / (this.layoutSeparations[3] - this.layoutSeparations[2])) * 100).toFixed(2))/3;
        if(this.myStep > 101){
          this.activeDisplay = 4
        }else{
          this.activeDisplay = 3
        }
      }
      return this.myStep
    },
  },
};
</script>

<style lang="scss" scoped>
.steps {
  height: 6px;
  background-color: #F1F3F9;
  width: 100%;
  max-width: 280px;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

  &.light {
    background-color: #F1F3F9;

    .steps {
      &__col {
        background-color: #111113;
      }
    }

    span {
      background-color: color(red);
    }
  }

  span {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: .2s;
    background-color: #111113;
    border-radius: 5px;
  }

  &__col {
    width: 18px;
    height: 18px;
    border-radius: 50%;

    svg {
      position: relative;
      z-index: 4;
    }

    &.active {
      background-color: #111113;
    }
  }
}
</style>
