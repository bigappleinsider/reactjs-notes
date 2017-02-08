//initialize our express application
var express = require('express')
//instance of express app
var app = express()

var fs = require('fs');
var _ = require('lodash');
var users = [];

fs.readFile('users.json', {encoding: 'utf8'}, function(err, data) {
  if (err) throw err;

  JSON.parse(data).forEach(function(user) {
    user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
    users.push(user)
  })
});

app.set('views', './views')
app.set('view engine', 'jade')

//when you get http get request to the root path, express calls provided function
//2 arguments are request and result
app.get('/', function(req, res){
  //send data back to the browser
  //es.send(JSON.stringify(users, null, 2));
  res.render('index', {users: users})
});

app.get('/yo', function(req, res) {
  res.send('YO!')
})

var server = app.listen(3000, function(){
  console.log("Server running at http://localhost:"+server.address().port)
})
