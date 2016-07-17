module.exports = {
  entry: {
    client: ['babel-polyfill', './renderer/index.js']
  },
  output: {
    path: `${__dirname}/application`,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
}
