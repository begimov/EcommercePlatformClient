<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>{{ product.name }}</h1>
                <p class="lead">{{ product.description }}</p>
                <p><span class="badge badge-dark">{{ product.price }}</span></p>
                <div>
                    <form action="">
                        <ProductVariation v-for="variation in product.variations" :key="variation.id" :variation="variation" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductVariation from '@/components/products/ProductVariation'
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
    },

    components: {
        ProductVariation
    }
}
</script>
