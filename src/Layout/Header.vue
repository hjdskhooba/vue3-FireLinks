<template>
  <div class="container">
    <header class="header">
      <div class="header__nav">
        <div class="logo">
          <img src="../assets/header/logo.svg" class="logo-img" alt="" />
          <h3 class="logo-text">FireLinks</h3>
        </div>
        <ul class="header_list" >
          <li class="heaader-item">Возможности</li>
          <li class="heaader-item">FAQ</li>
          <li class="heaader-item">Новости</li>
          <li class="heaader-item">Контакты</li>
        </ul>
      </div>
      <div class="header__btns">
        <button class="theme-change">
          <img
            src="https://static.thenounproject.com/png/979888-200.png"
            alt=""
          /><img
            src="https://cdn-icons-png.flaticon.com/512/169/169367.png"
            alt=""
          />
        </button>
        <button class="Vhod btn">Вход</button>
        <button class="Registraciya btn">Регистрация</button>
      </div>
      <div>
        <span><img src="../assets/header/Vector-1.svg" alt="" /></span>
        <span @click="toggleBurgerMenu"
          ><img src="../assets/header/Vector.svg" alt=""
        /></span>
      </div>
      <div class="burger_menu" v-if="$store.state.toggleMenu === true">
        <Burger />
      </div>
    </header>
  </div>
</template>
<script>
import Burger from "./Burger.vue";
export default {
  data() {
    return {};
  },
  components: {
    Burger,
  },
  methods: {
    toggleBurgerMenu() {
      this.$store.commit("toggleBurgerMenu")
    },
  },
};
</script>
<style lang="scss">
@import "../scss/header/header.scss";
</style>
