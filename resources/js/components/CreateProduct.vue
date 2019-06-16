<template>

    <form action="" @submit="createProduct(product)">
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
                    @click.prevent="createProduct(product)">Submit
            </button>
        </div>
    </form>

</template>

<script>
    export default {
        name: "CreateProduct",
        data() {
            return {
                product: {
                    name: '',
                    description: ''
                }
            }
        },
        methods: {
            createProduct(product) {
                this.$store.dispatch('createProduct', product)
                    .then((response) => {

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