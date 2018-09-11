<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>{{ product.name }}</h1>
                <p class="lead">{{ product.description }}</p>
                <p><span class="badge badge-dark">{{ product.price }}</span></p>
                <div v-if="product.variations.length">
                    <form action="">
                        <ProductVariations :variations="product.variations" />

                        <div class="form-group">
                            <select class="form-control">
                                <option>Выберите количество</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>

                        <button type="submit" class="btn btn-primary">Добавить в корзину</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductVariations from '@/components/products/ProductVariations'
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
        ProductVariations
    }
}
</script>
