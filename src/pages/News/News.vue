<script setup>
import Footer from "@/Layout/Footer.vue";
import Header from "@/Layout/Header.vue";
import Title from "./Title.vue";
import useStore from "vuex";

const hideMenu = () => useStore().commit("toggleBurgerMenuDown");
</script>
<template>
  <Header />
  <main class="news" @click="hideMenu">
    <Title />
  </main>
  <Footer />
</template>
<style lang="scss"></style>
