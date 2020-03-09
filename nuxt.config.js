
export default {
  mode: 'spa',
  server: {
    port: 4000, // default: 3000
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'lassi.international ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name:"msapplication-TileColor", content:"#1a202c" },
      { name:"theme-color", content:"#ffffff" },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: "shortcut icon", type: 'image/x-icon', href: "/favicon.ico?v=00Bzlg5wNw" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=00Bzlg5wNw"},
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png?v=00Bzlg5wNw"},
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png?v=00Bzlg5wNw"},
      { rel: "manifest", href: "/site.webmanifest?v=00Bzlg5wNw" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg?v=00Bzlg5wNw", color: "#1a202c" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Added for Google analytics tracking
    '@nuxtjs/google-analytics',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Google Analytics module configuration
  ** See https://github.com/nuxt-community/analytics-module
  ** or https://matteogabriele.gitbooks.io/vue-analytics/content/
  */
  googleAnalytics: {
    id: 'UA-160059369-1',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
