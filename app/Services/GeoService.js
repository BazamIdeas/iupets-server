'use strict';

const MMDBReader = require('mmdb-reader'),
    serverConfig = require('../config').server;

module.exports = {
    iso: ip => {
        if (process.env.NODE_ENV == "development"){
            ip = serverConfig.server;
        }
        
        const reader = new MMDBReader('../../public/GeoIP2-Country.mmdb')
        return reader.lookup(ip).country.iso_code;
    }
}