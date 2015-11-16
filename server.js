/* global grams */
// grab all packages for express
var express = require('express');
var instagram = require('instagram-node').instagram();
var Skiplagged = require('skiplagged');
var app = express();


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

instagram.use({
	client_id: 'dac8f091585a480f80f2326e69f7a36d',
	client_secret: '71d09893af914dd584b9aff4be1a7483'
});

app.get('/', function (req, res) {

	instagram.media_popular(function (err, medias, remaining, limit) {
		res.render('Pages/index', { grams: medias })
		console.log("Shane ", medias);
	});
});

app.get('/twitterindex', function (req, res) {
	res.render('pages/twitterIndex')
	console.log("Shane ");
});


app.get('/skiplagged', function (req, res) {

	var sl = new Skiplagged();
	var test = sl.flights('ORD', 'JFK', '2016-01-24', '2016-01-26');
	console.log("Here! " + test);
	res.render('pages/skiplagged', {Skiplagged: test})
	console.log('Here Shane');
	
});



app.listen(8080, function (err) {
	if (err) {
		console.log("Error " + err);
	} else {
		console.log("Listening on port 8080");
	}
})