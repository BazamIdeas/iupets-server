'use strict';

const Router = require("express").Router(),
    Controllers = require("../app/Controllers"),
    Middlewares = require("../app/Middlewares"),
    
    base = 'usuarios';

Router.get(`/${base}`, Middlewares.Autorization.cliente, Controllers.Usuarios.todos);

module.exports = Router;