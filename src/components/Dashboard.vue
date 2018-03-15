<template>
  <div>
      <span>Name:{{name}}</span>
      <br/>
      <span>Password:{{password}}</span>
      <br>
      <button @click="back">Back</button>
      <button @click="$router.push('/hello')">Hello</button>
      <button @click="$router.push('/product')">Product</button>
      <button @click="$router.push('/cart')">Cart</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      name: state => state.login.name,
      password: state => state.login.password
    })
  },
  methods:{
      back(){
          this.$router.back();
      }
  }
};
</script>

