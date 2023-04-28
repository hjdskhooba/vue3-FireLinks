import { createRouter, createWebHashHistory } from "vue-router";
import Main from "./pages/Main/Main.vue"
import News from "./pages/News/News.vue"
import Login from "./pages/Login/Login.vue"
import Register from "./pages/Login/Register.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/main', component: Main, alias: "/"},
        {path: "/news", component: News},
        {path: "/login", component: Login},
        {path: "/register", component: Register},
    ]
})