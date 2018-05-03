module.exports = env => {

    return {
        production: {
            port: '8090',
            server: '127.0.0.1'
        },
        development: {
            port: '8090',
            server: '127.0.0.1'
        }
    }[env]

}