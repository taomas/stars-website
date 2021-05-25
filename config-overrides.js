const path = require('path')
const {
  override,
  overrideDevServer,
  addWebpackAlias,
  addLessLoader,
  disableEsLint
} = require('customize-cra')

const setOutputFilename = (filename) => (config) => {
  config.output = {
    ...config.output,
    filename
  }

  return config
}

const setDevHeaders = (headers) => (config, env) => {
  config.headers = {
    ...config.headers,
    ...headers
  }
  return config
}

module.exports = {
  webpack: override(
    disableEsLint(),
    addWebpackAlias({
      '@': path.join(__dirname, './src')
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#A80000' }
      }
    })
  ),
  devServer: overrideDevServer(
    setDevHeaders({
      'X-Author': 'cloudbase'
    })
  )
}
