<template>
  <div class="flex-1 w-full mx-4px max-w-73px">
    <button
      class="flex items-center justify-center bg-[#F1F3F9] rounded-9px border-none font-700 text-16px h-53px leading-normal w-full cursor-pointer max-w-73px text-body sm:(text-18px leading-normal h-70px)"
      :class="{'bg-body text-[#fff]': selected === answer}"
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
