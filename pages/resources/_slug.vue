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
                            <li>
                                <a href="/resources">All</a>
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

        <!-- start: Resources -->
        <section class="section">
            <div class="columns">
                <div class="column is-3">

                </div>
                <div class="article column is-6">
                    <h1 class="title">{{ post.title }}</h1>
                    <h2 class="subtitle"> {{ post.date }} </h2>

                    <figure class="image is-2by1">
                        <img :src="post.thumbnail">
                    </figure>

                    <div class="content" v-html="post.body" />

                </div>
                <div class="column is-3">
                    social
                </div>
            </div>
        </section>
        <!-- start: Resources -->

        <!-- start: Footer -->
        <footer-bar />
        <!-- end: Footer -->

    </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import showdown from 'showdown';
import moment from 'moment';

export default {
    components: { NavBar, FooterBar},
    async asyncData({ params }) {
        //get the data
        let data = await import('~/content/resources/' + params.slug + '.json');
        //convert MD to html
        const converter = new showdown.Converter();
        data.body = converter.makeHtml(data.body);
        //convert the date to pretty
        data.date = moment(data.date).format('MMMM Do, YYYY');

        //return it
        return {
            post: data,
            resourceType: data.type
        }
    }
};
</script>
