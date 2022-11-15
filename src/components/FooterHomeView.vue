<template>
<p class="footer__text">This service offers health and fitness information and is designed for educational and
    entertainment purposes only. You
    should not rely on this information as a substitute for, nor does it replace, professional medical advice,
    diagnosis, or
    treatment. It is intended to be provided for informational, educational, and self-empowerment purposes only. If you
    have
    any concerns or questions about your health, you should always consult with a physician or other health-care
    professional.</p>

<div class="footer__info">
    <span style="display: block">
        Appercut sp z o o
    </span>
        Warsaw, Twarda 18, 00-105
    <div class="footer__terms">
        <a href="/privacy-policy.html" target="_blank">Privacy Policy</a>
        <a href="/terms.html" target="_blank">Terms & Conditions</a>
        <a href="/refund.html" target="_blank">Refund Policy</a>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
    &__info {
            margin-top: 32px;
            opacity: 0.5;
            text-align: center;
            font-size: 14px;
            @media (min-width: 600px) {
                 font-size: 16px;
                }
        }
    
    &__terms {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 15px;

        @media (min-width: 600px) {
            flex-direction: row;
        }

        a {
            text-decoration: underline;
            color: #111113;

            @media (min-width: 600px) {
                display: flex;
                position: relative;

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

            &:not(:last-child) {
                margin-bottom: 13px;

                @media (min-width: 600px) {
                    margin-bottom: 0;
                    margin-right: 32px;
                }
            }
        }
    }

    &__text {
        font-family: "SF Pro Text Regular";
        margin-top: 64px;
        font-size: 12px;
        font-weight: 500;
        opacity: .65;
        line-height: 1.5;
        text-align: center;

        @media (min-width: 600px) {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            padding: 0;
        }
    }
}
</style>