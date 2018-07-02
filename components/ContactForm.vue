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
            <form id="footer-form" name="contact" netlify netlify-honeypot="bot-field">
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label">Firstname</label>
                            <div class="control">
                                <input class="input" autocomplete='given-name' name="firstname" type="text" required >
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
                                <input class="input" autocomplete='family-name' name="lastname" type="text" required>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Company Email</label>
                            <div class="control">
                                <input class="input" autocomplete='email' name="email" type="email" required>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Phone</label>
                            <div class="control">
                                <input class="input" name="phone" autocomplete='tel' type="tel">
                            </div>
                        </div>

                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <textarea class="textarea" name="goals" placeholder="What are your goals?"></textarea>
                    </div>
                </div>

                <input type="hidden" name="form-name" value="contact" />
                <div netlify-recaptcha></div>

                <div class="columns">
                    <div class="column">
                        <div class="buttons is-centered">
                            <button class="button is-rounded is-medium">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
