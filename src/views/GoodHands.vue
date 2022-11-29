<template>
<Transition name="slider" mode="out-in" appear>
  <div class="container-main">
      <div class="goodHands">
        <h2 class="goodHands__title">{{title}}</h2>
        <img class="goodHands__image" src="@/assets/images/content/map.png" alt="map">
        <p clas="goodHands__text">More than <span class="goodHands__text--bold"> 1.575.179 </span> men got closer to their goal thanks to this Kegel Training Plan</p>
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
  </Transition>
</template>

<script>

export default {
  name: 'Good-hands-layout',
  data(){
    return{
      title:'You\'re in good hands'
    }
  },
  methods:{
    btnClick() {
      this.$router.push({ name: 'TimePlan'})
    },
    btnBack() {
      this.$router.push({
          name: 'survey',
          params: { survey: 34 },
      });
    },
  }
};
</script>

<style lang="scss" scoped>

.goodHands {
  text-align: center;
  
  &__title {
    margin: 0;
    font-family: "SF-Pro-Display-Bold";
    line-height: 135%;
    font-size: 24px;
    @media (max-width: 480px) {
      font-size: 20px;
    }
    @media (min-width: 600px) {
      font-size: 30px;
    }
  }
  
  &__image {
    width: 100%;
    max-width: 450px;
    margin: 32px auto;
    @media (min-width: 600px) {
      max-width: 100%;
    }
  }

  &__text {
    font-size: 16px;
    line-height: 150%;
    @media (min-width: 600px) {
        font-size: 18px;
      }
    &--bold {
      font-family: "SF Pro Text Semibold";
    }
  }
}

</style>
