export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'realworld-nuxt-js',
    htmlAttrs: {},
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.jsdelivr.net/npm/ionicons@2.0.1/css/ionicons.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Titillium+Web:700%7CSource+Serif+Pro:400,700%7CMerriweather+Sans:400,700%7CSource+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic',
      },
      { rel: 'stylesheet', type: 'text/css', href: '/main.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios', '~/plugins/auth', '~/plugins/time-filter'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  //
  axios: { baseURL: 'https://conduit.productionready.io/api' },

  // Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
  router: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  //
  server: { host: '0.0.0.0', port: 3000 },
}
