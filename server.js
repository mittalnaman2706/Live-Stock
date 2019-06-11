var request = require('request');
var http = require('https');
var express=require("express");
var path = require('path');
var bodyParser=require('body-parser');

var port = 3000;
var app = express();

var apiKey = "JCONAHM5CV7PI1CS";

var staticPath = path.join(__dirname, 'client');
console.log(staticPath);
app.use(express.static(staticPath));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/history', function(req,res){

	var symbol = req.query.body;
	console.log(symbol);
	var AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;
	var alphaVantageAPI = new AlphaVantageAPI(apiKey, 'compact', true);

	alphaVantageAPI.getDailyData('GOOGL')
	    .then(dailyData => {
	        console.log("Daily data:");
	        res.send(dailyData);// console.log(dailyData);
	    })
	    .catch(err => {
	        console.error(err);
	    });
});


var server = app.listen(port, '0.0.0.0', function() {
  console.log(`Server running at http://localhost:${port}/`);
});