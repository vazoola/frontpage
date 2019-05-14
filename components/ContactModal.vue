<template lang="html">
<div>
    <div class="modal"
        :class="{'is-active': active}">
        <div class="modal-background" @click="closeIt"></div>
            <div class="modal-content">
                <section class="hero is-contact is-medium">
                <div v-if="!sent" class="hero-body">
                    <h1 v-if="isDemo" class="title is-4 has-text-white has-text-centered h1-as-h2">Request a Demo and a member from our team will respond within one business day to schedule a date and time to speak.</h1>
                    <h1 v-else class="title is-4 has-text-white has-text-centered h1-as-h2">Request a Proposal and a member from our team will respond within one business day to provide an estimated completion date.</h1>

                    <form-fields
                        v-on:sentForm="sent = true"
                        :form-name=" isDemo ? 'demo' : 'proposal'"
                        :button-text=" isDemo ? 'Show Me Now' : 'Request Proposal'"
                        />
                </div>

                <div v-else class="hero-body">
                    <h2 class="title is-4">Thanks, We look forward to working with you!</h2>
                </div>

                </section>
            </div>
        <button @click="closeIt" class="modal-close is-large" aria-label="close"></button>
    </div>
</div>
</template>

<script>
import FormFields from './FormFields';

export default {
    components: {
        FormFields
    },
    props: {
        active: false,
        isDemo: false
    },
    data() {
        return {
            sent: false,
        }
    },

    methods: {
        closeIt() {
            this.$emit('update:active', false);
        },

    }
}
</script>

<style lang="css">
    .hero.is-contact {
        background-image: linear-gradient(141deg, #cec5de 0%, #4162a4 71%, #f6f8fb 100%);
    }
</style>
