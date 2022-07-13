<template>
  
  <div id="topApp" class="container">
    
      <router-view/>
      
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['getContent', 'getTrack', 'getHistory', 'getSeparators']),
  },
  computed: {
  },
  watch:{
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
    transition: all .65s ease;
  }
  
  .translate-enter-from,
  .translate-leave-to {
    opacity: 0;
  }
  
</style>
 