import { createApp } from 'vue';
import svg4everybody from 'svg4everybody';
import Header from '@/components/Header.vue';
import FooterControls from '@/components/FooterControls.vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/scss/style.scss';

createApp(App)
  .use(svg4everybody)
  .use(store)
  .use(router)
  .component('header-layout', Header)
  .component('footer-controls', FooterControls)
  .mount('#app');
