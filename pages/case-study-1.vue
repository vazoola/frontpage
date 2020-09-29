<template>
  <div>
    <nav-bar/>
    <section class="section company-hero">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="hero-text">
              <h1 class="h1-as-h2">Here is how we helped one of our clients with our revolutionary Bounty Express™</h1>
              <hr class="blue">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-large is-fullheight-with-navbar study-intro">
        <div class="container">
            <div class="hero-body">
                <div class="container is-fluid">
                    <h2 class="title">Small SEO Agency XYZ</h2>
                    <p class="is-size-4">Location: Florida</p>
                    <p class="is-size-4">Size: 8 Employees</p>
                    <p class="is-size-4">Annual Revenue: $1.2 million</p>

                </div>
            </div>
            <div class="mb-3 mt-3">
                <hr class="blue" style="text-align:center; margin: 0 auto;">
            </div>
        </div>
    </section>

    <section class="hero is-large">
      <div class="container">
        <div class="hero-body">
          <div class="container is-fluid">
            <p class="title is-size-5">
              “My name is Brian Smith and my company is XYZ SEO. I want to say what a pleasure it is working with the team at Vazoola. Casey and Andrew have developed a revolutionary link building process with the “Bounty Express”.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-large numbers-section">
        <div class="container">
          <div class="headline">
              <h3 class="h3">The Numbers</h3>
              <hr class="light-blue">
          </div>
          <div class="hero-body">
            <div class="container is-fluid">
              <p class="title is-size-5">XYZ agency was trying to handle link building in house for sixteen clients that pay $500 a month to receive five links each month, ultimately losing money on their efforts.</p>
              <ol>
                <li>Currently spending <span style="color: red; font-weight: bold;">$50,000+</span> per year on a full-time link-building specialist.</li>
                <li>Paying <span style="color: red; font-weight: bold;">$12,000</span> per year on content creation for SEO-friendly articles with in-content links.</li>
                <li>The ongoing search for blogs and negotiations with individual publishers to keep a fresh inflow of links for all sixteen clients resulted in roughly <span style="color: red; font-weight: bold;">$48,000</span> per year paid to publishers for just link placements.</li>
                <li>Total in house link building expense -- <span style="color: red;font-weight: bold;">$110,000</span>. Total revenue coming in from 16 clients <span style="color: green; font-weight:bold;">$96,000</span>.  Total loss is <span style="color: red;font-weight: bold;">$16,400</span>.</li>
              </ol>
            </div>
          </div>
        </div>
    </section>

    <section class="hero is-large solution-section">
      <div class="container">
        <div class="headline">
              <h3 class="h3">The Solution</h3>
              <hr class="light-blue">
          </div>
          <div class="hero-body">
            <div class="container is-fluid">
              <ol>
                <li>Bounty Express delivered 5 links for each client within 30 days at an average price of <span style="color: green; font-weight: bold;">$60</span>.</li>
                <li>Each link had a Domain Authority and Domain Rating of <span style="color: green; font-weight: bold;">30+</span>.</li>
                <li>The $60 average per link <span style="color: green; font-weight: bold;">included</span> content creation.</li>
                <li>There was an <span style="color: green; font-weight: bold;">immediate</span> boost to client rankings resulting in less client turnover.</li>
                <li>Decreased account manager workloads.</li>
                <li>XYZ was able use their savings towards advertising and sales.</li>
                <li>Within 2 to 3 months, XYZ revenue grew a minimum of <span style="color: green; font-weight: bold;">15%</span> each month for the first year.</li>
                <li>By June 2020, they grew to a team of <span style="color: green;font-weight: bold;">15</span> employees.</li>
              </ol>
            </div>
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
  head () {
    return {
        title: "Vazoola Case Study",
        meta: [
            { hid: 'description', name: 'description', content: 'With our Referral Program, you can easily build a passive income stream with little to no effort. You provide the introduction - we\'ll do the work of bringing them on board'},
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
    }
};
</script>
<style lang="scss" scoped>
.pricing-table {
  display: grid;
  grid-template-columns: 1fr;
}
.referrals-container {
  width: 100%;
}
@media screen and (min-width: 769px) {
  .pricing-table {
    grid-template-columns: 1fr 1fr;
  }
  .referrals-container {
    width: 50%;
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
.referrals-description {
  font-size: 0.85rem;
  padding: 0.7rem;
  height: 150px;
  align-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  position: relative;
}
.referrals-description[data-badge]:after {
  content: attr(data-badge);
  position: absolute;
  top: -20px;
  right: 43%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 16px;
  color: #ffffff;
  font-weight: 700;
  border: 3px solid #ffffff;
  padding: 16px;
  height: 25px;
  width: 25px;
  background: rgb(27, 20, 101);
  background: -moz-linear-gradient(
    0deg,
    rgb(27, 20, 101) 30%,
    rgb(0, 112, 187) 80%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgb(27, 20, 101) 30%,
    rgb(0, 112, 187) 80%
  );
  background: -o-linear-gradient(
    0deg,
    rgb(27, 20, 101) 30%,
    rgb(0, 112, 187) 80%
  );
  background: -ms-linear-gradient(
    0deg,
    rgb(27, 20, 101) 30%,
    rgb(0, 112, 187) 80%
  );
  background: linear-gradient(
    90deg,
    rgb(27, 20, 101) 30%,
    rgb(0, 112, 187) 80%
  );
}
.referrals-ul {
  list-style: disc;
  padding-left: 1.25rem;
}
.referrals-li {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
}
.option1 {
  margin-top: 55px;
  padding-bottom: 30px;
}
.callout {
  line-height: 2.2rem;
}
</style>
