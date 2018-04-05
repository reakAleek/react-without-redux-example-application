var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const uglifyjs = new UglifyJsPlugin({
  sourceMap: false,
  uglifyOptions: {
    output: { comments: false }
  }
});

const extractText = new ExtractTextPlugin('style.css');

module.exports = {
  plugins: [ extractText, uglifyjs ],
  entry: {
    app: [
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js',
  },
  //devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
                loader: 'css-loader',
                options: {
                    // If you are having trouble with urls not resolving add this setting.
                    // See https://github.com/webpack-contrib/css-loader#url
                    url: false,
                    minimize: false,
                    sourceMap: false
                }
            }, 
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: false
                }
            }
          ]
        })
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_module/,
        query: {
          presets: ['react', 'es2015'],
          plugins: [
            ['transform-object-rest-spread', { useBuiltIns: true }],
            ['transform-class-properties', { 'spec': true }]
          ]
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test:    /\.html$/,
        exclude: /node_modules/,
        loader:  'file-loader?name=[name].[ext]',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    inline: true,
    stats: { colors: true },
    port: 3000
  },
};