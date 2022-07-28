<template>
  <div class="steps" :class="{'light': light}" v-if="layoutSeparationsIds">
    <div
      class="steps__col d-flex"
      v-for="(separation, index) in layoutSeparationsIds"
      :key="separation"
      :class="{active: index < activeDisplay}"
    >
    <div class="d-flex align-items-center justify-content-center w-100" v-if="separations.indexOf(separation) !== -1 || loadPercent >= 100">
      <img src="@/assets/images/icons/check_no_bg_black.svg" class="checker" :class="{active: index < activeDisplay}" alt="check" v-if="light">
      <img src="@/assets/images/icons/check_no_bg.svg" class="checker" :class="{active: index < activeDisplay}" alt="check" v-else>
    </div>
    </div>
    <span :style="`width: ${loadPercent}%`">  </span>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import nextContentUrl from '@/mixins/contollers';

export default {
  name: 'Steps-item',
  mixins: [nextContentUrl],
  data(){
    return {
      num: true,
      activeDisplay: this.$store.state.survey.layotStep
    }
  },
  computed: {
    ...mapGetters(['layoutSeparationsIds','layoutSeparations', 'content', 'separations', 'track']),
    loadPercent() {
      const index = ( this.track.layouts.findIndex((layout) => layout?.id == this.content?.id) ) ;
      let myStep = 0;
      
      if(index <= this.layoutSeparations[1]){
        myStep = (((index / this.layoutSeparations[1]) * 100).toFixed(2))/3;
      }else if(index <= this.layoutSeparations[2] && index > this.layoutSeparations[1]){
        myStep = 33.33 + ((((index - this.layoutSeparations[1]) / (this.layoutSeparations[2] - this.layoutSeparations[1])) * 100).toFixed(2))/3;
      }else{
        myStep = 66.67 + ((((index - this.layoutSeparations[2]) / (this.layoutSeparations[3] - this.layoutSeparations[2])) * 100).toFixed(2))/3;
      }
      return myStep                       
    },
  },
  watch:{
    
  } ,
  props: {
    light: {
      default: false,
      type: Boolean,
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
