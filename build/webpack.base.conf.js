var path = require('path');
var utils = require('./utils')
var config = require('../config')
var reactLoaderConfig = require('./react-loader.conf')

function resolve(dir){
	return path.join(__dirname,'..',dir)
}

module.exports = {
	entry:{
		app:'./index.jsx'
	},
	output:{
		filename:'[name].js',
		path:config.build.assetsRoot,
		publicPath:process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve:{
		extensions:['.js','.json','.html'],
		modules:[
			resolve('src'),
			resolve('node_modules')
		],
		alias:{
			'src':resolve('src'),
			'react$':'react/dist/react.min.js',
			'react-dom$':'react-dom/dist/react-dom.min.js',
			'jquery$':'jquery/dist/jquery',
			'react-router$':'react-router/umd/ReactRouter.min.js',
			'umeditor':'src/recources/lib/umeditor/umeditor.js'
		}
	},
	module:{
	  rules:[
		{
			test:/\.js$/,
			loader:'babel-loader',
			exclude:[resolve('node_modules')],
		},
		{
			test:/\.js|jsx$/,
			loader:'babel-loader',
			exclude:[resolve('node_modules')],

		},
		{
			test:/\.html$/,
			loader:'html-loader'
		},
		{
	        	test: /\.(png|jpe?g|gif)(\?.*)?$/,
	        	loader: [
	                    'url-loader?limit=10000&'+utils.assetsPath('img/[name].[hash:7].[ext]'),
	                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
	                    'image-webpack-loader?{pngquant:{quality: 65, speed: 4}, mozjpeg: {quality: 65},svgo:{quality:65},gifsicle:{quality:65}}'
	                    ]
	      },
	      {
		      test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
		      loader: 'url-loader',
		      include:[resolve('node_modules')],
		      query: {
		          	limit: process.env.NODE_ENV === 'production'?10000:'',
		          	name: process.env.NODE_ENV === 'production'?utils.assetsPath('fonts/[name].[hash:7].[ext]'):''
		      }
	      },
		]
	}
}