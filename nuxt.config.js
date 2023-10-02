export default {
  head: {
    title: 'PickUpPal',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],
  env: {
    GOOGLE_MAPS_API_KEY: 'AIzaSyAdg9NWY-GfgkU_aPmHaayAq9o1iIFT3SI',
  },

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/ionic'],

  axios: {
    baseURL: 'AIzaSyAdg9NWY-GfgkU_aPmHaayAq9o1iIFT3SI',
  },

  build: {},
}
