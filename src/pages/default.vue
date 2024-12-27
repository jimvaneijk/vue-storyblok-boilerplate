<script lang="ts" setup>
import { useStoryblok } from '@storyblok/vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const story = await useStoryblok(route.params.slug, { version: 'draft' });
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>
