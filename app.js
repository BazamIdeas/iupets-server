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
    multipartMiddleware = require("connect-multiparty")();

const App = express();

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));
App.use(cookieParser());
App.use(multipartMiddleware);

App.use('/api', require('./routes'));

// catch 404 and forward to error handler
App.use( (req, res, next) => {
  const err = new Error('No se encuentra');
  err.status = 404;
  next(err);
});

App.disable('x-powered-by');

// error handler
App.use( (err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ error: err.message });
});

App.listen(serverConfig.port, () => {
  console.log(`Servidor corriendo en : ${serverConfig.server}`);
});

module.exports = App;