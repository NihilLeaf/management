export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.scss',
    '@mdi/font/css/materialdesignicons.css',
    'vuetify/styles',
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  build: {
    transpile: ['vuetify']
  },
})
