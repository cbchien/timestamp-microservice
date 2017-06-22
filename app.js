var express = require('express');
var app = express();

app.use('/', require('./time'));

var port = process.env.PORT || 1337;
app.listen(port, function() {
 console.log('On port ' + port); 
}); 

app.use('/', function(err, req, res) {
  if (err) {
    console.log('There is an error');
    }
})
