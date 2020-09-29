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
                              <h1 class="h1-as-h2">White Label Link Building.</h1>
                              <hr class="pink" />
                              <p class="subtitle">A truly scalable solution. With Bounty Express, secure better links at price points you determine, and our white label reporting makes it simple to provide proof of your efforts to clients. Setup takes minutes, and there is no limit on the number of clients you onboard into your account.</p>
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
                                  <h4 class="title">Infinite Reach</h4>
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
                                  <h4 class="title">No Limits</h4>
                                  <div class="desc">Build links for one client, or 100 clients. There is no limit to how many link campaigns you run simultaneously. Our platform was developed for this purpose.</div>
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
                            <p class="is-size-6" style="color: #1b1464;">
                                Whether you are managing link building in-house, or outsourcing to a vendor to handle it for you, there's a high likelihood you are searching for a better solution. In fact, many of the agencies we have helped were ready to give up on offering it as a service because it is too expensive, time-consuming, and more often than not, unsuccessful. Vazoola is not your average link building agency. We've developed an innovative platform that removes these pain points so you can be successful 100% of the time. Our Bounty technology, combined with over 100K publisher relationships, means you never have to worry about links again, no matter how many clients you have. And, with our white-label service, you'll get reports that you can easily add your branding to before sending our to clients. Let us show you the power of the Bounty Express. We’ve built millions of links over the last 10 years, and our software is literally “plug & play”. 
                            </p>
                            <p class="is-size-6" style="color: #1b1464;">
                                Join thousands of agencies that have already benefited from our white label link building services to scale link building, reduce link acquisition costs, increase profit margins, and much more. There’s no long-term contract or minimum spend required. Create an account, or request a demo to get started today.
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
                                            <img src="/images/circle-cropped_brian.png" alt="Profile Pic" />
                                        </div>
                                        <div class="column is-8">
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
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <div class="columns">
                                        <div class="column is-2">
                                            <img src="/images/circle-cropped_blank.png" alt="Profile Pic" />
                                        </div>
                                        <div class="column is-8">
                                            <p class="title is-5">Name: </p>
                                            <p class="title is-5">Company: Reputation Management Agency</p>
                                            <p class="title is-5">Title: Project Manager</p>
                                            <div class="has-text-centered">
                                                Link building is an important component of the strategy we implement for rebuilding the online reputation of our clients, but having the time or resources to do it successfully, is difficult. 
                                                It’s even harder to find a trustworthy link building company to outsource this work to. That’s why we were lucky to come across Vazoola  – we were able to agree on tiered pricing structure that made it easier to include link building in the packages we sell to clients. 
                                                This has helped us to produce better and more predictable results for clients, as well as to allow us to focus on growing our client base. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <div class="columns">
                                        <div class="column is-2">
                                            <img src="/images/circle-cropped_blank.png" alt="Profile Pic" />
                                        </div>
                                        <div class="column is-8">
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
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box swiper-box">
                                    <div class="columns">
                                        <div class="column is-2">
                                            <img src="/images/circle-cropped_skyler.png" alt="Profile Pic" />
                                        </div>
                                        <div class="column is-8">
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
          title: "White Label Link Building | Vazoola",
          meta: [
              { hid: 'description', name: 'description', content: 'Streamline influencer marketing and link building all-in-one place. You can scale content creation for any number of clients, in any industry. Save time and money by using our platform designed for agencies. Our 100,000+ influencers are already registered and ready to work.' },
              { hid: 'keywords', name:'keywords', content: 'Content Marketing for Agencies, Link Building for Agencies, Influencer Marketing for Agencies' },
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
