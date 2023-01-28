<template>
  <div class="wrapper">
    <div class="wrapper__icon">
        <img class="wrapper__image" src="@/assets/images/gift.png" />
    </div>
    <p class="wrapper__text">Get a <span class="wrapper__text-old">51%</span> <span class="wrapper__text-new">61% discount</span> on your Kegel plan</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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