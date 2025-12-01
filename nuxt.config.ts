// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  content: {
    experimental: { nativeSqlite: true }
  },
  devtools: { enabled: true },
  css: ['@unocss/reset/eric-meyer.css'],
  fonts: {
    defaults: {
      weights: [400, 500],
      styles: ['normal']
    }
  },
  modules: ['@nuxt/content', '@nuxt/fonts']
})