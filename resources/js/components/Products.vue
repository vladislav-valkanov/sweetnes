<template>
    <div>
        <h4 class="text-center font-weight-bold">Products</h4>
        <router-link :to="{ name: 'createProduct' }">Add New</router-link>
        <div v-if="message" class="alert">{{ message }}</div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Weigth</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products">
                <td>{{product.name}}</td>
                <td>{{product.description}}</td>
                <td>{{product.weigth}}</td>
                <td>{{product.size}}</td>
                <td>{{product.price}}</td>
                <td>
                    <button class="btn btn-danger" @click="deleteProduct(product)">
                        <i style="color:white" class="fa fa-trash"></i>
                    </button>
                    <router-link class="btn btn-warning" :to="{ name: 'updateProduct', params: {id: product.id} }">Edit
                    </router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Products",
        data() {
            return {
                message: null,
            }
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        },
        methods: {
            deleteProduct(product) {
                this.$store.dispatch('deleteProduct', product)
                    .then((response) => {
                        this.message = 'Product deleted';
                        setTimeout(() => this.message = null, 2000);
                        this.product = response.data.data;
                    })
            }
        },
        computed: {
            ...mapGetters([
                'products'
            ])
        }
    }
</script>