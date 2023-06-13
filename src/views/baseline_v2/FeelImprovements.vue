<template>
<Transition name="slider" mode="out-in" appear>
  <div class="container-mob">
      <div class="text-center">
        <h2 class="m-0 font-displayBold text-20px leading-normal sm:(text-30px leading-normal)">
          Feel improvements
          <br>
          within 1 month!
        </h2>
        <img class="w-full max-w-450px my-32px mx-auto sm:max-w-full" src="@/assets/images/content/baseline_v2/img_f3.png" alt="map">
        <p class="font-sans font-400 text-16px leading-normal text-center">
          User survey also shows that most men see tangible results during the first <span class="font-bold">30 days</span>
        </p>
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
  </Transition>
</template>

<script>

export default {
  name: 'Feel-improvements-layout',
  methods:{
    btnClick() {
      this.$router.push({ name: 'AnalizAnswer'})
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
