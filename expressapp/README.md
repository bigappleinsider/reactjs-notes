# Express JS

```
npm init
npm i -S experess
npm i -D nodemon
npm i -S jade
npm i -S handlebars


```

```js
//initialize our express application
var express = require('express')
//instance of express app
var app = express()

//when you get http get request to the root path, express calls provided function
//2 arguments are request and result
app.get('/', function(req, res){
  //send data back to the browser
  res.send('Hello World');
});

var server = app.listen(3000, function(){
  console.log("Server running at http://localhost:"+server.address().port)
})
```
- Best practice in node ecosystem - create `npm start` command
- To avoid restarting a server when making a change install nodemon package.
It will setup a file-watch. When any of the files change, it would restart the server.
`npm run dev` would call nodemon and start our server
```
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
},
```

Read json file
```js
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
```
Route params
- order we define routes is important
```js
app.get(/big.*/, function(req, res, next) {
  console.log('will match route that starts with big')
  next()
})
app.get('/:username', function (req, res) {
  var username = req.params.username;
})
```
Setting properties on application to render views
```js
app.set('views'. './views')
app.set('view engine', 'jade')
```
