import { createRouter, createWebHashHistory } from "vue-router";
import Main from "./pages/Main/Main.vue"
import News from "./pages/News/News.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/main', component: Main, alias: "/"},
        {path: "/news", component: News}
    ]
})