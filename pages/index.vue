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
  		  						<h1 class="h1-as-h2">Premium Links and Content at Scale.</h1>
  		  						<hr class="pink" />
  		  						<p class="subtitle">Supercharge your (growth/marketing/SEO) with out AI-powered Bounty software. Pain-free process generates better results, in less time, at a price you control.</p>
  		  						<p class="text-center">
                                    <a class="button is-primary" @click="showModal = true">Request a Free Demo</a>
                                </p>
  		  						<p class="btn-text">No contract necessary</p>
  		  					</div>
  	  					</div>
  	  				</div>
    				</div>
         	 	</section>
          	<!-- end: Hero -->
            <section class="counter metrics">
                <div class="container metrics-inside">
                    <div class="columns">
                        <div class="column">
                            <p class="title is-5 has-text-white">
                                <animated :value="displayLinks" :formatValue="numberFormat" :duration="1500" />+ Links Built
                            </p>
                        </div>
                        <div class="column">
                            <p class="title is-5 has-text-white">
                                <animated :value="displayAdvertisers" :formatValue="numberFormat" :duration="1500" />+ Agencies/Brands Served
                            </p>
                        </div>
                        <div class="column">
                            <p class="title is-5 has-text-white">
                                <animated :value="displayYears" :formatValue="yearFormat" :duration="1500" />+ Years of Service
                            </p>
                        </div>
                    </div>
                </div>
            </section>
              <!-- start: How We Work -->
        	<section class="how-we-work">
        		<div class="container">
                    <div class="headline">
                        <h3 class="h3">Vazoola was created with Agencies and Brands in mind</h3>
                        <hr class="light-blue">
                    </div>
        			<div class="columns">
        				<div class="column text-center">
        					<div class="icon-box">
        						<h1 class="h1-as-h2">White Label Agency</h1>
        						<img src="/images/brands-icon.png" alt="Brands Icon">
        						<p>Streamline the link building process, reduce costs, and speed up turnaround time. 
                                    Vazoola was created with the goal of giving you the tools to increase your profit margin so you can scale. 
                                    Your clients demand a lot. With our white-label solution, we'll do the dirty work - you take all the credit.</p>
        						<a href="/brands" class="button is-info">Learn More</a>
        					</div>
        				</div>
                        <div class="column text-center">
        					<div class="icon-box">
        						<h1 class="h1-as-h2">Grow Your Brand</h1>
        						<img src="/images/agencies-icon.png" alt="Brands Icon">
        						<p>
                                    Struggling to secure links that actually impact your rankings? We'll take that off your plate, and make you look like an all-star in your office. 
                                    We build better links, for a fraction of the cost, and at lighting fast speeds. 
                                    Sit back, and watch the organic traffic roll in.
                                </p>
        						<a href="/agencies" class="button is-info">Learn More</a>
        					</div>
        				</div>

        			</div>
        		</div>
        	</section>
        	<!-- end: How We Work -->

            <section class="testimonials">
                <div class="container">
                    <div class="headline">
                        <h3 class="h3">Don't take our word for it. Listen to what some of our clients have to say...</h3>
                        <hr class="light-blue">
                    </div>
                    <div class="mb-2">
                        <swiper ref="caseSwiper" :options="swiperOptions">
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <p class="title is-5">Case Study 1</p>
                                    <p class="title is-5">Problem: TBD</p>
                                    <p class="title is-5">Link: TBD</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <p class="title is-5">Case Study 2</p>
                                    <p class="title is-5">Problem: TBD</p>
                                    <p class="title is-5">Link: TBD</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <p class="title is-5">Case Study 3</p>
                                    <p class="title is-5">Problem: TBD</p>
                                    <p class="title is-5">Link: TBD</p>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div>
                        <swiper ref="mySwiper" :options="swiperOptions">
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <p class="title is-5">Name: Brian Hansen</p>
                                    <p class="title is-5">Company: Rocket Pilots</p>
                                    <p class="title is-5">Title: CEO</p>
                                    <div class="has-text-centered">
                                        At Rocket Pilots we provide comprehensive SEO solutions for small to medium sized companies throughout the United States. 
                                        To fulfill certain aspects of a scope of work we often align ourselves with partner companies. We partnered with Vazoola after several Link Building agencies failed to meet our quality standards. 
                                        The team at Vazoola is top notch and best in class in the trade of guest posting and link building fulfillment for digital marketing agencies. Their links have been consistently high quality, relevant and delivered in a timely fashion. 
                                        If you're frustrated with your Link Building partner, I highly recommend working with the Vazoola team and technology. You will not be disappointed!
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <p class="title is-5">Name: </p>
                                    <p class="title is-5">Company: Reputation Management Agency</p>
                                    <p class="title is-5">Title: Project Manager</p>
                                    <div class="has-text-centered">
                                        Link building is an important component of the strategy we implement for rebuilding the online reputation of our clients, but having the time or resources to do it successfully, is difficult. 
                                        It’s even harder to find a trustworthy link building company to outsource this work to. That’s why we were lucky to come across Vazoola  – we were able to agree on tiered pricing structure that made it easier to include link building in the packages we sell to clients. 
                                        This has helped us to produce better and more predictable results for clients, as well as to allow us to focus on growing our client base. 
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <p class="title is-5">Name: Dellon S.</p>
                                    <p class="title is-5">Company: Vista College</p>
                                    <p class="title is-5">Title: Digital Marketing Director</p>
                                    <div class="has-text-centered">
                                        Every digital marketer knows how important link building is to increasing organic rankings, but finding the time to do it successfully is another story. 
                                        That’s why it can be helpful to use a link building company that has the experience and resources to execute your strategy.  
                                        I’ve been utilizing Vazoola for several years to help strategically build links from high level domains, and it’s been very effective. They are not your typical link builder. 
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <p class="title is-5">Name: Alison L.</p>
                                    <p class="title is-5">Company: SEO Agency</p>
                                    <p class="title is-5">Title: Owner</p>
                                    <div class="has-text-centered">
                                        Vazoola has been an excellent partner to my agency for over a year.  
                                        They've stood out in three ways versus many other link building and outreach teams we have worked with.  
                                        First, the Vazoola team is responsive, timely, and efficient with taking orders, reporting on progress and answering questions.  
                                        Second, the quality of their placements is consistently strong and they deliver exactly what we ask for.  
                                        Finally, they have scaled our link building output from a single project to 7 consecutive projects with no interruptions or delays.  
                                        I'd recommend them to any agency looking for a reliable, reputable link building resource.
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <p class="title is-5">Name: Jon Bingham</p>
                                    <p class="title is-5">Company: BKA Content</p>
                                    <p class="title is-5">Title: Director of Marketing</p>
                                    <div class="has-text-centered">
                                        For the past few months we’ve been using Vazoola for link building to increase our rankings on some of the more difficult keywords we target. 
                                        In just a short period of time we’ve seen some of our rankings improve 30+ spots. 
                                        The links are solid and are posted on quality websites. We’ve been very impressed.
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <p class="title is-5">Name: Skyler Malley</p>
                                    <p class="title is-5">Company: Firestarter</p>
                                    <p class="title is-5">Title: President</p>
                                    <div class="has-text-centered">
                                        It has been great working with the Vazoola team.  
                                        I’ve worked with many other link building companies in the past but none of them were able to deliver quality links at as low of a cost as Vazoola. 
                                        We brought a small test budget to them and found we were able to increase margins on links by 40%! 
                                        We’ve since grown our agency much faster than expected with Vazoola as our only partner for links. 
                                        Their white label link building service has really changed the game for us.
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <p class="title is-5">Name: AJ Wurtz</p>
                                    <p class="title is-5">Company: Nu Image Medical</p>
                                    <p class="title is-5">Title: SEO Specialist</p>
                                    <div class="has-text-centered">
                                        We have been working with Vazoola for over a year now and have seen our organic traffic increase exponentially since hiring them. 
                                        Their “Bounty Express” has been delivering great backlinks at prices within are budget. I would highly recommend testing them out. 
                                    </div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                        </swiper>
                    </div>
                </div>
            </section>

            <section class="grow-your-brand">
        		<div class="container">
                    <div class="headline">
                        <h1 class="h1-as-h2">Why we're different...</h1>
                        <hr class="light-blue">
                    </div>

					<div class="columns">
                        <div class="column is-5">
                            <p>
                                We're not your average link building and content creation company. We know how important it is to build high quality
                                links and content, and we understand all of the common challenges and pain points facing marketers.
                                Here at Vazoola, we have been there, and we set out to develop a real solution that provides agencies and brands the ability to sidestep these obstacles so that
                                they can focus on growing.
                            </p>
                            <p>
                                We have now supported thousands of agencies and brands to successfully enhance their digital presence.
                                We AID brands to Assess their specific heartburns and rankings, Identify the best areas for digital leverage, and Deploy our Bounty software and network of over 100,000 influencers 
                                to deliver long-lasting results. Bounty Express is your secret weapon in the marketing game.

                            </p>
        				</div>
                        <div class="column">
        					<img src="/images/compair.png" alt="Grow">
        				</div>
                    </div>
        		</div>
        	</section>


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
import Animated from 'animated-number-vue'
import { Swiper, SwiperSlide, directive, Pagination, Mousewheel, Autoplay } from 'vue-awesome-swiper'
import "swiper/css/swiper.css";

export default {
    components: {
        NavBar,
        FooterBar,
        PostsHero,
        ContactForm,
        ContactModal,
        Animated,
        Swiper,
        SwiperSlide,
        Pagination, Mousewheel, Autoplay
    },
    directives: {
        swiper: directive
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
            displayLinks: 1492002,
            displayAdvertisers: 10990,
            displayYears: 10,
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                autoplay: {
                    delay: 4000
                },
                slidesPerView: 2,
                spaceBetween: 50,
                autoHeight: true
            }
        }
    },
    methods: {
        numberFormat(value){
            return parseInt(value).toLocaleString()
        },
        yearFormat(value){
            return parseInt(value)
        },
        onSwiper(swiper){
            console.log(swiper)
        },
        onSlideChange(){
            console.log('slide change')
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted(){
        //this.$refs.mySwiper.$swiper.autoplay.start()
        console.log(this.swiper)
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
    },
}
</script>
