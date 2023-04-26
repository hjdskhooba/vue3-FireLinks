<template>
  <router-view></router-view>
</template>
<script>
import Main from "./pages/Main/Main.vue";
export default {
  components: {
    Main,
  },
  name: "App",
  data() {
    return {};
  },
};
</script>
<style>
@import "./scss/styles.scss";
</style>
