<template>
    <div class="container mt-5">
        <div class="row mb-4">
            <div class="col">
                <h1>CATEGORY PRODUCTS</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 col-sm-6" v-for="product in products" :key="product.id">
                <Product :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
import Product from '@/components/products/Product'

export default {
    data () {
        return {
            products: []
        }
    },

    async asyncData ({ params, app }) {
        let response = await app.$axios.$get(`products?category=${params.slug}`)

        return {
            products: response.data
        }
    },

    components: {
        Product
    }
}
</script>
