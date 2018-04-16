<template>
<div>
    <!-- start: NavBar -->
    <nav-bar />
    <!-- end: NavBar -->

    <!-- start: Hero -->
        <section class="technology-hero">
        	<div class="container">
            	<div class="columns">
  					<div class="column">
  						<div class="hero-text">
	  						<h2>Our Technology</h2>
	  						<hr class="blue" />
	  					</div>
  					</div>
  				</div>
			</div>
        </section>
	<!-- end: Hero -->

    <!-- start: Content Library -->
	<section class="services">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <img src="images/content-img.png" alt="Content">
                </div>
                <div class="column">
                    <div class="headline">
                        <h2>Content<br />Library.</h2>
                        <hr class="green" />
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum praesent luptatum.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<!-- end: Content Library -->

    <!-- start: Proposals -->
    <section class="services right-img">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="headline">
                        <h2>Proposals.</h2>
                        <hr class="green" />
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum praesent luptatum.</p>
                    </div>
                </div>
                <div class="column">
                    <img src="images/content-img.png" alt="Content">
                </div>
            </div>
        </div>
    </section>
    <!-- end: Proposals -->

    <!-- start: Campaign Tracking. -->
    <section class="services">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <img src="images/campaign-img.png" alt="Content">
                </div>
                <div class="column">
                    <div class="headline">
                        <h2>Campaign<br />Tracking.</h2>
                        <hr class="green" />
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum praesent luptatum.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end: Content Library -->

  	<!-- start: Posts & Resources -->
  	<posts-hero />
  	<!-- end: Posts & Resources -->

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
import PostsHero from '~/components/PostsHero.vue'

export default {
  components: {
      NavBar,
      FooterBar,
      PostsHero,
      ContactForm
  },

}
</script>
