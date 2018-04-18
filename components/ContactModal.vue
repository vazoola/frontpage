<template lang="html">
<div>
    <div v-if="active" class="modal is-active">
        <div class="modal-background" @click="closeIt"></div>
            <div class="modal-content">
                <section class="hero is-medium is-primary is-bold">
                <div class="hero-body">
                    <h2 class="title is-4">Power Your Content Creation and Campaigns in One Platform.</h2>
                    <div class="columns">
                        <div class="column">

                            <div class="field">
                                <label class="label">Firstname</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Text input">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Company Website</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Text input">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">I'm a..</label>
                                <div class="control">
                                    <div class="select is-fullwidth">
                                    <select required="">
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
                                    <input class="input" type="text" placeholder="Text input">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Company Email</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Text input">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Phone</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Text input">
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="columns">
                        <div class="column">
                            <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column">
                            <div class="buttons is-centered">
                                <span class="button is-info is-medium">Contact Me!</span>
                            </div>
                        </div>
                    </div>

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
