var path = require('path');

module.exports = {
	build:{
		env:require('./prod.env'),
		index:path.resolve(__dirname, '../src/bundle/index.html'),
		assetsRoot: path.resolve(__dirname, '../'),
		assetsSubDirectory: 'src/bundle',
		assetsPublicPath: '../',
		productionSourceMap: true,

		productionGzip: false,
		productionGzipExtensions: ['js','css'],

		bundleAnalyzerReport: process.env.npm_config_report
	},

	dev:{
		env: require('./dev.env'),
		port: 2020,
		atuoOpenBrower: true,
		assetsSubDirectory: '/',
		assetsPublicPath:'',
		proxyTable:{
			'/react':{
				target:'http://localhost:3000',
				changeOrigin: true,
				pathRewrite:{"^/node":""},
			}
		},
		cssSourceMap: false
	}
}