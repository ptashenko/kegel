<template>
    <div class="warning">
        <img src="../assets/images/icons/icon_attention.svg" class="warning__icon" alt="">
        <p class="warning__text">Most users see their <b>first improvements just after 1 month</b></p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.warning {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    background: #F9F9F9;
    border-radius: 9px;
    margin: 25px auto 0;
    max-width: 311px;
    &__icon {
        margin-right: 25px;
    }
    &__text {
        font-family: 'SF Pro Text Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #111113;
    }
}
</style>