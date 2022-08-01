<template>
  <div class="answer__div">
    <button
      :class="['answer', {'active': selected === answer}]"
      @click="saveHistory"
    >
      {{ answer }}
    </button>
  </div>
</template>

<script>
import history from '@/mixins/history';

export default {
  name: 'Question-radio-component',
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

<style lang="scss" scoped>
.answer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F1F3F9;
  border-radius: 9px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  width: 100%;
  cursor: pointer;
  // transition: 0.2s;
  height: 70px;
  max-width: 73px;
  color: #111113;

  @media (max-width: 480px) {
    font-size: 16px;
    height: 53px;
  }

  &.active {
    background-color: #111113;
    color: white;
  }

  &__div {
    flex-grow: 1;
    width: 100%;
    margin: 0 4px;
    max-width: 73px;
  }
}
</style>
