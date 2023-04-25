<template>
  <div class="container">
    <header class="header">
      <div class="header__nav">
        <div class="logo">
          <img src="../assets/header/logo.svg" class="logo-img" alt="" />
          <h3 class="logo-text">FireLinks</h3>
        </div>
        <ul class="header_list">
          <li class="heaader-item">Возможности</li>
          <li class="heaader-item">FAQ</li>
          <li class="heaader-item">Новости</li>
          <li class="heaader-item">Контакты</li>
        </ul>
      </div>
      <div class="header__btns">
        <button class="theme-change">
          <img
            src="https://static.thenounproject.com/png/979888-200.png"
            alt=""
          /><img
            src="https://cdn-icons-png.flaticon.com/512/169/169367.png"
            alt=""
          />
        </button>
        <button class="Vhod btn">Вход</button>
        <button class="Registraciya btn">Регистрация</button>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import "../scss/header.scss";
.header {
  & * {
    align-items: center;
  }
  justify-content: space-between;
  display: flex;
  padding: 12px 0;
  &__nav {
    display: flex;
    color: white;
    .logo {
      display: flex;
      align-items: center;
      gap: 13px;
      .logo-img {
        width: 36px;
        height: 41px;
      }
      .logo-text {
        color: white;
        font-size: 20px;
        font-weight: 700;
      }
    }
    .header_list {
      display: flex;
      margin-left: 30px;
      gap: 29px;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      align-items: center;
      li{
        cursor: pointer;
        &:hover{
            color: #d9d9d9;
        }
      }
    }
  }
  &__btns {
    gap: 11px;
    display: flex;
    button:active {
      cursor: default;
    }
    button:nth-child(1){
        width: auto;
        height: auto;
    }
    button {
      cursor: pointer;
      display: flex;
      width: 137px;
      height: 50px;
      text-align: center;
      justify-content: center;
      color: white;
    }
    button:nth-child(2) {
      background: #33caff;
      border-radius: 10px;
      font-weight: 700;
      font-size: 16px;
      border: none;
      outline: none;
    }
    button:nth-child(3) {
        background: transparent;
      border: 1px solid #ffffff;
      border-radius: 10px;
    }
    img {
      height: 20px;
    }
  }
}
</style>
