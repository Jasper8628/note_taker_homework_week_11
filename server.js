var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = 3000;
let data=require("./db.js");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));

});
app.get("/api/notes",function(req,res){
    console.log(data);
    res.json(data);
});
app.post("/api/notes",function(req,res){
    let newNote=req.body;
    data.push(newNote);
    res.json(data);
});



app.post("/notes/delete",function(req,res){
    let noteId=req.body;
    for(entry of data){
        if(entry.id=noteId){
            let index=data.indexOf(entry);
            data.splice(index,1);
        }
    }
    res.json(data);

});
app.post("/api/notes/delete-all",function(req,res){
    data=[];
    res.json(data);
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
