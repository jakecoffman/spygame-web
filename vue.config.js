module.exports = {
    devServer: {
        proxy: {
            '/ws': {
                target: 'http://localhost:8112',
                changeOrigin: true,
                ws: true
            }
        }
    }
}
