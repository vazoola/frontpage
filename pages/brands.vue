<template>
<div>
    <!-- start: NavBar -->
    <nav-bar />
    <!-- end: NavBar -->

            <!-- start: Hero -->
            <section class="home-hero-1">
              <div class="container">
                  <div class="columns">
                      <div class="column hero-img">
                          <img src="images/home-hero-img-1.png" alt="Hero Image">
                      </div>
                      <div class="column">
                          <div class="hero-text">
                              <h2>Rise above local competition</h2>
                              <hr class="pink" />
                              <p class="subtitle">Close more deals using proven marketing strategies</p>
                              <p class="text-center"><a href="#" class="button is-primary">Request Demo</a></p>
                              <p class="btn-text">No contract necessary</p>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
            <!-- end: Hero -->

            <!-- start: How We Work -->
            <section class="how-we-work inside">
              <div class="container">
                  <div class="columns">
                      <div class="column">
                          <div class="headline">
                              <h2>Your Business & Vazoola</h2>
                              <hr class="blue" />
                          </div>
                      </div>
                  </div>
                  <div class="columns">
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="images/team-icon.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Easy to use platform</h4>
                                  <div class="desc">Manage search, social, and video campaigns all in one place</div>
                              </div>
                          </div>
                      </div>
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="images/save-time-icon.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Save More Time</h4>
                                  <div class="desc">Pick from a curated list of influencers that match your niche and budget</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="columns">
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="images/create-icon.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Create Content</h4>
                                  <div class="desc">Purchase high quality articles from our writers or upload your own content</div>
                              </div>
                          </div>
                      </div>
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="images/grow-icon.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Grow Your Business</h4>
                                  <div class="desc">Increase your brand awareness, improve search rankings, and deliver viral content.</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="columns">
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="images/track-icon.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Track your efforts</h4>
                                  <div class="desc">Receive updates in real time, every time a new placement goes live.</div>
                              </div>
                          </div>
                      </div>
                      <div class="column">
                          <div class="icon_box icon_position_left no_border">
                              <div class="image_wrapper">
                                  <img src="images/choose-icon.png" >
                              </div>
                              <div class="desc_wrapper">
                                  <h4 class="title">Choose Type of Service</h4>
                                  <div class="desc">Run campaigns and place orders on your own, or just ask us to do it for you.</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
            <!-- end: How We Work -->

            <!-- start: How Vazoola works. -->
            <section class="how-vazoola-works">
              <div class="container">
                  <div class="columns">
                      <div class="column">
                          <div class="headline">
                              <h2>How Vazoola works.</h2>
                          </div>
                      </div>
                  </div>
                  <div class="columns">
                      <div class="column">
                          <div class="slide-wrap">
                              <div class="slide-mask">
                                  <ul :style="slideOffset" class="slide-group">
                                      <li class="slide">
                                          <div class="columns">
                                              <div class="column">
                                                  <img src="images/slider-1-img.png" alt="">
                                              </div>
                                              <div class="column">
                                                  <div class="headline">
                                                      <h2>Create Campaign</h2>
                                                      <hr />
                                                  </div>
                                                  <p>Outline your goals as an brand with us, request custom proposals for clients, and start creating content!</p>
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
                                                  <img src="images/slider-2-img.png" alt="">
                                              </div>
                                              <div class="column">
                                                  <div class="headline">
                                                      <h2>View Proposal</h2>
                                                      <hr />
                                                  </div>
                                                  <p>As an brand, this is where you access custom-tailored blog, social, and video proposals. This includes all influencers relevant to your campaign.</p>
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
                                                  <img src="images/slider-3-img.png" alt="">
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
                                                          <li><span>Review and approve campaign details.</span></li>
                                                          <li><span>Confirm payment method and checkout. </span></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                      <li class="slide">
                                          <div class="columns">
                                              <div class="column">
                                                  <img src="images/slider-4-img.png" alt="">
                                              </div>
                                              <div class="column">
                                                  <div class="headline">
                                                      <h2>Track Progress</h2>
                                                      <hr />
                                                  </div>
                                                  <p>Sit back, and watch your campaigns in action. Our team will take care of the rest.</p>
                                                  <div class="slider-list">
                                                      <ul>
                                                          <li><span>Examine and approve pending content.</span></li>
                                                          <li><span>View completed and pending placements in real time.</span></li>
                                                          <li><span>Receive daily notifications of campaign progress.</span></li>
                                                          <li><span>Export spreadsheets of campaign details for your convenience. </span></li>
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
                  </div>
              </div>
            </section>
            <!-- end: How Vazoola works. -->

            <!-- start: Grow Your Brand -->
            <section class="grow-your-brand inside">
              <div class="container">
                  <div class="columns">
                      <div class="column">
                          <div class="headline">
                              <h2>Grow<br />your brand.</h2>
                              <hr class="light-blue" />
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum praesent luptatum.</p>
                              <p class="text-center"><a href="#" class="button is-primary">Find Out How</a></p>
                          </div>
                      </div>
                      <div class="column">
                          <img src="images/grow-img.png" alt="Grow">
                      </div>
                  </div>
              </div>
            </section>
            <!-- end: Grow Your Brand -->


          	<!-- end: Client Testimonials -->

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

  data() {
      return {
          step: 0,
      }
  },
  computed: {
      slideOffset() {
          return {
              top: '-' + this.step + '00%'
          }
      }
  }

}
</script>
