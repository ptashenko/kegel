import { createApp } from 'vue';
import svg4everybody from 'svg4everybody';
import dayjs from 'dayjs';
require('dayjs/locale/es')
import Header from '@/components/Header.vue';
import FooterControls from '@/components/FooterControls.vue';
import Steps from '@/components/Steps.vue';
import App from './App.vue';
import router from './router';
import store from './store';
import LottieAnimation from "lottie-web-vue";
import VueScrollTo from "vue-scrollto";
import VueMixpanel from 'vue-mixpanel';
import VueCookies from 'vue-cookies'
import VideoBackground from 'vue-responsive-video-background-player';
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";
import { createI18n } from 'vue-i18n'
// import VueAB from 'vue-a2b';
import '@/assets/scss/styles.scss';
import '@/assets/scss/fonts.scss';
import engLocale from '@/locales/en'
import esLocale from '@/locales/es'
import vueCountryRegionSelect from 'vue3-country-region-select'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { createDeviceDetector } from "next-vue-device-detector";
const device = createDeviceDetector()

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})

export const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            ...engLocale
        },
        es: {
            ...esLocale
        }
    }
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
    .use(device)
    .use(svg4everybody)
  .use({install(app) {
    dayjs.locale('en')
    app.config.globalProperties.$dayjs = dayjs;
    }})
    // .use(VueAB)
    .use(LottieAnimation)
    .use(VueScrollTo)
    .use(VueCookies)
    .use(store)
    .use(router)
    .use(i18n)
    .use(vueCountryRegionSelect)
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
