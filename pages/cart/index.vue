<template>
    <div class="container mt-5">
        <div class="row mb-4">
            <div class="col">
                <h1>Корзина</h1>
            </div>
        </div>
        <template v-if="products.length">
            <div class="row">
                <div class="col">
                    <cart-overview />
                </div>
            </div>
            <div class="row">
                <div class="col text-right">
                    <a href="#" class="btn btn-secondary" :class="{ 'disabled': isEmpty }">Оформить</a>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="row">
                <div class="col">
                    <h3 class="text-muted mb-3">Ваша корзина пуста! :)</h3>
                    <nuxt-link :to="{ name: 'index' }" class="btn btn-primary">Продолжить покупки</nuxt-link>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartOverview from '@/components/cart/CartOverview'

export default {
    computed: {
        ...mapGetters({
            products: 'cart/products',
            isEmpty: 'cart/empty'
        })
    },
    components: {
        CartOverview
    }
}
</script>
