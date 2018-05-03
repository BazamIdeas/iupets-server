'use strict';

const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(__dirname);

let controllers = {};

files.forEach(function(file) {
	let name = path.basename(file, ".js");
	if (name !== "index") { controllers[name] = require(`./${name}`); }
});

module.exports = controllers;