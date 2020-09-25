<template>
<div>
    <!-- start: NavBar -->
    <nav-bar />
    <!-- end: NavBar -->

            <!-- start: Hero -->
            <section class="section home-hero-1">
              <div class="container">
                  <div class="columns">
                      <div class="column hero-img">
                          <img src="/images/updated_hero_img.png" alt="Hero Image">
                      </div>
                      <div class="column">
                          <div class="hero-text">
                              <h1 class="h1-as-h2">Grow Your Brand</h1>
                              <hr class="pink" />
                              <p class="subtitle">Fuel your marketing efforts by securing high quality backlinks without the usual pain points. Our Bounty software gives you immediate access to over 100,000 influencers that are ready to promote your brand.</p>
                              <p class="text-center"><a @click="showModal = true" class="button is-primary">Request Proposal</a></p>
                              <p class="btn-text">No contract necessary</p>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
            <!-- end: Hero -->

            <!-- start: How We Work -->
            <section class="section how-we-work inside">
              <div class="container">
                  <div class="columns">
                      <div class="column">
                          <div class="headline">
                              <h1 class="h1-as-h2">Why Vazoola</h1>
                              <hr class="blue" />
                          </div>
                      </div>
                  </div>
                  <div class="columns">
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/custom_proposals.png" alt="Custom Proposals">
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Cutting-Edge Software</h4>
                                  <div class="desc">We give you the tools to simplify the process, while maximizing the results from your budget.</div>
                              </div>
                          </div>
                      </div>
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/create-icon.png" alt="Content Control">
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Unrivaled Turnaround Times</h4>
                                  <div class="desc">Easily complete campaigns in under 20 days, but with the ability to do it in less than a week.</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="columns">
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/scale_your_agency.png" alt="Scale Your Agency">
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Price Setting</h4>
                                  <div class="desc">No more negotiating. You se the price points you need, and we'll utilize our software to deliver.</div>
                              </div>
                          </div>
                      </div>
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/track-icon.png" alt="Track Your Efforts">
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Content Control</h4>
                                  <div class="desc">We have hundreds of writers trained to deliver articles that follow your specific instructions.</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="columns">
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/white_label_services.png" alt="White Label Service">
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Unlimited Reach</h4>
                                  <div class="desc">Tap into our marketplace of over 100k publisher relationships and growing. We cover all verticals, including more specialized niches.</div>
                              </div>
                          </div>
                      </div>
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/complete_transparency.png" alt="Complete Transparency">
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Flexibility</h4>
                                  <div class="desc">You choose the type of account that matches your needs. Run campaigns on your own with our self-serve platform, or let us manage everything for you.</div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
            </section>
            <!-- end: How We Work -->

            <!-- start: How Vazoola works. -->
            <section class=" how-vazoola-works">
                <div class="container">
                    <div class="headline">
                        <h1 class="h1-as-h2">A new way to build links.</h1>
                        <hr class="light-blue">
                    </div>

					<div class="columns">
                        <div class="column is-5">
                            <p class="is-size-6">
                                Link building is essential if you want to improve your search rankings and increase organic search traffic. Unfortunately, running successful link building campaigns can be difficult, time-consuming, and often unsuccessful. Vazoola is not your average link building company. We remove the obstacles and streamline the whole process so you can focus on growing your brand in other ways. Let us worry about link acquisitions. We’ve built millions of links over the last 10 years, and our software is literally “plug & play”.
                            </p>
                            <p class="is-size-6">
                                Join thousands of brands that have already benefited from our link building services to improve organic traffic and rankings, reduce link acquisition costs, increase profit margin, and much more. There’s no long-term contract or minimum spend required. Create an account, or request a demo to get started today.
                            </p>
        				</div>
                        <div class="column">
        					<img src="/images/succeed.png" alt="Grow">
        				</div>
                    </div>
        		</div>
            </section>
            <!-- end: How Vazoola works. -->

            <!-- start: Grow Your Brand -->
            <section class="section grow-your-brand inside">
        		<div class="container">
                    <div class="headline">
                        <h1 class="h1-as-h2">Some of our Agency Testimonials</h1>
                        <hr class="light-blue">
                    </div>

					<div class="case-study-container">
                        <swiper ref="mySwiper" :options="swiperOptions">
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <div class="columns">
                                        <div class="column is-2">
                                            <img src="/images/circle-cropped_aj.png" alt="Profile Pic" />
                                        </div>
                                        <div class="column is-8">
                                            <p class="title is-5">Name: AJ Wurtz</p>
                                            <p class="title is-5">Company: Nu Image Medical</p>
                                            <p class="title is-5">Title: SEO Specialist</p>
                                            <div class="has-text-centered">
                                                We have been working with Vazoola for over a year now and have seen our organic traffic increase exponentially since hiring them. 
                                                Their “Bounty Express” has been delivering great backlinks at prices within are budget. I would highly recommend testing them out. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <div class="columns">
                                        <div class="column is-2">
                                            <img src="/images/circle-cropped_jon.png" alt="Profile Pic" />
                                        </div>
                                        <div class="column is-8">
                                            <p class="title is-5">Name: Jon Bingham</p>
                                            <p class="title is-5">Company: BKA Content</p>
                                            <p class="title is-5">Title: Director of Marketing</p>
                                            <div class="has-text-centered">
                                                For the past few months we’ve been using Vazoola for link building to increase our rankings on some of the more difficult keywords we target. 
                                                In just a short period of time we’ve seen some of our rankings improve 30+ spots. 
                                                The links are solid and are posted on quality websites. We’ve been very impressed.
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <div class="columns">
                                        <div class="column is-2">
                                            <img src="/images/circle-cropped_dellon.png" alt="Profile Pic" />
                                        </div>
                                        <div class="column is-8">
                                            <p class="title is-5">Name: Dellon S.</p>
                                            <p class="title is-5">Company: Vista College</p>
                                            <p class="title is-5">Title: Digital Marketing Director</p>
                                            <div class="has-text-centered">
                                                Every digital marketer knows how important link building is to increasing organic rankings, but finding the time to do it successfully is another story. 
                                                That’s why it can be helpful to use a link building company that has the experience and resources to execute your strategy.  
                                                I’ve been utilizing Vazoola for several years to help strategically build links from high level domains, and it’s been very effective. They are not your typical link builder. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            
                            <div class="swiper-pagination" slot="pagination"></div>
                            <div class="swiper-button-prev prevNext" slot="button-prev" @click="prev()"></div>
                            <div class="swiper-button-next prevNext" slot="button-next" @click="next()"></div>
                        </swiper>
                    </div>
        		</div>
        	</section>
            <!-- end: Grow Your Brand -->

          	<!-- start: Let’s Get Started -->
          	<contact-form />
          	<!-- end: Let’s Get Started -->

            <!-- start: Let’s Get Started -->
          	<contact-modal :active.sync="showModal" />
          	<!-- end: Let’s Get Started -->

          	<!-- start: Footer -->
          	<footer-bar />
          	<!-- end: Footer -->
