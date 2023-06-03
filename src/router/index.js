import { createRouter, createWebHistory } from 'vue-router';
import notFound from '@/views/NotFound.vue';
import HomePage from '@/views/HomePage.vue';
import SurveyView from '@/views/SurveyView.vue';
import Wait from '@/views/Wait.vue';
import TimePlan from '@/views/TimePlan.vue';
import TrustedSources from '@/views/TrustedSources.vue';
import AnalizAnswer from '@/views/AnalizAnswer.vue';
import GoodHands from '@/views/GoodHands.vue';
import EmailAdress from '@/views/EmailAdress.vue';
import AddressPage from '@/views/AddressPage.vue';
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
import PlanFinalTwo from '@/views/PlanFinalTwo.vue';
import PlanFinalTwo_ios from '@/views/PlanFinalTwo_ios.vue';
import WhatsappPage from '@/views/WhatsappPage.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomePage,
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
        path: '/Whatsapp',
        name: 'Whatsapp',
        component: WhatsappPage,
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
        (from.name === 'AddressPage' && to.name === 'LandingViewVP5') ||
        (from.name === 'AddressPage' && to.name === 'EmailAdress') ||
        (from.name === 'Whatsapp' && to.name === 'PlanFinalTwo') ||
        (from.name === 'PlanFinalTwo' && to.name === 'Landing_ios_v1')
        // also need add info about succes payment
    if (isRedirectDisabled) {
        router.push({ name: from.name })
        next()
    } else {
        next()
    }
});

export default router;
