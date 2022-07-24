const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target: 'http://127.0.0.1:8081'
      }
    }
  },
  configureWebpack:{
    externals: {
      "vue": "Vue",
      "axios": "axios",
      "dayjs": "dayjs"
    }
  }

})
