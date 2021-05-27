const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    // app.use(proxy('/cityjson', {
    //     target: 'http://pv.sohu.com',
    //     changeOrigin: true
    // }))
    app.use(
        proxy('/api', {
            target: 'http://localhost:4567',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}