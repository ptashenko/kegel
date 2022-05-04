<template>
  <button :class="theme" class="btn">
    <svg class="prev-icon" width="13" height="10" v-if="icon === 'prev'">
      <use xlink:href="@/assets/images/sprite.svg#arrow-prev"></use>
    </svg>
    <span>{{ text }}</span>
    <svg class="next-icon" width="13" height="10" v-if="icon === 'next'">
      <use xlink:href="@/assets/images/sprite.svg#arrow-next"></use>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'Button-field',
  props: {
    text: {
      required: true,
      type: String,
    },
    theme: {
      required: true,
      type: String,
    },
    icon: {
      type: [String, Boolean],
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  height: 55px;
  border-radius: 20px;
  background-color: #cecece;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s #cecece;
  padding: 0 35px;

  @media (max-width: 480px) {
    padding: 0 10px;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(#3E3E3E, .3);
  }

  &.light {
    background: #F1F3F9;
    color: #4A4A4B;

    &:hover {
      background-color: #E5E9F5;
    }
  }

  &.red {
    position: relative;
    background: red;
    border-radius: 20px;

    &:hover {
      background-color: #F5423F;
    }

    svg {
      fill: white;
    }

    & > * {
      position: relative;
      z-index: 3;
    }
  }

  &.grey {
    background: #282828;

    &:hover {
      background-color: #373737;
    }

    & > * {
      opacity: .75;
    }

    svg {
      fill: white;
    }
  }

  &.dark {
    background-color: #111113;

    svg {
      fill: white;
    }

    &[disabled] {
      opacity: .3;
    }
  }
}

.next-icon {
  margin-left: 12px;
}

.prev-icon {
  margin-right: 12px;
}
</style>
