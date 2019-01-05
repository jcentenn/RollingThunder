const path = require("path");
const bodyParser = require("body-parser");
const request = require("sync-request");
const sphp = require('sphp');

module.exports = {
	devServer: {
	    before: function(app) {
	        app.use(bodyParser.json());
	        app.use(bodyParser.urlencoded({
	            extended: true
	        }));
	
	        var phpdir = path.join(__dirname, '/php/'); 
	        app.use(sphp.express(phpdir));
	        console.log('PHP enabled');
	    }
	}
};

