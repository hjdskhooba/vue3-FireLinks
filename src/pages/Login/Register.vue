<template>
  <!-- <form class="register register-form form login">
        <input type="text" class="email" placeholder="Email" aria-label="idk">
        <input type="text" class="password" placeholder="Password" aria-label="idk">
        <input type="text" class="password confirm" placeholder="Confirm Password" aria-label="idk">
    </form> -->
  <div class="back-login">
    <div class="login__wrapper register">
      <form class="login login-form">
        <img
          src="https://repository-images.githubusercontent.com/106262467/4cbe6700-41c9-11ea-8860-57668b5a0ec2"
          class="logo"
          alt=""
        />
        <h3 class="login-title">Registering</h3>
        <input class="email" type="text" aria-label="idk" placeholder="Email" />
        <br />
        <input
          class="password"
          type="text"
          aria-label="idk"
          placeholder="Password"
        />
        <br>
        <input
          class="confirm password"
          type="text"
          aria-label="idk"
          placeholder="Confirm Password"
        />
        <span class="forgot">Dont have an account ?</span>
        <button class="btn-login">Sign Up</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.register {
    .login{
        width: 600px;
    }
}
</style>
