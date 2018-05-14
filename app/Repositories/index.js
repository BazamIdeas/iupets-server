'use strict';

const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(__dirname);

let repositories = {};

files.forEach(file => {
	let name = path.basename(file, ".js");
	if (name !== "index") { repositories[name] = require(`./${name}`); }
});

module.exports = repositories;