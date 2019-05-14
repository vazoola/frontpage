<template>
  <div>
    <nav-bar/>
    <section class="section company-hero">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="hero-text">
              <h2>Pricing</h2>
              <hr class="blue">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section how-we-work inside pt-2">
      <div class="container">
        <h2 class="title is-2 has-text-centered">
          <img style="cursor:pointer;" src="../static/images/click_to_watch_video.jpg" @click="showModal = true" />
        </h2>
        <div class="pricing-table">
          <div class="pricing-plan">
            <div class="plan-header">Free Account</div>
            <div class="plan-price">
              <span class="plan-price-amount">
                Free
              </span>
            </div>
            <div class="plan-description has-text-centered">
                Looking to test out our services, but not sure if it's the right fit yet? Start with a Free Account.
            </div>
            <div class="plan-items">
              <div class="plan-item">1 Active Campaign</div>
              <div class="plan-item">Full Transparency</div>
              <div class="plan-item">Predetermined Rates</div>
              <div class="plan-item">White Label Capability</div>
            </div>
            <div class="plan-footer">
              <a href="https://app.vazoola.com/register/#/free" class="button is-fullwidth">Get Started</a>
            </div>
          </div>
          <div class="pricing-plan is-warning">
            <div class="plan-header">Managed Account</div>
            <div class="plan-price">
              <span class="plan-price-amount">
                <span class="plan-price-currency">$</span>149
              </span>/month
            </div>
            <div class="plan-description has-text-centered">
                Recommended for agencies and brands looking for a completely hands-off approach. Let us handle the dirty work for you.
            </div>
            <div class="plan-items">
              <div class="plan-item">TBD Active Campaigns</div>
              <div class="plan-item">Full Transparency</div>
              <div class="plan-item">Predetermined Rates</div>
              <div class="plan-item">White Label Capability</div>
            </div>
            <div class="plan-footer">
              <a href="https://app.vazoola.com/register/#/managed" class="button is-fullwidth">Get Started</a>
            </div>
          </div>
          <div class="pricing-plan is-primary">
            <div class="plan-header">Pro Account</div>
            <div class="plan-price">
              <span class="plan-price-amount">
                <span class="plan-price-currency">$</span>349
              </span>/month
            </div>
            <div class="plan-description has-text-centered">
                Recommended for small to medium size agencies and brands looking for a hands-on approach with marketplace access.
            </div>
            <div class="plan-items">
              <div class="plan-item">20 Active Campaigns</div>
              <div class="plan-item">List Creation</div>
              <div class="plan-item">Discounted Influencer Pricing</div>
              <div class="plan-item">Influencer Marketplace Access</div>
            </div>
            <div class="plan-footer">
              <a href="https://app.vazoola.com/register/#/pro" class="button is-fullwidth">Get Started</a>
            </div>
          </div>
          <div class="pricing-plan is-danger">
            <div class="plan-header">Enterprise Account</div>
            <div class="plan-price">
              <span class="plan-price-amount">
                Custom
              </span>
            </div>
            <div class="plan-description has-text-centered">
                Recommended for medium to large agencies and brands looking for a hands-on approach with full access to our services and unlimited campaigns.
            </div>
            <div class="plan-items">
              <div class="plan-item">Unlimited Campaigns</div>
              <div class="plan-item">Unlimited Lists</div>
              <div class="plan-item">Discounted Influencer Pricing</div>
              <div class="plan-item">Influencer Marketplace & Bounty Access</div>
            </div>
            <div class="plan-footer">
              <a href="https://app.vazoola.com/register/#/enterprise" class="button is-fullwidth">Get Started</a>
            </div>
          </div>
        </div>
        <div class="mb-3 mt-3">
          <hr>
        </div>
            <div style="overflow-x: auto;">
              <table class="table is-fullwidth is-bordered is-striped">
                <thead>
                  <tr>
                    <th class="is-italic has-text-primary">Pricing</th>
                    <th class="has-text-centered">Free Account</th>
                    <th class="has-text-centered">Managed Account</th>
                    <th class="has-text-centered">Pro Account</th>
                    <th class="has-text-centered">Enterprise Account</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Monthly</strong></td>
                    <td class="has-text-centered">Free</td>
                    <td class="has-text-centered">$149</td>
                    <td class="has-text-centered">$349</td>
                    <td class="has-text-centered">Custom</td>
                  </tr>
                  <tr>
                    <td><strong>6 Months (paid in full)</strong></td>
                    <td class="has-text-centered">N/A</td>
                    <td class="has-text-centered">15% Discount</td>
                    <td class="has-text-centered">15% Discount</td>
                    <td class="has-text-centered">TBD</td>
                  </tr>
                  <tr>
                    <td><strong>Yearly (paid in full)</strong></td>
                    <td class="has-text-centered">N/A</td>
                    <td class="has-text-centered">20% Discount</td>
                    <td class="has-text-centered">20% Discount</td>
                    <td class="has-text-centered">TBD</td>
                  </tr>
                  <tr>
                    <td class="is-italic has-text-primary has-text-weight-bold" style="vertical-align: middle;">
                      Benefits
                    </td>
                    <td colspan="4">
                      
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Active Campaigns</strong></td>
                    <td class="has-text-centered">1</td>
                    <td class="has-text-centered">TBD</td>
                    <td class="has-text-centered">20</td>
                    <td class="has-text-centered">Unlimited</td>
                  </tr>
                  <tr>
                    <td><strong>Free Demo & Exploratory Call</strong></td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Predetermined Rates (No Negotiation Necessary)</strong></td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Content Library</strong></td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Blog, Social, and Video Channel Data Provided</strong></td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Review & Approve Content</strong></td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Campaign Tracking</strong></td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Full Transparency</strong></td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Influencer Pricing</strong></td>
                    <td class="has-text-centered">Full</td>
                    <td class="has-text-centered">Full</td>
                    <td class="has-text-centered">Discounted 15%</td>
                    <td class="has-text-centered">Discounted 20%+</td>
                  </tr>
                  <tr>
                    <td><strong>Dedicated Account Manager</strong></td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Exportable Campaign Report</strong></td>
                    <td class="has-text-centered">
                      <img src="../assets/times-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                  </tr>
                  <tr>
                    <td><strong>White Label Capability</strong></td>
                    <td class="has-text-centered">
                      <img src="../assets/times-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                  </tr>
                  <tr>
                    <td><strong>List Creation</strong></td>
                    <td class="has-text-centered">N/A</td>
                    <td class="has-text-centered">N/A</td>
                    <td class="has-text-centered">3 Per Campaign</td>
                    <td class="has-text-centered">Unlimited</td>
                  </tr>
                  <tr>
                    <td><strong>Access to over 100,000 Opted-in Influencers</strong></td>
                    <td class="has-text-centered">
                      <img src="../assets/times-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/times-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                    </td>      
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <a @click="showMarketplace = true">Influencer Marketplace Access &nbsp; <img class="icon is-small" src="../static/images/media-pict-camera.png" /></a>
                      </strong>
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/times-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/times-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                      <br>Full
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                      <br>Full
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <a @click="showPostBounty = true">Post Bounty Access &nbsp; <img class="icon is-small" src="../static/images/media-pict-camera.png" /></a>
                      </strong>
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/times-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      Limited
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/times-circle.svg" alt="" class="table-icon">
                    </td>
                    <td class="has-text-centered">
                      <img src="../assets/check-circle.svg" alt="" class="table-icon">
                      <br>Full
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="has-text-centered">
                      <a href="https://app.vazoola.com/register/#/free" class="button is-primary is-small">Get Started</a>
                    </td>
                    <td class="has-text-centered">
                      <a href="https://app.vazoola.com/register/#/managed" class="button is-primary">Get Started</a>
                    </td>
                    <td class="has-text-centered">
                      <a href="https://app.vazoola.com/register/#/pro" class="button is-primary">Get Started</a>
                    </td>
                    <td class="has-text-centered">
                      <a href="https://app.vazoola.com/register/#/enterprise" class="button is-primary">Get Started</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mb-2">
              <hr>
            </div>
            <div class="box has-background-light">
              <p class="is-size-4 callout">Whether you're a brand or agency, want to be hands-on or hands-off, need white-label capability or not, we have a plan for you. Our platform and influencer partnerships gives you the ability to streamline the process of running Link Building and Influencer Marketing campaigns at any scale. If you're an Agency, our White Label capabilities make it easy to prepare reports of completed campaigns and send them out to your clients. Stop suffering through the painful outreach process, and let us take that off your plate with our proven process.</p>
          </div>  
      </div>
    </section>
    <footer-bar/>
    <new-services :active.sync="showModal" />
    <post-bounty :active.sync="showPostBounty" />
    <marketplace :active.sync="showMarketplace" />
  </div>
