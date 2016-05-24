var express = require('express');
var router = express.Router();
var files=require('../data/files.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('users.jade',{title:'Users',sliders:files.sliders});
});
router.get('/add',function(req,res,next){
	res.render('users-add.jade',{title:'ajout membre',sliders:files.sliders});
});

module.exports = router;
