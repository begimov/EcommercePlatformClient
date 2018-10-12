<template>
    <table class="table bg-white">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Название</th>
                <th scope="col">Модель</th>
                <th scope="col">Количество</th>
                <th scope="col">Цена за шт.</th>
                <th scope="col">Всего</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.product.name }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.total }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            products: 'cart/products'
        })
    }
}
</script>

