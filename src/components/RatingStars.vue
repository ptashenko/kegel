<template>
    <div class="rating">
        <p class="rating__text">
            <span class="rating__text--bold">{{ amount }}</span> 5-star ratings <span style="margin: 0 5px;">|</span> <span class="rating__text--bold">{{downloads}}</span> downloads
        </p>
        <div class="rating__rate">
            <div class="rating__stars">
                <img v-for="(_, idx) of stars" :key="idx" class="rating__star" src="@/assets/images/star1.png" :alt="idx + 'star'">
            </div>
            <div class="rating__out">
                <img src="@/assets/images/icons/out48-black.svg" alt="out">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        stars: {
            type: Number,
            isRequired: true,
            default: 5
        },
        amount: {
            type: String,
            isRequired: true,
            default: '36k'
        },
        downloads: {
            type: Number,
            isRequired: true,
            default: '1.6M+'
        }
    }
}
</script>

<style lang="scss">
.rating {
    margin: 32px 0;
    &__text {
        font-family: 'SF Pro Text Regular';
        font-style: normal;
        font-size: 14px;
        line-height: 118.5%;
        text-align: center;
        color: #111113;
        &--bold {
            font-family: 'SF Pro Text Bold';
        }
        @media (min-width: 600px) {
            font-size: 18px;
        }
    }
    &__rate {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }
    &__stars {
        display: flex;
        justify-content: center;
        margin-right: 10px;
    }
    &__star {
        display: block;
        width: 20px;
        height: 20px;
    }
}
</style>