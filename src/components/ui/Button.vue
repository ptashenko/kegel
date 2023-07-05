<template>
  <button
      class="font-sans w-full rounded-9px border-none text-[#fff] flex items-center justify-center font-500 text-18px cursor-pointer duration-200 p-16px mt-32px mb-16px max-h-53px focus:shadow-button"
      :class="buttonStyle"
  >
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
    style: {
      required: true,
      type: String,
    },
    icon: {
      type: [String, Boolean],
    },
  },
  computed: {
    buttonStyle() {
      switch (this.style) {
        case 'back':
          return '!text-[#4A4A4B] bg-[#F1F3F9] hover:bg-[#E5E9F5]'
        case 'next':
          return 'bg-body hover:bg-[#1B1B1E] disabled:opacity-30'
        case 'back-black':
          return 'bg-[#282828] hover:bg-[#373737FF]'
        case 'next-black':
          return 'bg-red hover:bg-[#F5423FFF]'
        case 'back-red':
          return '!text-[#4A4A4B] bg-[#F1F3F9] hover:bg-[#E5E9F5]'
        case 'next-red':
          return 'bg-red hover:bg-[#F5423FFF]'
        default:
          return 'bg-body hover:bg-[#1B1B1E] disabled:opacity-30'
      }
    }
  }
};
</script>
