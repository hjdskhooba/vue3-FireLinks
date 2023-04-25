<template>
  <section class="title main__title">
    <div class="container">
      <div class="title__body">
        <h1 class="title-title">Ваш трафик не сгорит с нашими ссылками 🔥</h1>
        <img
          src="../../assets/main/title/circle.png"
          alt=""
          class="title-circle-img"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import "../../scss/main/title.scss";
.title {
  .title__body {
    height: 600px;
    position: relative;
    width: 100%;
    .title-title {
        position: absolute;
      font-weight: 400;
      color: white;
      max-width: 707px;
      font-size: 83px;
      z-index: 1;
      top: 130px;
    }
    .title-circle-img {
      position: absolute;
      top: 60px;
      right: 0;
    }
  }
}
</style>
