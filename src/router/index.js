import { createRouter, createWebHistory } from 'vue-router';
import notFound from '@/views/NotFound.vue';
import HomeView from '@/views/HomeView.vue';
import SurveyView from '@/views/SurveyView.vue';
import Wait from '@/views/Wait.vue';
import TimePlan from '@/views/TimePlan.vue';
import TrustedSources from '@/views/TrustedSources.vue';
import AnalizAnswer from '@/views/AnalizAnswer.vue';
import GoodHands from '@/views/GoodHands.vue';
import EmailAdress from '@/views/EmailAdress.vue';
import LandingView from '@/views/LandingView.vue';
import PlanFinal from '@/views/PlanFinal.vue';
import PlanFinalTwo from '@/views/PlanFinalTwo.vue';
import CodeQR from '@/views/CodeQR.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
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
        path: '/CodeQR',
        name: 'CodeQR',
        component: CodeQR,
    },
    {
        path: '/:pathMatch(.*)',
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
    const isRedirectDisabled = (from.name === 'PlanFinal' && to.name==='LandingView')
    || (from.name === 'CodeQR' && to.name==='PlanFinal')
    || (from.name === 'CodeQR' && to.name==='PlanFinalTwo')
    || (from.name === 'PlanFinalTwo' && to.name==='PlanFinal')
    // also need add info about succes payment 
    if (isRedirectDisabled) { 
        router.push({ name: from.name })
        next()
    } else {
        next()
    }
  });

export default router;