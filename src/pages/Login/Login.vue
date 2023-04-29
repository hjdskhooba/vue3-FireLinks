<template>
  <div class="back-login">
    <div class="login__wrapper">
      <form class="login login-form login-block" v-if="!user">
        <img
          src="https://repository-images.githubusercontent.com/106262467/4cbe6700-41c9-11ea-8860-57668b5a0ec2"
          class="logo"
          alt=""
        />
        <h3 class="login-title">Log in</h3>
        <input
          class="email"
          type="email"
          aria-label="idk"
          placeholder="Email"
          v-model="email"
        />
        <br />
        <input
          class="password"
          type="password"
          v-model="password"
          aria-label="idk"
          placeholder="Password"
        />
        <span class="forgot">Forgot Password?</span>
        <button class="btn-login" @click="auth" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  setup(){
      return {
        API_URL: "http://localhost:8080/api",
        user: null,
        email: "",
        password: "",
        isLoaded: false
      };
  }
};
</script>
<style lang="scss">
@import "../../scss/login.scss";
</style>
