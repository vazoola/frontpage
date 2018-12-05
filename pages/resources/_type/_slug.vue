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
                            <li>
                                <a href="/resources">All</a>
                            </li>
                            <li>
                                <a href="/resources/article">Articles</a>
                            </li>
                            <li>
                                <a href="/resources/white-paper">White Papers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		</div>
 	</section>
    <!-- end: Hero -->

    <!-- start: Resources -->
    <section class="section">
        <div class="columns">
            <div class="column is-2-desktop is-1-tablet"> <!-- gutter --></div>
            <div class="article column is-8-desktop is-10-tablet">
                <h1 class="title is-spaced">{{ post.title }}</h1>
                <h2 class="subtitle has-text-centered"> {{ post.publish_date }} </h2>

                <figure class="image">
                    <img :src="post.cover_image.url">
                </figure>

                <div class="content" v-html="post.html" />

            </div>
        </div>
    </section>
    <!-- start: Resources -->

    <!-- start: Let’s Get Started -->
    <contact-form />
    <!-- end: Let’s Get Started -->

    <!-- start: Footer -->
    <footer-bar />
    <!-- end: Footer -->

</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
    components: { NavBar, FooterBar, ContactForm},

    async asyncData({ params, error, payload }) {
        var PrismicDOM = require('prismic-dom');
        payload.data.html = PrismicDOM.RichText.asHtml(payload.data.content, function(doc) {
            // Pretty URLs for known types
            if (doc.type === 'article') return "/resources/article/" + doc.uid;
            if (doc.type === 'white-paper') return "/resources/white-paper/" + doc.uid;
            // Fallback for other types, in case new custom types get created
            return "/resources/article/" + doc.uid;
        })

        payload.data.publish_date = new Date(payload.data.publish_date).toDateString()

        return { post: payload.data, params: params };
        //return { post: payload }
        /*
        var Prismic = require("prismic-javascript");
        return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2")
            .then(function(api) {
                var myquery = api.query(
                    Prismic.Predicates.at('my.'+params.type+'.uid', params.slug)
                ).then(function(response) {
                    var post = response.results[0].data;

                    var PrismicDOM = require('prismic-dom');
                    post.html = PrismicDOM.RichText.asHtml(post.content, function(doc) {
                        // Pretty URLs for known types
                        if (doc.type === 'article') return "/resources/article/" + doc.uid;
                        if (doc.type === 'white-paper') return "/resources/white-paper/" + doc.uid;
                        // Fallback for other types, in case new custom types get created
                        return "/resources/article/" + doc.uid;
                    })

                    post.publish_date = new Date(post.publish_date).toDateString()

                    return { post: post, params: params, payload: payload};
                });

                return myquery;
            });
        */
    },

    head () {
        return {
            title: "Vazoola Resources | "+this.post.title,

            meta: [
                { hid: 'description', name: 'description', content: this.post.summary },
                { hid: 'keywords', name:'keywords', content: this.post.keywords },
                { hid: 'twitter:card', name:'twitter:card', content: "summary_large_image" },
                { hid: 'twitter:description', name:'twitter:description', content: this.post.summary },
                { hid: 'twitter:site', name:'twitter:site', content: "@vazoola" },
                { hid: 'twitter:creator', name:'twitter:creator', content: "@vazoola" },
                { hid: 'twitter:image', name:'og:image', content: this.post.cover_image.url },
                { hid: 'og:title', name:'og:title', content: this.post.title },
                { hid: 'og:url', name:'og:url', content: 'https://vazoola.com'+this.$route.path },
                { hid: 'og:image', name:'og:image', content: this.post.cover_image.url },
                { hid: 'og:description', name:'og:description', content: this.post.summary },
                { hid: 'og:site_name', name:'og:site_name', content: 'Vazoola' },
            ]
        }
    },

    mounted() {
        console.log(this.$route.path);
    }
};
</script>
