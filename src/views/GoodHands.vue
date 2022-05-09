<template>
  <header-layout :fixed="true"/>

  <div class="dark-layout light">
    <div class="container-main is-page GoodHands">
      <div class="h2">You're in good hands</div>
      <img src="@/assets/images/map.svg" alt="" height="200">
      <p>More than 1.575.179 men got closer to their goal thanks to this Kegel Training Plan</p>
    </div>

    <footer-controls
      :buttonBack="{
        text: 'Back',
        icon: 'prev',
        click: '/survey/321',
        theme: 'light'
      }"
      :buttonNext="{
        text: 'Continue',
        icon: 'next',
        click: '/AfterMap',
        theme: 'red'
      }"
    />
  </div>
</template>

<script>

export default {
  name: 'Good-hands-layout',
};
</script>

<style lang="scss" scoped>

.container-main {
  text-align: center;
}

img {
  margin: 32px 0;
  max-width: 100%;
}

p {
  font-family: "SF Pro Text Semibold";
  font-size: 16px;
  line-height: 150%;
}

</style>
