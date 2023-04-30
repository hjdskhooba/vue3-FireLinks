<template>
  <main class="main" data-aos="fade-in" @click="hideMenu">
    <Header />
    <Title />
    <Benefit />
    <Possibilities />
    <Footer />
  </main>
</template>
<script setup>
import Header from "../../Layout/Header.vue";
import Title from "./Title.vue";
import Benefit from "./Benefit.vue";
import Possibilities from "./Possibilities.vue";
import Footer from "../../Layout/Footer.vue";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();
const hideMenu = (e) => {
  if (
    (e.target.localName === "img" &&
      e.target.currentSrc.includes("Vector.3f7a5892.svg")) ||
    e.target.className.includes("burger-menu")
  ) {
    return null;
  } else {
    return store.commit("toggleBurgerMenuDown");
  }
};

onBeforeMount(() => {
  store.dispatch("fetchUser");
});
</script>
<style lang="scss">
@import "../../scss/main/main.scss";
</style>
