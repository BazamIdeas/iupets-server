'use strict';

const authConfig = require('./config').auth,
    jwt = require('jsonwebtoken'),
    moment = require('moment');

module.exports = {

    crearToken: (data, tipo) => {
        data.tipo = tipo;

        const playload = {
            data: data,
            tipo: tipo,
            iat: moment.unix(),
            exp: moment().add(authConfig.exp.qty, authConfig.exp.unit).unix()
        }

        return jwt.sign(playload, authConfig.secretKey);
    },

    decodificar: (token, cb) => {
        try {
            let decoded = jwt.verify(token, authConfig.secretKey);
        } catch(err) {
            return cb(null, err);
        }

        return cb(decoded);
    }
}