var User = require('../model/user');
var express = require('express')
var app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var router = express.Router();
router.post("/login", login);


function login(req, res) {
	User.findOne({
		emailid: req.body.username
	}, function(err, user) {

		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err) {
			res.send(err);
		}
	//	console.log(user);
		if(user==null || user=={}){
			res.json(user).end();
		}
		else if (user.role == 0 && user.password==req.body.password) {
			res.json(user).end();
		} else if(user.role == 1 && user.password==req.body.password) {
			res.json(user).end();
		}
		 // return all todos in JSON format
	});
};


module.exports = router;