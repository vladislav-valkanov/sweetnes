<template>
    <div>
        <h1>Laravel orders App</h1>

        <p>
            <router-link :to="{ name: 'products' }">products</router-link>
            <!--            |-->
            <!--            <router-link :to="{ name: 'users' }">Users</router-link>-->
        </p>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>