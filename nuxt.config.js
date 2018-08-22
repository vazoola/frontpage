var glob = require('glob');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
    '/resources/article': 'resources/article/*.json',
    '/resources/white-paper': 'resources/white-paper/*.json',
});

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

    generate: {
        routes: dynamicRoutes
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


/**
* Create an array of URLs from a list of files
* @param {*} urlFilepathTable
*/
function getDynamicPaths(urlFilepathTable) {
    return [].concat(
        ...Object.keys(urlFilepathTable).map(url => {
            var filepathGlob = urlFilepathTable[url];
            return glob
            .sync(filepathGlob, { cwd: 'content' })
            .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
        })
    );
}
