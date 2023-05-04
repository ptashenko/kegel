<template>
    <div class="discountFlag" :style="{borderColor: color}">
        <div class="discountFlag__left">
            <img :src="require(`@/assets/img/lp_v5/${icon}.png`)" class="discountFlag__flag" />
        </div>
        <div class="discountFlag__right">
            <h2 class="discountFlag__title">
                One-time price of {{discPrice}}
            </h2>
            <p class="discountFlag__text">
                Original price is {{fullPrice}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        discPrice: {
            type: String,
            required: true,
            default: ''
        },
        fullPrice: {
            type: String,
            required: true,
            default: ''
        },
        color: {
            type: String,
            default: '#E44240'
        },
        icon: {
            type: String,
            default: 'discountFlag'
        }
    },
}
</script>

<style lang="scss" scoped>
.discountFlag {
    background: #F9F9F9;
    border: 2px solid #E44240;
    border-radius: 9px;
    display: flex;
    padding: 20px 0;

    &__left {
        position: relative;
        flex-basis: 25%;
    }

    &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-basis: 80%;
    }

    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 1.21;
        letter-spacing: 0px;
        color: #111113;
        margin: 0;
        margin-bottom: 5px;
    }

    &__text {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.21;
        color: #111113;
        opacity: 0.75;
        margin: 0;
    }

    &__flag {
        width: 60%;
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
    }
}

</style>