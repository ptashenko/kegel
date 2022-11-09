<template lang="">

<div>
  <header-layout :fixed="true" :dark="true"/>
  
  <div class="dark-layout light">
    <div class="container-main is-page TimePlan">
      
      <div class="h2 text-center" v-html="title"></div>


      <div class="layout__buttons">
          <img class="layout__image" src="@/assets/img/land_v6/img_match.png">
          <p class="text">
            We're analyzing your answers and it appears that you're <span>exactly</span> the kind of person this <span>Kegel Plan</span> was made for.
          </p>
          <p class="text">
            Now, let's dive deeper into your lifestyle to know you better.
          </p>
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
  name: 'match',

  components:{
  },
  data() {
    return {
      title: 'Congrats,<br> we\'re a match!',
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
      this.next()
    },
    btnBack() {
      this.back()
    },
    buttonIcon(name) {
      return require(`../assets/images/icons/layout-buttons/${name}.svg`);
    },
  },
  mixins: [nextContentUrl],
}

</script>
<style lang="scss" scoped>
.text {
  font-family: 'SF Pro Text Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #111113;
    text-align: left;
    & span {
      font-family: 'SF Pro Text Semibold';
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
}
.h2 {
    font-family: "SF-Pro-Display-Bold";
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 135%;
      text-align: center;
      color: #111113;
  @media (max-width:480px) {
    font-size: 36px;
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
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
  &__image {
    margin: 32px 0;
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