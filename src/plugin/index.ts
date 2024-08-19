import Header from "@/layout/header/header.vue"
import Footer from "@/layout/footer/footer.vue"
import Page from "@/layout/page/page.vue"
import { App } from "vue"

const globalComponents = {
    // SvgIcon,
    Header,
    Footer,
    Page,
}

export default {
    install(app: App) {
        // 注册所有全局组件
        Object.keys(globalComponents).forEach((key) => {
            console.log(key)
            app.component("Zs" + key, globalComponents[key])
        })
    },
}
