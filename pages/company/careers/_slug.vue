<template>
    <div>
        <nav-bar />
        <section class="section company-hero">
        	<div class="container">
            	<div class="columns">
  					<div class="column">
  						<div class="hero-text">
	  						<h2>Careers</h2>
	  						<hr class="blue" />
	  					</div>
  					</div>
  				</div>
			</div>
        </section>

        <section class="section how-we-work inside pt-2">
            <div class="container">
                <div class="columns">
                    <div class="article column is-offset-2 is-8-desktop is-10-tablet">
                        <h1 class="title is-spaced">{{ role_title }}</h1>
                        <div class="content" v-html="html" />
                        <hr>
                        <p class="has-text-centered has-text-info">If you're interested, please contact us! Be sure to send over your Resume/CV, a sample of your work, and a short description about you.</p>
                        <div class="buttons has-addons is-centered">
                            <a :href="'mailto:careers@vazoola.com?Subject='+role_title" class="button is-info" >Apply Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
export default {
    components: { NavBar },

    async asyncData({ params, error, payload }) {
        var Prismic = require("prismic-javascript");

        var compileHtml = function(data, prop) {
            var PrismicDOM = require('prismic-dom');
            data.html = PrismicDOM.RichText.asHtml(data[prop])
            return data;
        }

        //if on live
        if(payload) {
            return compileHtml(payload.data, 'description');
        } else {
            //query for dev
            var Prismic = require("prismic-javascript");
            return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2")
                .then(function(api) {
                    return api.query(
                        Prismic.Predicates.at('my.jobs.uid', params.slug)
                    ).then(function(response) {
                        return compileHtml(response.results[0].data, 'description');
                    });
                });
        }
    },

    head () {
        return {
            title: 'Vazoola Careers | '+this.role_title,


            meta: [
                { hid: 'description', name: 'description', content: this.short_description },
                { hid: 'keywords', name:'keywords', content: 'Carrers, '+this.role_title },
                { hid: 'twitter:card', name:'twitter:card', content: "summary_large_image" },
                { hid: 'twitter:description', name:'twitter:description', content: 'Vazoola Careers | '+this.short_description },
                { hid: 'twitter:site', name:'twitter:site', content: "@vazoola" },
                { hid: 'twitter:creator', name:'twitter:creator', content: "@vazoola" },
                { hid: 'twitter:image', name:'og:image', content: 'https://www.vazoola.com/images/logo.png' },
                { hid: 'og:title', name:'og:title', content: 'Vazoola Careers | '+this.role_title },
                { hid: 'og:url', name:'og:url', content: 'https://vazoola.com'+this.$route.path },
                { hid: 'og:image', name:'og:image', content: 'https://www.vazoola.com/images/logo.png' },
                { hid: 'og:description', name:'og:description', content: 'Vazoola Careers | '+this.short_description },
                { hid: 'og:site_name', name:'og:site_name', content: 'Vazoola' },
            ]

        }
    },
}
</script>

<style lang="css">
</style>
