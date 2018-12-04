<template lang="html">

</template>

<script>
export default {
    props: ['data'],
    data() {
        return {

        }
    },
    methods: {
        linkResolver(doc) {
          // Pretty URLs for known types
          if (doc.type === 'blog') return "/post/" + doc.uid;
          if (doc.type === 'page') return "/" + doc.uid;
          // Fallback for other types, in case new custom types get created
          return "/doc/" + doc.id;
        };
    }
    computed: {
        content() {
            var PrismicDOM = require('prismic-dom');
            var Elements = PrismicDOM.RichText.Elements;

            var htmlSerializer = function (type, element, content, children) {
              switch(type) {

                // Add a class to paragraph elements
                case Elements.paragraph:
                  return '<p class="paragraph-class">' + children.join('') + '</p>';

                // Don't wrap images in a <p> tag
                case Elements.image:
                  return '<img src="' + element.url + '" alt="' + element.alt + '">';

                // Return null to stick with the default behavior
                default:
                  return null;
              }
            };

            var html = PrismicDOM.RichText.asHtml(data.content, this.linkResolver, htmlSerializer);
        }
    }
}
</script>

<style lang="css">
</style>
