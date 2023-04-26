<template>
  <section class="title-block main__title" @click="toggleBurgerMenuDown">
    <div class="container">
      <div class="title__body">
        <h1
          class="title"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="800"
        >
          Ваш трафик не сгорит с нашими ссылками 🔥
        </h1>
        <img
          src="../../assets/main/title/circle.png"
          alt=""
          class="title-circle-img"
          data-aos="fade-up"
          data-aos-duration="1300"
        />
      </div>
    </div>
    <img src="../../assets/main/benefit/benefit-back.png" alt="" />
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleBurgerMenuDown() {
      this.$store.commit("toggleBurgerMenuDown");
    },
  },
};
</script>
