const prismicRoutes = function() {
    var Prismic = require("prismic-javascript");
    return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2")
        .then(function(api) {
            return api.query([
                    Prismic.Predicates.any('document.type', ['article', 'white-paper', 'jobs'])
                ]).then(function(response) {
                    var routes = response.results.map((r) => {
                            return {
                                route: r.type =='jobs' ? '/company/careers/'+r.uid : '/resources/'+r.type+'/'+r.uid,
                                payload: r
                            }
                    })

                    routes.push( { route: '/resources/article' })
                    routes.push( { route: '/resources/white-paper' })
                    
                    return routes
            })

        })
}

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

    modules: [
        '@nuxtjs/sitemap'
    ],

    /* Customize the progress bar color */
    loading: { color: '#3B8070' },

    generate: {
        routes: prismicRoutes
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

    sitemap: {
        generate: true,
        path: '/sitemap.xml',
        hostname: 'https://www.vazoola.com',
        cacheTime: 1000 * 60 * 15,
        gzip: true,
        routes() {
            var Prismic = require("prismic-javascript");
            return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2")
                .then(function(api) {
                    return api.query([
                            Prismic.Predicates.any('document.type', ['article', 'white-paper', 'jobs'])
                        ]).then(function(response) {
                            var routes = response.results.map((r) => {
                                    return r.type =='jobs' ? '/company/careers/'+r.uid : '/resources/'+r.type+'/'+r.uid;
                            })
        
                            routes.push('/resources/article')
                            routes.push('/resources/white-paper')
                            
                            return routes
                    })
        
                })
        }
    },

    /*
    ** Build configuration
    */
    build: {
            /*
            ** Run ESLint on save
            */
            extend(config, ctx) {
                // Run ESLint on save
                if (ctx.isDev && ctx.isClient) {
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
