'use strict';

const Router = require("express").Router(),
    Controllers = require("../app/Controllers"),
    Middlewares = require("../app/Middlewares"),
    
    base = 'usuarios';

Router.get(`/${base}`, Middlewares.AuthorizationMiddleware.cliente, function(req, res){
    res.send('hola a todos')
});

module.exports = Router;