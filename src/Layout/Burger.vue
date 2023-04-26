<template>
  <div class="burger-menu">
    <ul class="menu__list" >
      <li class="menu_item" @click="hideMenu">Возможности</li>
      <li class="menu_item" @click="hideMenu">FAQ</li>
      <li class="menu_item" @click="hideMenu">Новости</li>
      <li class="menu_item" @click="hideMenu">Контакты</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    hideMenu(){
      this.$store.commit("toggleBurgerMenuDown")
    }
  }
};
</script>
<style lang="scss">
</style>
