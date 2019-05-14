<template lang="html">
<div>
    <!-- start: NavBar -->
    <nav-bar />
    <!-- end: NavBar -->

    <!-- start: Hero -->
    <section class="resources-hero">
    	<div class="container">
        	<div class="columns">
					<div class="column">
						<div class="hero-text">
  						<h1 class="h1-as-h2">Resources</h1>
  						<hr class="blue" />
  					</div>
					</div>
				</div>
            <div class="columns">
                <div class="column">
                    <div class="tabs">
                        <ul>
                            <li :class="[$route.params.type ? '' : 'is-active']">
                                <a href="/resources/">All</a>
                            </li>
                            <li :class="[$route.params.type == 'article' ? 'is-active' : '']">
                                <a href="/resources/article">Articles</a>
                            </li>
                            <li :class="[$route.params.type == 'white-paper' ? 'is-active' : '']">
                                <a href="/resources/white-paper">White Papers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
			</div>
	 	</section>
	<!-- end: Hero -->


    <!-- start: Posts & Resources -->
    <section class="posts">
    	<div class="container">
    		<div class="columns is-multiline">
                <div v-for="r in resources" :key="r.id" class="column is-4-desktop is-6">
                    <a :href="'/resources/'+r.type+'/'+r.uid">
                        <div class="card">
                        <div class="card-image">
                            <figure v-if="r.data.cover_image" class="image is-4by3">
                                <img style="object-fit: cover" :src="r.data.cover_image.url" :alt="r.data.short_title">
                                <span class="type">{{ r.type }}</span>
                            </figure>
                            <figure v-else>
                                <img style="object-fit: cover" src="/images/post-img.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{{ r.data.short_title }}</p>
                                </div>
                            </div>

                            <div class="content">
                                {{ r.data.summary }}
                            </div>
                        </div>

                        <div class="card-footer">
                            <span class="date" datetime="2016-1-1">{{ new Date(r.data.publish_date).toDateString() }}</span>
                        </div>
                    </div>
                    </a>
                </div>

            </div>
    	</div>
    </section>
    <!-- end: Posts & Resources -->

    <!-- start: Footer -->
    <footer-bar />
    <!-- end: Footer -->


</div>
</template>

<script>
/*
https://github.com/roberto-butti/prismic_nuxt/tree/master/pages
https://medium.com/@RifkiNada/how-to-fetch-content-from-prismic-when-youre-using-nuxt-js-2066e544cb36
*/

import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'

export default {
    components: { NavBar, FooterBar },

    async asyncData({ params }) {
        var Prismic = require("prismic-javascript");

        var query = [
                Prismic.Predicates.any('document.type', ['article', 'white-paper'])
            ];
        if(params.type) {
            query = Prismic.Predicates.at('document.type', params.type);
        }

        return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2")
            .then(function(api) {
                return api.query(
                    query,
                    { pageSize: 100, orderings : "[my.article.publish_date desc, my.white-paper.publish_date desc]"},
                ).then(function(response) {
                    return {
                        resources: response.results,
                    };
                });
            })
    },

    head() {
        return {
            title: (this.$route.params.type == 'article') ? 'SEO, Link Building, and Influencer Marketing Articles' : 
                            ((this.$route.params.type == 'white-paper') ? 'Link Building, SEO, Influencer Marketing White Papers' : 
                                'SEO Link Building, Influencer Marketing, and Content Marketing Resources'),
            meta: [
                { hid: 'description', name: 'description', 
                    content: (this.$route.params.type == 'article') ? 'Link Building, SEO, Content Marketing, Backlinks, Influencer Outreach, and Blogging Articles from the Experts at Vazoola' : 
                                (this.$route.params.type == 'white-paper' ? 'Link Building, SEO, Influencer Marketing White Papers to Help You Increase Your Rankings and Grow Your Business' : 
                                    'SEO Blog Posts, Link Building Guides, and Other Tips. How to Build Backlinks, Keyword Research, Content Marketing Insights, and more from the Experts at Vazoola')
                },
                { hid: 'keywords', name:'keywords', content: 'Influencer Marketing Platform, Link Building Platform, Content Marketing Platform' },
                { hid: 'twitter:card', name:'twitter:card', content: "summary_large_image" },
                { hid: 'twitter:site', name:'twitter:site', content: "@vazoola" },
                { hid: 'twitter:creator', name:'twitter:creator', content: "@vazoola" },
                { hid: 'twitter:image', name:'twitter:image', content: 'https://www.vazoola.com/images/logo.png' },
                { hid: 'og:image', name:'og:image', content: 'https://www.vazoola.com/images/logo.png' },
                { hid: 'og:title', name:'og:title', content:  'Vazoola | Resources'},
                { hid: 'og:description', name:'og:description',  content: "Learn from Vazoola's resource of articles, white papers and more!" },
            ]
        }
    }

}
</script>
