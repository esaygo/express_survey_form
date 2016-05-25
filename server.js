
// 1. Have the server render views/index.ejs that has the form for the user to fill out
// 2. The user fills out the form and submits
// 3. The submitted form gets sent to /result
// 4. The server recognizes when someone posts things to /result, grabs information from the POST, and sends the POST data back as it renders views/results.ejs

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/static"));
//console.log(app.use(express.static(__dirname + "/static")));
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// 1. Have the server render views/index.ejs that has the form for the user to fill out
app.get('/', function (req,res) {
  res.render('index', {title: "Fill in form"});
  //console.log(res);
});
// 2. The user fills out the form and submits
// 3. The submitted form gets sent to /result
app.post('/result', function(req, res) {
  var user = [
      {name: req.body.name,
      location: req.body.locations,
      language: req.body.languages,
      comment: req.body.comment}
    ];
  res.render("result", {info: user});

});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
