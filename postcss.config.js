module.exports = {
    parser: 'postcss-less',
    plugins: loader => [
        require('postcss-import')({
            root: loader.resourePath,
        }),
        require('autoprefixer')(),//css浏览器兼容
        require('cssnano')(),//压缩css
    ]
}