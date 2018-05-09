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
                          <img src="/images/home-hero-img-1.png" alt="Hero Image">
                      </div>
                      <div class="column">
                          <div class="hero-text">
                              <h2>Streamline the process.</h2>
                              <hr class="pink" />
                              <p class="subtitle">Generate better content and links in less time</p>
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
                              <h2>Your Agency & Vazoola</h2>
                              <hr class="blue" />
                          </div>
                      </div>
                  </div>
                  <div class="columns">
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/custom_proposals.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Custom Proposals</h4>
                                  <div class="desc">Pick from a curated list of influencers that match your niche and budget</div>
                              </div>
                          </div>
                      </div>
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/create-icon.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Content Control</h4>
                                  <div class="desc">Purchase high quality articles from our writers or upload your own content</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="columns">
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/scale_your_agency.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Scale Your Agency</h4>
                                  <div class="desc">Purchase high quality articles from our writers, or upload your own original content</div>
                              </div>
                          </div>
                      </div>
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/track-icon.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Track Your Efforts</h4>
                                  <div class="desc">Receive updates in real time, every time a new placement goes live.</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="columns">
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/white_label_services.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">White Label Service</h4>
                                  <div class="desc">Export spreadsheets of completed campaigns and send them to your client’s.</div>
                              </div>
                          </div>
                      </div>
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="/images/complete_transparency.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Complete Transparency</h4>
                                  <div class="desc">Know exactly where your placement will go live and for what cost.</div>
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
                  <div class="columns">
                      <div class="column">
                          <h2 class="title is-1">How Vazoola works.</h2>
                      </div>
                  </div>
                  <div class="columns">
                      <div class="column is-paddingless is-6 is-offset-3">
                        <nav class="level is-mobile">
                            <a class="level-item has-text-centered button has-text-weight-semibold is-rounded is-link"
                                @click="step = 0"
                                :class="{ 'is-outlined' : step !== 0 }">
                                Step 1
                            </a>
                            <a class="level-item has-text-centered button has-text-weight-semibold is-rounded is-link"
                                @click="step = 1"
                                :class="{ 'is-outlined' : step !== 1 }">
                                Step 2
                            </a>
                            <a class="level-item has-text-centered button has-text-weight-semibold is-rounded is-link"
                                @click="step = 2"
                                :class="{ 'is-outlined' : step !== 2 }">
                                Step 3
                            </a>
                            <a class="level-item has-text-centered button has-text-weight-semibold is-rounded is-link"
                                @click="step = 3"
                                :class="{ 'is-outlined' : step !== 3 }">
                                Step 4
                            </a>
                        </nav>
                      </div>
                  </div>
                  <div class="slide-wrap">
                      <div class="slide-mask">
                          <ul :style="slideOffset" class="slide-group">
                              <li class="slide">
                                  <div class="columns">
                                      <div class="column">
                                          <img src="/images/slider-1-img.png" alt="">
                                      </div>
                                      <div class="column">
                                          <div class="headline">
                                              <h2>Create Client Campaign</h2>
                                              <hr />
                                          </div>
                                          <p>Outline your goals as an agency with us, request custom proposals for clients, and start creating content!</p>
                                          <div class="slider-list">
                                              <ul>
                                                  <li><span>Choose from blog posts, social posts, video posts, or any combo.</span></li>
                                                  <li><span>Set your estimated budget and number of posts needed.</span></li>
                                                  <li><span>Use filters to help us lock in on the metrics that matter to you.</span></li>
                                                  <li><span>Provide goals and any key performance indicator’s.</span></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                              <li class="slide">
                                  <div class="columns">
                                      <div class="column">
                                          <img src="/images/slider-2-img.png" alt="">
                                      </div>
                                      <div class="column">
                                          <div class="headline">
                                              <h2>View Proposal</h2>
                                              <hr />
                                          </div>
                                          <p>As an agency, this is where you access custom-tailored blog, social, and video proposals. This includes all influencers relevant to your campaign.</p>
                                          <div class="slider-list">
                                              <ul>
                                                  <li><span>Evaluate influencer recommendations custom picked for you.</span></li>
                                                  <li><span>Browse influencer’s website, social channel, and or video channel.</span></li>
                                                  <li><span>Review website/social channel data and price to complete the job.</span></li>
                                                  <li><span>Select influencers for your campaign. </span></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                              <li class="slide">
                                  <div class="columns">
                                      <div class="column">
                                          <img src="/images/slider-3-img.png" alt="">
                                      </div>
                                      <div class="column">
                                          <div class="headline">
                                              <h2>Enter Campaign Details</h2>
                                              <hr />
                                          </div>
                                          <p>As you enter the pre-cart &amp; cart phase, review the job details for each of the selected influencers. Simply compile your order for check out and go live!</p>
                                          <div class="slider-list">
                                              <ul>
                                                  <li><span>Input all relevant campaign details ie: influencer instructions, post/link requirements, etc.</span></li>
                                                  <li><span>Choose source of content: Vazoola writers, content library, or influencer.</span></li>
                                                  <li><span>Process multiple campaign orders simultaneously.</span></li>
                                                  <li><span>Review campaign details on cart page, confirm payment, and checkout. </span></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                              <li class="slide">
                                  <div class="columns">
                                      <div class="column">
                                          <img src="/images/slider-4-img.png" alt="">
                                      </div>
                                      <div class="column">
                                          <div class="headline">
                                              <h2>Monitoring Placements</h2>
                                              <hr />
                                          </div>
                                          <p>Sit back, and watch your campaigns in action. Our team will take care of the rest.</p>
                                          <div class="slider-list">
                                              <ul>
                                                  <li><span>Examine and approve pending content.</span></li>
                                                  <li><span>View completed and pending placements in real time.</span></li>
                                                  <li><span>Receive daily notifications of campaign progress.</span></li>
                                                  <li><span>Export spreadsheets of campaign details, white label them, and send out to clients. </span></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>

                      <div class="slide-nav">
                          <ul>
                              <li @click="step = 0"
                                class="bullet"
                                :class="{ 'current' : step == 0 }"></li>

                              <li @click="step = 1"
                                class="bullet"
                                :class="{ 'current' : step == 1 }"></li>

                              <li @click="step = 2"
                                class="bullet"
                                :class="{ 'current' : step == 2 }"></li>

                              <li @click="step = 3"
                                class="bullet"
                                :class="{ 'current' : step == 3 }"></li>
                          </ul>
                      </div>
                  </div>

              </div>
            </section>
            <!-- end: How Vazoola works. -->

            <!-- start: Grow Your Brand -->
            <section class="section grow-your-brand inside">
        		<div class="container">
                    <div class="headline">
                        <h2>Grow your agency.</h2>
                        <hr class="light-blue">
                    </div>

					<div class="columns is-gapless">
                        <div class="column is-6">
                            <p>
                                Link building and influencer marketing are difficult and time-consuming, but essential to SEO and growing your clients brand.
                                At Vazoola, you can streamline link building and influencer marketing all-in-one place.
                                Let us worry about link acquisitions and running social campaigns for your clients, so you can focus your efforts elsewhere.
                            </p>
                            <p>
                                Our self-serve or managed service platform, allows you to scale content creation for any number of clients, in any industry.
                                We offer reduced rates, white label capabilities, training and education, phone support, and detailed reports.
                                Our technology was created with agencies in mind.
                            </p>
                            <p class="text-center">
                                <button @click="showModal = true" class="button is-primary">Find Out How</button>
                            </p>
        				</div>
                        <div class="column">
        					<img src="/images/grow-img.png" alt="Grow">
        				</div>
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

