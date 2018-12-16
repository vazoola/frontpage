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
                        <div class="content" v-html="page.html" />
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

      var compileHtml = function(data, prop) {
          var PrismicDOM = require('prismic-dom');
          data.html = PrismicDOM.RichText.asHtml(data[prop])
          return data;
      }

      return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2")
              .then(function(api) {
                  var api = api;
                return api.getSingle('company')
                    .then(function(response) {
                        return compileHtml(response.data, 'main_paragraph')
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


}
</script>
<style lang="scss" scoped>

</style>
