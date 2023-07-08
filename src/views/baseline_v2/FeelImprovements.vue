<template>
<Transition name="slider" mode="out-in" appear>
  <div class="container-mob">
      <div class="text-center">
        <h2 class="m-0 font-display font-600 text-20px leading-normal sm:text-30px sm:leading-normal" v-html="$t('feelImprovements.title')">
        </h2>
        <img class="w-full max-w-450px my-32px mx-auto sm:max-w-full" src="@/assets/images/content/baseline_v2/img_f3.png" alt="map">
        <p class="font-400 text-16px leading-normal text-center" v-html="$t('feelImprovements.text')">
        </p>
      </div>

      <footer-controls
        :buttonBack="{
          text: $t('feelImprovements.buttonBack'),
          click: btnBack,
          icon: 'prev',
          style: 'back-red'
      }"
        :buttonNext="{
          icon: 'next',
          text: $t('feelImprovements.buttonNext'),
          click: btnClick ,
          style: 'next-red'
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
