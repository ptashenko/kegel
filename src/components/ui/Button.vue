<template>
  <button :class="theme" class="btn">
    <img src="@/assets/images/arrow-prev.svg" class="btn__prev" alt="" v-if="icon === 'prev'">
    <span>{{ text }}</span>
    <img src="@/assets/images/arrow-next.svg" class="btn__next" alt="" v-if="icon === 'next'">
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
  border-radius: 9px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;
  padding: 18px 45px;
  font-family: "SF Pro Text Medium";

  @media (max-width: 480px) {
    padding: 18px 18px;
  }
  &__next{
    margin: 0 0 0 12px;
  }
  &__prev{
    margin: 0 12px 0 0;
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(#3E3E3E, .3);
  }
  &.dark {
    background: #111113;

    &:hover {
      background-color: #1B1B1E;
    }
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
    background: rgba(228, 66, 64, 1);
    border-radius: 9px;

    &:hover {
      background-color: rgba(245, 66, 63, 1);
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
    background: rgba(40, 40, 40, 1);

    &:hover {
      background-color: rgba(55, 55, 55, 1);
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
