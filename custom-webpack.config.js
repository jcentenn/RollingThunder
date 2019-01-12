const path = require("path");
const bodyParser = require("body-parser");
const request = require("sync-request");
const sphp = require('sphp');
const auth = require('http-auth');

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
	        
	        var basic = auth.basic({
	            realm: "Simon Area.",
	            file: __dirname + "/src/assets/.htpasswd"
	        });
	        
	        app.get('/login', auth.connect(basic), (req, res) => {
	            res.send(`Hello from chat area - ${req.user}!`);
	        });
	        
	    }
	}
};

