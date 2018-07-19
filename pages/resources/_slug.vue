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
                                <a href="/resources#/article">Articles</a>
                            </li>
                            <li>
                                <a href="/resources#/paper">White Papers</a>
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
            <div class="column is-3"> <!-- gutter --></div>
            <div class="article column is-6">
                <h1 class="title is-spaced">{{ post.real_title }}</h1>
                <h2 class="subtitle has-text-centered"> {{ post.date }} </h2>

                <figure class="image">
                    <img :src="post.thumbnail">
                </figure>

                <div class="content" v-html="post.body" />

            </div>
            <div class="column is-3">
                <!-- social -->
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
import showdown from 'showdown';
import moment from 'moment';

export default {
    components: { NavBar, FooterBar, ContactForm},
    async asyncData({ params }) {
        //get the data
        let data = await import('~/content/resources/' + params.slug + '.json');
        //convert MD to html
        const converter = new showdown.Converter();
        data.body = converter.makeHtml(data.body);
        //convert the date to pretty
        data.date = moment(data.date).format('MMMM Do, YYYY');

        //return it
        return {
            post: data,
            resourceType: data.type
        }
    },

    head () {
        return {
            title: "Vazoola Resources | "+this.post.real_title,
            meta: [
                { hid: 'description', name: 'description', content: this.post.summary },
                { hid: 'keywords', name:'keywords', content: this.post.keywords },
                { hid: 'twitter:card', name:'twitter:card', content: "summary_large_image" },
                { hid: 'twitter:description', name:'twitter:description', content: this.post.summary },
                { hid: 'twitter:site', name:'twitter:site', content: "@vazoola" },
                { hid: 'twitter:creator', name:'twitter:creator', content: "@vazoola" },
                { hid: 'twitter:image', name:'og:image', content: 'https://vazoola.com'+this.post.thumbnail },
                { hid: 'og:url', name:'og:url', content: 'https://vazoola.com'+this.$route.path },
                { hid: 'og:title', name:'og:title', content: this.post.real_title },
                { hid: 'og:description', name:'og:description', content: this.post.summary },
                { hid: 'og:image', name:'og:image', content: 'https://vazoola.com'+this.post.thumbnail },
            ]
        }
    },

    mounted() {
        console.log(this.$route.path);
    }
};
</script>
