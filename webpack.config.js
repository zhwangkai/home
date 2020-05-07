const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js', //相对路径
	output: {
		path: path.resolve(__dirname, 'build'), //打包文件的输出路径
		filename: 'bundle.js' //打包文件名
	},
	externals: {
		'noise': 'Noise',
		'shift': 'Shift',
		'swirl': 'Swirl',
		'util': 'Util',
		'pipeline': 'Pipeline',
		'aurora': 'Aurora',
		'canvas': 'Canvas',
		'coalesce': 'Coalesce'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html', //指定模板路径
			filename: 'index.html', //指定文件名
		})
	]
}