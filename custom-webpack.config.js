const path = require("path");
const bodyParser = require("body-parser");
const request = require("sync-request");
const sphp = require('sphp');
const auth = require('http-auth');
const webpack = require('webpack');

module.exports = {
//	plugins: [
//	    new webpack.NormalModuleReplacementPlugin(/^\.\/package$/, function(result) {
//	        if(/got/.test(result.context)) {
//	            result.request = "./package.json"
//	        }
//	    })
//	],
//	externals: [
//		 'child_process',
//		 'path',
//		 'http',
//		 'https',
//		 'constants',
//		 'fs',
//		 'os',
//		 'stream',
//		 'vm',
//	],
	devServer: {
	    before: function(app) {
	        app.use(bodyParser.json());
	        app.use(bodyParser.urlencoded({
	        	extended: true
	        }));
	
	        var phpdir = path.join(__dirname, '/php/'); 
	        app.use(sphp.express(phpdir));
	        console.log('PHP enabled');
	        
	        var basic = auth.basic({
	            realm: "Simon Area.",
	            file: __dirname + "/src/assets/.htpasswd"
	        });
	        
	        app.get('/login', auth.connect(basic), (req, res) => {
	            res.send(`Hello from chat area - ${req.user}!`);
	        });
	        
	        var host = process.env.HOST || '0.0.0.0';
	     // Listen on a specific port via the PORT environment variable
	     var port = process.env.PORT || 8080;

	     //	https://github.com/Rob--W/cors-anywhere/issues/71
	     var cors_proxy = require('cors-anywhere');
	     cors_proxy.createServer({
	         originWhitelist: [], // Allow all origins
	         requireHeader: ['origin', 'x-requested-with'],
	         removeHeaders: ['cookie', 'cookie2'],
	         httpProxyOptions: {
	             secure: false
           }
	     }).listen(port, host, function() {
	         console.log('Running CORS Anywhere on ' + host + ':' + port);
	     });
	     
	    }
	}
};

