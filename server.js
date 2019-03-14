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
        "4",
        "2",
        "2",
        "1"
    ]
}, {
    name: "Kelly", 
    age: 29, 
    scores: [
        1, 
        3, 
        4, 
        5
    ]
}, {
    name: "Jose", 
    age: 21, 
    scores: [
        4, 
        3, 
        2, 
        1
    ]
},{
    name: "Emily", 
    age: 31, 
    scores: [
        3, 
        2, 
        5, 
        1
    ]
}];

//routes 

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, "home.html"));
});


app.get("/:friends", function(res, req){
    var chosen = req.params.friends;

    console.log(friends)

    res.end();
})




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  