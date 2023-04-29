<script setup>
import { auth } from "./firebase";
let isSignedIn = true;

auth.onAuthStateChanged((user) => {
  if (user) {
    isSignedIn = true;
    console.log("good");
  } else {
    isSignedIn = false;
    console.log("not good");
  }
});
</script>
<template>
  <router-view v-if="!isSignedIn" to="/"></router-view>
  <router-view v-else to="/login"></router-view>
</template>
<style>
@import "./scss/styles.scss";
</style>
