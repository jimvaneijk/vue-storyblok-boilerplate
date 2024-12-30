<script lang="ts" setup>
import { BlocksTeaserStoryblok } from '@/storyblok/types/component-types-sb';

defineProps<{
    blok: BlocksTeaserStoryblok;
}>();
</script>

<template>
    <div class="overflow-x-clip">
        <div class="max-w-screen-xl mx-auto px-5">
            <main v-editable="blok" class="grid lg:grid-cols-5 place-items-center relative">
                <div
                    class="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial from-indigo-200 right-0 top-0"
                ></div>
                <div
                    class="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial from-purple-200 right-56 top-10"
                ></div>
                <div class="max-w-sm md:max-w-max lg:col-span-2">
                    <h1
                        class="text-3xl lg:text-4xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter [text-wrap:balance] text-center lg:text-start"
                    >
                        {{ blok.headline }}
                    </h1>
                    <p
                        class="text-lg mt-4 max-w-lg text-slate-600 [text-wrap:balance] text-center lg:text-start"
                    >
                        Pro version of popular Astroship starter template made for startups. Built
                        with Astro and Tailwind CSS.
                    </p>
                    <div
                        class="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3"
                    >
                        <a
                            href="https://web3templates.com/templates/astroship-pro-astro-saas-website-template"
                            rel="noopener"
                            class="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-7 py-2.5 bg-indigo-600 text-white hover:bg-indigo-800 flex gap-1 items-center justify-center"
                        >
                            Buy Template — $49
                        </a>
                        <a
                            href="https://github.com/surjithctly/astroship"
                            rel="noopener"
                            class="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-7 py-2.5 bg-white border-2 border-indigo-500 hover:bg-indigo-50 text-indigo-600 flex gap-1 items-center justify-center"
                        >
                            Free Version
                        </a>
                    </div>
                </div>
                <div class="py-3 lg:col-span-3 lg:-mr-44">
                    <picture>
                        <img
                            src="https://astroship-pro.web3templates.com/_astro/hero-screenshot.dpXn-2za_Z2flvn7.png"
                            alt="Astronaut in the air"
                            loading="eager"
                            fetchpriority="high"
                            width="1183"
                            height="787"
                            decoding="async"
                        />
                    </picture>
                </div>
            </main>
        </div>
    </div>
</template>
