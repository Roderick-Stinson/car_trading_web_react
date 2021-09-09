const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http:/roderick.ltd/api',
            // target: 'http://124.70.3.195:4567',
            // target: 'http://localhost:4567',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}