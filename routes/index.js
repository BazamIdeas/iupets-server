'use strict';

const Router = require('express').Router();

const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(__dirname);

files.forEach(function(file) {
	let name = path.basename(file, ".js");
	if (name !== "index") { Router.use(`/${name.toLowerCase()}`, require(`./${name}`));}
});

module.exports = Router;