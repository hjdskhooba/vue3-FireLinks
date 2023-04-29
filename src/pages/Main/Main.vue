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
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Title,
    Benefit,
    Possibilities,
  },
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
    return {
      user: store.state.user,
    };
  },
};
</script>
<style lang="scss">
@import "../../scss/main/main.scss";
</style>
