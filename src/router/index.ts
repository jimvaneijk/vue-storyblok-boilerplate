import { createRouter, createWebHistory } from 'vue-router';
import { useStoryblok } from '@storyblok/vue';
import Home from '@/pages/homepage.vue';
import Default from '@/pages/default.vue';
import NotFound from '@/errors/not-found.vue';

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: Home,
        beforeEnter: async (to, from, next) => {
            const slug = to.params.slug;

            await useStoryblok('home', { version: 'draft' }).catch(() => {
                router.push({
                    name: 'NotFound',
                    params: { pathMatch: slug },
                });
            });

            next();
        },
    },
    {
        path: '/:slug',
        name: 'default-page',
        component: Default,
        beforeEnter: async (to, from, next) => {
            const slug = to.params.slug;

            await useStoryblok(slug, { version: 'draft' }).catch(() => {
                router.push({
                    name: 'NotFound',
                    params: { pathMatch: slug },
                });
            });

            next();
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        meta: {
            title: '404 Not Found',
            statusCode: 404,
        },
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
