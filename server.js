var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = 3000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req,res){

});

app.get("/notes",function(req,res){

});

app.get("api/notes",function(req,res){

});

app.post("api/notes",function(req,res){

});