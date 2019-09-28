const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');

const production = process.env.NODE_ENV === 'production';
const browsersListBrowsers = ['>0.5% in US', 'not Android >0'];

const hasCss = true;

const commonCssLoaders = [
  { loader: MiniCssExtractPlugin.loader },
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2, // Indicates both post-css and sass-loaders are used before this
      sourceMap: !production,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: [autoprefixer({ browsers: browsersListBrowsers })],
      sourceMap: !production,
      map: { inline: true },
    },
  },
];

/**
 * Building for browsers requires a slightly different babelrc
 * compared to for node.js
 */
const buildClientBabelOpts = {
  babelrc: false,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { browsers: browsersListBrowsers },
        modules: false, // Required for tree shaking
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};

const webpackConfig = {
  mode: production ? 'production' : 'development',
  entry: {
    main: path.join(__dirname, 'client/js/InitWeb.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist/app/server/public/js'),
  },
  devtool: production ? false : 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx'],
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: Object.assign({}, buildClientBabelOpts, {
              cacheDirectory: true,
            }),
          },
        ],
      },
    ].concat(
      hasCss
        ? [
            {
              test: /\.s?css$/,
              use: commonCssLoaders.concat([
                {
                  loader: 'sass-loader',
                  options: { sourceMap: !production },
                },
              ]),
            },
            {
              test: /\.less$/,
              use: commonCssLoaders.concat([
                {
                  loader: 'less-loader',
                  options: {
                    javascriptEnabled: true,
                    sourceMap: !production,
                  },
                },
              ]),
            },
          ]
        : [],
    ),
  },
  plugins: hasCss
    ? [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[name]-[id].css',
          sourceMap: !production,
        }),
      ]
    : [],
  optimization: production
    ? {
        minimizer: [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
          }),
        ].concat(hasCss ? new OptimizeCSSAssetsPlugin({}) : []),
      }
    : undefined,
};

if (!production) {
  webpackConfig.plugins.push(
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: ['/vendor/'],
    }),
  );
}

module.exports = webpackConfig;
