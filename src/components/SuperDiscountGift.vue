<template>
  <div class="relative flex w-full py-12px px-0 bg-[#ffffff1a] border-2px border-[#ffffff1a] rounded-9px">
    <div class="relative basis-[30%]">
        <img
          class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] glow"
          src="@/assets/images/glow.png"
        />
        <img
          class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] h-64px"
          src="@/assets/images/gift-red.png"
        />
    </div>
    <p
      class="basis-[65%] font-primary font-700 text-16px leading-normal text-[#fff]"
      v-html="$t('superDiscountGift.discount', {discountOriginal, discount})"
    >
    </p>
  </div>
</template>

<script>
import '@/assets/css/animations.css'
export default {
    props: ["discount", "discountOriginal"],
}
</script>
