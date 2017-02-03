module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
