<template lang="html">
<div>
    <form id="footer-form" v-on:submit.prevent="sentIt" name="contact">
        <div class="columns">
            <div class="column">
                <div class="field">
                    <label class="label">First name</label>
                    <div class="control">
                        <input class="input" tabindex="1" autocomplete='given-name' name="first-name" type="text" required >
                    </div>
                </div>
                <div class="field">
                    <label class="label">Company Website</label>
                    <div class="control">
                        <input class="input" tabindex="3" name="website" type="url">
                    </div>
                </div>
                <div class="field">
                    <label class="label">I'm a..</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                        <select tabindex="5" name="company_type">
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
                    <label class="label">Last name</label>
                    <div class="control">
                        <input class="input" tabindex="2" autocomplete='family-name' name="last-name" type="text" required>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Company Email</label>
                    <div class="control">
                        <input class="input" tabindex="4" autocomplete='email' name="email" type="email" required>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Phone</label>
                    <div class="control">
                        <input class="input" tabindex="6" name="phone" autocomplete='tel' type="tel">
                    </div>
                </div>

            </div>
        </div>

        <div class="columns">
            <div class="column">
                <textarea class="textarea" tabindex="7" name="goals" placeholder="What are your goals?"></textarea>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <div class="buttons is-centered">
                    <button type="submit" class="button is-rounded is-medium">Submit</button>
                </div>
            </div>
        </div>

        <input type="hidden" name="form-name" :value="formName">
    </form>
</div>
</template>

<script>
export default {
    props: ['formName'],
    methods: {
        sentIt() {
            this.$emit('sentForm');
        }
    }
}
</script>

<style lang="css">
</style>
