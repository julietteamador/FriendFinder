//Require the install npm applications
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Friendsfinder data 

var friends = [{
    name: "Mitchell", 
    age: "33", 
    scores: [
        "always", 
        "never", 
        "sometimes"
    ]
}, {
    name: "Kelly", 
    age: 29, 
    scores: [
        "always", 
        "never", 
        "sometimes"
    ]
}, {
    name: "Jose", 
    age: 21, 
    scores: [
        "always", 
        "never", 
        "sometimes"
    ]
},{
    name: "Emily", 
    age: 31, 
    scores: [
        "always", 
        "never", 
        "sometimes"
    ]
}];

//routes 

var survey = [];

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, "./public/home.html"));
});


app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});

app.get("/:friends", function(res, req){
    var chosen = req.params.friends;

    console.log(friends)

    res.end();
})




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  