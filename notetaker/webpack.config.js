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
