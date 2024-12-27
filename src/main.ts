import './assets/app.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';

import router from '@/router';
import StoryblokComponents from '@/storyblok/components';

const app = createApp(App);

app.use(StoryblokVue, {
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN as string,
    bridge: import.meta.env.NODE_ENV !== 'production',
    cacheProvider: 'memory',
    use: [apiPlugin],
});
app.use(router);

app.use(StoryblokComponents);
app.use(createPinia());

app.mount('#app');
