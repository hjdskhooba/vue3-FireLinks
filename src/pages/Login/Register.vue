<script setup>
import Footer from "@/Layout/Footer.vue";
import Header from "@/Layout/Header.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const register_form = ref({});
const confirm_password = ref("");

const register = () => {
  store.dispatch("register", register_form.value);
};
</script>
<template>
  <Header />
  <div class="back-login">
    <div class="login__wrapper register">
      <div class="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <form class="login login-form" @submit.prevent="register">
          <img
            src="https://repository-images.githubusercontent.com/106262467/4cbe6700-41c9-11ea-8860-57668b5a0ec2"
            class="logo"
            alt=""
          />
          <h3 class="login-title">Registering</h3>
          <input
            class="email"
            type="email"
            v-model="register_form.email"
            aria-label="idk"
            placeholder="Email"
          />
          <br />
          <input
            class="password"
            type="password"
            aria-label="idk"
            v-model="register_form.password"
            placeholder="Password"
          />
          <br />
          <input
            class="confirm password"
            type="password"
            aria-label="idk"
            v-model="confirm_password"
            placeholder="Confirm Password"
          />
          <a href="#/login"
            ><span class="forgot"> Already have an account ?</span></a
          >
          <input
            type="submit"
            class="btn-login btn-register"
            @click="register"
            value="Sign Up"
            aria-label="idk"
          />
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>
<style lang="scss">
@import "../../scss/login.scss";
.register {
  .login {
    width: 600px;
    a {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
