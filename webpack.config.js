const HtmlWebpackPlugin  = require("html-webpack-plugin");
const MiniCssExtracPlagin= require("mini-css-extract-plugin");

   module.exports = {
        "entry":"./src/app.js",
        "output":{
            "path": __dirname+"/build",
            "filename":"bundlenp.js"
        },
        devServer:{
                port:8081
        },
        module:{
            rules:[
                {
                    test :  /\.scss$/,
                    loader : [
                       { loader: MiniCssExtracPlagin.loader},
                       { loader: 'css-loader'},
                       { loader : 'sass-loader'}
                    ]
                }
            ]
        },
        plugins:[ 
            new HtmlWebpackPlugin({
                template : './src/index.html'
            }),
            new MiniCssExtracPlagin({
                filename: 'bundle.css'
            })
        ]
    }