// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@bg-dev/nuxt-naiveui'],
  fonts: {
    defaults: {
      weights: [300, 400, 500, 700],
    },
  },
  icon: {
    clientBundle: {
      // GitHub Pages has no /api/_nuxt_icon endpoint, so bundle every icon used in the source;
      // otherwise icons only on the page you navigate to client-side never load.
      // fa7-solid is newer than @nuxt/icon's built-in collection list, so name it explicitly
      scan: { additionalCollections: ['fa7-solid'] },
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