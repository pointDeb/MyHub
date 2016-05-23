var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('users.jade',{title:'Users',arbre:'Users'});
});
router.get('/add',function(req,res,next){
	res.render('users-add.jade',{title:'ajout membre',arbre:'Users>add'});
});

module.exports = router;
