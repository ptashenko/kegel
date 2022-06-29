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
      translate: 'translate',
      layotname: ['goodHands','TimePlan','TrustedSources']
    };
  },
  methods: {
    ...mapActions(['getContent', 'getTrack', 'getHistory', 'getSeparators']),
  },
  computed: {
  },
  watch:{
    '$route' (to, from) {
      if(this.layotname.includes(to.name)){
        console.log(to.name);
        console.log('true');
        this.translate = 'translate'
      } else {
        console.log(from.name);
        this.translate = 'false'
      }
      // console.log(contact);
      // console.log(to.path);
      // console.log(from.path);
      
    }
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
 