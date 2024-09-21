const path = require('path');

module.exports = {
  entry: './src/index.js', // main entry point of the application
  output: {
    filename: 'bundle.js', // output filename
    path: path.resolve(__dirname, 'dist') // output directory
  },
  optimization: {
    splitChunks: {
      chunks: 'all' // automatically split code into separate bundles for better optimization
    }
  }
};