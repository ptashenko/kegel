<template>
  <p class="font-400 mt-64px text-12px opacity-50 leading-normal text-center sm:font-400 sm:text-14px sm:leading-normal p-0">{{ $t('footer.text') }}</p>

  <div class="mt-32px text-center text-14px leading-normal sm:text-16px sm:leading-normal">
      <p v-html="$t('footer.location')" class="font-400 opacity-50" />
      <div class="flex font-400 justify-center flex-col mt-15px opacity-75 sm:flex-row">
        <a href="/privacy-policy.html" target="_blank" class="font-400 opacity-75 underline text-body divider mb-13px sm:flex sm:relative sm:mb-0 sm:mr-32px">{{ $t('footer.privacy') }}</a>
        <a href="/terms.html" target="_blank" class="font-400 opacity-75 underline text-body divider mb-13px sm:flex sm:relative sm:mb-0 sm:mr-32px">{{ $t('footer.terms') }}</a>
        <a href="/refund.html" target="_blank" class="font-400 opacity-75 underline text-body divider sm:flex sm:relative sm:mb-0 sm:mr-32px">{{ $t('footer.refund') }}</a>
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
    &:not(:last-child) {
      &::after {
        content: '|';
        position: absolute;
        top: 0;
        right: -16px;
        pointer-events: none;
      }
    }
  }
}
</style>
