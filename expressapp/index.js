//initialize our express application
var express = require('express')
//instance of express app
var app = express()

var engines = require('consolidate')
app.engine('hbs', engines.handlebars)

var bodyParser = require('body-parser')

app.set('views', './views')
//app.set('view engine', 'jade')
app.set('view engine', 'hbs')
//serve static images - propfilepics prefix
app.use('/profilepics', express.static('images'))
app.use(bodyParser.urlencoded({ extended: true }))


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

/*
app.put('/:username', function (req, res) {
  var username = req.params.username
  var user = getUser(username)
  user.location = req.body
  saveUser(username, user)
  res.end()
})
app.delete('/:username', function(req, res) {
  var fp = getUserFilePath(req.params.username)
  fp.unlinkSync(fp)
  res.sendStatus(200)
})
app.get('*.json', function (req, res) {
  res.download('./users/'+req.path, 'virus.exe')
})
If you are building API
app.get('/data/:username', function(req, res) {
  var username = req.params.username
  var user = getUser(username)
  res.json(user)
})

call for all methods that match the route
app.all(':username', function (req, res, next) {
  console.log(req.method, 'for', req.params.username)
  next()
})

*/

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
