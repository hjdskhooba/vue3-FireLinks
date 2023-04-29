import { createStore } from "vuex";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import router from "./router";

const store = createStore({
  state: {
    toggleMenu: false,
    user: null,
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
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
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
    showMore(state, btn) {
      if (state.possibleCards.length !== 6) {
        state.possibleCards.push(
          {
            id: 3,
            title: "Запасные ссылки",
            description:
              "Возможность указать дополнительные ссылки, на которые будут перенаправляться пользователи, в случае блокировки предыдущих ссылок различными сервисами",
            img: "https://www.svgrepo.com/show/513185/cog.svg",
          },
          {
            id: 4,
            title: "Комьюнити",
            description:
              "Возможность добавлять пользователей, распределять им роли и доступы к системе. Возможность подключения Telegram групп для команд, таким образом получать все важные оповещения о действиях команды в одном месте, чтобы не упустить ничего важного, а также оперативно реагировать на изменения.",
            img: "https://www.svgrepo.com/show/513224/man.svg",
          }
        );
        btn.textContent = "Hide";
      } else {
        state.possibleCards.splice(4, 2);
        btn.textContent = "Show More";
      }
    },
  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (e) {
        switch (e.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrond-password":
            alert("Wrong password");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/");
    },
    async register({ commit }, details) {
      const { email, password } = details;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (e) {
        switch (e.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/");
    },
    async logout({ commit }) {
      await signOut(auth);
      commit("CLEAR_USER");
      router.push("/login");
    },

    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit("CLEAR_USER");
        } else {
          commit("SET_USER", user);
          if (router.isReady() && router.currentRoute.value.path === "/login") {
            router.push("/");
          }
        }
      });
    },
  },
});

// Composition api (tomorrow)
// export default createStore({
//   state,
//   actions,
//   mutations
// });

export default store;
