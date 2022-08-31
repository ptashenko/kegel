import { createApp } from 'vue';
import svg4everybody from 'svg4everybody';
import moment from 'moment';
import Header from '@/components/Header.vue';
import FooterControls from '@/components/FooterControls.vue';
import Steps from '@/components/Steps.vue';
import App from './App.vue';
import router from './router';
import store from './store';
import LottieAnimation from "lottie-web-vue";
import VueScrollTo from "vue-scrollto";
import VueMixpanel from 'vue-mixpanel';
import VideoBackground from 'vue-responsive-video-background-player';
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";
// import VueAB from 'vue-a2b';
import '@/assets/scss/styles.scss';
import '@/assets/scss/fonts.scss';


export {}
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})
createApp(App)
    .use(Sentry, {  dsn: "https://9c91bdda03fd4b98ac09833964ad68b2@o1164839.ingest.sentry.io/6691427",
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ["localhost", "quiz.kegel.men", /^\//],
      }),
    ],
    tracesSampleRate: 1.0,
  })
    .use(svg4everybody)
    .use(moment)
    // .use(VueAB)
    .use(LottieAnimation)
    .use(VueScrollTo)
    .use(store)
    .use(router)
    .component('header-layout', Header)
    .component('footer-controls', FooterControls)
    .component('Steps-item', Steps)
    .use(VueMixpanel, {
        token: 'd8038d374838b13ef8ac565b08be6135',
        config: {
            debug: true
        }
    })
    .component('video-background', VideoBackground)
    .mount('#app');