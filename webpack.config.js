const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  resolve: {
    alias: {
      "@turf/explode$": path.resolve(__dirname, 'node_modules/@turf/explode/main.js'),
      "tinyqueue": path.resolve(__dirname, 'node_modules/tinyqueue/tinyqueue.js')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'geojson-path-finder.js',
    library: 'PathFinder'
  }
};
