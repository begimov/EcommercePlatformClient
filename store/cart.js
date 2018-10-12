export const state = () => ({
    products: [],
    empty: true
})

export const getters = {
    products (state) {
        return state.products
    },

    count(state) {
        return state.products.length
    },

    empty(state) {
        return state.empty
    },
}

export const mutations = {
    SET_PRODUCTS (state, products) {
        state.products = products
    },

    SET_EMPTY (state, value) {
        state.empty = value
    },
}

export const actions = {
    async getCart({ commit }) {
        let response = await this.$axios.$get('carts')
        
        commit('SET_PRODUCTS', response.data.products)
        commit('SET_EMPTY', response.meta.empty)

        return response
    },

    async update({ dispatch }, { productId, quantity }) {
        await this.$axios.$patch(`carts/${productId}`, { quantity })
        
        dispatch('getCart')
    },

    async destory({ dispatch }, productId) {
        await this.$axios.$delete(`carts/${productId}`)
        
        dispatch('getCart')
    }
    
}