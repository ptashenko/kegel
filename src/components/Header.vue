<template>
  <header :class="{'is-fixed': fixed}">
    <div class="container-main">
      <!-- <router-link :to="{name: 'home'}"> -->
        <img src="@/assets/images/logo_black.png" alt="logo" class="logo" v-if="dark">
        <img src="@/assets/images/Logo_white.png" alt="logo" class="logo" v-else>
      <!-- </router-link> -->
    </div>
    {{bgBody}}
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
  data(){
    return{
      bgTheBody: '#000000'
    }
  },
  computed:{
    bgBody(){
      let mediaQuery = window.matchMedia('(max-width: 480px)');
      if (mediaQuery.matches) {
         if(this.dark){
          console.log(' Фон должен быть чорный ');
          document.body.style.backgroundColor = '#ffffff';
        }else {
          console.log(' Фон должен быть белый ');
          document.body.style.backgroundColor = '#111113';
        }
      }

     
    }
  }
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
