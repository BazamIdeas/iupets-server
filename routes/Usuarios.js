'use strict';

const Router = require("express").Router(),
    Controllers = require("../app/Controllers"),
    Middlewares = require("../app/Middlewares");

//Middlewares para todas las rutas
Router.use(Middlewares.AuthorizationMiddleware.cliente);

Router.get('/', (req, res) => {
    res.send('hola usuario')
});

Router.get('/todos', (req, res) => {
    res.send('hola a todos')
});

module.exports = Router;