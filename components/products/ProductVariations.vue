<template>
    <div class="form-group">
        <select class="form-control">
            <option>Выберите вариант</option>
            <option v-for="variation in variations" :key="variation.id" :value="variation.id">
                {{ variation.name }}
                <template v-if="variation.price_differs">
                    ({{ variation.price }})
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
    }
}
</script>

