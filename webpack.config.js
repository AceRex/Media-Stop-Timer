const path = require('path');

module.exports = {
  entry: './src/index.js', // adjust this based on your project structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // adjust this based on your project structure
  },
  // ... other webpack configurations

  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
    },
  },
};
