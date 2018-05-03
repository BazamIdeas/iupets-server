'use strict';

const sequelize = require('./_Connection').sequelize;

const Usuario = mongoose.Schema({
    name: String
});

module.exports = Usuario;