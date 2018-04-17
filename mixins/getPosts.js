export default {
    async asyncData({ params }) {
        // Using webpacks context to gather all files from a folder
        const context = require.context('~/content/resources', false, /\.json$/);
        const posts = context.keys().map(key => ({
            ...context(key),
            _path: `/resources/${key.replace('.json', '').replace('./', '')}`
        }));

        posts.forEach(function(item, index) {
            posts[index].date = moment(item.date).format('MMMM Do, YYYY');
        });

        return {
            resources: posts,
            resourceType: '',
        };
    }
};
