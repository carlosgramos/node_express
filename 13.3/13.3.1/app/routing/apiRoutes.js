//Require data arrays from files

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

//Routing
module.exports = function(app) {

  //Route1
  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  //Route2
  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  //User submits table request. If there is a table available add their info to table array,
  //else add their info to the waiting list
  app.post("/api/tables", function(req, res) {

    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    tableData = [];
    waitListData = [];

    console.log(tableData);
  });

};
