<template>
  <main class="main" data-aos="fade-in">
    <Header />
    <Title />
    <Benefit />
    <Possibilities />
    <Footer />
  </main>
</template>
<script>
import Header from "../../Layout/Header.vue";
import Title from "./Title.vue";
import Benefit from "./Benefit.vue";
import Possibilities from "./Possibilities.vue";
import Footer from "../../Layout/Footer.vue";

export default {
  name: "Main",
  components: { Header, Footer, Title, Benefit, Possibilities },
  data() {
    return {
      toggleMenu: this.$store.state.toggleMenu,
    };
  },
  methods: {
    toggleBurgerMenu() {
      if (!this.toggleMenu) {
        this.toggleMenu = true;
      } else {
        this.toggleMenu = false;
      }
    },
  },
};
</script>
<style lang="scss">
@import "../../scss/main/main.scss";
</style>
