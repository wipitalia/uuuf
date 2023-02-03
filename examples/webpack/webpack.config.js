const path = require('path');
const { webpack } = require('webpack');

const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = () => {
  return {
    devtool: 'source-map',

    entry: { main: path.resolve(SRC_PATH, 'index.js'), },

    output: {
      path: DIST_PATH,
      filename: '[name].js',
      clean: true,
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            priority: -20,
            reuseExistingChunk: true,
            minChunks: 5,
            enforce: true,
          },
        },
      },
    },

    module: {
      rules: [
        // Babel-loader
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
        },
      ],
    },

    resolve: {
      extensions: ['.js'],
      modules: [SRC_PATH, NODE_MODULES_PATH],
      alias: {
        '@': SRC_PATH
      }
    },
  };
}
