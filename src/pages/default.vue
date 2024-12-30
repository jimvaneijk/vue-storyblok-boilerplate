<script lang="ts" setup>
import { useStoryblok } from '@storyblok/vue';
import { useRoute } from 'vue-router';
import { ISbStoryData } from '@storyblok/vue/types';
const route = useRoute();

const story: ISbStoryData = await useStoryblok(route.params.slug, { version: 'draft' });
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>
