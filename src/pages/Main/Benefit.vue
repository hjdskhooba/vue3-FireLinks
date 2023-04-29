<script setup>
import { useStore } from "vuex";
const store = useStore();
const hideMenu = () => {
  store.commit("toggleBurgerMenuDown");
};
</script>

<template>
  <section class="benefit" @click="hideMenu">
    <div class="container" @click="toggle">
      <div class="benefit__body">
        <h3 class="benefit-title">Наш сервис будет полезен:</h3>
        <div class="benefit__blocks">
          <div class="benefit__blocks-item" data-aos="zoom-in">
            <h4 class="benefit__blocks-item-number">01</h4>
            <p class="benefit__blocks-item-paragraph">
              Интернет маркетологам, которые работают с покупным трафиком и
              хотят получить информацию по его качеству и дополнительной
              информации о пользователях через макросы, а также кто занимается
              email рассылками
            </p>
          </div>
          <div
            class="benefit__blocks-item"
            data-aos="zoom-in"
            data-aos-duration="209"
          >
            <h4 class="benefit__blocks-item-number">01</h4>
            <p class="benefit__blocks-item-paragraph">
              Интернет маркетологам, которые работают с покупным трафиком и
              хотят получить информацию по его качеству и дополнительной
              информации о пользователях через макросы, а также кто занимается
              email рассылками
            </p>
          </div>
          <div
            class="benefit__blocks-item"
            data-aos="zoom-in"
            data-aos-duration="409"
          >
            <h4 class="benefit__blocks-item-number">01</h4>
            <p class="benefit__blocks-item-paragraph">
              Интернет маркетологам, которые работают с покупным трафиком и
              хотят получить информацию по его качеству и дополнительной
              информации о пользователях через макросы, а также кто занимается
              email рассылками
            </p>
          </div>
          <img
            src="../../assets/main/benefit/benefit-hands.png"
            alt=""
            class="benefit-hands"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
    <img src="../../assets/main/benefit/benefit-back.png" alt="" />
    <img
      src="../../assets/main/benefit/benefit-back.png"
      alt=""
      class="grad-bottom"
    />
  </section>
</template>
