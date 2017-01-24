(function() {
	"use strict";

	var path = require('path');
	var MarvelService = require('./app.marvelService');

	var mService = new MarvelService();
	
	function setAppRoutes(app)
	{
		app.route('/a2').get(function response(req, res) {  
		  res.sendFile(path.join(__dirname, '../dist/index.html'));
		});

		app.route('/a2/heroes').get(function response(req, res) {  
		  res.sendFile(path.join(__dirname, '../dist/index.html'));
		});

		app.route('/api/a2/heroes').get(function response(req, res) {
			res.sendFile(path.join(__dirname, '../data/heros.json'));
		});

		app.route('/api/a2/hero/:id').get(function response(req, res) {
			mService.getCharacter(req.params.id).then(function(data) {
				var character = JSON.parse(data);
				res.json({ attributionText : character.attributionText, 
					attributionHTML : character.attributionHTML, 
					hero : character.data.results[0] 
				});
			});
		});
	}

	module.exports = setAppRoutes;
}());
