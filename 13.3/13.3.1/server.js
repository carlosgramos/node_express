//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Express server
var app = express();

//Initiate port
var PORT = process.env.PORT || 8080;

//Give express app parsing functionality. Interprets incoming data.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Router
require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

//Listener
app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
