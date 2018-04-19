<template lang="html">
<div>
    <div class="modal is-active"
        :class="{'is-active': active}">
        <div class="modal-background" @click="closeIt"></div>
            <div class="modal-content">
                <section class="hero is-medium is-primary is-bold">
                <div v-if="!sent" class="hero-body">
                    <h2 class="title is-4">Power Your Content Creation and Campaigns in One Platform.</h2>
                    <form name="contact" netlify netlify-honeypot="bot-field">
                        <div class="columns">
                            <div class="column">
                                <div class="field">
                                    <label class="label">Firstname</label>
                                    <div class="control">
                                        <input class="input" name="firstname" type="text" v-model="form.firstname" required >
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Company Website</label>
                                    <div class="control">
                                        <input class="input" name="website" v-model="form.url" type="url">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">I'm a..</label>
                                    <div class="control">
                                        <div class="select is-fullwidth">
                                        <select name="company_type" v-model="form.company_type">
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
                                        <input class="input" name="lastname" v-model="form.lastname" type="text" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Company Email</label>
                                    <div class="control">
                                        <input class="input" name="email" v-model="form.email" type="email" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Phone</label>
                                    <div class="control">
                                        <input class="input" name="phone" v-model="form.phone" type="tel">
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="columns">
                            <div class="column">
                                <textarea class="textarea" name="goals" v-model="form.goals" placeholder="What are your goals?"></textarea>
                            </div>
                        </div>

                        <div class="columns">
                            <div class="column">
                                <div class="buttons is-centered">
                                    <a @click="sendIt" class="button is-info is-medium">Submit</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div v-else class="hero-body">
                    <h2 class="title is-4">Thanks, We look foward to working with you!</h2>
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
    data() {
        return {
            sent: false,
            form: {
                firstname: null,
                lastname: null,
                url: null,
                company_type: null,
                email: null,
                phone: null,
                goals: null,
            }
        }
    },

    methods: {
        closeIt() {
            this.$emit('update:active', false);
        },

        sendIt() {
            fetch("/resources", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: JSON.stringify({ "form-name": "contact", ...this.form })
            })
            .then(res => {
                this.sent = true;
            })
            .catch(res => {
                this.sent = true;
            });
        }

    }
}
</script>

<style lang="css">
</style>
