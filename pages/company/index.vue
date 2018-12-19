<template>
    <div>
        <nav-bar />
        <section class="section company-hero">
        	<div class="container">
            	<div class="columns">
  					<div class="column">
  						<div class="hero-text">
	  						<h2>About</h2>
	  						<hr class="blue" />
	  					</div>
  					</div>
  				</div>
			</div>
        </section>


        <section class="section how-we-work inside pt-2">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="content" v-html="page.main_paragraph" />
                    </div>
                </div>

                <!--
                <div class="columns">
                    <div class="column">
                        <figure class="image has-image-centered">
                            <img src="http://placehold.it/400x400">
                        </figure>
                    </div>

                    <div class="column">
                        <figure class="image has-image-centered">
                            <img src="http://placehold.it/400x400">
                        </figure>
                    </div>

                    <div class="column">
                        <figure class="image has-image-centered">
                            <img src="http://placehold.it/400x400">
                        </figure>
                    </div>
                </div>
            -->


                <hr class="mb-3">
                <h2 class="title is-2 has-text-centered">Our Team</h2>

                <div class="columns is-multiline">
                    <div v-for="(member, index) in page.team" :key="index" class="column is-one-quarter">
                        <figure class="image is-175x175 has-image-centered">
                            <img class="is-rounded" :src="member.portrait.url">
                        </figure>
                        <div class="has-text-centered mt-1">
                            <h4 class="title is-4">{{ member.name }}</h4>
                            <h5 class="subtitle is-5">{{ member.title }}</h5>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <div class="content" v-html="page.second_paragraph" />
                    </div>
                </div>

                <div class="mb-3 mt-3">
                    <hr>
                </div>

                <h2 class="title is-2 has-text-centered">Join the Team</h2>
                <div class="columns">
                    <div class="column is-8 is-offset-2 has-text-centered">
                       <p>We’re always on the lookout for talent to join our team. If you’re interested in becoming a part of the Vazoola team please send over your resume.</p>
                       <p >Send your applications to: <strong><a href="mailto:careers@vazoola.com">careers@vazoola.com</a></strong></p>
                    </div>
                </div>

                <div class="columns">
                    <div v-for="(job, index) in jobs" :key="index" class="column is-6 is-multiline">
                        <div class="box">
                           <p class="title is-4 has-text-centered ">{{ job.data.role_title }}</p>
                           <p>{{ job.data.short_description }}</p>
                           <div class="buttons has-addons is-centered">
                               <a :href="'/company/careers/'+job.uid" class="button is-info" >Read more...</a>
                           </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <footer-bar />
    </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'


export default {
    components: {
        NavBar,
        FooterBar
    },

    async asyncData({ params }) {
        var Prismic = require("prismic-javascript");

        var compileHtml = function(data, props) {
            var PrismicDOM = require('prismic-dom');
            for (var k in props) {
                data[props[k]] = PrismicDOM.RichText.asHtml(data[ props[k] ])
            }
            return data;
        }

        return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2")
        .then(function(api) {
            var api = api;
            return api.getSingle('company')
            .then(function(response) {
                return compileHtml(response.data, ['main_paragraph', 'second_paragraph'])
            })
            .then(function(page) {
                return api.query([Prismic.Predicates.at('document.type', 'jobs') ])
                .then(function(response) {
                    return {
                        page: page,
                        jobs: response.results
                    }
                })
            })
        })
    },

  head() {
      return {
          title: "Vazoola | About the Company",
          meta: [
              { hid: 'description', name: 'description', content: 'We are a SEO (Search Engine Optimization) and Social Media Marketing Company that connects brands and agencies with the web’s top influencers through Content Marketing, Social Media, Videos, and more.' },
              { hid: 'keywords', name:'keywords', content: 'Influencer Marketing Platform, Link Building Platform, Content Marketing Platform' },
              { hid: 'twitter:card', name:'twitter:card', content: "summary_large_image" },
              { hid: 'twitter:site', name:'twitter:site', content: "@vazoola" },
              { hid: 'twitter:creator', name:'twitter:creator', content: "@vazoola" },
              { hid: 'twitter:image', name:'twitter:image', content: 'https://www.vazoola.com/images/logo.png' },
              { hid: 'og:image', name:'og:image', content: 'https://www.vazoola.com/images/logo.png' },
              { hid: 'og:title', name:'og:title', content:  'Vazoola | About the Company'},
              { hid: 'og:description', name:'og:description',  content: 'We are a SEO (Search Engine Optimization) and Social Media Marketing Company that connects brands and agencies with the web’s top influencers through Content Marketing, Social Media, Videos, and more.' },
          ]
      }
  }


}
</script>
<style lang="scss" scoped>

</style>
