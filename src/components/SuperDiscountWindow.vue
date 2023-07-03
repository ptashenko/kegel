<template>
  <div class="fixed top-0 left-0 h-100vh w-full bg-body z-999 overflow-scroll">
    <div class="max-w-600px py-0 px-40px mx-auto pb-120px">
        <img class="block mx-auto w-[80%]" src="@/assets/images/superDiscount.png" />
        <h2 class="font-displayBold font-600 text-24px leading-normal text-center text-[#fff] m-0 mb-24px">
            {{ $t('discountGift.title') }}
        </h2>
        <p class="font-sans font-400 text-14px leading-normal text-[#fff]">
          {{ $t('discountGift.textFirst', {goal}) }}
        </p>
        <p class="font-sans font-400 text-14px leading-normal text-[#fff] mt-16px">
          {{ $t('discountGift.textSecond') }}
        </p>
        <base-button
            :label="$t('discountGift.button')"
            theme="blue"
            class="!mt-32px"
            @click="closePopup"
        />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
  components: {BaseButton},
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
