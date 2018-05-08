const fs = require('fs'),
	dotenv = require('dotenv')

const envConfig = dotenv.parse(fs.readFileSync('.env'))
for (var k in envConfig) {
	process.env[k] = envConfig[k]
}

const serverConfig = require('./config').server;

const express = require('express'),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	compression = require('compression'),
	multipartMiddleware = require("connect-multiparty")(),
	helmet = require('helmet');

const App = express();
const server = require('http').createServer(App);

App.use(helmet());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));
App.use(cookieParser());
App.use(multipartMiddleware);

App.use(express.static(__dirname + '/public'));

App.use("/app", require('./routes'));

// catch 404 and forward to error handler
App.use((req, res, next) => {
	const err = new Error('No se encuentra');
	err.status = 404;
	next(err);
});

// error handler
App.use((err, req, res) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send({ error: err.message });
});

const io = require('socket.io')(server),
	wsEvents = require('./ws');

io.on('connection', socket => {
	console.log('cliente conectado: ' + socket.id);
	wsEvents(io, socket);
	socket.on('disconnect', () => {
		console.log('cliente desconectado: ' + socket.id);
	});
});

server.listen(serverConfig.port, () => {
	console.log(`Servidor corriendo en : http://${serverConfig.server}:${serverConfig.port}`);
});

module.exports = App;