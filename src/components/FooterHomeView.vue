<template>
  <p class="font-sans mt-64px text-12px font-500 opacity-65 leading-normal text-center sm:(font-400 text-14px leading-normal p-0)">{{ $t('footer.text') }}</p>

  <div class="mt-32px opacity-50 text-center text-14px leading-normal sm:(text-16px leading-normal)">
      <p v-html="$t('footer.location')"></p>
      <div class="flex justify-center flex-col mt-15px sm:(flex-row)">
        <a href="/privacy-policy.html" target="_blank" class="underline text-body divider mb-13px sm:(flex relative mb-0 mr-32px)">{{ $t('footer.privacy') }}</a>
        <a href="/terms.html" target="_blank" class="underline text-body divider mb-13px sm:(flex relative mb-0 mr-32px)">{{ $t('footer.terms') }}</a>
        <a href="/refund.html" target="_blank" class="underline text-body divider mb-13px sm:(flex relative mb-0 mr-32px)">{{ $t('footer.refund') }}</a>
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
