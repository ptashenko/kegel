<template>
    <div class="container-mob">
      <h2 class="font-displayBold text-center m-0 text-20px leading-normal sm:(text-30px leading-normal)">
        {{ $t('trustedSources.title') }}
      </h2>

      <div class="max-w-373px my-17px mx-auto">
          <img src="@/assets/images/content/f4_img.png" class="w-full">
      </div>
      <footer-controls
        :buttonBack="{
          text: $t('trustedSources.buttonBack'),
          click: btnBack,
          icon: 'prev',
          theme: 'text-[#4A4A4B] bg-[#F1F3F9] hover:bg-[#E5E9F5]'
        }"
        :buttonNext="{
          icon: 'next',
          text: $t('trustedSources.buttonNext'),
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
