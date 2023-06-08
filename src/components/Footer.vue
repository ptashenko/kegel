<template>
    <div class="p-32px mb-48px bg-body">
        <div class="max-w-450px mx-auto">
            <div v-if="disclaimer" class="font-sans font-400 text-12px leading-normal text-center text-[#fff] opacity-50 mb-32px sm:(text-14px leading-normal)">
                Disclaimer: Each individual’s results may vary from person to person based on health condition, body type,
                starting
                point, his or her unique background, dedication, desire, motivation, actions, and numerous other factors. This
                service
                offers health and fitness information and is designed for educational and entertainment purposes only. You
                should not
                rely on this information as a substitute for, nor does it replace, professional medical advice, diagnosis, or
                treatment.
                It is intended to be provided for informational, educational, and self-empowerment purposes only. If you have
                any
                concerns or questions about your health, you should always consult with a physician or other health-care
                professional.
            </div>
            <div class="flex flex-col items-center font-400 text-14px leading-normal text-center text-[#fff] opacity-50 mb-16px sm:(text-16px leading-normal)">
                <p>Appercut sp z o o</p>
                <p>Warsaw, Twarda 18, 00-105</p>
            </div>
            <div class="flex items-center justify-center text-[#fff] flex-col sm:(flex-row)">
                <a href="/privacy-policy.html" target="_blank" class="font-400 text-14px leading-normal underline opacity-75 mb-15px divider sm:(relative text-16px leading-normal mb-0 mr-32px)">Privacy Policy</a>
                <a href="/terms.html" target="_blank" class="font-400 text-14px leading-normal underline opacity-75 mb-15px divider sm:(relative text-16px leading-normal mb-0 mr-32px)">Terms & Conditions</a>
                <a href="/refund.html" target="_blank" class="font-400 text-14px leading-normal underline opacity-75 sm:(relative text-16px leading-normal)">Refund Policy</a>
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

<style>
@media (min-width: 640px) {
  .divider::after {
    content: '|';
    position: absolute;
    top: 0;
    right: -16px;
    pointer-events: none;
  }
}
</style>
