<template>
  <header :class="{'is-fixed': fixed}">
    <div class="container-main">
      <!-- <router-link :to="{name: 'home'}"> -->
        <img src="@/assets/images/logo-dark.png" alt="logo" class="logo" v-if="dark">
        <img src="@/assets/images/logo.png" alt="logo" class="logo" v-else>
      <!-- </router-link> -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderLayout',
  props: {
    fixed: {
      default: false,
      type: Boolean,
    },
    dark: {
      default: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  padding-top: 25px;
  padding-bottom: 25px;

  &.is-fixed {
    position: absolute;
    top: 0;
    max-width: 100%;
    margin: 0 auto;
    left: 0;
    right: 0;
    padding: 24px 32px;
  }

  .container-main {
    background-color: transparent;
    .logo{
      width: 150px;
      @media (max-width: 480px) {
        width: 120px;
      }
    }
  }
}
</style>
