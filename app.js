var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function(req,res){
 res.sendFile(__dirname + '/index.html');
 console.log('wut')
}); 


app.listen(3000, function () {
  console.log('app listening on port 3000!')
})