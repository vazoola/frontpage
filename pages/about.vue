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
                       <p>We are a platform connecting companies and brands with thousand of key online influencers. Our vetted content creators write articles, make videos, share on social, and run promotions, and use that influence to promote our advertisers. We also provide extensive metric and data analysis to create high-efficiency campaigns.</p>
                       <p>We’re located in beautiful Stratford Connecticut right in the heart of the Gold Coast.</p>
                    </div>
                </div>
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

                <hr class="mb-3">
                <h2 class="title is-2 has-text-centered">Our Team</h2>
                <div class="columns is-multiline">
                    <div class="column is-one-quarter">
                        <figure class="image is-175x175 has-image-centered">
                            <img class="is-rounded" src="http://placehold.it/200x200">
                        </figure>
                        <div class="has-text-centered mt-1">
                            <h4 class="title is-4">Casey Bjorkdahl</h4>
                            <h5 class="subtitle is-5">Co Founder</h5>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <figure class="image is-175x175 has-image-centered">
                            <img class="is-rounded" src="http://placehold.it/400x400">
                        </figure>
                        <div class="has-text-centered mt-1">
                            <h4 class="title is-4">Andrew Sperl</h4>
                            <h5 class="subtitle is-5">VP of Sales & Marketing</h5>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <figure class="image is-175x175 has-image-centered">
                            <img class="is-rounded" src="http://placehold.it/400x400">
                        </figure>
                        <div class="has-text-centered mt-1">
                            <h4 class="title is-4">T.R. Keogh</h4>
                            <h5 class="subtitle is-5">Director of Business Development</h5>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <figure class="image is-175x175 has-image-centered">
                            <img class="is-rounded" src="http://placehold.it/400x400">
                        </figure>
                        <div class="has-text-centered mt-1">
                            <h4 class="title is-4">Solomon Bramble</h4>
                            <h5 class="subtitle is-5">Account Executive</h5>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <figure class="image is-175x175 has-image-centered">
                            <img class="is-rounded" src="http://placehold.it/400x400">
                        </figure>
                        <div class="has-text-centered mt-1">
                            <h4 class="title is-4">Damarley Robinson</h4>
                            <h5 class="subtitle is-5">Senior Account Executive</h5>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <figure class="image is-175x175 has-image-centered">
                            <img class="is-rounded" src="http://placehold.it/400x400">
                        </figure>
                        <div class="has-text-centered mt-1">
                            <h4 class="title is-4">Title 3</h4>
                            <h5 class="subtitle is-5">Subtitle 4</h5>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <figure class="image is-175x175 has-image-centered">
                            <img class="is-rounded" src="http://placehold.it/400x400">
                        </figure>
                        <div class="has-text-centered mt-1">
                            <h4 class="title is-4">Title 3</h4>
                            <h5 class="subtitle is-5">Subtitle 4</h5>
                        </div>
                    </div>
                </div>
                <div class="mb-3 mt-3">
                    <hr>
                </div>
                <h2 class="title is-2 has-text-centered">Join the Team</h2>
                <div class="columns">
                    <div class="column">
                       <p>We’re always on the lookout for talent to join our team. If you’re interested in becoming a part of the Vazoola team please send over your resume.</p> 
                       <p>Send your applications to: <strong><a href="mailto:careers@vazoola.com">careers@vazoola.com</a></strong></p>
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
}
</script>
<style lang="scss" scoped>

</style>
