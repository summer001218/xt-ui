const path = require('path')
module.exports = {
  pages: {
    // 修改项目入口文件
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置， 使用 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('label')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
