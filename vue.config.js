module.exports = {
  devServer: {
    proxy: {
      '/ws': {
        // target: 'http://localhost:8112',
        target: 'https://resistance.jakecoffman.com',
        changeOrigin: true,
        ws: true
      }
    }
  },
  pwa: {
    workboxOptions: {skipWaiting: true}
  }
}
