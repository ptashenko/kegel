<template>
  <header :class="{ 'header': true, 'absolute': $route.name === 'home' }">
      <img src="@/assets/images/Logo_white.png" alt="logo" class="header__logo" v-if="isDark">
      <img src="@/assets/images/logo_black.png" alt="logo" class="header__logo" v-else>
    {{bgBody}}
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
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  top: 0;
  left: 0;
  right: 0;

  padding: 24px 0;
  margin: 0 auto;

  max-width: 311px;
  background-color: transparent;

    @media (min-width: 600px) {
      padding: 32px 0;
      max-width: 520px;
    }

  &__logo{
      width: 150px;
        @media (max-width: 480px) {
          width: 120px;
        }
    }
}

.absolute {
  position: absolute;
}

</style>
