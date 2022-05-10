<template lang="">
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

    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';


export default {
  name: 'AnalizAnswer',
  components:{
  },
  computed: {
    ...mapGetters(['content', 'track']),
  },

}

</script>
<style lang="scss" scoped>
.h2 {
    font-family: "SF-Pro-Display-Bold";
    font-size: 24px;
    text-align: center;

}
.d-flex{
  justify-content: center;
}
  
</style>