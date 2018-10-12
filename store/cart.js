export const state = () => ({
    products: [],
    empty: true,
    subtotal: null,
    total: null
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

    subtotal(state) {
        return state.subtotal
    },
}

export const mutations = {
    SET_PRODUCTS (state, products) {
        state.products = products
    },

    SET_EMPTY (state, value) {
        state.empty = value
    },

    SET_SUBTOTAL (state, value) {
        state.subtotal = value
    },

    SET_TOTAL (state, value) {
        state.total = value
    },
}

export const actions = {
    async getCart({ commit }) {
        let response = await this.$axios.$get('carts')
        
        commit('SET_PRODUCTS', response.data.products)
        commit('SET_EMPTY', response.meta.empty)
        commit('SET_SUBTOTAL', response.meta.subtotal)
        commit('SET_TOTAL', response.meta.total)

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