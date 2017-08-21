var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var env = process.env.NODE_ENV === 'testing'
	? require('../config/test.env')
	: config.build.env

var webpackConfig = merge(baseWebpackConfig, {
	module: {
		rules: utils.styleLoaders({
			sourceMap: config.build.productionSourceMap,
			extract: true
		})
	},
	devtool: config.build.productionSourceMap ? '#source-map' : false,
	output: {
		path: config.build.assetsRoot,
		filename: utils.assetsPath('js/[name].[chunkhash].js'),
		chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': env
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings:  false
			}
		}),

		new ExtractTextPlugin({
			filename: utils.assetsPath('css/[name].[contenthash].css')
		}),

		new HtmlWebpackPlugin({
			filename: process.env.NODE_ENV === 'testing'
				?'rindex.html'
				: config.build.index,
			template:'index.html',
			inject:true,
			minify:{
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},

			chunksSortMode: 'dependency'
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		})
	]
})

if(config.build.productionGzip){
	var CompressionWebpackPlugin = require('compression-webpack-plugin')

	webpackCOnfig.plugins.push(
		new CompressionWebpackPlugin({
			asset:'[path].gz[query]',
			algorithm: 'gzip',
			test: new RegExp(
				'\\.(' + 
				config.build.productionGzipExtensions.join('|') + 
				')$'
			),
			threshold:10240,
			minRate: 0.8
		})
	)
}

if(config.build.bundleAnalyzerReport){
	var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
	webpackCOnfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig