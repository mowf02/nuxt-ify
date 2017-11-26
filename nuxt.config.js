module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'liz mowforth | front-end / UX developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no' },
      { name: 'google-site-verification', content: '6wW1O9L80QVzteKAFEwl0pBuVj-aeIPjSfImhVKTxrM' },
      { hid: 'description', name: 'description', content: 'lizmowforth.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Crimson+Text'},
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000' },

  css: [
    { src: '~assets/styles/styles.scss', lang: 'scss' }
  ],

  entry: {
    vendor: ['vue', 'vue-router', 'axios']
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
