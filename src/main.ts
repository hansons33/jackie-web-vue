import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import "amfe-flexible"
import { router } from "@/router"
import { createPinia } from "pinia"
import registGlobalComponents from "@/plugin"
import "./global.less"
const myPinia = createPinia()
createApp(App)
    .use(router)
    .use(myPinia)
    .use(registGlobalComponents)
    .mount("#app")
