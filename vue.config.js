const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require('path');
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './', // 根路径 /pages/dist/
  //publicPath: '/pages/dist',
  productionSourceMap: false,
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录
  lintOnSave: false, // 是否开启eslint保存检测，有效值：true || false || 'error'
  // devServer: {
  //   open: true, // 项目运行后是否自动打开浏览器
  //   host: 'localhost',
  //   //host: 'ip',
  //   //port: 8081,
  //   https: false,
  //   hotOnly: false, // 热更新
  //   proxy: {
  //     // 配置跨域
  //     '/api': {
  //       //target: 'http://localhost:8080', 
  //       wx: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         //'^/api': '/mock'
  //         '^/api': '/appi'
  //       }
  //     }
  //   },

  // },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",

        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/] // ts-loader
          }
        },
      ]
    }
  },
  configureWebpack: config => {
    config.resolve = {
      extensions: [`.js`, `.vue`, `.json`, `.css`, `.ts`],
      // 配置路径别名
      alias: {
        "console": require.resolve("console-browserify"),
        "assert": require.resolve("assert/"),
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'styles': resolve('src/assets/styles')
      },
    }
  }
};