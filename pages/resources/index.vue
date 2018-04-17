<template lang="html">
<div>
    <!-- start: NavBar -->
    <nav-bar />
    <!-- end: NavBar -->

    <!-- start: Hero -->
    <section class="resources-hero">
    	<div class="container">
        	<div class="columns">
					<div class="column">
						<div class="hero-text">
  						<h2>Resources</h2>
  						<hr class="blue" />
  					</div>
					</div>
				</div>
            <div class="columns">
                <div class="column">
                    <div class="tabs">
                        <ul>
                            <li @click="resourceType = ''"
                                :class="[resourceType == '' ? 'is-active' : '']">
                                <a>All</a>
                            </li>
                            <li @click="resourceType = 'article'"
                                :class="[resourceType == 'article' ? 'is-active' : '']">
                                <a>Articles</a>
                            </li>
                            <li @click="resourceType = 'case'"
                                :class="[resourceType == 'case' ? 'is-active' : '']">
                                <a>Case Studies</a>
                            </li>
                            <li @click="resourceType = 'guide'"
                                :class="[resourceType == 'guide' ? 'is-active' : '']">
                                <a>Guides</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="field search-hero">
                        <div class="control has-icons-right">
                            <input class="input" type="text" placeholder="Search" value="">
                            <span class="icon is-small is-right">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
			</div>
	 	</section>
	<!-- end: Hero -->


    <!-- start: Posts & Resources -->
    <section class="posts">
    	<div class="container">
    		<div class="columns is-multiline">
    			<div v-for="r in sortedResources" :key="r.id" class="column is-4-desktop is-6">

                    <div class="card post-box">
                        <div class="card-image">
                            <figure v-if="r.thumbnail" class="image is-4by3">
                                <img :src="r.thumbnail" alt="Placeholder image">
                            </figure>
                            <figure v-else>
                                <img src="/images/post-img.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{{ r.title }}</p>
                                    <p class="subtitle is-6">{{ r.type }}</p>
                                </div>
                            </div>

                            <div class="content">
                                {{ r.summary }}
                                <br>
                                <time datetime="2016-1-1">{{ r.date }}</time>
                            </div>
                        </div>

                        <footer class="card-footer">
                            <a :href="r._path" class="card-footer-item"> Read more...</a>
                        </footer>
                    </div>
    			</div>

            </div>
    	</div>
    </section>
    <!-- end: Posts & Resources -->

    <!-- start: Footer -->
    <footer-bar />
    <!-- end: Footer -->


</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'

export default {
    components: { NavBar, FooterBar},
    computed: {
        sortedResources() {
            return this.resources;
            return _.filter(this.resources, {
                type: this.resourceType,
            });
        }
    },
    data() {
        // Using webpacks context to gather all files from a folder
        const context = require.context('~/content/resources', false, /\.json$/);
        const posts = context.keys().map(key => ({
            ...context(key),
            _path: `/resources/${key.replace('.json', '').replace('./', '')}`
        }));
        return {
            resources: posts,
            resourceType: "",
        };
    }
}
</script>

<style lang="css">
</style>
