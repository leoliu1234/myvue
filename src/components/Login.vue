<template>
  <div>
    <div>
        <input type="text" @input="updateName"/>
    </div>
    <div>
        <input type="password" @input="updatePassword"/>
    </div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      name: state => state.login.name,
      password: state => state.login.password
    })
  },
  methods: {
    updateName(e) {
      this.$store.commit("updateName", e.target.value);
    },
    updatePassword(e) {
      this.$store.commit("updatePassword", e.target.value);
    },
    login(){
        this.$router.push("/dashboard");
    }
  }
};
</script>

