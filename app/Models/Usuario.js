'use strict';

const sequelize = require('app/Models/_Connection').sequelize;

const Usuario = mongoose.Schema({
    name: String
});

module.exports = Usuario;