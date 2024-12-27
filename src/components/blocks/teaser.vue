<script lang="ts" setup>
import { BlocksTeaserStoryblok } from '@/storyblok/types/component-types-sb';

defineProps<{
    blok: BlocksTeaserStoryblok;
}>();
</script>

<template>
    <h1 v-editable="blok" class="py-8 mb-6 text-5xl font-bold text-center text-gray-600">
        {{ blok.headline }}
    </h1>
</template>
