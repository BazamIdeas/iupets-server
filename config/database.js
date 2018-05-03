module.exports = env => {

    return {
        production: {
            mysql: {
                host: '127.0.0.1',
                port: '3306',
                database: 'iupets',
                user: 'root',
                password: ''
            },
            mongo: {
                host: '127.0.0.1',
                port: '27017',
                database: 'iupets',
                auth: false,
                user: '',
                password: ''
            }
        },
        development: {
            mysql: {
                host: '127.0.0.1',
                port: '3306',
                database: 'iupets',
                user: 'root',
                password: ''
            },
            mongo: {
                host: '127.0.0.1',
                port: '27017',
                database: 'iupets',
                auth: false,
                user: '',
                password: ''
            }
        }
    }[env]

}