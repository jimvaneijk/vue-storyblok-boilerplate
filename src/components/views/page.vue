<script lang="ts" setup>
import { ViewsPageStoryblok } from '../../storyblok/types/component-types-sb';

defineProps<{
    blok: ViewsPageStoryblok;
}>();
</script>

<template>
    <div v-editable="blok" class="px-6">
        <StoryblokComponent v-for="inblok in blok.body" :blok="inblok" :key="inblok._uid" />
    </div>
</template>
