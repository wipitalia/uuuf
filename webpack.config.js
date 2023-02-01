const path = require('path');
const { webpack } = require('webpack');

const ESLintPlugin = require('eslint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

const modeOnly = (argv, mode) => (valfn = () => true) => {
  return argv.mode === mode ? valfn() : false;
}

module.exports = (env, argv) => {
  const devOnly = modeOnly(argv, 'development');
  const prodOnly = modeOnly(argv, 'production');

  return {
    // devtool: 'source-map',
    devtool: 'inline-source-map',

    entry: { main: path.resolve(SRC_PATH, 'index.ts'), },

    output: {
      path: DIST_PATH,
      filename: '[name].js',
      library: {
        name: 'uuuf',
        type: 'umd',
      },
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

    plugins: [
      new ESLintPlugin({ fix: true }),
      prodOnly(() => new BundleAnalyzerPlugin()),
    ].filter(Boolean),

    module: {
      rules: [
        // Typescript loader
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /(node_modules)/,
        },
        // // Babel-loader
        // {
        //   test: /\.m?js$/,
        //   exclude: /(node_modules)/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['@babel/preset-env'],
        //       plugins: ['@babel/plugin-syntax-dynamic-import'],
        //     },
        //   },
        // },
      ],
    },

    resolve: {
      extensions: ['.js', '.ts'],
      modules: [SRC_PATH, NODE_MODULES_PATH],
    },
  };
}
