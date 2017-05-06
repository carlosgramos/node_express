//require package
var http = require("http");

//declare listening port
var PORT = 8080;

//handle req/ response
function handleRequest(request, response) {
  //reply to the end user
  response.end("It works!! Path Hit: " + request.url);
}

//Use http package to create the server
//Pass the handleRequest function as a parameter
var server = http.createServer(handleRequest);

//Call the server object's .listen method, pass it a PORT and a function
server.listen(PORT, function(){
  //The below statement is triggered server side when a user visits the PORT url
  console.log("Server listening on: http://localhost:%s", PORT);
});
