<template>
    <div class="footer__info">
        <p class="footer__description">
            This service offers health and fitness information and is designed for educational and entertainment purposes only. You
            should not rely on this information as a substitute for, nor does it replace, professional medical advice, diagnosis, or
            treatment. It is intended to be provided for informational, educational, and self-empowerment purposes only. If you have
            any concerns or questions about your health, you should always consult with a physician or other health-care
            professional.
        </p>
        <p class="footer__adress">
            <span style="display: block;">Appercut sp z o o</span>Warsaw, Twarda 18, 00-105
        </p>
        <div class="footer__terms">
            <a href="/privacy-policy.html" target="_blank">Privacy Policy</a>
            <a href="/terms.html" target="_blank">Terms & Conditions</a>
            <a href="/refund-policy.html" target="_blank">Refund Policy</a>
        </div>
    </div>
</template>


<style lang="scss">
.footer {

    &__description {
        font-family: 'SF Pro Text Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        text-align: center;
        color: #111113;
        opacity: 0.5;
        max-width: 311px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    &__adress {
        margin-top: 32px;
        font-family: 'SF Pro Text Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        text-align: center;
        color: #111113;
        opacity: 0.5;
    }

    &__info {
        margin-top: 65px;
        opacity: 0.5;
        text-align: center;
    }

    &__terms {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 15px;
        font-family: 'SF Pro Text Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        text-align: center;
        text-decoration-line: underline;
        color: #111113;
        opacity: 0.75;
        a {
            text-decoration: underline;
            color: #111113;
            &:not(:last-child) {
                margin-bottom: 13px;
            }
        }
    }
}
</style>