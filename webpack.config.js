module.exports = {
	entry: './src/app.js',
	output: {
		path: './dist',
		filename:'app.bundle.js'
	},
	module: {
		loaders: [{
			exclude: ['/node_modules/', '/contract/'],
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	}
}