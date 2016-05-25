module.exports = function(app){
  
  app.get('/', function (req,res) {
    res.render('index', {title: "Fill in form"});
    //console.log(res);
  });

  app.post('/result', function(req, res) {
    var user = {
        name: req.body.name,
        location: req.body.locations,
        language: req.body.languages,
        comment: req.body.comment
      }

    res.render("result", {info: user});

  });
}
