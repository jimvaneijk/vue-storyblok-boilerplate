<script lang="ts" setup>
import { BlocksGridStoryblok } from '@/storyblok/types/component-types-sb';

defineProps<{
    blok: BlocksGridStoryblok;
}>();
</script>

<template>
    <section class="mt-24">
        <div class="max-w-3xl mx-auto flex flex-col items-center justify-center">
            <span
                class="bg-purple-100 border-purple-200 border text-purple-600 rounded-full text-xs font-medium px-3 py-1"
            >
                MORE FEATURES
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-4 text-center">
                We've got you covered
            </h2>
            <p class="text-lg mt-4 text-slate-600 text-center [text-wrap:pretty]">
                Our template covers all things SAAS. If you don't find what you're looking for,
                contact us and we'll either help you or steer you in the right direction.
            </p>
        </div>

        <div class="m-auto mt-24 px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div v-editable="blok" class="grid grid-cols-3 gap-14">
                <div v-for="inblok in blok.columns" :key="inblok._uid">
                    <StoryblokComponent :blok="inblok" />
                </div>
            </div>
        </div>
    </section>
</template>
