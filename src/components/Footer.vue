<template>
    <div class="main-pre-footer">
        <div class="main-pre-footer-disclaimer">
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
        <div class="main-pre-footer_info mb-2">
            <p class="mb-1">Appercut sp z o o</p>
            <p>Warsaw, Twarda 18, 00-105</p>
        </div>
        <div class="main-pre-footer_links">
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
.main-pre-footer {
    padding: 32px 32px 48px 32px;
    background: #111113;

    &-disclaimer {
        font-family: 'SF Pro Text Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.7;
        text-align: center;
        color: #FFFFFF;
        opacity: 0.5;
        margin-bottom: 32px;
    }

    &_info {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        text-align: center;
        color: #FFFFFF;
        opacity: 0.5;
        margin-bottom: 16px;
    }

    &_links {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;


        a {
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            text-align: center;
            text-decoration-line: underline;
            color: #FFFFFF;
            opacity: 0.75;

            &:not(:last-child) {
                margin-bottom: 15px;
            }
        }
    }
}
</style>