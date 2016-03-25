var app = require('express')();
var bodyParser = require('body-parser');
var log = require('debug')('app');
var morgan = require('morgan');
var path = require('path');
var util = require('util');
var pkg = require('./package.json');

var salutation = 'Hello';

module.exports = app;

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// routes

// curl localhost:3000
app.get('/', function(req, res) {
  res.json({
    service: pkg.name,
    version: pkg.version
  });
});

// curl localhost:3000/greeting
app.get('/greeting', function(req, res) {
  res.json({
    success: true,
    greeting: util.format('%s World', salutation)
  });
});

// curl -X PUT -d "salutation=hola" localhost:3000/greeting
app.put('/greeting', function(req, res) {
  var newSalutation = req.body.salutation;

  if (!newSalutation) {
    return res.status(400).json({
      success: false,
      reason: 'body is missing salutation parameter'
    });
  }

  salutation = newSalutation;
  return res.json({
    success: true,
    salutation: salutation
  });

});

// curl localhost:3000/greeting/{name}
app.get('/greeting/:name', function(req, res) {
  var name = req.params.name;
  res.json({
    success: true,
    greeting: util.format('%s %s', salutation, name)
  });
});

// curl -X POST -d "message={message}" localhost:3000/greeting/{name}
app.post('/greeting/:name', function(req, res) {
  var name = req.params.name,
    body = req.body;

  res.json({
    success: true,
    greeting: util.format('%s %s', salutation, name),
    message: body.message
  });
});


if (require.main === module) {
  app.set('port', process.env.PORT || 3000);
  var server = app.listen(app.get('port'), function() {
    log('server started on port %s', server.address().port);
    app.set('server', server);
  });
}
