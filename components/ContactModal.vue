<template lang="html">
<div>
    <div v-if="active" class="modal is-active">
        <div class="modal-background" @click="closeIt"></div>
            <div class="modal-content">
                <section class="hero is-medium is-primary is-bold">
                <div class="hero-body">
                    <h2 class="title is-4">Power Your Content Creation and Campaigns in One Platform.</h2>
                    <form name="contact" netlify netlify-honeypot="bot-field">
                        <div class="columns">
                            <div class="column">
                                <div class="field">
                                    <label class="label">Firstname</label>
                                    <div class="control">
                                        <input class="input" name="firstname" type="text" required >
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Company Website</label>
                                    <div class="control">
                                        <input class="input" name="website" type="url">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">I'm a..</label>
                                    <div class="control">
                                        <div class="select is-fullwidth">
                                        <select name="company_type">
                                            <option></option>
                                            <option value="brand">Brand</option>
                                            <option value="agency">Agency</option>
                                            <option value="business">Small Business</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="column">

                                <div class="field">
                                    <label class="label">Lastname</label>
                                    <div class="control">
                                        <input class="input" name="lastname" type="text" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Company Email</label>
                                    <div class="control">
                                        <input class="input" name="email" type="email" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Phone</label>
                                    <div class="control">
                                        <input class="input" name="phone" type="tel">
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="columns">
                            <div class="column">
                                <textarea class="textarea" name="goals" placeholder="What are your goals?"></textarea>
                            </div>
                        </div>

                        <div class="columns">
                            <div class="column">
                                <div class="buttons is-centered">
                                    <button class="button is-info is-medium">Contact Me!</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                </section>
            </div>
        <button @click="closeIt" class="modal-close is-large" aria-label="close"></button>
    </div>
</div>
</template>

<script>
export default {
    props: ['active'],
    methods: {
        closeIt() {
            this.$emit('update:active', false);
        },

    }
}
</script>

<style lang="css">
</style>
