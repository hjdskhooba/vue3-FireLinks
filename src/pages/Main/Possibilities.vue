<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const emit = defineEmits(['possibilities'])

const possibilities = ref(null);
const store = useStore();
const possibleCards = computed(() => store.state.possibleCards).value;

const logout = () => store.dispatch("logout");
const showMore = (e) => store.commit("showMore", e.target);
</script>

<template>
  <section class="posibilities" ref="possibilities">
    <div class="container">
      <div class="posibilities__body">
        <h2 class="posibilities-title title">Возможности сервиса</h2>
        <!-- Здесь vuex -->
        <!-- 25.04 -->
        <div class="posibilities__row">
          <div
            class="posibilities_item"
            data-aos="fade-right"
            v-for="item in possibleCards"
            :key="item.id"
          >
            <h4 class="posibilities_item-title">{{ item.title }}</h4>
            <p class="posibilities_item-desc">
              {{ item.description }}
            </p>
            <img class="img" :src="item.img" alt="" />
          </div>
        </div>
        <!-- 27.04 -->
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
      <a @click="logout" v-if="$store.state.user"> Выйти </a>
      <a href="#/login" v-else> Войти </a>
    </button>
  </section>
</template>
