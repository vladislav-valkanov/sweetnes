let mutations = {
    CREATE_PRODUCT(state, product) {
        state.products.unshift(product)
    },
    FETCH_PRODUCTS(state, products) {
        let index = state.products.findIndex(item => item.id === product.id)
        return state.products = products
    },
    UPDATE_PRODUCT(state, product) {
        let index = state.products.findIndex(item => item.id === product.id)
        state.products[index] = product
    },
    SELECT_PRODUCT(state, product) {
        let index = state.products.findIndex(item => item.id === product.id)
        return state.products[index]
    },
    DELETE_PRODUCT(state, product) {
        let index = state.products.findIndex(item => item.id === product.id)
        state.products.splice(index, 1)
    }

}
export default mutations