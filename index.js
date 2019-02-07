var express = require('express');
var bodyParser = require('body-parser');

//call express
var app = express();

// call body parser
app.use(bodyParser.urlencoded({extend: false}));

//call static

//call ejs
app.set("views", __dirname + "/apps/views");
app.set("view engine" , 'ejs');

app.get("/", function( req , res){
  res.render('signup.ejs');
});

app.post("/", function( req , res) {
  res.render("ok.ejs", {data : req.body});
})

app.listen (process.env. PORT || 3000, function(){
  console.log('port 3000');
})
