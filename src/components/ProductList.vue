<template>
  <ul>
    <li v-for="product in products" v-bind:key="product.title">
      {{ product.title }} - {{ product.price  }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
      <br/>
      <span>{{isOdd}}</span>
          <br/>
    <button @click="$router.back()">Back</button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'allProducts',
    isOdd:'isOdd'
  }),
  methods: mapActions([
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
