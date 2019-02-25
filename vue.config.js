const path = require('path');
// const vuxLoader = require('vux-loader');
let isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    publicPath: '/', //vueConf.baseUrl, // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
        if (isDevelopment) { // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map'
        } else { // 生产环境配置
        }
        //配置vux库
        // vuxLoader.merge(config, {
        //     plugins: ['vux-ui']
        // });
        Object.assign(config, { // 开发生产共同配置
            resolve: {
                extensions: ['.js', '.vue', '.json', '.scss'],
                alias: {
                  'vue$': 'vue/dist/vue.esm.js',
                  '@': path.resolve(__dirname, './src'),
                  '@c': path.resolve(__dirname, './src/components'),
                }
            }
        })
    },
    chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
        if (isDevelopment) {
            // 本地开发配置
        } else {
            // 生产开发配置
            //分析打包后文件
            config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }
        // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
        config.plugin('define').tap(args => {
            // console.log(process.env.BASE_URL)
            args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
            return args
        });

        //【第三方库引用cdn】对于 vue、vue-router、vuex、axios等等这些不经常改动的库、我们让webpack不对他们进行打包，通过cdn引入
        if (process.env.NODE_ENV === 'production') {
            var externals = {
                vue: 'Vue',
                axios: 'axios',
                vuex: 'Vuex',
                'vue-router': 'VueRouter'
            };
            config.externals(externals);
            const cdn = {
                css: [
                    // vant css 注：引用cdn资源 [//]开头可以自动适配 http和https
                    '//cdn.jsdelivr.net/npm/vant@1.5.7/lib/index.css'
                ],
                js: [
                    // vue
                    '//cdn.staticfile.org/vue/2.5.21/vue.min.js',
                    // vue-router
                    '//cdn.staticfile.org/vue-router/3.0.1/vue-router.min.js',
                    // vuex
                    '//cdn.staticfile.org/vuex/3.1.0/vuex.min.js',
                    // axios
                    '//cdn.staticfile.org/axios/0.18.0/axios.min.js',
                    // vant js
                    '//cdn.jsdelivr.net/npm/vant@1.5.7/lib/vant.min.js'
                ]
            };
            config.plugin('html').tap(args => {
                args[0].cdn = cdn
                return args
            });
        }
    },
    css: { // 配置高于chainWebpack中关于css loader的配置
        modules: false, // 是否开启支持‘foo.module.css’样式
        extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
        sourceMap: false, // 是否在构建样式地图，false将提高构建速度
        loaderOptions: { // css预设器配置项
            // css: {
            //     localIdentName: '[name]-[hash]',
            //     camelCase: 'only'
            // },
            // stylus: {}
        }
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    pluginOptions: { // 第三方插件配置
    },
    pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    },
    devServer: {
        open: false,
        // host: '192.168.0.101',
        host: '192.168.8.172',
        port: 9000,
        https: false,
        hotOnly: false,
        disableHostCheck: true,
        proxy: {
            '/ydzt/*': {
                target: 'http://192.168.8.172:16619',
                ws: true,
                changOrigin: true
            }
        },
        before: app => {}
    }
};