// https://nuxt.com/docs/api/configuration/nuxt-config
/// <reference types="vitest/config" />
import vue from "@vitejs/plugin-vue";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: '2048 Game',
      meta: [
        { name: 'description', content: '2048 puzzle game built with Nuxt and Nuxt UI' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  // Client-side only for the game
  ssr: false,

  // Build configuration
  nitro: {
    output: {
      dir: './publish'
    }
  },

  // vite: {
  //   plugins: [vue()],
  //   test: {
  //     globals: true,
  //     environment: 'jsdom'
  //   }
  // }
})
