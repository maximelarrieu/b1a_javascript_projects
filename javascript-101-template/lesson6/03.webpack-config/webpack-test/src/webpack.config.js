const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => ({
	devServer: {
	    contentBase: path.join(__dirname, 'dist'),
	    compress: true,
	    port: 9000
	},
  // code that you work on in 'src' folder
	entry: {
		vendor: './src/scripts/vendor.js', // all the not development dependencies from node_modules go here
		scripts: './src/scripts/scripts.js', // all the code shared between different pages goes here
		index: './src/scripts/index.js', // code specific to index page
		'contact-form': './src/scripts/contact-form.js', // code specific to contact-form page
  },
  // compiled code
  output: {
		filename: argv.mode == 'development' ? '[name].js' : '[name].[hash].js', // '[name].[hash].js' for production
		path: path.resolve(__dirname, 'dist'), // folder where all tranformed files will be placed
  },
  module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/, // look for .sass, .scss or .css files
				use: [
				  MiniCssExtractPlugin.loader, // minify css files
				  "css-loader", // translate CSS to JavaScript
				  {
					loader: "postcss-loader", // perform some actions on compiled css
					options: {
					  plugins: [require("autoprefixer")] // add prefixes to css properties if needed for browsers mentioned in 'browserslist' property in package.json
					}
				  },
				  "sass-loader" // convert SASS/SCSS to css
				],
      },
      {
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: ['@babel/preset-env'] // transpile ES6 to ES5
				  }
				}
      },
			  // convert an image lighter than 10.000 bytes to Base64 URL
      // otherwise reduce its size
      {
        test: /\.(png|jpe?g)/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./assets/images/[name].[ext]",
              limit: 10000 // 10k bytes
            }
          },
          {
            loader: "img-loader"
          }
        ]
      },
		  {
			test: /\.html$/,
			use: [{
			  loader: "html-loader",
			  options: { minimize: true }
			}]
		  },
		]
  },
  plugins: [
  // create an instance of HtmlWebPackPlugin for every page of a multipage website
  new HtmlWebPackPlugin({
    template: "src/index.html", // take html from this path
    filename: "./index.html", // name it 'index.html' and insert to the root of output folder
    chunks: ['vendor', 'scripts', 'index'] // insert dymamically vendor.js, scripts.js and index.js to index.html
  }),
  new HtmlWebPackPlugin({
    template: "src/contact-form.html",
    filename: "./contact-form.html",
    chunks: ['vendor', 'scripts', 'contact-form']
  }),
  new MiniCssExtractPlugin({
    filename: argv.mode == 'development' ? '[name].css' : '[name].[hash].css', // '[name].[hash].css for production - hash this file, so users always will get the newest version of this file and not that one from cache
    })
  ]
});
