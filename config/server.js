module.exports = env => {

    return {
        production: {
            port: '90',
            server: '127.0.0.1'
        },
        development: {
            port: '90',
            server: '127.0.0.1'
        }
    }[env]

}