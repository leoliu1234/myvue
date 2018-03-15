<template>
  <div class="dashboard">
     <UserInfo></UserInfo>
      <br>
      <button @click="back">Back</button>
      <button @click="$router.push('/hello')">Hello</button>
      <button @click="$router.push('/product')">Product</button>
      <button @click="$router.push('/cart')">Cart</button>
  </div>
</template>

<script>
import { mapState } from "vuex"
import UserInfo from '@/components/UserInfo'

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
  },
  components:{UserInfo}
};
</script>

<style scoped>
  .dashboard{
    width:80%;
    margin: auto;
  }
</style>


