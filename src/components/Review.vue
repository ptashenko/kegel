<template>
  <div
    class="review p-15px mx-auto max-w-370px bg-[#F9F9F9] sm:max-w-520px sm:rounded-11px"
    :class="{'!bg-[#1D1D1F] rounded-9px': dark}"
  >
    <div class="flex justify-between mb-15px">
      <div>
        <div class="font-700 text-14px leading-normal max-w-full sm:text-18px">{{ $t(`reviewsSurvey.${id}.title`) }}</div>
        <div class="flex mt-5px">
          <div v-for="i in reviewItem.rating" :key="i" class="w-14px h-14px">
            <img src="@/assets/images/svg/icon_star.svg" alt="star-yellow" class="max-w-14px h-auto">
          </div>
          <div v-for="i in Number(5 - reviewItem.rating)" :key="i" class="w-14px h-14px">
            <img src="@/assets/images/svg/icon_star.svg" alt="star-yellow" class="max-w-14px h-auto">
          </div>
        </div>
      </div>

      <div class="font-500 text-12px leading-normal opacity-50 sm:text-16px sm:leading-normal">
        {{ reviewItem.name }}
      </div>
    </div>

    <div class="font-400 text-12px leading-normal sm:text-16px sm:leading-normal">
      {{ $t(`reviewsSurvey.${id}.text`) }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Review-item',
  computed: {
    ...mapGetters(['review']),
    reviewItem() {
      return this.review(this.id);
    },
  },
  props: {
    id: {
      required: true,
      type: Boolean,
    },
    dark: {
      default: false,
      type: Boolean,
    },
    active: {
      default: true,
      type: Boolean,
    },
  },
};
</script>
