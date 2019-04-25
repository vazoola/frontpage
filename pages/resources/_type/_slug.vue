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
                    <img :src="post.cover_image.url" :alt="post.title">
                </figure>

                <div class="addthis_inline_share_toolbox" style="text-align: center; padding: 10px;"></div>

                <div class="content" v-html="post.html" />

                <div class="addthis_inline_share_toolbox" style="text-align: center; padding: 10px;"></div>

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

    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c06bb1fb1428fa3"></script>
</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
    components: { NavBar, FooterBar, ContactForm},

    async asyncData({ params, error, payload }) {
        //preps post data
        var compilePost = function(post) {
            var PrismicDOM = require('prismic-dom');
            //format the post content to html
            post.html = PrismicDOM.RichText.asHtml(post.content, function(doc) {
                // Pretty URLs for known types
                if (doc.type === 'article') return "/resources/article/" + doc.uid;
                if (doc.type === 'white-paper') return "/resources/white-paper/" + doc.uid;
                // Fallback for other types, in case new custom types get created
                return "/resources/article/" + doc.uid;
            })
            //format the title to plan text for now
            post.title = PrismicDOM.RichText.asText(post.title)
            //format the date
            post.publish_date = new Date(post.publish_date).toDateString()

            return { post: post};
        }

        //if on live
        // if(payload) {
            
        //     return compilePost(payload.data);
        // } else {
            //query for dev
            var Prismic = require("prismic-javascript");
            return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2")
                .then(function(api) {
                    return api.query(
                        Prismic.Predicates.at('my.'+params.type+'.uid', params.slug)
                    ).then(function(response) {
                        console.log(response)
                        return compilePost(response.results[0].data);
                    });
                });
        //}
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

};
</script>
