<script setup>
import { useStore } from "vuex";
const hideMenu = () => {
  useStore().commit("toggleBurgerMenuDown");
};
</script>
<template>
  <div class="burger-menu">
    <ul class="menu__list">
      <li class="menu_item" @click="hideMenu">Возможности</li>
      <li class="menu_item" @click="hideMenu">FAQ</li>
      <li class="menu_item" @click="hideMenu">Новости</li>
      <li class="menu_item" @click="hideMenu">Контакты</li>
    </ul>
  </div>
</template>
<style lang="scss"></style>
