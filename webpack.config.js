var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-moudle-source-map',

	entry: path.join(__dirname, 'index.js'),

	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/'
	},

	devServer: {
		inline: true,
		port: 7777
	},

	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel-loader'],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader']
		}, {
			test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
			exclude: /^node_modules$/,
			loader: 'file-loader?name=[name].[ext]'
		}, {
			test: /\.json$/,
			loaders: ['json-loader']
		}]
	}
};