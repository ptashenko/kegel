<template>
  <div id="topApp" class="container">
    <transition name="translate" mode="out-in">
      <router-view/>
    </transition>
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
<style lang="scss" scoped>
  .translate-enter-active,
  .translate-leave-active {
    transition: all 0.5s ease;
  }
  
  .translate-enter-from,
  .translate-leave-to {
    opacity: 0;
    transform: translateY(50px);
  }
</style>
