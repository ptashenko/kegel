<template>
    <div class="container-mob p-0">
      <processing class="!mb-32px">
        Processing...
      </processing>

      <h2 class="font-displayBold font-600 text-20px leading-normal text-center text-[#fff] mb-32px">You don't even have to lift a finger to do Kegel exercises!</h2>

      <div class="mx-[-30px] sm:(mx-[-32px])">
        <img src="@/assets/images/content/baseline_v2/img_s7.png" alt="" class="block max-w-311px mx-auto sm:max-w-520px">
      </div>

      <p class="font-sans font-400 text-16px leading-normal text-center text-[#fff] mt-32px">For instance, you can literally do them while lying on a couch watching your favorite show</p>
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
