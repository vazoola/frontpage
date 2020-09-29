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
								<nuxt-link class="navbar-item" to="/referrals">
									Referral Program
								</nuxt-link>
							</div>
						</div>
						<nuxt-link class="navbar-item" to="/company">About Us</nuxt-link>
						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link" href="/">Case Studies</a>
							<div class="navbar-dropdown is-boxed">
								<nuxt-link to="/case-study-1" class="navbar-item">
									Case Study 1
								</nuxt-link>
								<nuxt-link class="navbar-item" to="/case-study-2">
									Case Study 2
								</nuxt-link>
								<nuxt-link class="navbar-item" to="/case-study-3">
									Case Study 3
								</nuxt-link>
							</div>
						</div>
						<nuxt-link class="navbar-item" to="/resources/">Resources</nuxt-link>
					</div>
					<div class="navbar-end">
						<div class="navbar-item">
							<a class="button login-btn" href="https://app.vazoola.com/login">Log In/Sign Up</a>
						</div>
					</div>
				</div>
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
			navActive: false
		}
	}
}
</script>

<style lang="css">
</style>
