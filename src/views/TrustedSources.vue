<template lang="">

<div>
  <header-layout :fixed="true" :dark="true"/>
  
  <div class="dark-layout light">
    <div class="container-main is-page TimePlan">
      
      <div class="h2 text-center">
        {{title}}
      </div>


      <div class="layout__buttons">
          <img src="@/assets/images/content/f4_img.png">
      </div>
      <footer-controls
        :buttonBack="{
          text: 'Back',
          click: btnBack,
          icon: 'prev',
          theme: 'light'
        }"
        :buttonNext="{
          icon: 'next',
          text: 'Continue',
          click: btnClick ,
          theme: 'red'
        }"
      />
    </div>
  </div>
  
  </div> 

  </template>
<script>
import { mapGetters } from 'vuex';
import nextContentUrl from '@/mixins/contollers';


export default {
  name: 'TrustedSources',

  components:{
  },
  data() {
    return {
      title:'These are some of the trusted sources that have been used',
    };
  },

  computed: {
    ...mapGetters(['content', 'track']),
    itemImage() {
      if (!this.selectedImage) {
        return
      }
      const fileName = this.selectedImage.toLowerCase();
      return require(`../assets/images/${fileName}.jpg`);
    }
  },
  methods: {
    btnClick() {
      this.$router.push({ name: 'AnalizAnswer'})
    },
    btnBack() {
      this.$router.push({ name: 'TimePlan'})
    },
    buttonIcon(name) {
      return require(`../assets/images/icons/layout-buttons/${name}.svg`);
    },
  },
  mixins: [nextContentUrl],
}

</script>
<style lang="scss" scoped>
.h2 {
    font-family: "SF-Pro-Display-Bold";
    font-size: 24px;
    text-align: center;
  @media (max-width:480px) {
    font-size: 20px;
  }
}
.d-flex{
  display: flex;
  justify-content: center;
}
.layout {
  &__buttons{
    text-align: center;
    max-width: 400px;
    margin: 17px auto;
    img{
      width: 100%;
    }
  }
  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 135%;
    text-align: center;
    margin-bottom: 32px;
    color: #111113;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  &__thumbnail {
    margin-bottom: 32px;
    text-align: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  &__button {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &-icon {
      width: 37px;
      height: 37px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(#FFFFFF, .07);
      margin-right: 12px;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 125%;
      opacity: 1;
      padding: 0;
      margin: 0;
      color:#111113;
    }

    // &s {
    //   border-radius: 17px;
    //   padding: 9px;
    //   background: rgba(grey, 0.05);
    //   max-width: 270px;
    //   margin: 0 auto;
    // }
  }

  &__bottom-text {
    font-family: "SF Pro Text Regular";
    font-weight: 400;
    font-size: 18px;
    margin-top: 32px;
    line-height: 150%;
    text-align: center;
    color: #111113;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
} 
</style>