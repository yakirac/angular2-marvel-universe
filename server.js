;(function(){
	"use strict";
	var express;
	/**
	* Module dependencies.
	*/
	express = require("./framework/express");
	// Initialize server
	function startServer() {
		// Initialize express
		var app = express.init();
		// Start up the server on the port specified in the config
		app.listen(3600, function() {
			console.log('App started on port 3600');
		});
		module.exports = app;
	}
	startServer();
}());