<template>
  
  <div id="topApp" class="container">
    <Transition :name="translate" mode="out-in" appear>
      <router-view/>
    </Transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      translate: 'false'
      // translate: 'translate'
    };
  },
  methods: {
    ...mapActions(['getContent', 'getTrack', 'getHistory', 'getSeparators']),
  },
  computed: {
    
  },
  watch:{
    // '$route' (to, from) {
    //   const contact = to.path === '/survey' ? true : false
    //   console.log(contact);
    //   if (contact === true) {
    //     this.translate = 'false'
    //   } else {
    //     this.translate = 'translate'
    //   }
    // }
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
 