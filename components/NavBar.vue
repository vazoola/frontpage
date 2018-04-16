<template lang="html">
	<section class="navbar-header">
		<nav class="navbar nav" role="navigation" aria-label="main navigation" id="navbar">
			<div class="container">
				<div class="navbar-brand">
					<a class="navbar-item" href="/">
						<img src="/images/logo.png" alt="Logo">
					</a>
					<div @click="navActive == true"
					 		class="navbar-burger"
							:class="{ 'is-active' : navActive }"
							data-target="navbar-mobile">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="navbar-menu">
					<div class="navbar-end">
						<div class="navbar-item">
							<div class="navbar-item has-dropdown is-hoverable">
								<a class="navbar-link" href="/">How it Works</a>
								<div class="navbar-dropdown is-boxed">
									<a class="navbar-item" href="/brands">
										For Brands
									</a>
									<a class="navbar-item" href="/agencies">
										For Agencies
									</a>
									<a class="navbar-item" href="/small-business">
										For Small Business
									</a>
								</div>
							</div>
							<a class="navbar-item" href="/our-technology">Our Technology</a>
							<a class="navbar-item" href="/resources">Resources</a>
						</div>
						<div class="navbar-item">
							<a class="button login-btn" href="https://app.vazoola.com/login">Log In</a>
							<a class="button signup-btn" href="https://app.vazoola.com/register">Sign Up</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</section>
</template>

<script>

export default {
	data() {
		return {
			navActive: false,
		}
	}
}
</script>

<style lang="css">
</style>
