<template>
    <tr class="h-100">
        <td class="align-middle"><img src="http://via.placeholder.com/60x60" alt=""></td>
        <td class="align-middle">{{ product.product.name }}</td>
        <td class="align-middle">{{ product.name }}</td>
        <td class="align-middle">
            <div class="input-group">
                <select class="custom-select" v-model="quantity">
                    <option value="0" v-if="product.quantity == 0">0</option>
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
        <td class="align-middle text-muted">{{ product.price }}</td>
        <td class="align-middle"><h4><span class="badge badge-light">{{ product.total }}</span></h4></td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data () {
        return {
            quantity: this.product.quantity
        }
    },
    props: {
        product: {
            required: true,
            type: Object
        }
    },
    watch: {
        quantity (quantity) {
            const productId = this.product.id
            this.update({ productId, quantity })
        }
    },
    methods: {
        ...mapActions({
            update: 'cart/update',
            destroy: 'cart/destory'
        })
    }
}
</script>

