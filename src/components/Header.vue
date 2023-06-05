<template>
  <header class="relative top-0 left-0 right-0 bottom-0 py-24px mx-auto bg-transparent max-w-311px sm:(max-w-520px py-32px)" :class="{'!absolute': $route.name === 'home' }">
    <img :src="require(`@/assets/images/logos/${logo}.png`)" alt="logo" class="w-120px sm:w-150px">
  </header>
</template>

<script>
export default {
  name: 'HeaderLayout',
  props: {
    isDark: {
      type: Boolean,
      required: true,
      default: true,
    }
  },
  computed: {
    logo() {
      return this.isDark ? 'logo_white' : 'logo_black'
    }
  }
};
</script>
