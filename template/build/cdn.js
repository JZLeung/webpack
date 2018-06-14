{{#dll}}const webpack = require('webpack'){{/dll}}
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
// const package = require('../package')
const Vue = require('vue')
const externals = {
}
// 生产环境中使用生产环境的 vue
// 开发环境继续使用本地 node_modules 中的 vue
if (process.env.NODE_ENV === 'production') {
  externals['vue'] = 'Vue'
}
const vueVersion = Vue.version
// console.log(process.env.NODE_ENV, vueVersion)

// 生产环境默认注入 vue 
// 开发环境中不注入
const assets = (process.env.NODE_ENV === 'production' ? [{
  path: `https://cdn.bootcss.com/vue/${vueVersion}/vue.min.js`,
  type: 'js'
}, ] : [])

const plugins = [
  new HtmlWebpackIncludeAssetsPlugin({
    assets,
    // 是否在 webpack 注入的 js 文件后新增？true 为 append, false 为 prepend。
    // 生产环境中，这些 js 应该先加载。
    append: process.env.NODE_ENV !== 'production',
    publicPath: '',
  }),
  {{#dll}}new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require('./vendor-manifest.json')
  }),{{/dll}}
]

module.exports = {
  externals,
  plugins
}
