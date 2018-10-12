<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <h1>{{ product.name }}</h1>
                <p class="lead">{{ product.description }}</p>
                <p><span class="badge badge-dark">{{ product.price }}</span> <span class="badge badge-danger" v-if="!product.in_stock">закончился</span></p>
                <div v-if="product.variations.length && product.in_stock">
                    <form action="">
                        <ProductVariations :variations="product.variations" v-model="form.variation" />

                        <template v-if="form.variation">
                            <div class="form-group">
                                <select class="form-control" v-model="form.quantity">
                                    <option>Выберите количество</option>
                                    <option v-for="x in parseInt(form.variation.stock_count < 10 ? form.variation.stock_count : 10)" :key="x" :value="x">{{ x }}</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Добавить в корзину</button>
                        </template>
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
            product: null,
            form: {
                variation: '',
                quantity: 1
            }
        }
    },

    watch: {
        'form.variation' () {
            this.form.quantity = 1
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
