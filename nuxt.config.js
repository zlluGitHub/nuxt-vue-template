const axios = require('axios');
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
  loading: { color: 'red', height: '5px' },
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
    { src: '@/plugins/iview' },

    // { src: '~/plugins/vue-notifications', ssr: false },

    // { src: '~/plugins/client-only.js', mode: 'client' },
    // { src: '~/plugins/server-only.js', mode: 'server' }
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
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
  proxy: {//只适合在开发环境下解决跨域问题
    '/api/': {
      target: 'https://zhenglinglu.cn',
      pathRewrite: { '^/api/': '/' },
      // changeOrigin: true,
      // secure: false
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    analyze: false,
    extend(config, ctx) {
    }
  },
  // router: {
    // base: 'dist/',
  //   middleware: 'auth'//每个路由改变时被调用
  // },
  generate: {
    subFolders: true,//true 时为每个路由创建一个目录并生成index.html文件
    // interval: 500,
    // 动态路由生成静态文件

    // 方法一
    // routes: function (callback) {
    //   axios.get('https://zhenglinglu.cn/zllublogAdmin/article/get.article.php')
    //     .then((res) => {
    //       var routes = res.data.list.map((user) => {
    //         return '/detail/' + user.id
    //       })
    //       callback(null, {routes:routes,data:user})
    //     })
    //     .catch(callback)
    // }

    //方法二
    async routes() {
      let data1 = await axios.get(process.env.BASE_URL+'/zllublogAdmin/article/get.article.php')
        .then((res) => {
          return res.data.list.map((user) => {
            return {
              route: '/detail/' + user.bid,
              payload: user
            }
          })
        })

      let data2 = await axios.get(process.env.BASE_URL+'/zllublogAdmin/article/get.article.php')
        .then((res) => {
          return res.data.list.map((user) => {
            return {
              route: '/detail/' + user.id,
              payload: user
            }
          })
        })
      return [...data1, ...data2]
    }
  }
}
