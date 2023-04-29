<script setup>
import Footer from "@/Layout/Footer.vue";
import Header from "@/Layout/Header.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const login_form = ref({});
const store = useStore();
const login = () => {
  store.dispatch("login", login_form.value);
};
</script>

<template>
  <Header />
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
        <input
          type="submit"
          value="Login"
          class="btn-login"
          aria-label="idk"
          @click="login"
        />
      </form>
    </div>
  </div>
  <Footer />
</template>
<style lang="scss">
@import "../../scss/login.scss";
</style>
