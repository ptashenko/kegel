<template>
  <button
    :class="['answer', {'active': selected === answer}]"
    @click="saveHistory"
  >
    {{ answer }}
  </button>
</template>

<script>
import history from '@/mixins/history';

export default {
  name: 'Question-component',
  data() {
    return {
      active: '',
    };
  },
  props: {
    answer: {
      required: true,
      type: String,
      default: '',
    },
  },
  mixins: [history],
};
</script>

<style scoped lang="scss">
.answer {
  font-family: "SF Pro Text Medium";
  width: 100%;
  padding: 15px 60px 15px 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  background-color: #F1F3F9;
  border: none;
  border-radius: 9px;
  // transition: 0.2s;
  cursor: pointer;
  position: relative;
  color: #111113;

  @media (max-width: 480px) {
    font-size: 14px;
  }

  &:before {
    content: '';
    width: 24px;
    height: 24px;
    background-color: white;
    position: absolute;
    right: 20px;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &.active {
    font-family: "SF Pro Text Semibold";
    background-color: #111113;
    color: white;
    font-weight: bold;

    &:before {
      // background-color: transparent;
      background-color: white;
      background-image: url("@/assets/images/icons/check_no_bg_black.svg");
      background-repeat: no-repeat;
      background-position: 60% 55%;
      background-size:65%;
      @media (max-width:480px) {
        background-position: 60% 57%;
      }
    }
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
}
</style>
