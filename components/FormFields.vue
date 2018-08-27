<template lang="html">
<div>
    <form :id="formName" v-on:submit.prevent="sentIt" :name="formName">
        <div class="columns">
            <div class="column">
                <div class="field">
                    <label class="label">First name</label>
                    <div class="control">
                        <input v-model="fields.firstname" class="input" tabindex="1" autocomplete='given-name' name="firstname" type="text" required >
                    </div>
                </div>
                <div class="field">
                    <label class="label">Company Website</label>
                    <div class="control">
                        <input v-model="fields.company" class="input" tabindex="3" name="website" type="url" required>
                    </div>
                </div>
                <div class="field">
                    <label class="label">I'm a..</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                        <select v-model="fields.hs_persona" tabindex="5" name="company_type" required>
                            <option></option>
                            <option value="persona_2">Brand</option>
                            <option value="persona_1">Agency</option>
                            <option value="persona_3">Small Business</option>
                        </select>
                        </div>
                    </div>
                </div>

            </div>
            <div class="column">

                <div class="field">
                    <label class="label">Last name</label>
                    <div class="control">
                        <input v-model="fields.lastname" class="input" tabindex="2" autocomplete='family-name' name="last-name" type="text" required>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Company Email</label>
                    <div class="control">
                        <input v-model="fields.email" class="input" tabindex="4" autocomplete='email' name="email" type="email" required>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Phone</label>
                    <div class="control">
                        <input v-model="fields.phone" class="input" tabindex="6" name="phone" autocomplete='tel' type="tel" required>
                    </div>
                </div>

            </div>
        </div>

        <div class="columns">
            <div class="column">
                <textarea v-model="fields.message" required class="textarea" tabindex="7" name="goals" placeholder="What are your goals?"></textarea>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <div class="buttons is-centered">
                    <button type="submit" class="button is-rounded is-medium">{{ buttonText }}</button>
                </div>
            </div>
        </div>

    </form>
</div>
</template>

<script>
export default {
    props: {
        formName: {
            type: String,
            default: 'default'
        },
        buttonText: {
            type: String,
            default: 'Contact Me'
        }
    },
    data() {
        return {
            hubData: {
                submittedAt: null,
                fields: [],
                context: {
                    hutk: "3aea3ab5985f7bc544e847d1f76b5857",
                    pageUri: 'https://vazoola.com'+this.$route.fullPath,
                    pageName: this.$route.name,
                },
                skipValidation: true
            },
            fields: {
                firstname: null,
                lastname: null,
                company: null,
                email: null,
                hs_persona: null,
                phone: null,
                message: null,
                form_used: this.formName,
            },
        }
    },
    methods: {
        //https://developers.hubspot.com/docs/methods/forms/submit_form_ajax
        sentIt() {
            //set timestamp
            this.hubData.submittedAt = Date.now();
            this.hubData.context.hutk = this.getCookie('hubspotutk');

            //build hubForm array
            for (var prop in this.fields) {
              this.hubData.fields.push({
                  name: prop,
                  value: this.fields[prop]
              })
            }

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.hsforms.com/submissions/v3/integration/submit/3379619/530920a5-7587-4a86-8cf5-a62c2d2a793c', true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

            // send the collected data as JSON
            xhr.send(JSON.stringify(this.hubData));

            xhr.onloadend = (r => {
                this.$emit('sentForm');
            });

            /*
            axios.post('https://api.hsforms.com/submissions/v3/integration/submit/3379619/530920a5-7587-4a86-8cf5-a62c2d2a793c', this.hubData)
                .then(r => {
                    this.$emit('sentForm');
                });*/

        },

        getCookie(n) {
            let a = `; ${document.cookie}`.match(`;\\s*${n}=([^;]+)`);
            return a ? a[1] : '';
        }
    }
}
</script>

<style lang="css">
</style>
