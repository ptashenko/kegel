<template>
<Transition name="slider" mode="out-in" appear>
  <div>
    <header-layout :fixed="true"/>
    
    <div class="dark-layout light">
      <div class="container-main is-page GoodHands">
        <div class="h2">{{title}}</div>
        <img class="map" src="@/assets/images/content/map.png" alt="map">
        <p>More than <span> 1.575.179 </span> men got closer to their goal thanks to this Kegel Training Plan</p>
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
.h2 {
  font-family: "SF-Pro-Display-Bold";
  line-height: 135%;
  font-size: 24px;
  @media (max-width: 480px) {
    font-size: 20px;
  }
}
.map{
  width: 100%;
  max-width: 450px;
  margin: 32px auto;
}
.container-main {
  text-align: center;
}

img {
  margin: 32px 0;
  max-width: 100%;
}

p {
  
  font-size: 16px;
  line-height: 150%;
  span{
    font-family: "SF Pro Text Semibold";
  }
}

</style>
