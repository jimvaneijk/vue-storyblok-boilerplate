import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/homepage.vue';
import Default from '@/pages/default.vue';

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: Home,
    },
    {
        path: '/:slug',
        name: 'default-page',
        component: Default,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
