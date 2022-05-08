<template>
  <div class="steps" :class="{'light': light}" v-if="layoutSeparations">
    <div
      class="steps__col"
      v-for="separation in layoutSeparations"
      :key="separation"
      :class="{'active': separations.indexOf(separation) !== -1 }"
    >
    <div v-if="separations.indexOf(separation) !== -1 || this.num">
      <img src="@/assets/images/icon_active_black.png" alt="check" v-if="light">
      <img src="@/assets/images/icon_active_white.png" alt="check" v-else>
    </div>
    </div>
    <span :style="`width: ${loadPercent}%`"> {{clg}} </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Steps-item',
  data(){
    return {
      num: true
    }
  },
  computed: {
    ...mapGetters(['layoutSeparations', 'content', 'separations', 'track']),
    loadPercent() {
      const index = ( this.track.layouts.findIndex((layout) => layout.id === this.content.id) );
      return ((index / this.track.layouts.length) * 100).toFixed(2);
    },
    clg(){
      let mmm = (this.track.layouts.findIndex((layout) => layout.active === this.content.active))
      return console.log( mmm )
    },
  },
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
  max-width: 400px;
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
