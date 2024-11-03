const { VueLoaderPlugin } = require('vue-loader'); // 引入 VueLoaderPlugin
const path = require('path'); // 引入路径模块
​
module.exports = {
    mode: 'development', // 设置模式为开发模式，可以设置为 'production' 以+++++++++
    //启用压缩等优化
    entry: './src/main.js', // 设置入口文件为 './src/main.js'
    output: {
        // 设置输出目录为 path.resolve(__dirname, //'dist')
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' // 设置输出文件为 'bundle.js'
    },
    // 配置模块加载规则
    module: {
        rules: [{
                // 匹配 .vue 文件，使用 vue-loader
                test: /\.vue$/, // 文件后缀名的匹配规则
                loader: 'vue-loader' // 定义了不同模块对应的 loader
            },
            {
                // 匹配 .js 文件，使用 babel-loader，排除 node_modules
                test: /\.js$/, // 文件后缀名的匹配规则
                loader: 'babel-loader', // 定义了不同模块对应的 loader
                exclude: /node_modules/ // 排除
            },
            {
                // 匹配 .png 文件，使用 file-loader
                test: /\.png$/, // 文件后缀名的匹配规则
                use: 'file-loader' //定义了不同模块对应的 loader
            },
            {
                // 匹配 .css 文件，使用 vue-style-loader 和 css-loader
                test: /\.css$/, // 文件后缀名的匹配规则
                // 定义了不同模块对应的 loader
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    // 配置插件
    plugins: [
        new VueLoaderPlugin() // 创建 VueLoaderPlugin 实例
    ],
    // “resolve” 是 webpack 配置中的一个核心选项，用于配置模块解析的规则和设置模块解析的行为。它提供了一//系列的属性，包括 “alias”、“extensions” 等，用于指定模块的解析规则。
    resolve: { //配置模块解析的规则和设置模块解析的行为
        alias: { //表示别名配置的属性
            'vue$': 'vue/dist/vue.esm.js' //为' vue别名设置解析路径为 'vue/dist/vue.esm.js'
        },
        //表示支持扩展名的属性
        extensions: ['*', '.js', '.vue', '.json']
    },
};