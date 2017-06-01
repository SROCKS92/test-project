var express = require('express');
var app = express();

module.exports = function(app) {


app.use('/api/user',require('../controllers/accounts.controller'));
app.use('/api/admin',require('../controllers/admin.controller'));



};