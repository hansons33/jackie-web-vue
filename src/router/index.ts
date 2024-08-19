import { createWebHashHistory, createRouter } from "vue-router"
import { useStore } from "@/store"
import { routes } from "./routes"

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    const store = useStore()
    const changeTransitionName = store.changeTransitionName
    let fromDepth = from.path.split("/").length
    let toDepth = to.path.split("/").length
    changeTransitionName(toDepth < fromDepth ? "slide-right" : "slide-left")
    if (!to.matched.length) {
        next("/404")
    }
    if (to.meta.permissions) {
        const roles = store.userInfo.roles
        if (
            roles.some((role: string) =>
                (to.meta.permissions as Array<string>).includes(role)
            )
        ) {
            next()
        } else {
            console.log("没有权限")
            next(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
        }
    } else {
        next()
    }
})
