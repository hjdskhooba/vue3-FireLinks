<script setup>
import Burger from "./Burger.vue";
import { useStore } from "vuex";

const store = useStore();
const toggleBurgerMenu = () => store.commit("toggleBurgerMenu");
</script>
<template>
  <div class="container">
    <header class="header" data-aos="fade-in">
      <div class="header__nav">
        <a href="#/">
          <div class="logo">
            <img src="../assets/header/logo.svg" class="logo-img" alt="" />
            <h3 class="logo-text">FireLinks</h3>
          </div>
        </a>
        <ul class="header_list">
          <li class="heaader-item">Возможности</li>
          <li class="heaader-item">FAQ</li>
          <a href="#/news"><li class="heaader-item">Новости</li></a>
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
        <a href="#/login" v-if="!$store.state.user">
          <button class="blue-btn">Вход</button>
        </a>
        <a href="#/register" v-if="!$store.state.user">
          <button class="blue-btn">
            <a href="#/register"> Регистрация </a>
          </button>
        </a>
        <span v-if="$store.state.user"
          ><img src="../assets/header/Vector-1.svg" alt=""
        /></span>
      </div>
      <div>
        <span v-if="$store.state.user"
          ><img src="../assets/header/Vector-1.svg" alt=""
        /></span>
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
<style lang="scss">
@import "../scss/header/header.scss";
</style>
