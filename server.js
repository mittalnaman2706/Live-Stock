var http = require('http');
var express=require("express");

var port = 2713;
var app = express();


app.get('/', function(req,res){

	res.sendFile(__dirname + '/main.html');
});


app.listen(port, '0.0.0.0', function() {
  console.log(`Server running at http://localhost:${port}/`);
});