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
        path: '/:pathMatch(.*)',
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;