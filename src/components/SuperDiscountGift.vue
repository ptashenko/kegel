<template>
  <div class="wrapper">
    <div class="wrapper__icon">
        <img class="wrapper__glow" src="@/assets/img/lp_v5/glow.png" />
        <img class="wrapper__image" src="@/assets/img/lp_v5/gift-red.png" />
    </div>
    <p class="wrapper__text">Get a <span class="wrapper__text-old">{{ this.discountOriginal }}%</span> <span class="wrapper__text-new">{{ this.discount }}% discount</span> on your Kegel plan</p>
  </div>
</template>

<script>
export default {
    props: ["discount", "discountOriginal"],
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/animations.css';
.wrapper {
    position: relative;
    display: flex;
    width: 100%;
    padding: 12px 0;
    background: #ffffff1a;
    border: 2px solid #ffffff40;
    border-radius: 9px;
    justify-content: space-between;


    &__icon {
        position: relative;
        flex-basis: 30%;
    }

    &__image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 64px;
    }
    &__glow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: glowRotating 10s linear infinite;
    }

    &__text {
        flex-basis: 65%;
        font-family: "SF Pro Text Regular";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        color: #FFFFFF;

        &-old {
            opacity: 0.5;
            text-decoration: line-through;
        }

        &-new {
            color: #5773D6;
        }
    }

}
</style>