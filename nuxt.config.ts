// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  content: {
    experimental: { nativeSqlite: true }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content']
})
