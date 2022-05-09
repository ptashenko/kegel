import { createApp } from 'vue';
import svg4everybody from 'svg4everybody';
import moment from 'moment';
import Header from '@/components/Header.vue';
import FooterControls from '@/components/FooterControls.vue';
import Steps from '@/components/Steps.vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/scss/styles.scss';
import '@/assets/scss/fonts.scss';

createApp(App)
    .use(svg4everybody)
    .use(moment)
    .use(store)
    .use(router)
    .component('header-layout', Header)
    .component('footer-controls', FooterControls)
    .component('Steps-item', Steps)
    .mount('#app');