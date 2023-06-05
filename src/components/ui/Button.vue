<template>
  <button :class="theme" class="font-sansMedium w-full rounded-9px border-none text-[#fff] flex items-center justify-center font-500 text-17px cursor-pointer duration-200 p-18px focus:shadow-button">
    <img src="@/assets/images/svg/icon_arrow-prev.svg" class="mr-12px" alt="" v-if="icon === 'prev'">
    <span>{{ text }}</span>
    <img src="@/assets/images/svg/icon_arrow-next.svg" class="ml-12px" alt="" v-if="icon === 'next'">
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
