<script lang="ts" setup>
import { RouterView } from 'vue-router';
import LayoutDefault from '@/layout/default.vue';
</script>

<template>
    <LayoutDefault>
        <Suspense>
            <RouterView />
        </Suspense>
    </LayoutDefault>
</template>
