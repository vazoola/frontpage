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
        <div class="columns">
          <div class="column">
            <p>Whether you're a brand or agency, want to be hands-on or hands-off, need white-labe capability or not, we have a plan for you. Our platform and influencer partnerships gives you the ability to streamline the process of running Link Building and Influencer Marketing campaigns at any scale. If you're an Agency, our White Label capabilities make it easy to prepare reports of completed campaigns and send them out to your clients. Stop suffering through the painful outreach process, and let us take that off your plate with our proven process.</p>
          </div>
        </div>

        <div class="mb-3">
          <hr>
        </div>

        <h2 class="title is-2 has-text-centered">Our Plans</h2>

        <div class="pricing-table">
          <div class="pricing-plan">
            <div class="plan-header">Free Account</div>
            <div class="plan-price">
              <span class="plan-price-amount">
                Free
              </span>
            </div>
            <div class="plan-description">
                Looking to test out our services, but not sure if it's the right fit yet? Start with a Free Account.
            </div>
            <div class="plan-items">
              <div class="plan-item">Blog, Social, and Video Channel Data Provided</div>
              <div class="plan-item">100 Domains</div>
              <div class="plan-item">-</div>
              <div class="plan-item">-</div>
            </div>
            <div class="plan-footer">
              <button class="button is-fullwidth">Get Started</button>
            </div>
          </div>

          <div class="pricing-plan is-warning">
            <div class="plan-header">Managed Account</div>
            <div class="plan-price">
              <span class="plan-price-amount">
                <span class="plan-price-currency">$</span>149
              </span>/month
              <p class="is-size-7 is-marginless">15% Discount 6 Months (paid in full)</p>
              <p class="is-size-7 is-marginless">20% Discount Yearly (paid in full)</p>
            </div>
            <div class="plan-description">
                Are you an agency or brand that needs help with link building or influencer marketing, but wants more of a hands-off approach? A Managed Account will give you everything needed to be successful without having to do the work.
            </div>

            <div class="plan-items">
              <div class="plan-item">Blog, Social, and Video Channel Data Provided</div>
              <div class="plan-item">25 Domains</div>
              <div class="plan-item">1TB Bandwidth</div>
              <div class="plan-item">-</div>
            </div>
            <div class="plan-footer">
              <button class="button is-fullwidth">Get Started</button>
            </div>
          </div>

          <div class="pricing-plan is-active">
            <div class="plan-header">Pro Account</div>
            <div class="plan-price">
              <span class="plan-price-amount">
                <span class="plan-price-currency">$</span>349
              </span>/month
                <p class="is-size-7 is-marginless">15% Discount 6 Months (paid in full)</p>
                <p class="is-size-7 is-marginless">20% Discount Yearly (paid in full)</p>
            </div>
            <div class="plan-description">
                Are you an small to medium size agency or brand, and want the ability to search the marketplace and send jobs directly to influencers on your own? A pro account will give you everything you need.
            </div>

            <div class="plan-items">
              <div class="plan-item">Blog, Social, and Video Channel Data Provided</div>
              <div class="plan-item">50 Domains</div>
              <div class="plan-item">1TB Bandwidth</div>
              <div class="plan-item">100 Email Boxes</div>
            </div>
            <div class="plan-footer">
              <button class="button is-fullwidth">Get Started</button>
            </div>
          </div>

          <div class="pricing-plan is-danger">
            <div class="plan-header">Enterprise Account</div>
            <div class="plan-price">
              <span class="plan-price-amount">
                Custom
              </span>
            </div>
            <div class="plan-description">
                Are you a medium to large agency or brand, and want the ability to create unlimited campaigns with access to our full array of services including marketplace and post bounty access? An Enterprise Account is the right option for you.
            </div>
            <div class="plan-items">
              <div class="plan-item">Blog, Social, and Video Channel Data Provided</div>
              <div class="plan-item">100 Domains</div>
              <div class="plan-item">1TB Bandwidth</div>
              <div class="plan-item">1000 Email Boxes</div>
            </div>
            <div class="plan-footer">
              <button class="button is-fullwidth">Get Started</button>
            </div>
          </div>
        </div>

        <div class="mb-3 mt-3">
          <hr>
        </div>
      </div>
    </section>

    <footer-bar/>
  </div>
</template>
<script>
import NavBar from "~/components/NavBar.vue";
import FooterBar from "~/components/FooterBar.vue";

export default {
  components: {
    NavBar,
    FooterBar
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

  head() {
    return {
      title: "Vazoola | About the Company",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We are a SEO (Search Engine Optimization) and Social Media Marketing Company that connects brands and agencies with the web’s top influencers through Content Marketing, Social Media, Videos, and more."
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Influencer Marketing Platform, Link Building Platform, Content Marketing Platform"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        { hid: "twitter:site", name: "twitter:site", content: "@vazoola" },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@vazoola"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://www.vazoola.com/images/logo.png"
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://www.vazoola.com/images/logo.png"
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Vazoola | About the Company"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "We are a SEO (Search Engine Optimization) and Social Media Marketing Company that connects brands and agencies with the web’s top influencers through Content Marketing, Social Media, Videos, and more."
        }
      ]
    };
  }
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
}

</style>
