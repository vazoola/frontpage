var glob = require('glob');
var path = require('path');

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Vazoola',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'influencer marketing done right' },
            { hid: 'keywords', name:'keywords', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    css: [
        '@/assets/main.sass',
    ],


    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },

    /////https://nuxtjs.org/api/configuration-generate/#routes
    generate: {
        routes: []
    },

    /*
    ** Build configuration
    */
    build: {
        vendor: ['showdown', 'moment'],
            /*
            ** Run ESLint on save
            */
            extend (config, { isDev, isClient }) {
                if (isDev && isClient) {
                    config.module.rules.push({
                      enforce: 'pre',
                      test: /\.(js|vue)$/,
                      loader: 'eslint-loader',
                      exclude: /(node_modules)/
                    })
                }
            }
        }
    }
