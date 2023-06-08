<template>
  <div class="fixed top-0 left-0 h-100vh w-full bg-body z-999 overflow-scroll">
    <header-layout :isDark="true" />
    <div class="max-w-600px py-0 px-40px mx-auto pb-120px">
        <img class="block mx-auto w-[80%]" src="@/assets/images/superDiscount.png" />
        <h2 class="font-displayBold font-600 text-24px leading-normal text-center text-[#fff] m-0 mb-24px">
            Get your plan with a SUPER Discount!
        </h2>
        <p class="font-sans font-400 text-14px leading-normal text-[#fff]">
            We're sure that by following this Kegel plan you can improve {{ goal }}. This is confirmed by a huge number of positive reviews.
        </p>
        <p class="font-sans font-400 text-14px leading-normal text-[#fff] mt-16px">
            We want you to reach your goal. That's why we're giving you the super discount so you can start improving your men's health at the best price.
        </p>
        <a class="border-none block no-underline text-center w-full font-700 text-18px bg-blue text-[#fff] rounded-100px py-16px px-0 mt-32px shadow-button-blue" @click="closePopup">Got it</a>
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
