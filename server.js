var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3000;
let data = require("./db.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));

});
app.get("/api/notes", function (req, res) {
    res.json(data);
});
app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    console.log(newNote);
    let index=data.findIndex(entry=>entry.id==newNote.id);
    if (index==-1) {
        data.push(newNote);
    }
    else{
        data[index].content=newNote.content;
    }
    res.json(data);
});



app.post("/notes/delete", function (req, res) {
    let noteId = req.body;
    console.log(req.body);
    for (entry of data) {
        if (entry.id ==noteId.id) {
            let index = data.indexOf(entry);
            data.splice(index, 1);
            console.log(index);
            console.log(data);
        }
    }
    res.json(data);

});
app.post("/api/notes/delete-all", function (req, res) {
    data = [];
    res.json(data);
});


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
