export const state = () => ({
    products: [],
    empty: true,
    subtotal: null,
    total: null,
    changed: false
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

    changed(state) {
        return state.changed
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

    SET_CHANGED (state, value) {
        state.changed = value
    },
}

export const actions = {
    async getCart({ commit }) {
        let response = await this.$axios.$get('carts')
        
        commit('SET_PRODUCTS', response.data.products)
        commit('SET_EMPTY', response.meta.empty)
        commit('SET_SUBTOTAL', response.meta.subtotal)
        commit('SET_TOTAL', response.meta.total)
        commit('SET_CHANGED', response.meta.changed)

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