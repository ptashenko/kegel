<template>
    <div class="container-mob p-0">
      <processing class="!mb-32px">
        {{ $t('processing.title') }}
      </processing>

      <h2 class="font-display font-600 text-20px leading-normal text-center text-[#fff] mb-32px">{{ $t('processing.subtitle') }}</h2>

      <div class="mx-[-30px] sm:mx-[-32px]">
        <img src="@/assets/images/content/baseline_v2/img_s7.png" alt="" class="block max-w-311px mx-auto sm:max-w-520px">
      </div>

      <p class="text-16px leading-normal text-center text-[#fff] mt-32px">{{ $t('processing.text') }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Processing from '@/components/Processing.vue';

export default {
  name: 'Processing-review-layout',
  components: {
    Processing,
  },
  props: {
    content: {
      required: true,
      type: Object,
    },
    survey: {
      required: true,
      type: [Object],
    },
  },
  computed: {
    ...mapGetters(['review','content', 'track']),
  },
};
</script>
