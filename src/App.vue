<script setup>
import { auth } from "./firebase";

let isSignedIn = true;
auth.onAuthStateChanged((user) => {
  if (user) {
    isSignedIn = true;
    console.log("You have successfully registered and logged in.");
  } else {
    isSignedIn = false;
    console.log("You haven't logged in.");
  }
});
</script>
<template>
  <router-view v-if="!isSignedIn"></router-view>
  <router-view v-else></router-view>
</template>
<style>
@import "./scss/styles.scss";
</style>
