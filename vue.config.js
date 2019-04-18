const webpack = require('webpack')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill'
      })
    ]
  }
}
