
<template>
  <Transition name="slider" mode="out-in" appear>

      <div class="container-mob">
        <h2 class="font-displayBold text-20px leading-normal text-center m-0 mt-16px sm:(text-30px leading-normal)">
          This is how much it took to create your plan
        </h2>
        <div class="flex justify-evenly mt-48px">
          <div class="max-w-180px text-center">
            <img src="@/assets/images/svg/icon_research.svg" alt="" class="max-w-72px h-auto mx-auto mb-14px">
            <h3 class="m-0 font-sansBold text-26px leading-normal sm:(text-32px leading-normal mb-5px)">700+</h3>
            <p class="font-sans m-0 text-16px leading-normal sm:(text-18px leading-normal)">Hours research</p>
          </div>
          <div class="max-w-180px text-center">
            <img src="@/assets/images/svg/icon_studies.svg" alt="" class="max-w-72px h-auto mx-auto mb-14px">
            <h3 class="m-0 font-sansBold text-26px leading-normal sm:(text-32px leading-normal mb-5px)">150+</h3>
            <p class="font-sans m-0 text-16px leading-normal sm:(text-18px leading-normal)">Studies analysis</p>
          </div>
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
            text: 'I got it',
            click: btnClick ,
            theme: 'bg-red hover:bg-[#F5423FFF]'
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
