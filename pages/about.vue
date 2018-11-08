<template>
    <div>
        <nav-bar />

        <section class="section technology-hero">
        	<div class="container">
            	<div class="columns">
  					<div class="column">
  						<div class="hero-text">
	  						<h2>About</h2>
	  						<hr class="blue" />
	  					</div>
  					</div>
  				</div>
			</div>
        </section>


        hello world
        <footer-bar />
    </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'


export default {
      components: {
      NavBar,
      FooterBar
  },
}
</script>
<style lang="scss" scoped>

</style>
