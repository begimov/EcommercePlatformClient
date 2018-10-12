<template>
    <tr>
        <td><img src="http://via.placeholder.com/60x60" alt=""></td>
        <td>{{ product.product.name }}</td>
        <td>{{ product.name }}</td>
        <td>
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
                    <button class="btn btn-outline-secondary btn-sm" type="button">X</button>
                </div>
            </div>
        </td>
        <td>{{ product.price }}</td>
        <td>{{ product.total }}</td>
    </tr>
</template>

<script>
export default {
    props: {
        product: {
            required: true,
            type: Object
        }
    }
}
</script>

