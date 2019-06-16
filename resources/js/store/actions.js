let actions = {
    createProduct({commit}, product) {
        axios.post('/api/products', product)
            .then(res => {
                commit('CREATE_PRODUCT', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchProducts({commit}) {
        axios.get('/api/products')
            .then(res => {
                commit('FETCH_PRODUCTS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    updateProduct({commit}, product) {
        axios.put(`/profile/update/${product.id}`)
            .then((res) => {
                commit('UPDATE_PRODUCT', product)
            }).catch(err => {
            console.log(err)
        })
    },
    selectProduct({commit}, product) {
        axios.put(`/profile/select/${product.id}`)
            .then((res) => {
                commit('SELECT_PRODUCT', product)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteProduct({commit}, product) {
        axios.delete(`/api/products/${product.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_PRODUCT', product)
            }).catch(err => {
            console.log(err)
        })
    }
}

export default actions