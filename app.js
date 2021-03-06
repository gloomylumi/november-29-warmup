'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.send('Hello There!');
});

app.listen("3000", function(){
  console.log("Listening on port 3000");
});

app.get('/api', function(req,res,next){
  res.send('You found /api!');
});
