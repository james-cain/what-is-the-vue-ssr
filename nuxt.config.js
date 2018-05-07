const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'what-is-the-vue-ssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // script: [{ innerHTML: require('lib-flexible/flexible'), type: 'text/javascript', charset: 'utf-8'}],
    // __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    vendor: [
      'axios',
      'lib-flexible',
      'mint-ui'
    ],
    publicPath: '/assets/',
    // plugins: [
    //   new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     minChunks: function(module) {
    //       return (
    //         /node_modules/.test(module.context) &&
    //         !/\.css$/.test(module.request)
    //       )
    //     }
    //   })
    // ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // if (isServer) {
      //   config.externals = [
      //     nodeExternals({
      //       whitelist: [
      //         'mint-ui'
      //       ]
      //     })
      //   ]
      // }
    },
    postcss: [
      require('postcss-px2rem')(
        {'remUnit':75,'baseDpr':2}
      ),
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    babel: {
      // presets: [
      //   ['es2015', {'modules': false}]
      // ],
      // plugins: [
      //   [
      //     'component', [{
      //       libraryName: 'mint-ui',
      //       style: true
      //     }]
      //   ]
      // ]
    }
  },
  css: [
    {
      src: '~assets/css/reset.less',
      lang: 'less'
    },
    {
      src: '~assets/css/mixins.less',
      lang: 'less'
    }
  ],
  router: {
    base: '/app/'
  },
  plugins: [
    '~plugins/mint-ui'
  ]
}
