<template>
  <div id="app">
        <span>{{count}}<span>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus',
      total: 'cardTotalPrice'
    })
  },
  methods:{
    checkout(products){
      this.$store.dispatch('checkout', products);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
