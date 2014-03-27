var express = require('express');
var request = require('request');
var app = express();

app.get('/test', function(req, res){
  request.get('https://api.trafiklab.se/sl/realtid2/GetAllDepartureTypes.xml/1070/20?key=61920ebe55c8c815440ecbaf1c6b515e').pipe(res);
 });

app.listen(3000);
console.log('Listening on port 3000');

