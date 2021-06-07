const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://8.140.11.73:4567',
            // target: 'http://localhost:4567',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}