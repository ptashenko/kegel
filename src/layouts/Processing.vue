<template>
    <div class="container-mob p-0 mt-20px">
      <processing>
        {{ $t('processing.title') }}
      </processing>


      <div class="mx-[-30px] sm:mx-[-32px]">
        <img src="@/assets/images/content/s7.png" alt="" class="block mx-auto sm:max-w-520px">
      </div>
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
