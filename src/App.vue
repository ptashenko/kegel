<template>
  
  <div id="topApp" class="container">
    
      <router-view/>
      
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import smartlookClient from 'smartlook-client';

export default {
  inject: ['mixpanel', 'smartlook'],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['getContent', 'getTrack', 'getHistory', 'getSeparators', 'generatUUID']),
  },
  created () {
    if (window.navigator.platform == "iPhone") {
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
    smartlookClient.init('c5049693293bbcff326bf80ebda873782ca318d7');
    smartlookClient.identify(localStorage.getItem("web_user_uuid").replaceAll('\"',''));
    smartlookClient.record({forms: true, numbers: true, emails: false, ips: true});
    console.log(smartlookClient.playUrl);
    this.mixpanel.people.set({"Smartlook" : smartlookClient.playUrl });
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
 