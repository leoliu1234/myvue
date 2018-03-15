<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import ShoppingCart from "./ShoppingCart.vue";
import Hello from "./HelloWorld.vue";
import Login from "./Login.vue"

export default {
  components: { ProductList, ShoppingCart, Hello, Login }
};
</script>
