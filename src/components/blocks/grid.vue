<script lang="ts" setup>
import { BlocksGridStoryblok } from '@/storyblok/types/component-types-sb';

defineProps<{
    blok: BlocksGridStoryblok;
}>();
</script>

<template>
    <div v-editable="blok" class="grid grid-cols-3 gap-14">
        <div v-for="inblok in blok.columns" :key="inblok._uid" class="flex-auto px-6">
            <StoryblokComponent :blok="inblok" />
        </div>
    </div>
</template>
