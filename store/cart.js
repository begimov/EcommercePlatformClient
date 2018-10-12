export const state = () => ({
    products: [],
})

export const mutations = {
    SET_PRODUCTS (state, products) {
        state.products = products
    }
}

export const actions = {
    async getCart({ commit }) {
        let response = await this.$axios.g$et('carts')
        
        commit('SET_PRODUCTS', res.data.products)

        return response
    }
}