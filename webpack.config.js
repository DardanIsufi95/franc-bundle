const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'franc.min.js',
    library: {
      name: 'franc',
      type: 'umd',
      export: 'default',
    },
    globalObject: 'this',
  },
  externals: {
    'franc': {
      commonjs: 'franc',
      commonjs2: 'franc',
      amd: 'franc',
      root: 'franc'
    }
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  experiments: {
    outputModule: false,
  }
}; 