/* eslint-disable */
export default {
    entry: {
        weexEntry: 'index.vue',
        vueEntry: 'entry.js',
        rootDir: 'src/pages', // 构建根目录，存在默认值为src/pages
        lib: ['vue']
    },
    // 相对于outputPath的输出目录
    assetsOutputPath: {
        // root单独抽离，防止干扰publicPath
        root: 'res',
        js: 'js/bd',
        lib: 'js/lib',
        css: 'css',
        html: 'pages'
    },
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    }
}