</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import ContactModal from '~/components/ContactModal.vue'
import ContactForm from '~/components/ContactForm.vue'
import PostsHero from '~/components/PostsHero.vue'
import { Swiper, SwiperSlide, directive, Pagination, Mousewheel, Autoplay } from 'vue-awesome-swiper'
import "swiper/css/swiper.css";

export default {
  components: {
        NavBar,
        FooterBar,
        PostsHero,
        ContactForm,
        ContactModal,
        Swiper,
        SwiperSlide,
        Pagination, Mousewheel, Autoplay
  },

  data() {
      return {
          step: 0,
          showModal: false,
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
                slidesPerView: 1,
                spaceBetween: 50,
                autoHeight: true
            },
      }
  },
  methods: {
        next(){

        },
        prev(){

        },
  },
  computed: {
        slideOffset() {
            return {
                top: '-' + this.step + '00%'
            }
        },
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
  },

  head () {
      return {
          title: "Vazoola for Agencies Serious About ScalabilityBrands | Vazoola",
          meta: [
              { hid: 'description', name: 'description', content: 'Streamline influencer marketing and link building all-in-one place. You can scale content creation for any number of clients, in any industry. Save time and money by using our platform designed for agencies. Our 100,000+ influencers are already registered and ready to work.' },
              { hid: 'keywords', name:'keywords', content: 'Content Marketing for Brands, Link Building for Brands, Influencer Marketing for Brands' },
              { hid: 'twitter:card', name:'twitter:card', content: "summary_large_image" },
              { hid: 'twitter:site', name:'twitter:site', content: "@vazoola" },
              { hid: 'twitter:creator', name:'twitter:creator', content: "@vazoola" },
              { hid: 'twitter:image', name:'twitter:image', content: 'https://www.vazoola.com/images/home-hero-img-1.png' },
              { hid: 'og:image', name:'og:image', content: 'https://www.vazoola.com/images/home-hero-img-1.png' },
              { hid: 'og:title', name:'og:title', content: 'Vazoola for Agencies Serious About Scalability' },
              { hid: 'og:description', name:'og:description',  content: 'Streamline influencer marketing and link building all-in-one place. You can scale content creation for any number of clients, in any industry. Save time and money by using our platform designed for agencies. Our 100,000+ influencers are already registered and ready to work.' },
          ]
      }
  }

}
</script>
