const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [ 'ts-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader:[ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/src'),
    libraryTarget: 'umd',
    library: 'MediaNetworkPlayer',
    umdNamedDefine: true
  }
};