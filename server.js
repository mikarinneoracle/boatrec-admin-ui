var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var port = 3000; //process.env.PORT || process.env.npm_package_config_port;
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

var data = [];

app.listen(port, function() {
  	console.log('server listening on port ' + port);
});

app.post('/uploadRecording', function(req, res) {
    data.push(req.body.recordedData);
    console.log(req.body.recordedData);
    var response = {};
    res.send(JSON.stringify(response));
});

app.get('/data', function(req, res) {
    console.log(data);
    var response = {};
    response.data = data;
    res.send(JSON.stringify(response));
});
