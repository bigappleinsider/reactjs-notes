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
