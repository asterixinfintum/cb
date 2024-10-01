export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Finance Law',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: "https://vjs.zencdn.net/7.6.0/video-js.css" }
    ],
    script: [
      {
        src: "https://vjs.zencdn.net/7.6.0/video.js",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/sitemap"
  ],
  styleResources: {
    scss: [
      '~/assets/scss/btnStyles.scss',
      '~/assets/scss/fontColors.scss',
      '~/assets/scss/fontStyles.scss',
      '~/assets/scss/headerStyles.scss',
      '~/assets/scss/paraStyles.scss',
      '~/assets/scss/mixins/flex.scss',
      '~/assets/scss/mixins/utils.scss',
      '~/assets/scss/mixins/logo.scss',
      '~/assets/scss/page.scss',
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
