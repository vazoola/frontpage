<template>
  <div>
    <nav-bar/>
    <section class="section company-hero">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="hero-text">
              <h2>Referrals</h2>
              <hr class="blue">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="referrals-hero hero is-info is-large is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container is-fluid referrals-container">
          <h2 class="title">Vazoola’s New Referral Program</h2>
          <p class="is-size-4 has-text-white">
            Help spread the word about Vazoola, and earn cash doing it!
            <br>
            <br>We are eager to work with any friends, colleagues, or contacts you think could benefit from our services,
            and we want to reward you for sending them our way.
          </p>
        </div>
      </div>
    </section>
    <section class="section pt-2 how-we-work">
      <div class="container">
        <div class="mb-3">
          <hr class="blue">
        </div>
        <h2 class="title is-2 has-text-centered">Earn Referral Cash in a Few Simple Steps</h2>
        <div class="pricing-table mt-3">
          <div class="pricing-plan mt-1">
            <div
              class="referrals-description has-text-centered is-size-6"
              data-badge="1"
            >Reach out to us for your unique tracking URL.</div>
          </div>
          <div class="pricing-plan mt-1">
            <div
              class="referrals-description has-text-centered is-size-6"
              data-badge="2"
            >Share it on your website, social channels, or however you prefer.</div>
          </div>
          <div class="pricing-plan mt-1">
            <div
              class="referrals-description has-text-centered is-size-6"
              data-badge="3"
            >We’ll notify you whenever one of your referrals signs up with us.</div>
          </div>
          <div class="pricing-plan mt-1">
            <div
              class="referrals-description has-text-centered is-size-6"
              data-badge="4"
            >Every time one of your referrals makes an order, you’ll earn a commission.</div>
          </div>
        </div>

        <div class="mb-3 mt-3">
          <hr class="blue">
        </div>

        <div class="columns">
          <div class="column is-6 is-multiline">
            <div class="box is-primary-gradient has-text-white">
              <p
                class="title is-4 has-text-centered has-text-white"
              >Option 1 – Cash Earnings via Paypal</p>
              <ul class="referrals-ul">
                <li
                  class="referrals-li"
                >Receive cash payment equal to 10% of total monthly orders for the first 12 months</li>
                <li
                  class="referrals-li"
                >Receive cash payment equal to 5% of total monthly orders for the next 12 months</li>
              </ul>
            </div>
          </div>
          <div class="column is-6 is-multiline">
            <div class="box is-primary-gradient has-text-white">
              <p
                class="title is-4 has-text-centered has-text-white"
              >Option 2 – Credit for Our Services</p>
              <ul class="referrals-ul">
                <li
                  class="referrals-li"
                >Receive credit to your account equal to 15% of total monthly order for the first 12 months</li>
                <li
                  class="referrals-li"
                >Receive credit to your account equal to 10% of total monthly order for the next 12 months</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <p
            class="is-size-4 callout"
          >With our Referral Program, you can easily build a passive income stream with little to no effort. You provide the introduction – we’ll do the work of bringing them on board.</p>
          <p class="is-italic">
            <span class="has-text-weight-semibold">**Pro tip**</span> If you can make a warm introduction through email or phone, the chances of successfully
            landing that referral are significantly improved.
          </p>
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
.callout {
  line-height: 2.2rem;
}
</style>
