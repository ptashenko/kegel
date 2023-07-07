<template>
    <div class="text-body mb-115px sm:mb-60px" :style="{background: bg}">
        <div class="p-32px pb-39px pr-33px border-2px rounded-9px relative" :style="{borderColor, color: textColor}">
            <h3 class="font-display font-600 mt-0 mb-16px text-20px leading-normal text-center sm:text-24px sm:leading-normal">{{ $t('guarantee.title')}}</h3>
            <div>
              <p
                class="text-14px leading-normal sm:text-16px sm:leading-normal"
                v-html="$t('guarantee.text')"
              />
              <span :style="{color: borderColor}" v-html="$t('guarantee.refund')"></span>
            </div>
            <img :src="currentIcon[icon]" class="absolute right-24px bottom-[-61px]" alt="">
        </div>
    </div>
</template>

<script>
import blue from '@/assets/images/svg/icon_guarantee_icon.svg'
import red from '@/assets/images/svg/icon_guarantee_icon-red.svg'

export default {
    props: {
        bg: {
            type: String,
            default: 'transparent'
        },
        borderColor: {
            type: String,
            default: '#5773D6'
        },
        icon: {
            type: String,
            default: 'blue'
        },
        textColor: {
            type: String,
            default: '#000'
        }
    },
    computed: {
        currentIcon() {
            return {blue, red}
        }
    }
}
</script>
