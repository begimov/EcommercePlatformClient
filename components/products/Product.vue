<template>
    <div class="card">
        <div class="card-body">
            <h2><a href="">{{ product.name }}</a></h2>
            <p>{{ product.description }}</p>
            <p><span class="badge badge-dark">{{ product.price }}</span></p>
        </div>
    </div>
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

