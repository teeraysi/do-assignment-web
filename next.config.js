const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(withLess(withCss({

    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]',
    },

    webpack: config => {
        config.module.rules.push({
            test: /\.(webp|ttf|eot|otf|woff|woff2|gif|png|jpe?g|svg)$/,
            use: [{
                    loader: 'emit-file-loader',
                    options: {
                        name: 'dist/[path][name].[ext]',
                    },
                },
                {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'static/',
                        publicPath: '/_next/static',
                        limit: 10000,
                    },
                },
            ],
        });

        return config;
    },
})));