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
                    <h2 class="title">Big Tech Brand</h2>
                    <p class="is-size-4">Location: California</p>
                    <p class="is-size-4">Size: 100 Employees</p>
                    <p class="is-size-4">Annual Revenue: $50 million</p>

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
              “My name is B.W. and my company California Brand would recommend Vazoola to any large brand that is struggling with improve organic search results.  Vazoola stepped in and started securing higher quality links at unbelievable rates through the Bounty Express. They were able to take on the entire workload, while still giving us the control over the types of sites they went after. I have yet to see another product in the digital industry that is as effective and easy to use as Bounty Express.”
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
                <p class="title is-size-5">CB’s in-house link strategy wasn’t yielding clear results after a year of effort. They had been working toward the goal of doubling organic traffic from 8,000 to 16,000 monthly visitors and were spending $10,000 a month with poor results.</p>
              <ol>
                <li>Link acquisition cost was, on average, <span style="color: red; font-weight: bold;">$200</span> to <span style="color: red; font-weight: bold;">$500</span> per link.</li>
                <li>Spending <span style="color: red; font-weight: bold;">$50,000</span> a year to employ a fulltime link building specialist.</li>
                <li>Spending <span style="color: red; font-weight: bold;">$15,000</span> a year on content creation.</li>
                <li>Spending <span style="color: red; font-weight: bold;">$6,000</span> a year for access to an outreach software.</li>
                <li>Organic rankings were staying <span style="color: red; font-weight: bold;">flat</span>, with minimal increases in organic traffic.</li>
                <li>Did not have access to large publications through in-house efforts or through the link building providers they occasionally tried to leverage to supplement their efforts.</li>
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
                <p class="title is-size-6">California brand hired Vazoola in March of 2018 to fully manage all link building through the “Bounty Express”. CB ended up cutting monthly SEO costs by 50% and within six months grew monthly organic traffic from 8,000 to 14,000. Current organic traffic is well over 50,000 a month through continued work with Vazoola.</p>
              <ol>
                <li>Bounty Express allowed them to <span style="color: green; font-weight: bold;">triple</span> their backlinks while increasing quality.</li>
                <li>Secured links on some high-level online publications that they were previously not able to access.</li>
                <li>Within the first 30 to 45 days they started seeing <span style="color: green; font-weight: bold;">increases</span> in search rankings and organic traffic </li>
                <li>After three months they moved <span style="color: green; font-weight: bold;">all</span> of their link building budget over to Vazoola.</li>
                <li>Stopped paying for a yearly subscription to an outreach software platform.</li>
                <li>Have <span style="color: green; font-weight: bold;">monthly</span> calls, to strategize on which keywords and landing pages.</li>
                <li>Instead of paying $118,000 a year for link building they now pay <span style="color: green; font-weight: bold;">$60,000</span>.</li>
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
