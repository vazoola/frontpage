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
                            <li @click="resourceType = 'Article'"
                                :class="[resourceType == 'Article' ? 'is-active' : '']">
                                <a>Articles</a>
                            </li>
                            <li @click="resourceType = 'White Paper'"
                                :class="[resourceType == 'Paper' ? 'is-active' : '']">
                                <a>White Papers</a>
                            </li>
                            <!--
                            <li @click="resourceType = 'case'"
                                :class="[resourceType == 'case' ? 'is-active' : '']">
                                <a>Case Studies</a>
                            </li>
                            <li @click="resourceType = 'guide'"
                                :class="[resourceType == 'guide' ? 'is-active' : '']">
                                <a>Guides</a>
                            </li>
                            -->
                        </ul>
                    </div>
                </div>
                <!--
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
                -->
            </div>
			</div>
	 	</section>
	<!-- end: Hero -->


    <!-- start: Posts & Resources -->
    <section class="posts">
    	<div class="container">
    		<div class="columns is-multiline">
    			<div v-for="r in sortedResources" :key="r.id" class="column is-4-desktop is-6">
                    <a :href="r._path">
                        <div class="card">
                        <div class="card-image">
                            <figure v-if="r.thumbnail" class="image is-4by3">
                                <img style="object-fit: cover" :src="r.thumbnail" alt="Placeholder image">
                                <span class="type">{{ r.type }}</span>
                            </figure>
                            <figure v-else>
                                <img style="object-fit: cover" src="/images/post-img.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{{ r.title }}</p>
                                </div>
                            </div>

                            <div class="content">
                                {{ r.summary }}
                            </div>
                        </div>

                        <div class="card-footer">
                            <span class="date" datetime="2016-1-1">{{ r.formatedDate }}</span>
                        </div>
                    </div>
                    </a>
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
import moment from 'moment';

export default {
    components: { NavBar, FooterBar },
    data() {
        return {
            resourceType: '',
        }
    },

    mounted() {
        var hash = this.$route.hash.split('/')[1];
        if(hash)
            this.resourceType = hash.replace(/^\w/, c => c.toUpperCase());
    },

    computed: {
        sortedResources() {
            if(!this.resourceType)
                return this.resources;

            return this.resources.filter( f => {
                return f.type === this.resourceType
            });
        }
    },
    async asyncData({ params }) {
        // Using webpacks context to gather all files from a folder
        const context = require.context('~/content/resources', true, /\.json$/);
        var posts = context.keys().map(key => ({
            ...context(key),
            _path: `/resources/${key.replace('.json', '').replace('./', '')}`
        }));

        posts.forEach(function(item, index) {
            posts[index].formatedDate = moment(item.date).format('MMMM Do, YYYY');
        });

        posts = posts.sort(function(a, b){
          return a.date < b.date;
        });

        return {
            resources: posts,
            resourceType: '',
        };
    }
}
</script>

<style lang="css">

</style>
