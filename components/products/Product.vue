<template>
    <div class="card">
        <div class="card-body">
            <h2><nuxt-link :to="productLink">{{ product.name }}</nuxt-link></h2>
            <p>{{ product.description }}</p>
            <p><span class="badge badge-dark">{{ product.price }}</span> <span class="badge badge-danger" v-if="!product.in_stock">закончился</span></p>
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
    },
    computed: {
        productLink () {
            return { 
                name: 'products-slug', 
                params: { slug: this.product.slug } 
            }
        }
    }
}
</script>