export default {
  components: {
      NavBar,
      FooterBar,
      PostsHero,
      ContactForm,
      ContactModal
  },

  data() {
      return {
          step: 0,
          showModal: false,
      }
  },
  computed: {
      slideOffset() {
          return {
              top: '-' + this.step + '00%'
          }
      }
  },

  head () {
      return {
          title: "Vazoola for Agencies Serious About Scalability | Vazoola",
          meta: [
              { hid: 'description', name: 'description', content: 'Streamline influencer marketing and link building all-in-one place. You can scale content creation for any number of clients, in any industry. Save time and money by using our platform designed for agencies. Our 100,000+ influencers are already registered and ready to work.' },
              { hid: 'keywords', name:'keywords', content: 'Content Marketing for Agencies, Link Building for Agencies, Influencer Marketing for Agencies' },
              { hid: 'twitter:card', name:'twitter:card', content: "summary_large_image" },
              { hid: 'twitter:site', name:'twitter:site', content: "@vazoola" },
              { hid: 'twitter:creator', name:'twitter:creator', content: "@vazoola" },
              { hid: 'twitter:image', name:'twitter:image', content: 'https://www.vazoola.com/images/home-hero-img-1.png' },
              { hid: 'og:image', name:'og:image', content: 'https://www.vazoola.com/images/home-hero-img-1.png' },
          ]
      }
  }

}
</script>
