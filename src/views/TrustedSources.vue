<template lang="">
  <header-layout :fixed="true" :dark="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page TimePlan">
      <div class="h2 text-center">
        This is how much it took to create your plan
      </div>


      <div class="layout__buttons" v-if="icons">
        <div class="bg-fixed-top"></div>
        <div class="layout__button" v-for="icon in icons" :key="icon.id">
          <div class="layout__button-icon" v-if="icon.logo">
            <img :src="buttonIcon(icon.logo)" :alt="icon.title">
          </div>
          <div>
            <p>{{ icon.text }}</p>
            <p>{{ icon.title }}</p>
          </div>
        </div>
        <div class="bg-fixed-bottom"></div>
      </div>
      

    <footer-controls
      :buttonBack="{
        text: 'Back',
        click:back,
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
        icons: [
          {
            id: 1 ,
            title: 'National Center for ',
            text: 'Biotechnology Information',
            logo: 'logo_1',
          },
          {
            id: 2 ,
            title: 'Advances in Nutrition.',
            text: ' Oxford Academic',
            logo: `logo_2`,
          },
          {
            id: 3 ,
            title: 'Harvard Medical School',
            text: '',
            logo: 'logo_3',
          },
          {
            id: 4 ,
            title: 'Harvard University',
            text: '',
            logo: `logo_4`,
          },
          {
            id: 5 ,
            title: 'Harvard Medical School',
            text: '',
            logo: 'logo_3',
          },
          {
            id: 6 ,
            title: 'Harvard University',
            text: '',
            logo: `logo_4`,
          },
      ],
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
      this.$router.push({ path: '/AnalizAnswer'})
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

}
.d-flex{
  display: flex;
  justify-content: center;
}
.layout {
  &__buttons{
    margin-top: 32px ;
    height:320px ;
    overflow-y: auto;
    -ms-overflow-style: none;
    position: relative;
    .bg-fixed-top{
      position: fixed;
      width: 100%;
      max-width: 500px;
      height: 50px;
      background: linear-gradient(to top, #ffffff00, #ffffff);
    }
    .bg-fixed-top::after{
      content:"";
      position: fixed;
      width: 100%;
      max-width: 500px;
      height: 50px;
      background: linear-gradient(to top, #ffffff, #ffffff00);
      top: 435px;
      @media (max-width: 528px) {
        top: 460px;
      }
    }
  }
   
  &__buttons::-webkit-scrollbar{
      width: 0;
      height: 0;
}
  &__button{
    border-radius: 17px;
    padding: 14px;
    background: #F9F9F9;
    max-width: 270px;
    margin: 0 auto;
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