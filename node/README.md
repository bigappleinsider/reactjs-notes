# Node JS

V8 JavaScript runtime engine
- open source, written in C++s
- takes js and compiles to much faster machine code
- node is super fast


node
- file system manipulation
- db access
- server
- global - stores methods, similar to window

Browser
- has the features to manipulate DOM
- window

`process.exit(0);`

## Why is Node so good for creating backend apps?
- event-driven, non-blocking IO model: changing files, DB request, HTTP request
- npm - largest ecosystem

# Built-in modules
[http://nodejs.org/api](http://nodejs.org/api)
```js
const fs = require('fs');
const os = require('os');

var user = os.userInfo();
/* { uid: 123, gid: 34, username: 'Jim', homedir: '/Users/Jim', shell: '/bin/bash' } */

//original
fs.appendFile('greetings.txt', 'Hello ' + user.username + '!');
//template string
fs.appendFile('greetings.txt', `Hello ${user.username}!`);
//callback for the error
fs.appendFile('greetings.txt', 'Hello world!', function(err) {
  if (err) {
    console.log('Unable write to a file');
  }
});
//Synchronous method
fs.appendFileSync('greetings.txt', 'Hello there');
```

## modules
- exports - object on the module property - everything on this object gets exported

```js
module.exports.age = 21;

const info = require('./info');
console.log(info.age);
```
## export 2 functions
```js
//ES6
module.exports.addNumbers = (a, b) => (a+b);
module.exports.multiplyNumbers = (a, b) => (a*b);

module.exports.addNote = function() {

}
module.exports.addNote = () => {
  return 'New Note'
}

const notes = require('./notes')
console.log(notes.addNote());
```
## Automatically restart the app
- [nodemon](https://www.npmjs.com/package/nodemon)
- Install globally `npm i -g nodemon`
- Start with `nodemon app.js`

### Retrieve command line args
- array of args `process.argv`
- yargs modules

### JSON
- JSON to string `JSON.sringify(obj)`
- string to JSON `JSON.parse(str)`

## Debugging
- consolelogs are time intensive - adding/removing
- `node debug test.js` - code would pause on the first line
quit - quit the debugger
n - next - goes statement by statement
c - skip to the last line
repl - read evaluate print loop - brings you to node console, where u have access to the current program as it is
- `debugger;` in code together with debug command line option, `c` to continue
GUI debugging - not possible with lates version of node and chrome

## Requiring arguments with yargs
```js
const argv = yargs
  .command('add', 'Add a new note', {
    title: {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
    }
  })

  .help()
  .argv;

```

## Arrow functions
- arrow functions do not bind to this keyword
- arguments not available in arrow functions
```js
const square = x => x*x;
//Methods on Objects
const user = {
  name: 'Jim',
  sayHi () {
    console.log(arguments);//not actual array
    console.log(`Hi, I'm ${this.name}`);
  }
  sayHiNotWorking: () => {
    //doesn't work
    //arguments would not here
    console.log(`Hi, I'm ${this.name}`);    
  }
}
```
## Async - your program continues to run while it waits for data
- Illustrate async principles
- Call Stack - keeps track of program execution inside of a V8
- Node API
- Callback queue - will run once call stack is empty
```js
console.log('Start');
setTimeout(() => {
  console.log('hello there');
}, 200);

setTimeout(() => {
  console.log('Zero delay');
}, 0);

console.log('Finish');
```

## Making HTTP requests
```js
const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?key=YOUR_KEY&address=1271 6th Ave, New York',
  json: true
}, (error, response, body) => {
  console.log(body);
});
```
### Pretty print Objects
```js
JSON.stringify(body, undefined, 2)
```
### Encoding and Decoding URL params
```js
encodeURIComponent("Main street");
decodeURIComponent("Main%20street");
```
