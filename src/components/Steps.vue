<template>
  <div class="steps" :class="{'light': light}" v-if="layoutSeparations">
    <div
      class="steps__col"
      v-for="separation in layoutSeparations"
      :key="separation"
      :class="{'active': separations.indexOf(separation) !== -1}"
    >
      <svg
        width="18"
        height="18"
        v-if="separations.indexOf(separation) !== -1"
      >
        <use xlink:href="@/assets/images/sprite.svg#check-light" v-if="light"></use>
        <use xlink:href="@/assets/images/sprite.svg#check" v-else></use>
      </svg>
    </div>
    <span :style="`width: ${loadPercent}%`"></span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Steps-item',
  computed: {
    ...mapGetters(['layoutSeparations', 'content', 'separations', 'track']),
    loadPercent() {
      const index = this.track.layouts.findIndex((layout) => layout.id === this.content.id);
      return ((index / this.track.layouts.length) * 100).toFixed(2);
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
  background-color: grey;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 40px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

  &.light {
    background-color: #2C2C2E;

    .steps {
      &__col {
        background-color: #2C2C2E;
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
      background-color: white;
    }

    &:not(.active) {
      background-color: grey;
    }
  }
}
</style>
