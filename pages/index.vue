<template>
<div>
    <!-- start: NavBar -->
    <nav-bar />
    <!-- end: NavBar -->

              <!-- start: Hero -->
              <section class="home-hero">
              	<div class="container">
  	            	<div class="columns">
  	  					<div class="column hero-img">
  	  						<img src="/images/home-hero-img.png" alt="Influencers at your fingertips">
  	  					</div>
  	  					<div class="column">
  	  						<div class="hero-text">
  		  						<h1 class="h1-as-h2">Content creators at your fingertips.</h1>
  		  						<hr class="pink" />
  		  						<p class="subtitle">We’ve done the legwork.<br />Leverage our vast pool of trusted influencers.</p>
  		  						<p class="text-center">
                                    <span @click="showModal = true" class="button is-primary">Request A Proposal</span>
                                </p>
  		  						<p class="btn-text">No contract necessary</p>
  		  					</div>
  	  					</div>
  	  				</div>
    				</div>
         	 	</section>
          	<!-- end: Hero -->

            <!-- start: How We Work -->
        	<section class="how-we-work">
        		<div class="container">
        			<div class="columns">
        				<div class="column">
                            <div class="headline">
                                <h1 class="h1-as-h2">How it works</h1>
                                <hr class="blue" />
                            </div>
        				</div>
        			</div>
        			<div class="columns">
        				<div class="column text-center">
        					<div class="icon-box">
        						<h1 class="h1-as-h2">For<br />Brands</h1>
        						<img src="/images/brands-icon.png" alt="Brands Icon">
        						<p>Fuel your marketing efforts with the power of thousands of online influencers waiting to share your story.</p>
        						<a href="/brands" class="button is-info">Learn More</a>
        					</div>
        				</div>
                        <div class="column text-center">
        					<div class="icon-box">
        						<h1 class="h1-as-h2">For<br />Agencies</h1>
        						<img src="/images/agencies-icon.png" alt="Brands Icon">
        						<p>Manage unlimited client campaigns in one place, and white label your efforts.</p>
        						<a href="/agencies" class="button is-info">Learn More</a>
        					</div>
        				</div>
        				<div class="column text-center">
        					<div class="icon-box">
        						<h1 class="h1-as-h2">For Small<br />Businesses</h1>
        						<img src="/images/small-b-icon.png" alt="Brands Icon">
        						<p>Gain an edge on local competition by tapping into the audience of niche specific and geo-targeted influencers. </p>
        						<a href="/small-business" class="button is-info">Learn More</a>
        					</div>
        				</div>

        			</div>
        		</div>
        	</section>
        	<!-- end: How We Work -->

            <!-- start: About Vazoola’s Services -->
            <section class="about-services">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div class="headline">
                                <h1 class="h1-as-h2">About Vazoola’s Services</h1>
                                <hr class="blue" />
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-offset-1 text-center">
                            <div class="icon-box">
                                <img src="/images/content-icon.png" alt="Content Marketing">
                                <h1 class="h1-as-h2">Content<br />Marketing</h1>
                                <p>Share your brand message in sponsored articles and blog posts.</p>
                            </div>
                        </div>
                        <div class="column text-center">
                            <div class="icon-box">
                                <img src="/images/link-icon.png" alt="Link Building">
                                <h1 class="h1-as-h2">Link<br />Building</h1>
                                <p>Improve your search engine rankings by earning links on influential sites.</p>
                            </div>
                        </div>
                        <div class="column text-center">
                            <div class="icon-box">
                                <img src="/images/youtube-icon.png" alt="YouTube Videos">
                                <h1 class="h1-as-h2">YouTube<br />Videos</h1>
                                <p>Get videos for and about your brand from expert creators.</p>
                            </div>
                        </div>
                        <div class="column is-1"></div>
                    </div>
                    <div class="columns">
                        <div class="column is-offset-1 text-center">
                            <div class="icon-box">
                                <img src="/images/social-media-icon.png" alt="Social Media">
                                <h1 class="h1-as-h2">Social<br />Media</h1>
                                <p>Engage top social influencers to start an online conversation about your brand.</p>
                            </div>
                        </div>
                        <div class="column text-center">
                            <div class="icon-box">
                                <img src="/images/sampling-icon.png" alt="Sampling Giveaways">
                                <h1 class="h1-as-h2">Sampling &<br />Giveaways</h1>
                                <p>Put your product in the hands of influencers and their followers.</p>
                            </div>
                        </div>
                        <div class="column text-center">
                            <div class="icon-box">
                                <img src="/images/custom-icon.png" alt="Managed Services">
                                <h1 class="h1-as-h2">Managed<br />Services</h1>
                                <p>Don't want to do all the work on your own? Ask us to do it for you.</p>
                            </div>
                        </div>
                        <div class="column is-1"></div>
                    </div>
                </div>
            </section>
            <!-- end: About Vazoola’s Services -->

          	<!-- start: Grow Your Brand
          	<section v-if="sections.grow_your_brand" class="grow-your-brand">
          		<div class="container">
          			<div class="columns">
          				<div class="column">
          					<div class="headline">
          						<h2 v-html="sections.grow_your_brand.header" />
          						<hr class="light-blue" />
          						<p v-html="sections.grow_your_brand.header" />
                                <p class="text-center"><a href="#" class="button is-primary">Find Out How</a></p>
          					</div>
          				</div>
          				<div class="column">
          					<img src="/images/grow-img.png" alt="Grow">
          				</div>
          			</div>
          		</div>
          	</section>
          	 end: Grow Your Brand -->
            <!--
            <section class="grow-your-brand">
        		<div class="container">
        			<div class="columns">
        				<div class="column">
        					<div class="headline">
        						<h2>Why we're different</h2>
        						<hr class="light-blue">
                                <p>This isn’t your typical Influencer Marketing Platform. Forget about searching through thousands of influencers to locate the most suitable options, then having to handle the outreach and negotiation on your own. Who has time for that</p>
                                <p>We match you up with the influencers that meet your needs, and are seeking opportunities from Advertisers like yourself. And, with over 100,000 influencers to choose from, you can be confident we’ll find the right home for your content. Now, sit back, and watch the ROI pile up… </p>
								<p class="text-center"><a href="#" class="button is-primary">Become different</a></p>
        					</div>
        				</div>
        				<div class="column">
        					<img src="/images/compare.png" alt="Grow">
        				</div>
        			</div>
        		</div>
        	</section>
            -->

            <section class="grow-your-brand">
        		<div class="container">
                    <div class="headline">
                        <h1 class="h1-as-h2">Why we're different</h1>
                        <hr class="light-blue">
                    </div>

					<div class="columns">
                        <div class="column is-5">
                                <p>Forget about searching through thousands of influencers to locate the most suitable options, then having to reach out and negotiate on your own. Who has time for that?</p>
                                <p>We match you up with the influencers that meet your needs. And, with over 100,000 influencers to choose from, have confidence we’ll find the right home for your content.</p>
                                <p class="text-center">
                                    <button @click="showModal = true" class="button is-primary">Become different</button>
                                </p>
        				</div>
                        <div class="column">
        					<img src="/images/compair.png" alt="Grow">
        				</div>
                    </div>
        		</div>
        	</section>

            <!-- start: Succeed -->
          	<section class="succeed">
          		<div class="container">
          			<div class="columns">
          				<div class="column">
          					<img src="/images/succeed.png" alt="Succeed">
          				</div>
          				<div class="column">
          					<div class="headline">
          						<h1 class="h1-as-h2">Succeed<br />with Vazoola.</h1>
          						<hr class="green" />
          						<p>
                                    Our robust platform provides you with the tools and data needed to lock in on the influencers that will have the biggest impact on your marketing strategy. Streamline the process of finding the best influencers, creating shareworthy content, tracking your progress, and measuring success across any number of campaigns.
                                </p>
  								<p class="text-center"><a href="/our-technology" class="button is-primary">More About Our Tech</a></p>
          					</div>
          				</div>
          			</div>
          		</div>
          	</section>
          	<!-- end: Succeed -->


          	<!-- start: Posts & Resources -->
          	<posts-hero :resources="posts" />
          	<!-- end: Posts & Resources -->

          	<!-- start: Let’s Get Started -->
          	<contact-form />
          	<!-- end: Let’s Get Started -->


          	<!-- start: Footer -->
          	<footer-bar />
          	<!-- end: Footer -->

            <!-- start: Let’s Get Started -->
          	<contact-modal :active.sync="showModal" />
          	<!-- end: Let’s Get Started -->
