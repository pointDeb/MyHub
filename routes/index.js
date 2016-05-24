var express = require('express');
var router = express.Router();
var sliders= [
	{src:'/images/cover.jpg',title:'Bmx',desc:'Un gas bien fute sur les bmx'},
	{src:'/images/cover.jpg',title:'Bmx',desc:'Un gas bien fute sur les bmx'},
	{src:'/images/cover.jpg',title:'Bmx',desc:'Un gas bien fute sur les bmx'}
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',sliders});
});

module.exports = router;
