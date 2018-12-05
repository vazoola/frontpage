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
  						<h2>Resources</h2>
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
                                <img style="object-fit: cover" :src="r.data.cover_image.url" alt="Placeholder image">
                                <span class="type">{{ r.type }}</span>
                            </figure>
                            <figure v-else>
                                <img style="object-fit: cover" src="/images/post-img.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{{ r.data.title }}</p>
                                </div>
                            </div>

                            <div class="content">
                                {{ r.data.summary }}
                            </div>
                        </div>

                        <div class="card-footer">
                            <span class="date" datetime="2016-1-1">{{ r.data.publish_date }}</span>
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

        var query = '';
        if(params.type) {
            query = Prismic.Predicates.at('document.type', params.type);
        }

        return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2")
            .then(function(api) {
                return api.query(query).then(function(response) {
                    return {
                        resources: response.results.sort(function(a, b){
                          return a.data.publish_date < b.data.publish_date;
                        }),
                    };
                });
            })
    },

}
</script>
