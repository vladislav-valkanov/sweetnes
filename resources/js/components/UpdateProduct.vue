<template>
    <div>
        <div v-if="message" class="alert">{{ message }}</div>
        <form action="" @submit="updateProduct(product)">
            <h4 class="text-center font-weight-bold">Product creation form</h4>
            <div class="form-group">
                <input type="text" placeholder="Product name" v-model="product.name" class="form-control">

            </div>
            <div class="form-group">
                         <textarea v-model="product.description" placeholder="Product description" class="form-control">

                        </textarea>
            </div>
            <div class="form-group">
                <input type="number" placeholder="Product weigth" v-model="product.weigth"
                       class="form-control">

            </div>
            <div class="form-group">
                <input type="number" placeholder="Product size" v-model="product.size" class="form-control">

            </div>
            <div class="form-group">
                <input type="number" placeholder="Product price" v-model="product.price"
                       class="form-control">

            </div>
            <div class="form-group">
                <button :disabled="!isValid" class="btn btn-block btn-primary"
                        @click.prevent="updateProduct(product)">Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "UpdateProduct",
        data() {
            return {
                message: null,
                product: {
                    name: '',
                    description: ''
                }
            }
        },
        mounted() {
            this.$store.dispatch('selectProduct')
        },
        methods: {
            updateProduct(product) {
                this.$store.dispatch('updateProduct', product)
                    .then((response) => {
                        this.message = 'Product updated';
                        setTimeout(() => this.message = null, 2000);
                        this.product = response.data.data;
                    })
            }
        },
        computed: {
            isValid() {
                return this.product.name !== '' && this.product.description !== ''
            }
        }
    }
</script>