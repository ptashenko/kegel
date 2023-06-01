
<template lang="">
  <Transition name="slider" mode="out-in" appear>

      <div class="container-main timePlan">
        <h2 class="timePlan__title">
          This is how much it took to create your plan
        </h2>
        <div class="timePlan__content">
          <div class="w-50 text-center">
            <img src="@/assets/images/svg/icon_research.svg" alt="">
            <h3>700+</h3>
            <p>Hours research</p>
          </div>
          <div class="w-50 text-center">
            <img src="@/assets/images/svg/icon_studies.svg" alt="">
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

.timePlan {
  &__title {
    font-family: "SF-Pro-Display-Bold";
    font-size: 24px;
    text-align: center;
    margin: 16px 0 0;
    @media (min-width: 600px) {
      font-size: 30px;
    }
    @media (max-width:480px) {
    font-size: 20px;
    }
  }

  &__content {
    display: flex;
    justify-content: center;

    img{
      max-width: 72px;
      height: auto;
      margin: 48px 0 14px;
      @media (min-width: 600px) {
          margin-top: 32px;
        }
    };
    h3{
      margin: 0;
      font-family: "SF Pro Text Bold";
      font-size: 32px;
      @media (max-width:480px) {
        font-size: 26px;
      }
      @media (min-width: 600px) {
        margin-bottom: 5px;
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
}
.w-50{
  max-width: 180px;
}
</style>
