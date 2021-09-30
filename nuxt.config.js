require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fit App',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image',
    '@nuxtjs/auth',
    '@nuxtjs/markdownit',
  ],

  // This is for displaying rich text content in the frontend.
  markdownit: {
    runtime: true, // Support `$md()`
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_AUTH_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/schemes/local.html#options
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'https://coachapp.click/auth/local',
            method: 'post',
            propertyName: 'jwt',
          },
          user: {
            url: 'https://coachapp.click/users/me',
            method: 'get',
            propertyName: false,
          },
          logout: false,
        },
      },
    },
  },
}
