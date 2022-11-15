<template>
    <div class="guarantee">
        <div class="guarantee-wrapper">
            <h3 class="guarantee-title">30-Day Money-Back Guarantee Without Questions</h3>
            <p class="guarantee-description">We believe that our plan may work for you, and you’ll get visible results in a
                few weeks!
                And we are so confident that we are even ready to <span>return your money without any questions</span>.
                All you have to do is send an email to contact@kegel.men <span>within 30 days and ask for a refund</span>.
                But we are sure that the plan will show its effectiveness and there will be no need for a refund. Find more
                about the
                refund process in our <a href="./refund.html" target="_blank">refund policy</a>.</p>
            <img src="@/assets/images/guarantee_icon.svg" class="guarantee-icon" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.guarantee {
    color: #111113;
    margin-bottom: 115px;
    @media (min-width: 600px) {
        margin-bottom: 60px;
        }

    &-title {
        font-family: "SF Pro Text Bold";
        margin-top: 0;
        margin-bottom: 16px;
        font-weight: 600;
        font-size: 20px;
        line-height: 1.35;
        text-align: center;
            @media (min-width: 600px) {
                    font-size: 24px;
                }
    }


    &-description {
        font-family: "SF Pro Text Regular";
        font-style: normal;
        font-size: 14px;
        line-height: 1.5;
        & span {
            font-family: "SF Pro Text Bold";
        }
        a {
            color: #5773D6;
        }
        @media (min-width: 600px) {
            font-size: 18px;
        }
    }

    &-wrapper {
        padding: 32px 33px 39px 28px;
        border: 2px solid #5773D6;
        border-radius: 9px;
        position: relative;
    }

    &-icon {
        position: absolute;
        right: 24px;
        bottom: -61px;
    }
}
</style>