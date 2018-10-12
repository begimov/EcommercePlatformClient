<template>
    <tr>
        <td><img src="http://via.placeholder.com/60x60" alt=""></td>
        <td>{{ product.product.name }}</td>
        <td>{{ product.name }}</td>
        <td>
            {{ product.quantity }}<a href="#" class="btn btn-outline-secondary btn-sm ml-3">X</a>
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

