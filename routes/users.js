var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('users.jade',{var:'test'});
});
router.get('/add',function(req,res,next){
	res.render('users-add.jade',{title:'ajout membre'});
});

module.exports = router;
