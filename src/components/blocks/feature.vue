<script lang="ts" setup>
import { StoryblokRichText } from '@storyblok/vue';

import { BlocksFeatureStoryblok } from '../../storyblok/types/component-types-sb';

defineProps<{
    blok: BlocksFeatureStoryblok;
}>();
</script>

<template>
    <div
        v-editable="blok"
        class="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5"
    >
        <div
            v-if="blok.image"
            class="overflow-hidden flex items-start justify-center h-auto relative lg:h-60"
        >
            <picture>
                <img
                    :src="blok.image?.filename || ''"
                    :alt="blok.image.alt || ''"
                    :width="blok.image.width || 'auto'"
                    :height="blok.image.height || 'auto'"
                    class="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                />
            </picture>
        </div>
        <h3 class="font-semibold text-lg">{{ blok.title }}</h3>
        <div class="text-slate-500 mt-2 leading-relaxed">
            <StoryblokRichText v-if="blok.content" :doc="blok.content" />
        </div>
    </div>
</template>
