<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['getContent', 'getTrack', 'getHistory', 'getSeparators']),
  },
  mounted() {
    this.getContent();
    this.getTrack();
    this.getHistory();
    this.getSeparators();
  },
};
</script>
