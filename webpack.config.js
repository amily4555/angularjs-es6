"use strict";
var path = require('path');

const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');


//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const NODE_ENV = process.env.NODE_ENV;

console.log('oOooooOoo::::::', process.env.NODE_ENV);

const ENV_DEV = NODE_ENV === 'dev';
const ENV_PROD = NODE_ENV === 'prod';
const ENV_TEST = NODE_ENV === 'test';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3004;

const config = {
    cache: true,
    // debug: true,
    devtool: 'cheap-module-source-map',
    plugins: []
};

config.resolve = {
    extensions: ['.html', '.js'],
    modules: [
        path.resolve(__dirname, 'node_modules')
    ],

    //查找module的话从这里开始查找
    // root: path.resolve('.'),

    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
        'jquery': require.resolve('jquery'),
        'mu': require.resolve('mzmu')
    }
};

config.entry = {
    ng: [
        'angular',
        'angular-mocks',
        'angular-resource',
        'angular-translate',
        'angular-ui-router',
        'angular-loading-bar',

        'angular-loading-bar/build/loading-bar.css'
    ],

    vendor: [
        'tether',
        'jquery',
        'bootstrap',
        'mzmu',
        'response-data-delayering',
        'bootstrap/dist/css/bootstrap.css'
    ],

    main: [
        path.resolve(__dirname, 'app/app.module.js')
    ]
};

config.module = {
    rules: [
        {
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'app/'),
                path.resolve(__dirname, 'node_modules/response-data-delayering')
            ],
            use: ['ng-annotate-loader?map=false', 'babel-loader']
            // presets: ['es2015']
        },
        {
            test: /\.html$/,
            include: path.resolve(__dirname, 'app/'),
            use: 'raw-loader'
        },

        /**
         * 要使用css, post, sass 必须安装下列包
         * npm install css-loader --save-dev
         * npm install postcss postcss-loader --save-dev
         * npm install node-sass sass sass-loader --save-dev
         */
        {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
                publicPath: '../'
            })
        },
        {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            use: 'url-loader?limit=4098&name=fonts/[name].[hash].[ext]'
        },
        {
            test: /\.(png|jpg|jpge|gif)$/,
            use: 'url-loader?limit=4098&name=images/[name].[hash].[ext]'
        }
    ]
};

config.output = {
    filename: '[name].js',
    path: path.resolve('./app'),
    publicPath: '/'
};

// config.postcss = [
//     autoprefixer({browsers: ['last 3 versions']})
// ];
//
// config.sassLoader = {
//     outputStyle: 'compressed',
//     precision: 10,
//     sourceComments: false
// };

config.plugins.push(
    new webpack.LoaderOptionsPlugin({
        debug: true,
        options: {
            // postcss: autoprefixer({browsers: ['last 3 versions']}),
            sassLoader: {
                outputStyle: 'compressed',
                precision: 10,
                sourceComments: false
            }
        }
    }),

    new webpack.optimize.CommonsChunkPlugin({
        // name: ['vendor', 'polyfills', 'ng'],
        name: ['vendor', 'ng'],
        minChunks: Infinity
    }),

    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',

        // bootstrap v4 before install tether
        'Tether': 'tether',

        // 注入环境变量
        'GLOBAL': path.resolve(__dirname, './app/env/' + NODE_ENV + '-global.js')
    }),

    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),

    new CopyWebpackPlugin([
        {from: './app/assets', to: 'assets'},
        {from: './app/store', to: 'store'}
    ]),

    new ExtractTextPlugin({
        filename: './styles/[name].[contenthash].css',
        allChunks: true,
        disable: false
    }),

    new HtmlWebpackPlugin({
        chunkSortMode: 'dependency',
        filename: 'index.html',
        hash: false,
        inject: 'body',
        template: './app/index.html'
    })
);

if(ENV_DEV) {
    config.entry.main.unshift(`webpack-dev-server/client?http://${HOST}:${PORT}`);

    config.devServer = {
        contentBase: './app',
        historyApiFallback: true,
        host: HOST,
        outputPath: config.output.path,
        port: PORT,
        publicPath: config.output.publicPath,
        stats: {
            cached: true,
            cachedAssets: true,
            chunks: true,
            chunkModules: false,
            colors: true,
            hash: false,
            reasons: true,
            timings: true,
            version: false
        }
    };
}

if(ENV_PROD) {
    config.output = {
        filename: '[name].[chunkhash].js',
        path: path.resolve('./dist'),
        publicPath: ''
    };

    config.plugins.push(
        new CleanWebpackPlugin(['dist'], {
            verbose: true
        }),
        new WebpackMd5Hash(),

        new HtmlWebpackPlugin({
            chunkSortMode: 'dependency',
            filename: 'index.html',
            hash: false,
            inject: 'body',
            template: './app/index.html',
            //压缩HTML文件
            minify: {
                //移除HTML中的注释
                removeComments: true,
                //删除空白符与换行符
                collapseWhitespace: true
            }

        }),
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            compress: {
                dead_code: true, // eslint-disable-line camelcase
                screw_ie8: true, // eslint-disable-line camelcase
                unused: true,
                warnings: false
            }
        })
    );
}

module.exports = config;