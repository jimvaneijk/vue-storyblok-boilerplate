<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import Logo from '@/layout/components/logo.vue';
</script>
<template>
    <div>
        <header>
            <nav
                id="navbar"
                class="fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur"
            >
                <div class="mx-auto px-4 sm:px-12 xl:max-w-screen-xl xl:px-0">
                    <div
                        class="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4"
                    >
                        <div class="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                            <a href="/" aria-label="logo" class="flex items-center space-x-2">
                                <Logo />
                            </a>

                            <button
                                aria-label="humburger"
                                id="hamburger"
                                class="relative -mr-6 p-6 lg:hidden"
                            >
                                <div
                                    aria-hidden="true"
                                    class="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300"
                                ></div>
                                <div
                                    aria-hidden="true"
                                    class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300"
                                ></div>
                            </button>
                        </div>
                        <div
                            id="layer"
                            aria-hidden="true"
                            class="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 lg:hidden"
                        ></div>
                        <div
                            id="navlinks"
                            class="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 ounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0"
                        >
                            <div class="text-gray-600 lg:pr-4">
                                <ul
                                    class="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm"
                                >
                                    <li>
                                        <RouterLink
                                            to="/"
                                            class="block transition hover:text-primary md:px-4"
                                        >
                                            Home
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink
                                            to="/about"
                                            class="block transition hover:text-primary md:px-4"
                                        >
                                            About
                                        </RouterLink>
                                    </li>
                                </ul>
                            </div>

                            <div
                                class="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6"
                            >
                                <a
                                    class="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-600"
                                    href="/pages/contact"
                                >
                                    <span
                                        class="relative text-sm font-semibold text-white lg:text-primary"
                                    >
                                        Get started
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <main class="py-10">
            <slot />
        </main>

        <footer class="border-t border-gray-100 pt-32 pb-8">
            <div>
                <div class="m-auto space-y-8 px-4 text-gray-600 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div class="grid grid-cols-8 gap-6 md:gap-0">
                        <div class="col-span-8 md:col-span-2 lg:col-span-3">
                            <div
                                class="flex h-full items-center justify-between gap-6 border-b py-6 border-gray-800 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0"
                            >
                                <div>
                                    <a aria-label="ampire logo" class="flex items-center" href="/">
                                        <Logo />
                                    </a>
                                    <p class="mt-2 mb-0 inline-block text-sm">
                                        Vue Storyblok Boilerplate
                                    </p>
                                </div>

                                <div class="flex gap-6">
                                    <a
                                        href="#"
                                        target="blank"
                                        aria-label="github"
                                        class="hover:text-primary"
                                    >
                                        <span class="sr-only">Github</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            class="bi bi-github"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        target="blank"
                                        aria-label="twitter"
                                        class="hover:text-primary"
                                    >
                                        <span class="sr-only">Twitter</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            class="bi bi-twitter"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-8 md:col-span-6 lg:col-span-5">
                            <div class="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                                <div>
                                    <h2 class="text-base font-medium text-gray-800">Company</h2>
                                    <ul class="mt-4 list-inside space-y-4">
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Customers
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Enterprise
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Partners
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Jobs
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 class="text-base font-medium text-gray-800">Products</h2>
                                    <ul class="mt-4 list-inside space-y-4">
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Customers
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Enterprise
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Partners
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Jobs
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 class="text-base font-medium text-gray-800">Ressources</h2>
                                    <ul class="mt-4 list-inside space-y-4">
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Customers
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Enterprise
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Partners
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="text-sm duration-100 hover:text-primary"
                                            >
                                                Jobs
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm md:pl-16">
                                <span>© 23G - Storyblok Vue theme</span>
                                <span>All right reserved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
