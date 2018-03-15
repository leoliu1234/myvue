<template>
  <div>
      <span>UserName:{{name}}</span>
      <br/>
      <span>Password:{{password}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      name: state => state.login.name,
      password: state => state.login.name
    })
  }
};
</script>

