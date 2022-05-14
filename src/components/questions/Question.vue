<template>
  <button
    class="answer"
    @click="saveHistory"
    :class="{'active': selected === answer}"
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
    },
  },
  mixins: [history],
};
</script>

<style scoped lang="scss">
.answer {
  font-family: "SF Pro Text Medium";
  width: 100%;
  padding: 0 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  height: 53px;
  background-color: #F1F3F9;
  border: none;
  border-radius: 9px;
  transition: 0.2s;
  cursor: pointer;
  position: relative;
  color: #111113;

  @media (max-width: 480px) {
    font-size: 14px;
  }

  &:before {
    content: '';
    width: 23px;
    height: 23px;
    background-color: white;
    position: absolute;
    right: 20px;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &.active {
    font-family: "SF Pro Text Bold";
    background-color: #111113;
    color: white;
    font-weight: bold;

    &:before {
      background-color: transparent;
      background-image: url("@/assets/images/icons/check.svg");
    }
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
}
</style>
