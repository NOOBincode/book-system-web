const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000, // 指定前端开发服务器运行的端口
    proxy: {
      '/api': { // 将 '/api' 开头的请求转发到后端
        target: 'http://localhost:8080', // 后端服务地址
        changeOrigin: true, // 是否修改请求头中的 Host 为目标地址
        pathRewrite: { '^/api': '' }, // 可选：删除路径中的 '/api' 前缀
      },
    },
  },
});