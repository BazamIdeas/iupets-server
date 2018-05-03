'use strict';

const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(__dirname);

let services = {};

files.forEach(function(file) {
	let name = path.basename(file, ".js");
	if (name !== "index") { services[name] = require(`./${name}`); }
});

module.exports = services;