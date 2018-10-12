export const state = () => ({
    products: [],
})

export const getters = {
    products (state) {
        return state.products
    },

    count(state) {
        return state.products.length
    }
}

export const mutations = {
    SET_PRODUCTS (state, products) {
        state.products = products
    }
}

export const actions = {
    async getCart({ commit }) {
        let response = await this.$axios.$get('carts')
        
        commit('SET_PRODUCTS', response.data.products)

        return response
    },

    async destory({ dispatch }, productId) {
        let response = await this.$axios.$delete(`carts/${productId}`)
        
        dispatch('getCart')
    }
}