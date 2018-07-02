<template lang="html">
    <section class="get-started">
        <div class="container">
            <div class="columns">
                <div class="column is-offset-1">
                    <div class="headline">
                        <h2>Let’s Get Started...</h2>
                        <hr class="pink" />
                        <p class="title">Call Today (855) 399-7518</p>
                        <p>Tell us more about your marketing goals.</p>
                    </div>
                </div>
            </div>
            <form-fields
                v-if="!sent"
                v-on:sentForm="sent = true"
                :form-name="'footer on ' + $route.name" />

            <h2 v-else class="title is-4 has-text-white has-text-centered">Thanks, We look foward to working with you!</h2>
        </div>
    </section>
</template>

<script>
import FormFields from './FormFields';

export default {
    data() {
        return {
            sent: false,
        }
    },
    components: {
        FormFields
    }
}
</script>

<style lang="css">
</style>
