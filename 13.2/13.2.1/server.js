//require http module
var http = require("http");

//Define the two ports we are listening on
var PORTONE = 7000;
var PORTTWO = 7500;

//Define two different functions to handle requests, one for each server
function handleRequestOne(request, response) {
  response.end("You're a JS matermind!");
}

function handleRequestTwo(request, response) {
  response.end("You smell like shit!");
}

//Create our servers
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

//Starting our servers
serverOne.listen(PORTONE, function(){
  //Callback triggered when server is successfully listening
  console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function(){
  //Callback triggered when server is successfully listening
  console.log("Server listening on: http://localhost:%s", PORTTWO);
});
