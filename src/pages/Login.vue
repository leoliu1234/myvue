<template>
  <div class="v-form">
    <div class="v-form-item">
      <cube-input placeholder="用户名" v-model="name" ></cube-input>
    </div>
    <div class="v-form-item">
      <cube-input placeholder="密码" v-model="password" ></cube-input>
    </div>
    <div class="v-form-btns">
      <cube-button @click="login">Login</cube-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  // computed: {
  //   ...mapState({
  //     name: state => state.login.name,
  //     password: state => state.login.password
  //   })
  // },
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    // updateName(e) {
    //   this.$store.commit("updateName", e.target.value);
    // },
    // updatePassword(e) {
    //   this.$store.commit("updatePassword", e.target.value);
    // },
    login() {
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style lang="stylus" scoped>
@require ('../assets/stylus/form.styl');
</style>




