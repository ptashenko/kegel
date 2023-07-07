
<template>
  <Transition name="slider" mode="out-in" appear>

      <div class="container-mob">
        <h2 class="font-display font-600 text-20px leading-normal text-center m-0 mt-16px sm:text-30px sm:leading-normal">
        {{ $t('timePlan.title') }}
        </h2>
        <div class="flex justify-evenly mt-48px">
          <div class="max-w-180px text-center">
            <img src="@/assets/images/svg/icon_research.svg" alt="" class="max-w-72px h-auto mx-auto mb-14px">
            <h3 class="m-0 font-700 text-26px leading-normal sm:text-32px sm:leading-normal sm:mb-5px">700+</h3>
            <p class="m-0 text-16px leading-normal sm:text-18px sm:leading-normal">{{ $t('timePlan.hours') }}</p>
          </div>
          <div class="max-w-180px text-center">
            <img src="@/assets/images/svg/icon_studies.svg" alt="" class="max-w-72px h-auto mx-auto mb-14px">
            <h3 class="m-0 font-700 text-26px leading-normal sm:text-32px sm:leading-normal sm:mb-5px">150+</h3>
            <p class="m-0 text-16px leading-normal sm:text-18px sm:leading-normal">{{ $t('timePlan.analysis') }}</p>
          </div>
        </div>
        <footer-controls
          :buttonBack="{
            text: $t('timePlan.buttonBack'),
            click: btnBack,
            icon: 'prev',
            style: 'back-red'
          }"
          :buttonNext="{
            icon: 'next',
            text: $t('timePlan.buttonNext'),
            click: btnClick ,
            style: 'next-red'
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
