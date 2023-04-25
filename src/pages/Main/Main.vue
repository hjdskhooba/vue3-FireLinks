<template>
  <main class="main">
    <Header />
    <Title/>
    <Footer />
  </main>
</template>
<script>
import Header from "../../Layout/Header.vue";
import Title from "./Title.vue";
import Footer from "../../Layout/Footer.vue";
export default {
  name: "Main",
  components: { Header, Footer, Title },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import "../../scss/main/main.scss";
</style>
