<template>
  <div>
    <nav-bar/>
    <section class="section company-hero">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="hero-text">
              <h1 class="h1-as-h2">See how Vazoola helped this Agency turn around their link building operation</h1>
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
                    <h2 class="title">Medium Size Digital Agency</h2>
                    <p class="is-size-4">Location: Salt Lake City, Utah</p>
                    <p class="is-size-4">Size: 20 Employees</p>
                    <p class="is-size-4">Annual Revenue: $3.2 million</p>

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
              “My name is J.S. and my company is Salt Lake City Agency. We were satisfied with our current link building provider before Vazoola and were not actively looking for a new provider.  We heard about Vazoola’s Bounty Express from a colleague, and were intrigued enough to want to learn more about how we could control pricing and for the same amount of quality links we decided to give it try. It really delivered and helped us grow as an agency.”
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
                <p class="title is-size-5">Salt Lake City Agency was only making 20% margin on links and didn’t realize how much they we’re leaving on the table working with their current provider. SLC agency has fifty clients and each client spends on average $300 to receive three monthly backlinks.</p>
              <ol>
                <li>Agency charges <span style="color: red; font-weight: bold;">$180,000+</span> per year to clients for backlink services, while paying <span style="color: red;font-weight: bold;">$144,000</span> to current link provider.</li>
                <li>Link cost margins are only <span style="color: red; font-weight: bold;">20%</span></li>
                <li>Link provider did not always deliver on time and link quality was <span style="color: red;font-weight:bold;">low</span>.</li>
                <li>Clients were underwhelmed by link reports.</li>
                <li>Clients were not seeing big improvements in organic search rankings.</li>
                <li>Link providers platform was <span style="color: red;font-weight: bold;">rudimentary</span>, increasing the amount of time needed to complete regular tasks.</li>
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
                <p class="title is-size-6">Salt Lake City Agency hired Vazoola in April of 2019, initially transferring a few clients to Vazoola’s “Bounty Express”. The “Bounty Express” delivered, and within two months, SLC transitioned all remaining clients. This led to increased profit margins on link building each month.</p>
              <ol>
                <li>Link spend was reduced from $144,000 to <span style="color: green; font-weight: bold;">$90,000</span>.</li>
                <li>Each link had a Domain Authority and Domain Rating of <span style="color: green; font-weight: bold;">30+</span>.</li>
                <li>Bounty express delivered equal or higher quality links month over month, faster than the previous link provider.</li>
                <li>Decreased account manager workloads.</li>
                <li>Client rankings started <span style="color: green; font-weight: bold;">increasing rapidly</span>.</li>
                <li>Agency started focusing and adding more resources towards growing their business.</li>
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
