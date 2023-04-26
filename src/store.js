import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      toggleMenu: false,
      possibleCards: [
        {
          id: 1,
          title: "Роутинг",
          description:
            "Распределение переходов в зависимости от множества условий, таких как ОС, браузер, страна, город, даже можно отследить установлен ли в браузере AdBlock или расширение Metamask и отправлять таких пользователей на нужный вам сайт.",
          img: "https://www.svgrepo.com/show/513205/globe-1.svg",
        },
        {
          id: 2,
          title: "Клоакинг",
          description:
            "Если вам нужно скрыть основной сайт от глаз модераторов рекламных сетей или просто лишних пользователей, то можно указать “белый” сайт, который они увидят при переходе по ссылке, с редиректом или подгрузкой страницы без редиректа. Собственные базы с IP Facebook, Google, Яндекс, VK.",
          img: "https://www.svgrepo.com/show/513198/eye.svg",
        },
        {
          id: 3,
          title: "Запасные ссылки",
          description:
            "Возможность указать дополнительные ссылки, на которые будут перенаправляться пользователи, в случае блокировки предыдущих ссылок различными сервисами",
          img: "https://www.svgrepo.com/show/513185/cog.svg",
        },
        {
          id: 4,
          title: "Команды",
          description:
            "Возможность добавлять пользователей, распределять им роли и доступы к системе. Возможность подключения Telegram групп для команд, таким образом получать все важные оповещения о действиях команды в одном месте, чтобы не упустить ничего важного, а также оперативно реагировать на изменения.",
          img: "https://www.svgrepo.com/show/513224/man.svg",
        },
      ],
    };
  },
  mutations: {
    toggleBurgerMenu(state) {
      state.toggleMenu = !state.toggleMenu;
    },
    toggleBurgerMenuUp(state) {
      if (state.toggleMenu === true) {
        state.toggleMenu = false;
      }
    },
    toggleBurgerMenuDown(state) {
      if (state.toggleMenu == true) {
        state.toggleMenu = false;
      }
    },
  },
});

export default store;
