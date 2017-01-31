# React notetaker app

![Hello]
(https://media.giphy.com/media/6459ZFRF1Wxna/giphy.gif)

React
  State
  props
  Component LifeCycle
  JSX
  PropTypes
  Events
Webpack
Firebase (Reactfire)
Routing (React-Router)
Network Requests (Axios)

```
npm install react react-dom --save

npm install babel-core babel-loader babel-preset-es2015 babel-preset-react webpack --save-dev
```
we will transpile all the JSX we have a output it in `public/bundle.js`

```
npm install webpack -g
npm install react-router history --save
npm install reactfire firebase --save
```

Webpack config
```js

module.exports = {
  /*
  tell webpack where our root component is
  - React is composed of different components
  - there is always one root component that's going
  to render all of it's children components
  - starting point for processing JSX
  */
  entry: "./app/components/Main.js",
  /* where to puke out the new transpiled file */
  output: {
    filename: "public/bundle.js"
  },
  /*
  we need to tell what to do with code and children components
  - what transformations to do to our code */
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
```
