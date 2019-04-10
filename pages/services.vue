<template lang="html">
<div>
    <div class="modal"
        :class="{'is-active': active}">
        <div class="modal-background"></div>
        <div class="modal-content" style="width:90%;">
            <section class="hero">
                <iframe style="width:100%;" width=1280 height=672 frameborder="0" scrolling="no" src="https://screencast-o-matic.com/embed?sc=cqfQFyZI63&v=5&a=0&title=0&ff=1" allowfullscreen="true"></iframe>
            </section>
        </div>
    </div>
</div>
</template>

<script>

export default {
    props: {
        active: false
    },
    mounted(){
        this.active = true
    }
}
</script>

<style lang="css">
    .hero.is-contact {
        background-image: linear-gradient(141deg, #cec5de 0%, #4162a4 71%, #f6f8fb 100%);
    }
</style>
