"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			path: "/api",
			whitelist: [
				// Access to any actions in all services under "/api" URL
				"**"
			]
		}],
		aliases: {
			"GET twitter/user": "twitter.user",
			"GET twitter/home": "twitter.home",
			"GET home": "twitter.home",
			"health": "$node.health",
		},

		// Serve assets from "public" folder
		assets: {
			folder: "public"
		}
	}
};
