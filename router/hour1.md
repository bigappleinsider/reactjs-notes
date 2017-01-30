# React router hour 1

```
npm install webpack webpack-dev-server babel-core b
abel-loader babel-preset-es2015 babel-preset-react --save-dev

npm install react react-dom react-router --save

touch .babelrc webpack.config.js

```
## Modules
```js
{
  "name": "app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-router": "^3.0.2"
  },
  "devDependencies": {
    "babel-core": "^6.22.1",
    "babel-loader": "^6.2.10",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.22.0",
    "webpack": "^1.14.0",
    "webpack-dev-server": "^1.16.2"
  }
}

```
## Webpack config
```js
module.exports = {
  entry:'./src/main.js',
  output: {
    path: './src',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
```
## Babel config
```js
{
  "presets": [
    "es2015",
    "react"
  ]
}
```
## Basic Router
```js
import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const Home = () => <div><h1>Home</h1><Links /></div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;

const Links = () =>
  <nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
  </nav>;

class App extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Router>
    );
  }
}
export default App;
```
- `browserHistory` - no hash in the url, server should always return index.html, single page application will take care of the routing
- `<IndexRoute>` - render a default component when no other route preset
- access query string params `{props.location.query.message}`
- query string in Link: `<Link to={{pathname: '/', query: {message: 'Yo'}}}>Yo</Link>`
- redirect `<Redirect from='/about' to='/about-us'></Redirect>`

## Route leave hook
```js
class Home extends React.Component {
  componentWillMount(){
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    )
  }
  routerWillLeave( nextLocation ){
    return `leaving home form ${nextLocation.pathname}`
  }
}
Home.contextTypes = {router: React.PropTypes.object.isRequired }
```
