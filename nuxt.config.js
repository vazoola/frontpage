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

    /* Customize the progress bar color */
    loading: { color: '#3B8070' },

    generate: {
        routes: function() {
            var Prismic = require("prismic-javascript");
            return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2")
                .then(function(api) {
                    return api.query([
                            Prismic.Predicates.any('document.type', ['article', 'white-paper'])
                        ]).then(function(response) {
                            var routes = response.results.map((r) => {
                                    return {
                                        route: '/resources/'+r.type+'/'+r.uid,
                                        payload: r
                                    }
                            })

                            routes.push( { route: '/resources/article' })
                            routes.push( { route: '/resources/white-paper' })

                            return routes
                    })

                })
        }
    },

    router: {
        linkActiveClass: 'is-active',
        extendRoutes (routes) {
            routes.unshift(
                {
        			path: "/resources/:type",
        			component: 'pages/resources/index.vue',
        			name: "resources-type",
        		}
            );
        },
    },

    /*
    ** Build configuration
    */
    build: {
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
        },
    }
