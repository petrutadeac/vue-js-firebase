
var express=require('express')
var app = express();

var firebase= require('firebase')
app.get('/book', function (req, res) {
    res.format({
        json: function(){
          res.send({ message: 'hey' });
        }
      });
  })

app.listen (8000, function(){
    console.log ("express here");
})