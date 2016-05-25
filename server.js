
// 1. Have the server render views/index.ejs that has the form for the user to fill out
// 2. The user fills out the form and submits
// 3. The submitted form gets sent to /result
// 4. The server recognizes when someone posts things to /result, grabs information from the POST, and sends the POST data back as it renders views/results.ejs

var express = require('express');
var path = require('path'); //!!!
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static"))); //!!!
// This sets the location where express will look for the ejs views
app.set('views',path.join(__dirname, '/views'));
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
//app.use(bodyParser.json());

var route = require("./routes/index.js")(app);

// 1. Have the server render views/index.ejs that has the form for the user to fill out
// This will be in the routes folder - index.js

// 2. The user fills out the form and submits
// 3. The submitted form gets sent to /result


app.listen(8000, function() {
  console.log("listening on port 8000");
});
