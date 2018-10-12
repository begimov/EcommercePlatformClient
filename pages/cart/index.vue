<template>
    <div class="container mt-5">
        <div class="row mb-4">
            <div class="col">
                <h1>Корзина</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <cart-overview />
            </div>
        </div>
        <div class="row">
            <div class="col text-right">
                <a href="" class="btn btn-secondary">Оформить</a>
            </div>
        </div>
    </div>
</template>

<script>
import CartOverview from '@/components/cart/CartOverview'

export default {
    components: {
        CartOverview
    }
}
</script>
