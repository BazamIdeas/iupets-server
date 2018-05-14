'use strict';

const authConfig = require('config').auth,
    JwtService = require('app/Services').JwtService;

module.exports = {
    
    cliente: (req, res, next) => {

        if (authConfig.enabled) {

            if(!req.headers.authorization){
                return res.status(403).json({msg: "No autorizado"})
            }
            
            const token = req.headers.auth

            JwtService.decodificar(token, (decoded, err) => {

                if (err){
                    res.status(400).json();
                }

                if (decoded.exp <= moment().unix()){
                    return res.status(401).json()
                }

                if (decoded.tipo == "cliente"){
                    req.cliente = decoded.datos
                }

                if (decoded.tipo == "admin"){
                    req.usuario = decoded.datos
                }

                next();
            })

        } else {

            req.usuario = {id: 1};
            req.cliente = {id: 1};
            next();

        }
    },

    admin: (req, res, next) => {

        if (authConfig.enabled) {

            if(!req.headers.authorization){
                return res.status(403).json()
            }
            
            const token = req.headers.auth

            JwtService.decodificar(token, (decoded, err) => {

                if (err){
                    res.status(400).json();
                }

                if (decoded.exp <= moment().unix()){
                    return res.status(401).json()
                }

                if (decoded.tipo == "cliente"){
                    return res.status(403).json()
                }

                if (decoded.tipo == "admin"){
                    req.usuario = decoded.datos
                }

                next();
            })

        } else {

            req.usuario = {id: 1};
            req.cliente = {id: 1};
            next();

        }
    }

}