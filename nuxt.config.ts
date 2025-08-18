// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', 'nuxtjs-naive-ui'],
  fonts: {
    defaults: {
      weights: [300, 400, 700],
    },
  },
  app: {
    head: {
      title: 'Stepan Gordeev', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    }
  }
})