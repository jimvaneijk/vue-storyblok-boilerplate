<script lang="ts" setup>
import { StoryblokRichText } from '@storyblok/vue';

import { BlocksFeatureStoryblok } from '../../storyblok/types/component-types-sb';

defineProps<{
    blok: BlocksFeatureStoryblok;
}>();
</script>

<template>
    <div v-editable="blok" class="p-4 shadow-lg rounded-lg">
        <h1 class="text-lg font-bold text-gray-600">
            {{ blok.title }}
        </h1>
        <StoryblokRichText v-if="blok.content" :doc="blok.content" />
        <img
            v-if="blok.image"
            :src="blok.image?.filename || ''"
            :alt="blok.image.alt || ''"
            :width="blok.image.width || 'auto'"
            :height="blok.image.height || 'auto'"
        />
    </div>
</template>
