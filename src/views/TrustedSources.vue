<template lang="">

    <div class="container-main trustedSources">

      <h2 class="trustedSources__title">
        {{title}}
      </h2>


      <div class="trustedSources__image">
          <img src="@/assets/images/content/f4_img.png">
      </div>
      <footer-controls
        :buttonBack="{
          text: 'Back',
          click: btnBack,
          icon: 'prev',
          theme: 'text-[#4A4A4B] bg-[#F1F3F9] hover:bg-[#E5E9F5]'
        }"
        :buttonNext="{
          icon: 'next',
          text: 'Continue',
          click: btnClick ,
          theme: 'bg-red hover:bg-[#F5423FFF]'
        }"
      />
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

.trustedSources {

  &__title {
    font-family: "SF-Pro-Display-Bold";
    font-size: 24px;
    text-align: center;
    margin: 0;
    @media (max-width:480px) {
      font-size: 20px;
    }
    @media (min-width: 600px) {
      font-size: 30px;
    }
  }

  &__image {
    max-width: 373px;
    margin: 17px auto;
    img{
      width: 100%;
    }
  }
}

</style>
