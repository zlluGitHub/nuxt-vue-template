
module.exports = {
  mode: 'universal',//同构应用程序（服务器端呈现+客户端导航）
  // mode: 'spa',//没有服务器端呈现（仅客户端导航）
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red',height:'5px' },
  /*
  ** 全局 CSS 样式
  */
  css: [
    'iview/dist/styles/iview.css',

    // 项目里要使用的 SCSS 文件
    '@/assets/css/globle.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    // prefix: '/api/',
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/': {
      target: 'https://zhenglinglu.cn', 
      pathRewrite: { '^/api/': '/' }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    analyze: true,
    extend(config, ctx) {
    }
  },
  // router: {
  //   middleware: 'auth'
  // }
}
