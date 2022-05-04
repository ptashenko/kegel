import { createRouter, createWebHistory } from 'vue-router';
import notFound from '@/views/NotFound.vue';
import HomeView from '@/views/HomeView.vue';
import SurveyView from '@/views/SurveyView.vue';
import Wait from '@/views/Wait.vue';
import GoodHands from '@/views/GoodHands.vue';

const routes = [
  {
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
    path: '/:pathMatch(.*)',
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
