<template>
  <p class="font-sans mt-64px text-12px font-500 opacity-65 leading-normal text-center sm:(font-400 text-14px leading-normal p-0)">This service offers health and fitness information and is designed for educational and
      entertainment purposes only. You
      should not rely on this information as a substitute for, nor does it replace, professional medical advice,
      diagnosis, or
      treatment. It is intended to be provided for informational, educational, and self-empowerment purposes only. If you
      have
      any concerns or questions about your health, you should always consult with a physician or other health-care
      professional.</p>

  <div class="mt-32px opacity-50 text-center text-14px leading-normal sm:(text-16px leading-normal)">
      <p>Appercut sp z o o<br>Warsaw, Twarda 18, 00-105</p>
      <div class="flex justify-center flex-col mt-15px sm:(flex-row)">
        <a href="/privacy-policy.html" target="_blank" class="underline text-body divider mb-13px sm:(flex relative mb-0 mr-32px)">Privacy Policy</a>
        <a href="/terms.html" target="_blank" class="underline text-body divider mb-13px sm:(flex relative mb-0 mr-32px)">Terms & Conditions</a>
        <a href="/refund.html" target="_blank" class="underline text-body mb-13px sm:(flex relative mb-0 mr-32px)">Refund Policy</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FooterHomeView'
}
</script>

<style lang="scss">
.divider {
  @media (min-width: 640px) {
    &::after {
        content: '|';
        position: absolute;
        top: 0;
        right: -16px;
        pointer-events: none;
      }
    }
}
</style>
