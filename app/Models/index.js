'use strict';

const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(__dirname);

let models = {};

files.forEach(file => {
	let name = path.basename(file, ".js");
	if (name !== "index" && name !== "_Connection") { models[name] = require(`./${name}`); }
});

module.exports = models;