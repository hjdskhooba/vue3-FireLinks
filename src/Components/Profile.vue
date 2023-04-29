<script setup>
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
    console.log("no user");
  }
});
</script>
<!-- 
    1. Сделать роут в этот компонент
    2. Вывести все данные, и добавить немного функций
    3. Доделать верстку
    4. Добавить плавный скролл

 -->
<template>
  <div class="profile">Личный кабинет {{ "hello mf" }}</div>
</template>
<style lang="scss"></style>
