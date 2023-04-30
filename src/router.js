import { createRouter, createWebHashHistory } from "vue-router";
import { auth } from "./firebase";

let isSignedIn = true;
setTimeout(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      isSignedIn = true;
    } else {
      isSignedIn = false;
      router.push("/login");
    }
  });
}, 100);

const routes = [
  {
    path: "/main",
    name: "Main",
    component: () => import("./pages/Main/Main.vue"),
    alias: "/",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/news",
    name: "News",
    component: () => import("./pages/News/News.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("./Components/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
    alias: ["/kabinet", '/me', '/profile']
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("./pages/Login/Login.vue"),
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("./pages/Login/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

setTimeout(() => {
  router.beforeEach((to, from, next) => {
    if (to.path === "/login" && isSignedIn === true) {
      next("/");
      return;
    }
    if (
      to.matched.some((record) => record.meta.requiresAuth === true) &&
      isSignedIn === false
    ) {
      next("/login");
      console.log("Sign in please");
      return;
    }
    next();
  });
}, 600);
export default router;
