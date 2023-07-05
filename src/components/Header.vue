<template>
  <header class="relative top-0 left-0 right-0 pt-24px pb-32px mx-auto bg-transparent max-w-311px sm:max-w-520px sm:py-32px" :class="{'!absolute': $route.name === 'home' }">
    <router-link to="/" class="">
      <img :src="require(`@/assets/images/logos/${logo}.png`)" alt="logo" class="inline-block w-120px sm:w-150px">
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'HeaderLayout',
  props: {
    dark: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    logo() {
      return this.$route.name === 'home' ? 'logo_white' : (this.dark ? 'logo_white' : 'logo_black')
    },
  }
};
</script>
