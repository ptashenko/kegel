<template>
    <div class="text-body mb-115px sm:(mb-60px)" :style="{background: bg}">
        <div class="p-32px pb-39px pl-28px border-2px rounded-9px relative" :style="{borderColor, color: textColor}">
            <h3 class="font-sansBold mt-0 mb-16px font-600 text-20px leading-normal text-center sm:(text-24px leading-normal)">30-Day Money-Back Guarantee Without Questions</h3>
            <p class="font-sans text-14px leading-normal sm:(text-16px leading-normal)">We believe that our plan may work for you, and you’ll get visible results in a
                few weeks!
                And we are so confident that we are even ready to <span class="font-sansBold">return your money without any questions</span>.
                All you have to do is send an email to contact@kegel-plan.com <span class="font-sansBold">within 30 days and ask for a refund</span>.
                But we are sure that the plan will show its effectiveness and there will be no need for a refund. Find more
                about the
                refund process in our <a href="./refund.html" target="_blank" :style="{color: borderColor}">refund policy</a>.</p>
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
