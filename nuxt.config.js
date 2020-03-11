export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      class: 'no-js',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://commondesign.demo.ahconu.org/themes/contrib/common_design/css/styles.css' },
      { rel: 'stylesheet', href: 'https://raw.githubusercontent.com/UN-OCHA/common_design_system/cd-187-common-header-footer-components/cd-base.css' },
      ]
  },
  generate: {
    routes: function() {
      const fs = require('fs')
      return fs.readdirSync('./assets/content/blog').map(file => {
        return {
          route: `/blog/${file.slice(2, -5)}`,
          payload: require(`./assets/content/blog/${file}`)
        }
      })
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#007faa' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/cd-dropdown.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/markdownit'],
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
