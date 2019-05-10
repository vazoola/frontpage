<template lang="html">
		<nav class="navbar nav is-fixed-top" role="navigation" aria-label="main navigation" id="navbar">
				<div class="navbar-brand">
					<a class="navbar-item" href="/">
						<img src="/images/logo.png" alt="Logo">
					</a>
					<div @click="navActive = !navActive"
					 		class="navbar-burger burger"
							:class="{ 'is-active' : navActive }"
							data-target="navbar-mobile">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="navbar-menu"
					:class="{ 'is-active' : navActive }">
					<div class="navbar-start">
						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link" href="/">How it Works</a>
							<div class="navbar-dropdown is-boxed">
								<nuxt-link to="/brands" class="navbar-item">
									For Brands
								</nuxt-link>
								<nuxt-link class="navbar-item" to="/agencies">
									For Agencies
								</nuxt-link>
								<nuxt-link class="navbar-item" to="/small-business">
									For Small Business
								</nuxt-link>
								<nuxt-link class="navbar-item" to="/our-technology">
									Our Technology
								</nuxt-link>
							</div>
						</div>
						<nuxt-link class="navbar-item" to="/resources">Resources</nuxt-link>
						<nuxt-link class="navbar-item" to="/company">Company</nuxt-link>
						<nuxt-link class="navbar-item" to="/pricing">Pricing</nuxt-link>
						<nuxt-link class="navbar-item" to="/referrals">Referrals</nuxt-link>
					</div>
					<div class="navbar-end">
						<div class="navbar-item">
							<a class="button login-btn" href="https://app.vazoola.com/login">Log In/Sign Up</a>
							<a class="button signup-btn" @click="showModal = true">Free Demo</a>
						</div>
					</div>
				</div>
				<!-- start: Free Demo -->
				<contact-modal :is-demo="true" :active.sync="showModal" />
				<!-- end: Free demo -->
		</nav>


</template>

<script>

import ContactModal from '~/components/ContactModal.vue'

export default {
	components: {
		ContactModal
	},
	data() {
		return {
			navActive: false,
			showModal: false,
		}
	}
}
</script>

<style lang="css">
</style>