</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'

import ContactForm from '~/components/ContactForm.vue'
import ContactModal from '~/components/ContactModal.vue'
import PostsHero from '~/components/PostsHero.vue'

export default {
    components: {
        NavBar,
        FooterBar,
        PostsHero,
        ContactForm,
        ContactModal
    },
    head () {
        return {
            title: "Vazoola: Premier Link Building + Influencer Marketing Platform",
            meta: [
                { hid: 'description', name: 'description', content: 'Powerful platform that connects brands and agencies with vetted and trustworthy influencers for the purposes of: Link Building, Content Marketing, and Social Media Campaigns.' },
                { hid: 'keywords', name:'keywords', content: 'Link Building, Influencer Marketing, Content Marketing' },
                { hid: 'twitter:card', name:'twitter:card', content: "summary_large_image" },
                { hid: 'twitter:site', name:'twitter:site', content: "@vazoola" },
                { hid: 'twitter:creator', name:'twitter:creator', content: "@vazoola" },
                { hid: 'twitter:image', name:'twitter:image', content: 'https://www.vazoola.com/images/home-hero-img.png' },
                { hid: 'og:image', name:'og:image', content: 'https://www.vazoola.com/images/home-hero-img.png' },
                { hid: 'og:title', name:'og:title', content: "Vazoola: Premier Link Building + Influencer Marketing Platform" },
                { hid: 'og:description', name:'og:description', content: 'Powerful platform that connects brands and agencies with vetted and trustworthy influencers for the purposes of: Link Building, Content Marketing, and Social Media Campaigns.'  },
            ]
        }
    },


    data() {
        return {
            showModal: false,
        }
    },

    async asyncData() {
        var Prismic = require("prismic-javascript");

        return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2")
            .then(function(api) {
                return api.query(
                    Prismic.Predicates.at('document.type', 'article'),
                    {
                        orderings : '[my.article.publish_date desc]',
                        pageSize : 4
                    }
                ).then(function(response) {
                    return {
                        posts: response.results,
                    };
                });
            })
    }
}
</script>
