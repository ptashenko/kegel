<template>
  <div class="wrapper">
    <header-layout :isDark="true" />
    <div class="wrapper__content">
        <img class="wrapper__image" src="@/assets/images/superDiscount.jpg" />
        <h2 class="wrapper__title">
            Get your plan with a SUPER Discount!
        </h2>
        <p class="wrapper__text">
            We're sure that by following this Kegel plan you can {{ goal }}. This is confirmed by a huge number of positive reviews.
        </p>
        <p class="wrapper__text mt-16px">
            We want you to reach your goal. That's why we're giving you the super discount so you can start improving your men's health at the best price.
        </p>
        <a class="wrapper__button blue-shadow" @click="closePopup">Got it</a>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        goal: {
            type: String,
            isRequired: true,
        }
    },
    methods: {
        closePopup() {
            this.$emit('close')
        }
    }

}
</script>

<style lang="scss" scoped>
.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: #111113;
    z-index: 99999;

    &__content {
        max-width: 600px;
        padding: 0 40px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    &__image {
        display: block;
        margin: 0 auto;
        width: 80%;
    }

    &__title {
        font-family: "SF-Pro-Display-Bold";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 135%;
        text-align: center;
        color: #FFFFFF;
        margin: 0 0 24px;
    }

    &__text {
        font-family: "SF Pro Text Regular";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #FFFFFF;

        &.mt-16px {
            margin-top: 16px;
        }
    }

    &__button {
        border: none;
        display: block;
        text-decoration: none;
        text-align: center;
        width: 100%;
        font-weight: 700;
        font-size: 18px;
        background: #5773D6;
        color: #fff;
        border-radius: 100px;
        padding: 16px 0;
        margin-top: 32px;
    }
}
</style>