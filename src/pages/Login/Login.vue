<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
  name: "Login",
  setup() {
    const login_form = ref({});
    const store = useStore()

    const login = () => {
      store.dispatch('login', login_form.value)
    }
    
    return {
      login_form,
      login
    };
  },
};
</script>

<template>
  <div class="back-login">
    <div class="login__wrapper">
      <form class="login login-form login-block" @submit.prevent="login">
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
          v-model="login_form.email"
        />
        <br />
        <input
          class="password"
          type="password"
          v-model="login_form.password"
          aria-label="idk"
          placeholder="Password"
        />
        <span class="forgot">Forgot Password?</span>
        <input type="submit" value="Login" class="btn-login" aria-label="idk" @click="login">
      </form>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../scss/login.scss";
</style>
