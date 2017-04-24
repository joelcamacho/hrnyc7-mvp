var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var http = require('http');
var promise = require('bluebird');
var request = require('request');
//var morgan = require('morgan');


//var app = require('./server-config.js');
var app = express();

var port = process.env.PORT || 5000;

//start server
app.listen(port);

console.log('Server listening on port' + port);

//serve up angular app
app.use(express.static(__dirname + '/../client'));

//set up  middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//api routes
app.get('/api/crimes', function(req, res, next){
	request({
		uri: 'http://NflArrest.com/api/v1/crime',
	}).pipe(res);
});

app.post('/api/crimes', function(req, res, next){

});

app.get('/api/players', function(req, res, next){
	request({
		uri: 'http://NflArrest.com/api/v1/player',
	}).pipe(res);
});

app.post('/api/players', function(req, res, next){

});