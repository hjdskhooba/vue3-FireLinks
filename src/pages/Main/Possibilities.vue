<template>
  <section class="posibilities" @click="toggleBurgerMenuDown">
    <div class="container">
      <div class="posibilities__body">
        <h2 class="posibilities-title title">Возможности сервиса</h2>
        <!-- Вот здесь будем использовать vuex -->
        <div class="posibilities__row">
          <div
            class="posibilities_item"
            data-aos="fade-right"
            v-for="item in possibleCards"
          >
            <h4 class="posibilities_item-title">{{ item.title }}</h4>
            <p class="posibilities_item-desc">
              {{ item.description }}
            </p>
            <img class="img" :src="item.img" alt="" />
          </div>
        </div>
        <!-- 27.04 -->
        <!-- Подсмотрю с проекта stuff :) -->
        <div class="show-btn-block">
          <button class="btn show-more" @click="showMore">Show More</button>
        </div>
      </div>
    </div>
    <br />
    <img
      src="../../assets/main/benefit/benefit-back.png"
      alt=""
      class="last-grad-top"
    />
    <button class="blue-btn">
      <a href="#/register"> Регистрация </a>
    </button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      possibleCards: this.$store.state.possibleCards,
    };
  },
  methods: {
    toggleBurgerMenuDown() {
      this.$store.commit("toggleBurgerMenuDown");
    },
    showMore(e) {
      this.$store.commit("showMore", e.target);
    },
  },
};
</script>