</template>
<script>
import NavBar from "~/components/NavBar.vue";
import FooterBar from "~/components/FooterBar.vue";
import NewServices from "~/components/NewServices.vue";
import PostBounty from "~/components/PostBounty.vue";
import Marketplace from "~/components/Marketplace.vue";

export default {
  components: {
    NavBar,
    FooterBar,
    NewServices,
    PostBounty,
    Marketplace
  },
  head () {
    return {
        title: "Link Building Services Pricing for Agencies and Brands: Managed or Self-Serve",
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
        showPostBounty: false,
        showMarketplace: false
    }
  },

  async asyncData({ params }) {
    var Prismic = require("prismic-javascript");

    var compileHtml = function(data, props) {
      var PrismicDOM = require("prismic-dom");
      for (var k in props) {
        data[props[k]] = PrismicDOM.RichText.asHtml(data[props[k]]);
      }
      return data;
    };

    return Prismic.getApi("https://vazoola.cdn.prismic.io/api/v2").then(
      function(api) {
        var api = api;
        return api
          .getSingle("company")
          .then(function(response) {
            return compileHtml(response.data, [
              "main_paragraph",
              "second_paragraph"
            ]);
          })
          .then(function(page) {
            return api
              .query([Prismic.Predicates.at("document.type", "jobs")])
              .then(function(response) {
                return {
                  page: page,
                  jobs: response.results
                };
              });
          });
      }
    );
  },
};
</script>
<style lang="scss" scoped>
    .pricing-table {
        display: grid;
        grid-template-columns: 1fr;
    }
    @media screen and (min-width: 769px) {
        .pricing-table {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (min-width: 1024px) {
        .pricing-table {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media screen and (min-width: 1216px) {
        .pricing-table {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
.plan-description {
    font-size: 0.85rem;
    padding: 0.7rem;
    border-top: 1px solid #d1d1d1;
    border-bottom: 1px solid #d1d1d1;
height: 150px;
align-content: center;
align-items: center;
align-self: center;
display: flex;
}
td {
  vertical-align: middle;
}
.plan-price {
  height: 120px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}
.table-icon {
  width: 1.5rem;
}
.has-background-light {
  background-color: hsl(0, 0%, 96%);
}
.callout { 
  line-height: 2.2rem;
} 
</style>
