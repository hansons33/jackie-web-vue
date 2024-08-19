import Home from "pages/Home/index.vue"
import Login from "pages/Login/index.vue"
import NotFound from "pages/404/index.vue"
import Detail from "pages/Detail/index.vue"
import { RouterOptions } from "vue-router"
export const routes: RouterOptions["routes"] = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/detail",
        component: Detail,
        meta: {
            permissions: ["admin"],
        },
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/404",
        component: NotFound,
    },
]
