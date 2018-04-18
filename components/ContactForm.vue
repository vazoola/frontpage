<template lang="html">
    <section class="get-started">
        <div class="container">
            <div class="columns">
                <div class="column is-offset-1">
                    <div class="headline">
                        <h2>Let’s Get Started...</h2>
                        <hr class="pink" />
                        <p>Call Today (855) 399-7518</p>
                        <p>Tell us more about your marketing goals.</p>
                    </div>
                </div>
            </div>
            <form>
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
