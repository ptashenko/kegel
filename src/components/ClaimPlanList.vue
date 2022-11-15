<template>
    <div class="wrapper">
            <div class="claim">
                <div class="claim__title">
                    <img class="claim__title-icon" src="@/assets/images/icons/icon_check-red-bg.svg" />
                    <h3 class="claim__title-text">Kegel Training</h3>
                </div>
                <p class="claim__description">The core program to strengthen PF muscles & enhance performance.</p>
                <video-background :src="require('../assets/img/land_v3/1.mp4')" poster="" class="claim__video">
                </video-background>
                <ul class="claim__list">
                    <li class="claim__item">
                        <p class="claim__text">Workouts take only 5 min a day</p>
                    </li>
                    <li class="claim__item">
                        <p class="claim__text">No additional equipment needed</p>
                    </li>
                    <li class="claim__item">
                        <p class="claim__text">You can work out even lying on the couch</p>
                    </li>
                </ul>
            </div>
            <div class="claim" v-if="device.ios">
                <div class="claim__title">
                    <img class="claim__title-icon" src="@/assets/images/icons/icon_check-red-bg.svg" />
                    <h3 class="claim__title-text">Progress Tracker</h3>
                </div>
                <p class="claim__description">Monitor how workouts strengthen PF muscles.</p>
                <video-background :src="require('../assets/img/land_v3/2.mp4')" poster="" class="claim__video">
                </video-background>
                <ul class="claim__list">
                    <li class="claim__item">
                        <p class="claim__text">Get daily, weekly, and monthly statistics overviews.</p>
                    </li>
                    <li class="claim__item">
                        <p class="claim__text">See the visible progress & increase the motivation to reach the goal</p>
                    </li>
                </ul>
            </div>
            <div class="claim" v-if="device.ios">
                <div class="claim__title">
                    <img class="claim__title-icon" src="@/assets/images/icons/icon_check-red-bg.svg" />
                    <h3 class="claim__title-text">Daily Challenges</h3>
                </div>
                <p class="claim__description">Build healthy habits for Mental, Physical & Social wellbeing.</p>
                <img src="../assets/img/land_v3/3.png" class="claim__image" />
                <ul class="claim__list">
                    <li class="claim__item">
                        <p class="claim__text">11 easy-to-do challenges</p>
                    </li>
                    <li class="claim__item">
                        <p class="claim__text">Based on a daily routine</p>
                    </li>
                    <li class="claim__item">
                        <p class="claim__text">Provide 50+ health benefits</p>
                    </li>
                </ul>
                <img src="../assets/img/land_v3/4.png" class="claim__image-margin" />
            </div>
            <div class="claim">
                <div class="claim__title">
                    <img class="claim__title-icon" src="@/assets/images/icons/icon_check-red-bg.svg" />
                    <h3 class="claim__title-text">Insights Library</h3>
                </div>
                <p class="claim__description">Summary of scientific facts on the hottest topics.</p>
                <img src="../assets/img/land_v3/5.png" class="claim__image" />
                <ul class="claim__list">
                    <li class="claim__item">
                        <p class="claim__text">2-minute reads with with juicy illustrations</p>
                    </li>
                    <li class="claim__item">
                        <p class="claim__text">Plenty of topics about Health, Nutrition, Relationships and more</p>
                    </li>
                </ul>
            </div>
    </div>
</template>

<script>
export default {
    props: ['device'],
}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
}
.claim {
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(17, 17, 19, 0.05);
    &__title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px 0 15px;

        &-icon {
            margin-right: 10px;
        }

        &-text {
            margin: 0;
            font-family: 'SF-Pro-Display-Bold';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 135%;
            color: #111113;
            @media (min-width: 600px) {
                    font-size: 24px;
                }
        }
    }

    &__description {
        font-family: 'SF Pro Text Semibold';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: #111113;
        margin-bottom: 15px;
    }

    &__video {
        height: 190px;
        margin-bottom: 30px;

        @media (min-width: 500px) {
            height: 300px;
        }
    }
    &__image {
        width: 100%;
        margin-bottom: 15px;
        &-margin {
            width: 100%;
            margin-top: 25px;
        }
    }
    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
    }
    &__item {
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
    &__text {
        display: flex;
        align-items: center;
        &::before {
                content: '';
                display: block;
                min-width: 20px;
                height: 25px;
                margin-right: 15px;
                background: url('../assets/images/icons/check_red.svg');
                background-repeat: no-repeat;
                background-position-y: center;
            }
    }
}
</style>