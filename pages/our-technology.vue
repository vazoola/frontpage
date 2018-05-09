<template>
<div>
    <!-- start: NavBar -->
    <nav-bar />
    <!-- end: NavBar -->

    <!-- start: Hero -->
        <section class="section technology-hero">
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
                    <img src="/images/content-img.png" alt="Content">
                </div>
                <div class="column">
                    <div class="headline">
                        <h2>Content<br />Library.</h2>
                        <hr class="green" />
                        <p>
                            Simplify the process by managing all your content in one place.
                            Upload articles that have already been written by your team, or order new articles from our staff of experienced writers.
                        </p>
                        <p>
                            Edit articles as needed, and save any changes made. When processing orders for new campaigns,
                            easily match up articles from the Content Library with the influencers you intend to target.
                        </p>
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
                        <p>
                            Request custom blog, social, and video proposals by setting a budget and detailing your campaign goals.
                            Help us to hone in on your ideal influencers by defining your minimum search metrics, monthly traffic, social following, and more.
                            Get notified as soon as your proposal is ready to review.
                        </p>
                        <p>
                            Save time and energy by only reviewing influencers that match your specific needs.
                            Sort and filter proposals as needed.
                            Finally, have confidence selecting influencers that have been pre-screened for your campaign.
                        </p>
                    </div>
                </div>
                <div class="column">
                    <img src="/images/proposals.png" alt="Content">
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
                    <img src="/images/campaign-img.png" alt="Content">
                </div>
                <div class="column">
                    <div class="headline">
                        <h2>Campaign<br />Tracking.</h2>
                        <hr class="green" />
                        <p>
                            Receive daily notifications of campaign activity such as content awaiting approval, new placements, and more.
                            Or, log in and view real-time tracking from within your Dashboard.
                        </p>
                        <p>
                            Use the progress bar to monitor one campaign or multiple campaigns simultaneously.
                            Upon completion of a campaign, export excel spreadsheets of all campaign details to white label and send off to your team or client.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end: Content Library -->

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
    head () {
        return {
            title: "Vazoola The Premier Influencer Marketing Technology | Vazoola",
            meta: [
                { hid: 'description', name: 'description', content: 'Influencer marketing technology powered by a marketplace of vetted content creators, influencers and over ten years of traffic, demographic, and engagement analytics.' },
                { hid: 'keywords', name:'keywords', content: 'Influencer Marketing Platform, Link Building Platform, Content Marketing Platform' },
                { hid: 'twitter:card', name:'twitter:card', content: "summary_large_image" },
                { hid: 'twitter:site', name:'twitter:site', content: "@vazoola" },
                { hid: 'twitter:creator', name:'twitter:creator', content: "@vazoola" },
                { hid: 'twitter:image', name:'twitter:image', content: 'https://www.vazoola.com/images/campaign-img.png' },
                { hid: 'og:image', name:'og:image', content: 'https://www.vazoola.com/images/campaign-img.png' },
                { hid: 'og:title', name:'og:title', content:  'Vazoola The Premier Influencer Marketing Technology'},
                { hid: 'og:description', name:'og:description',  content: 'Influencer marketing technology powered by a marketplace of vetted content creators, influencers and over ten years of traffic, demographic, and engagement analytics.' },
            ]
        }
    }


}
</script>
