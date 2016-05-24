var express = require('express');
var router = express.Router();
var files=require('../data/files.js');
var event=require('../data/event.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Developer Community',sliders:files.sliders, posts:event.posts});
});

module.exports = router;
