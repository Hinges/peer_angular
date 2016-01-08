/**
 * Created by acoelho on 1/8/16.
 */
var express = require('express');
var path = require('path');
var democrat = require('./democrats');
var republicans = require('./republicans');

var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname,'public/views/index.html'));

});

app.get('/getDem', function(request, response){
    response.send(democrat);

});

app.get('/getRep', function(request, response){
    response.send(republicans);

});


app.listen(3000, function(){
    console.log("We're on port 3000!");
});
