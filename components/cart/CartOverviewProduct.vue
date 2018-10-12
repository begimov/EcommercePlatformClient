<template>
    <tr class="h-100">
        <td class="align-middle"><img src="http://via.placeholder.com/60x60" alt=""></td>
        <td class="align-middle">{{ product.product.name }}</td>
        <td class="align-middle">{{ product.name }}</td>
        <td class="align-middle">
            <div class="input-group">
                <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option value="0">0</option>
                    <option v-for="count in product.stock_count" 
                        :key="count" 
                        :value="count"
                        :selected="count == product.quantity">
                        {{ count }}
                    </option>
                </select>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary btn-sm" type="button" @click.prevent="destroy(product.id)">X</button>
                </div>
            </div>
        </td>
        <td class="align-middle">{{ product.price }}</td>
        <td class="align-middle">{{ product.total }}</td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        product: {
            required: true,
            type: Object
        }
    },
    methods: {
        ...mapActions({
            destroy: 'cart/destory'
        })
    }
}
</script>

