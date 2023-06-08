<template>
  <button
    class="answer relative cursor-pointer font-sansMedium w-full py-15px pr-60px pl-20px font-500 text-14px leading-tight text-left bg-[#F1F3F9] border-none rounded-9px text-body sm:(text-18px leading-tight)"
    :class="{'active !font-sansSemiBold !bg-body !font-600 !text-[#fff]': selected === answer}"
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
.answer:before {
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

.answer:not(:last-child) {
  margin-bottom: 8px;
}

.active:before {
  background-color: white;
  background-image: url("@/assets/images/svg/icon_check-no-bg-black.svg");
  background-repeat: no-repeat;
  background-position: 60% 55%;
  background-size:65%;
  @media (max-width:480px) {
    background-position: 60% 57%;
  }
}
</style>
