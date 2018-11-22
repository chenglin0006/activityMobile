const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cwd = process.cwd();

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: {
		app: process.env.NODE_ENV === 'production' ? ['babel-polyfill', './src/index.js'] : ['babel-polyfill', 'webpack-hot-middleware/client?noInfo=true&reload=true', './src/index.js']
	},
	output: {
		path: path.join(cwd, 'public'),
		filename: process.env.NODE_ENV === 'production' ? 'scripts/[name].[hash].js' : 'scripts/app.js'
	},
	resolve: {
		extensions: ['.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ["env", "react", "stage-2"],
							plugins: [require('babel-plugin-transform-object-rest-spread')]
						}
					}
				]
			},
			{
		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        query: {
		          limit: 10000,
		          name: 'img/[name].[hash:16].[ext]'
		        }
		    }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '百安居',
			inject: false,
			template: 'index.template.html'
		}),
		new webpack.ProvidePlugin({
    		'fetch': 'exports-loader?self.fetch!whatwg-fetch'
    	})
	],
	devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-source-map'
}