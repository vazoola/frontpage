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
    				<div class="post-box">
    					<img src="/images/post-img.png" alt="Post Img">
                        <h4>{{ r.type }}</h4>
    					<h3>{{ r.title }}</h3>
    					<p class="date">02/20/2018</p>
    					<p class="desc">{{ r.summary }}</p>
    					<div class="link"><a href="#">Continue Reading</a></div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
    <!-- end: Posts & Resources -->


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
        return {
            resourceType: '',
            resources: [
                {
                    id: 1,
                    title: 'Post 1',
                    type: 'article',
                    summary: 'this is a great new way to impove your seo..',
                    article: 'this is a great new way to impove your seo devloped from years of experience. our team has created something incliedble to take oyour seo needs to new heights',
                    thumbnail: '/images/post-img.png',
                    header_image: '/images/post-img.png',
                    url: '/resources/post-1',
                },
                {
                    id: 2,
                    title: 'Post 2',
                    type: 'article',
                    summary: 'this is a great new way to impove your seo..',
                    article: 'this is a great new way to impove your seo devloped from years of experience. our team has created something incliedble to take oyour seo needs to new heights',
                    thumbnail: '/images/post-img.png',
                    header_image: '/images/post-img.png',
                    url: '/resources/post-2',
                },
                {
                    id: 3,
                    title: 'Case Study 1',
                    type: 'case',
                    summary: 'this is a great new way to impove your seo..',
                    article: 'this is a great new way to impove your seo devloped from years of experience. our team has created something incliedble to take oyour seo needs to new heights',
                    thumbnail: '/images/post-img.png',
                    header_image: '/images/post-img.png',
                    url: '/resources/case-1',
                },
                {
                    id: 4,
                    title: 'Guide 1',
                    type: 'guide',
                    summary: 'this is a great new way to impove your seo..',
                    article: 'this is a great new way to impove your seo devloped from years of experience. our team has created something incliedble to take oyour seo needs to new heights',
                    thumbnail: '/images/post-img.png',
                    header_image: '/images/post-img.png',
                    url: '/resources/guide-1',
                },
                {
                    id: 5,
                    title: 'Post 3',
                    type: 'article',
                    summary: 'this is a great new way to impove your seo..',
                    article: 'this is a great new way to impove your seo devloped from years of experience. our team has created something incliedble to take oyour seo needs to new heights',
                    thumbnail: '/images/post-img.png',
                    header_image: '/images/post-img.png',
                    url: '/resources/post-3',
                },

            ]
        }
    }
}
</script>

<style lang="css">
</style>
