<template>
  
  <div id="topApp" class="container">
    
      <router-view/>
      
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  inject: ['mixpanel'],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['getContent', 'getTrack', 'getHistory', 'getSeparators', 'generatUUID']),
  },
  created () {
    if (navigator.userAgentData.platform.includes('iOS')) {
      // Считываем информацию о статусе в localStorage при загрузке страницы
      if (sessionStorage.getItem("store") ) {
          this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      } 
      // Сохраняем информацию в vuex в localStorage при обновлении страницы
      window.addEventListener("beforeunload",()=>{
          sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    }else{
      // Считываем информацию о статусе в localStorage при загрузке страницы
      if (localStorage.getItem("store") ) {
          this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("store"))))
      } 
      // Сохраняем информацию в vuex в localStorage при обновлении страницы
      window.addEventListener("beforeunload",()=>{
          localStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    }
  },
  watch:{
  },
  mounted() {
    this.getContent();
    this.getTrack();
    this.getHistory();
    this.getSeparators();
    this.generatUUID();
    this.mixpanel.identify(localStorage.getItem("web_user_uuid").replaceAll('\"',''));
    this.mixpanel.people.set({ "Init": "-" });
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
 