<template lang="html">
    <section class="posts">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="headline">
                        <h2>Posts & Resources</h2>
                        <hr class="yellow" />
                    </div>
                </div>
            </div>
            <div class="columns">
                <div v-for="r in resources" :key="r.id" class="column is-3">
                    <a :href="'/resources/'+r.type+'/'+r.uid">
                        <div class="card">
                        <div class="card-image">
                            <figure v-if="r.data.cover_image" class="image is-4by3">
                                <img style="object-fit: cover" :src="r.data.cover_image.url" alt="Placeholder image">
                                <span class="type">{{ r.type }}</span>
                            </figure>
                            <figure v-else>
                                <img style="object-fit: cover" src="/images/post-img.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{{ r.data.short_title }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <span class="date">{{ new Date(r.data.publish_date).toDateString() }}</span>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    props: ['resources']
}
</script>

<style lang="css">
.card {
    height: 100%;
    display:flex;
    flex-direction: column;
}
.card-footer {
    margin-top: auto;
    border-top: none;
}

.card-footer .date {
    padding: 5px 1.5rem;
}

.card .content {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 24px;     /* fallback */
   max-height: 96px;      /* fallback */
   -webkit-line-clamp: 4; /* number of lines to show */
   -webkit-box-orient: vertical;
}

.card .type {
    bottom: 0;
    margin-top: 0;
    position: absolute;
    padding-left: 29px;
    margin-bottom: 0;
    margin: 1.25rem 0 0;
    padding: 0 29px 0 20px;
    list-style: none;
    display: inline-block;
    background: #fff;
    left: 0;
}
</style>
