<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>{{ product.name }}</h1>
                <p class="lead">{{ product.description }}</p>
                <p><span class="badge badge-dark">{{ product.price }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            product: null
        }
    },

    async asyncData ({ params, app }) {
        let response = await app.$axios.$get(`products/${params.slug}`)

        return {
            product: response.data
        }
    }
}
</script>
