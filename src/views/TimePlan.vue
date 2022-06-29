
<template lang="">
  <Transition name="slider" mode="out-in" appear>
    <div>
      <header-layout :fixed="true" :dark="true"/>
      <div class="dark-layout light">
        <div class="container-main is-page TimePlan">
          <div class="h2 text-center">
            This is how much it took to create your plan
          </div>
          <div class="d-flex">
            <div class="w-50 text-center">
              <img src="@/assets/images/icons/icon_research.svg" alt="">
              <h3>700+</h3>
              <p>Hours research</p>
            </div>
            <div class="w-50 text-center">
              <img src="@/assets/images/icons/icon_studies.svg" alt="">
              <h3>150+</h3>
              <p>Studies analysis</p>
            </div>
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
              text: 'I got it',
              click: btnClick ,
              theme: 'red'
            }" 
          />
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { mapGetters} from 'vuex';
import nextContentUrl from '@/mixins/contollers';


export default {
  name: 'TimePlan',
  components:{
  },
  computed: {
    ...mapGetters(['content', 'track']),
  },
  methods: {
    btnClick() {
      this.$router.push({ name: 'TrustedSources'})
    },
    btnBack() {
      this.$router.push({ name: 'goodHands'})
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
    justify-content: center;
    .w-50{
      max-width: 180px;
    }
    img{
      max-width: 72px;
      height: auto;
      margin: 48px 0 14px;
    };
    h3{
      margin: 0;
      font-family: "SF Pro Text Bold";
      font-size: 32px;
      @media (max-width:480px) {
        font-size: 26px;
      }
    };
    p{
      font-family: "SF Pro Text Regular";
      margin: 0;
      font-size: 18px;
      @media (max-width:480px) {
        font-size: 16px;
      }
    }
  }
  
</style>