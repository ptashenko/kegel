import { createRouter, createWebHistory } from 'vue-router';
import notFound from '@/views/NotFound.vue';
import HomeView_v2 from '@/views/HomeView_v2.vue';
import SurveyView from '@/views/SurveyView.vue';
import Wait from '@/views/Wait.vue';
import TimePlan from '@/views/TimePlan.vue';
import TrustedSources from '@/views/TrustedSources.vue';
import AnalizAnswer from '@/views/AnalizAnswer.vue';
import GoodHands from '@/views/GoodHands.vue';
import EmailAdress from '@/views/EmailAdress.vue';
import EmailAdressV2 from '@/views/EmailAdressV2.vue';
import AddressPage from '@/views/AddressPage.vue';
import LandingView from '@/views/LandingView.vue';
import LandingViewV2 from '@/views/LandingViewV2.vue';
import LandingViewV3 from '@/views/LandingViewV3.vue';
import LandingViewV5 from '@/views/LandingViewV5.vue';
import LandingViewV4 from '@/views/LandingViewV4.vue';
import LandingViewVP5 from '@/views/LandingViewVP5.vue';
import Landing_ios_v1 from '@/views/Landing_ios_v1.vue';
import Landing_ios_v2 from '@/views/Landing_ios_v2.vue';
import Landing_ios_v3 from '@/views/Landing_ios_v3.vue';
import Landing_ios_v4 from '@/views/Landing_ios_v4.vue';
import Landing_ios_v5 from '@/views/Landing_ios_v5.vue';
import Landing_android_v1 from '@/views/Landing_android_v1.vue';
import Landing_android_v2 from '@/views/Landing_android_v2.vue';
import Landing_android_v3 from '@/views/Landing_android_v3.vue';
import Landing_android_v4 from '@/views/Landing_android_v4.vue';
import PlanFinal from '@/views/PlanFinal.vue';
import PlanFinalTwo from '@/views/PlanFinalTwo.vue';
import PlanFinalTwo_ios from '@/views/PlanFinalTwo_ios.vue';
import CodeQR from '@/views/CodeQR.vue';
import WhatsappPage from '@/views/WhatsappPage.vue';
import FeedBack from '@/views/FeedBack.vue';
import Preland from '@/views/PreLand.vue';
import PreLandv2 from "@/views/PreLandv2";

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView_v2,
    },
    {
        path: '/survey/:survey',
        name: 'survey',
        component: SurveyView,
    },
    {
        path: '/wait',
        name: 'wait',
        component: Wait,
    },
    {
        path: '/good-hands',
        name: 'goodHands',
        component: GoodHands,
    },
    {
        path: '/TimePlan',
        name: 'TimePlan',
        component: TimePlan,
    },
    {
        path: '/TrustedSources',
        name: 'TrustedSources',
        component: TrustedSources,
    },
    {
        path: '/AnalizAnswer',
        name: 'AnalizAnswer',
        component: AnalizAnswer,
    },
    {
        path: '/EmailAdress',
        name: 'EmailAdress',
        component: EmailAdress,
    },
    {
        path: '/LandingView',
        name: 'LandingView',
        component: LandingView,
    },
    {
        path: '/LandingViewV4',
        name: 'LandingViewV4',
        component: LandingViewV4,
    },
    {
        path: '/LandingViewV5',
        name: 'LandingViewV5',
        component: LandingViewV5,
    },
    {
        path: '/LandingViewVP5',
        name: 'LandingViewVP5',
        component: LandingViewVP5,
    },
    {
        path: '/AddressPage',
        name: 'AddressPage',
        component: AddressPage,
    },
    {
        path: '/Landing_ios_v1',
        name: 'Landing_ios_v1',
        component: Landing_ios_v1,
    },
    {
        path: '/Landing_ios_v2',
        name: 'Landing_ios_v2',
        component: Landing_ios_v2,
    },
    {
        path: '/Landing_ios_v3',
        name: 'Landing_ios_v3',
        component: Landing_ios_v3,
    },
    {
        path: '/Landing_ios_v4',
        name: 'Landing_ios_v4',
        component: Landing_ios_v4,
    },
    {
        path: '/Landing_ios_v5',
        name: 'Landing_ios_v5',
        component: Landing_ios_v5,
    },
    {
        path: '/Landing_android_v1',
        name: 'Landing_android_v1',
        component: Landing_android_v1,
    },
    {
        path: '/Landing_android_v2',
        name: 'Landing_android_v2',
        component: Landing_android_v2,
    },
    {
        path: '/Landing_android_v3',
        name: 'Landing_android_v3',
        component: Landing_android_v3,
    },
    {
        path: '/Landing_android_v4',
        name: 'Landing_android_v4',
        component: Landing_android_v4,
    },
    {
        path: '/PlanFinal',
        name: 'PlanFinal',
        component: PlanFinal,
    },
    {
        path: '/PlanFinalTwo',
        name: 'PlanFinalTwo',
        component: PlanFinalTwo,
    },
    {
      path: '/PlanFinalTwo_ios',
      name: 'PlanFinalTwo_ios',
      component: PlanFinalTwo_ios,
  },
    {
        path: '/CodeQR',
        name: 'CodeQR',
        component: CodeQR,
    },
    {
        path: '/Whatsapp',
        name: 'Whatsapp',
        component: WhatsappPage,
    },
    {
        path: '/FeedBack',
        name: 'FeedBack',
        component: FeedBack,
    },
    {
        path: '/fpl_1',
        name: 'pre-land',
        component: Preland,
    },
    {
        path: '/fpl_land',
        name: 'LandingViewV2',
        component: LandingViewV2
    },
    {
        path: '/fpl_email',
        name: 'EmailAdress2',
        component: EmailAdressV2,
    },
    {
        path: '/fpl_2',
        name: 'pre-land-2',
        component: PreLandv2,
    },
    {
        path: '/fpl2_land',
        name: 'LandingViewV3',
        component: LandingViewV3,
    },
    {
        path: '/:pathMatch(.*)',
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.afterEach((to, from) => {
    window.scrollTo(0, 0)
})

router.beforeEach((to, from, next) => {
    const isRedirectDisabled =
        (from.name === 'pre-email' && to.name === 'LandingViewV2') ||
        (from.name === 'pre-email' && to.name === 'LandingViewVP5') ||
        (from.name === 'AddressPage' && to.name === 'LandingViewVP5') ||
        (from.name === 'AddressPage' && to.name === 'EmailAdress') ||
        (from.name === 'PlanFinal' && to.name === 'EmailAdress2') ||
        (from.name === 'PlanFinal' && to.name === 'LandingView') ||
        (from.name === 'CodeQR' && to.name === 'PlanFinal') ||
        (from.name === 'CodeQR' && to.name === 'PlanFinalTwo') ||
        (from.name === 'Whatsapp' && to.name === 'PlanFinal') ||
        (from.name === 'Whatsapp' && to.name === 'PlanFinalTwo') ||
        (from.name === 'PlanFinalTwo' && to.name === 'PlanFinal') ||
        (from.name === 'PlanFinalTwo' && to.name === 'Landing_ios_v1')
        // also need add info about succes payment
    if (isRedirectDisabled) {
        console.log('es')
        router.push({ name: from.name })
        next()
    } else {
        next()
    }
});

export default router;
