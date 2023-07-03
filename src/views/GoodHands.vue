<template>
<Transition name="slider" mode="out-in" appear>
  <div class="container-mob">
      <div class="text-center">
        <h2 class="m-0 font-displayBold text-20px leading-normal sm:(text-30px leading-normal)">{{ $t('goodHands.title') }}</h2>
        <img class="w-full max-w-450px my-32px mx-auto sm:max-w-full" src="@/assets/images/content/map.png" alt="map">
        <p class="text-16px leading-normal sm:(text-18px leading-normal)">
          {{ $t('goodHands.firstText') }}
          <span class="font-sansSemiBold">
            1.575.179
          </span>
          {{ $t('goodHands.secondText') }}
        </p>
      </div>

      <footer-controls
        :buttonBack="{
          text: $t('goodHands.buttonBack'),
          click: btnBack,
          icon: 'prev',
          theme: 'text-[#4A4A4B] bg-[#F1F3F9] hover:bg-[#E5E9F5]'
        }"
        :buttonNext="{
          icon: 'next',
          text: $t('goodHands.buttonNext'),
          click: btnClick ,
          theme: 'bg-red hover:bg-[#F5423FFF]'
        }"
      />
  </div>
  </Transition>
</template>

<script>

export default {
  name: 'Good-hands-layout',
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
