<script>
import { auth } from "@/firebase";
import { computed, reactive } from "vue";
export default {
  name: "Profile",
  setup() {
    const userData = reactive({
      data: {},
    });

    auth.onAuthStateChanged((user) => {
      if (user) {
        userData.data = user;
      } else {
        userData.data = { mes: "login please" };
      }
    });
    const email = computed(() => {
      return userData.data.email.split("@")[0];
    });
    const createdTime = computed(() => {
      return (
        userData.data.metadata.creationTime.split(" ")[3] +
        " " +
        userData.data.metadata.creationTime.split(" ")[4]
      );
    });

    const lastSignInTime = computed(() => {
      return (
        userData.data.metadata.lastSignInTime.split(" ")[3] +
        " " +
        userData.data.metadata.lastSignInTime.split(" ")[4]
      );
    });
    return {
      userData,
      createdTime,
      lastSignInTime,
      email,
    };
  },
};
</script>
<!--todo:
     1. -Сделать роут в этот компонент- - есть
     2. Вывести все данные, и добавить немного функций
     3. Доделать верстку
     4. Добавить плавный скролл
 -->
<template>
  <div class="profile">
    <h1>{{ email }}</h1>
    <p><b>Created at: </b> {{ createdTime }}</p>
    <p><b>Last sign in: </b> {{ lastSignInTime }}</p>
  </div>
</template>
<style lang="scss">
.profile {
  color: black;
  -webkit-text-fill-color: black;
}
</style>
