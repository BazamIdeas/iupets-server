'use strict';

const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(__dirname);

let middlewares = {};

files.forEach(function(file) {
	let name = path.basename(file, ".js");
	if (name !== "index") { middlewares[name] = require(`./${name}`); }
});

module.exports = middlewares;