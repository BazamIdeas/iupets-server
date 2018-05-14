'use strict';

const databaseConfig = require('config').database,

const Mysql = databaseConfig.mysql;
const Mongo = databaseConfig.mongo;

const connections = {};

Sequelize = require('sequelize');
const sequelize = new Sequelize(Mysql.database, Mysql.user, Mysql.password, {
    host: Mysql.host,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
connections['sequelize'] = sequelize;

const mongoose = require('mongoose');
if (Mongo.auth) {
    mongoose.connect(`mongodb://${Mongo.user}:${Mongo.password}@${Mongo.host}:${Mongo.port}/${Mongo.database}`);
} else {
    mongoose.connect(`mongodb://${Mongo.host}:${Mongo.port}/${Mongo.database}`);
}
connections['mongoose'] = mongoose;


module.exports = connections;