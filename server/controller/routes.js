var express = require('express');
var path = require('path');

var router = express.Router();

var blogObj = require('../models/object.js');

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '/client/index.html'));
});

router.post('/blog_post', function(req,res){
	res.json(req.body)
});

router.get('/blog_page', function(req,res){
	res.json(blogObj)
});

module.exports = router;
