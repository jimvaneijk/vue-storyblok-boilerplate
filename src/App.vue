<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';

const siteName = 'Vue Storyblok Boilerplate';
</script>

<template>
    <header class="bg-gray-100 py-6 px-16 gap-4 flex flex-col items-center">
        <p class="text-center font-bold text-2xl">{{ siteName }}</p>
        <nav class="flex items-center gap-4">
            <RouterLink to="/"> Home </RouterLink>
            <RouterLink to="/about"> About </RouterLink>
        </nav>
    </header>

    <Suspense>
        <RouterView />
    </Suspense>

    <footer class="bg-gray-100 py-6 px-16 gap-4 flex items-center mt-8">
        <p class="text-center font-bold text-2xl">{{ siteName }}</p>
        <nav class="flex ml-auto items-center gap-4">
            <RouterLink to="/"> Home </RouterLink>
            <RouterLink to="/about"> About </RouterLink>
        </nav>
    </footer>
</template>
