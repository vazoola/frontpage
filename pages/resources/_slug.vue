<template>
  <article>
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
  </article>
</template>

<script>
export default {
    data() {
        return {
            posts:[]
        }
    }
    /*
  async asyncData({ params }) {

    let post = await import('~/content/blog/posts/' + params.slug + '.json');
    return post;
}*/
};
</script>
