<template>
    <div class="table-responsive">
        <table class="table bg-white table-hover">
            <thead class="thead bg-primary text-white">
                <tr>
                    <th scope="col">Изображение</th>
                    <th scope="col">Название</th>
                    <th scope="col">Модель</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Цена за шт.</th>
                    <th scope="col">Всего</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-right align-middle lead">Сумма:</td>
                    <td class="align-middle"><h3><span class="badge badge-dark">{{ subtotal }}</span></h3></td>
                </tr>
            </tfoot>
            <tbody>
                <cart-overview-product v-for="product in products" :key="product.id" :product="product"/>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartOverviewProduct from '@/components/cart/CartOverviewProduct'

export default {
    computed: {
        ...mapGetters({
            products: 'cart/products',
            subtotal: 'cart/subtotal'
        })
    },
    components: {
        CartOverviewProduct
    }
}
</script>

