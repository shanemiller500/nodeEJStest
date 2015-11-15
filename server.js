// grab all packages for express
var express = require('express');
var app = express();
var instagram = require('instagram-node').instagram();


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

instagram.use({
	client_id: 'dac8f091585a480f80f2326e69f7a36d',
	client_secret: '71d09893af914dd584b9aff4be1a7483'
});

app.get('/', function (req, res) {

	instagram.media_popular(function (err, medias, remaining, limit) {
		res.render('Pages/index', { grams: medias, gram: limit })
	});

	
});

app.listen(8080, function (err) {
		if (err) {
			colsole.log("Error");
		} else {
			console.log("Listening on port 8080");
		}
	})