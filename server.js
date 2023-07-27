var express = require("express");
const cors = require('cors');
const { json } = require("body-parser");
var app = express();

app.use(cors({
   origin: '*'
}));

app.get("/get", function (req, res) {
  console.log("GET request");
  const validResponse = {
    responseMessage: "GET works!",
  };
  const errorResponse = {
    responseCode: 401,
    responseMessage: "UNAUTHORIZED",
  };

  let isValid = true;
  if (req.headers["user-id"] != "ifabula") isValid = false;
  if (req.headers["scope"] != "user") isValid = false;

  if (isValid) res.send(validResponse);
  else res.send(errorResponse);
});

app.post("/post", function (req, res) {
  console.log("{response: POST request}");
  const validResponse = {
    validResponse: "POST works!",
  };
  res.send(validResponse);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
