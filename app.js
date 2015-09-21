var express = require('express');
var app = express();
var mysql=require('mysql');
var config = require('./config');
var sqlConnect=require('./connection.js');
sqlConnect.connect(mysql);

var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;


var cons = require('consolidate');
var path = require('path');

app.use(express.static(__dirname));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function(req,res){

	res.send('<h2>Check console to see if the connection is successful</h2>');
});



app.listen(port, function(){
	console.log("listening on port:"+port);
});