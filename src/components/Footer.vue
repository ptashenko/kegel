<template>
    <div class="p-32px bg-body">
        <div class="max-w-450px mx-auto">
            <div v-if="disclaimer" class="font-sans font-400 text-12px leading-normal text-center text-[#fff] opacity-50 mb-32px sm:text-14px sm:leading-normal">
              {{ $t('footer_landing.disclaimer') }}
            </div>
            <div class="flex flex-col items-center font-400 text-14px leading-normal text-center text-[#fff] opacity-50 mb-16px sm:text-16px sm:leading-normal">
              <p v-html="$t('footer_landing.location')"></p>
            </div>
            <div class="flex items-center justify-center text-[#fff] flex-col sm:flex-row">
                <a href="/privacy-policy.html" target="_blank" class="font-400 text-14px leading-normal underline opacity-75 mb-15px divider sm:relative sm:text-16px sm:leading-normal sm:mb-0 sm:mr-32px">{{ $t('footer_landing.privacy') }}</a>
                <a href="/terms.html" target="_blank" class="font-400 text-14px leading-normal underline opacity-75 mb-15px divider sm:relative sm:text-16px sm:leading-normal sm:mb-0 sm:mr-32px">{{ $t('footer_landing.terms') }}</a>
                <a href="/refund.html" target="_blank" class="font-400 text-14px leading-normal underline opacity-75 sm:relative sm:text-16px sm:leading-normal">{{ $t('footer_landing.refund') }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        disclaimer: {
            type: Boolean,
            default: true
        }
    }
}
</script>
