const path = require('path');
const autoprefixer = require('autoprefixer');

const babelOptions = {
  presets: [],
};

module.exports = {
  entry: {
    admin: './src/components/admin/index.jsx',
    public: './src/components/public/index.jsx',
    user: './src/components/user/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './dist/[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          minSize: 0,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', 'json'],
  },
  devServer: {
    host: 'localhost',
    port: 3210,
    disableHostCheck: true,
    historyApiFallback: { // https://github.com/ReactTraining/react-router/issues/3409
      disableDotRule: true,
    },

  },
};
