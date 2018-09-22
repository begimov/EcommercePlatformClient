<template>
    <div class="form-group">
        <select class="form-control" @change="onChange">
            <option>Выберите вариант</option>
            <option v-for="variation in variations" 
                :key="variation.id" 
                :value="variation.id"
                :disabled="!variation.in_stock"
            >
                {{ variation.name }}
                <template v-if="variation.price_differs">
                    ({{ variation.price }})
                </template>

                <template v-if="!variation.in_stock">
                    (нет в продаже)
                </template>
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        variations: {
            required: true,
            type: Array
        }
    },
    methods: {
        onChange(e) {
            this.$emit('input', this.findVariationById(e.target.value))
        },
        findVariationById(id) {
            let variation = this.variations.find(variation => variation.id == id)
            return variation ? variation : null
        }
    }
}
</script>

