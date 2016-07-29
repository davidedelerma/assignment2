var express = require('express');
var app = express();
//var mongodb = require('mongodb');
//var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
//var ObjectID = mongodb.ObjectID;
var path = require('path');

app.use(bodyParser.json());
app.use(express.static('client/build'));
//var url = 'mongodb://localhost:27017/bucketList';
 
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
    })


app.listen('3000', function(){
  console.log("run run running on 3000");
})