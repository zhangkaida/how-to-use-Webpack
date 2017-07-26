var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
	entry:"./js/entry.js",//入口文件
	output:{
		filename:"./bundle.js"//出口文件
	},
	devtool:"source-map",
	devServer:{
    	port:8080,
    	inline:true,
	},
	plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ],
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:"style-loader!css-loader!postcss-loader"
			},
			{
				test:/\.less$/,
				loader:"style-loader!css-loader!postcss-loader!less-loader"
				//postcss 位置不能变
				//postcss 是自动给css添加 浏览器前缀的 如：-webkit-
			},
			{ 
				test: /\.(png|jpg)$/, 
				loader: 'url-loader?limit=8192'
			},
//			{
//				test:/\.(png|jpg|gif|svg)/i,
//				loader:"file-loader",
//				name:"image/[name]-[hash:5].[ext]"
//			},
//			{
//				test:/\.(png|jpg|gif|svg)/i,
//				loader:"url-loader",
//				query:{
//					limit:20000,
//					name:"img/[name]-[hash:5].[ext]"
//				}
//			},
//			{
//				test:/\.(png|jpg|gif|svg)/i,
//				loaders:[
//					'url-loader?limit=20000&name=img/[name]-[hash:5].[ext]',
//					"image-webpack-loader"
//				]
//			}
			{
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,//exclude 不包括 node_modules
                query: {
                    presets: ['es2015']
                }
          }
		]
	}
}


    