import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import pxToRem from "postcss-pxtorem"
import autoprefixer from "autoprefixer"
import path from "path"
// https://vitejs.dev/config/
const pathResolve = (str: string) => {
    return path.resolve(__dirname, str)
}
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": pathResolve("src"),
            components: pathResolve("src/components"),
            assets: pathResolve("src/assets"),
            pages: pathResolve("src/pages"),
            service: pathResolve("src/service"),
            hooks: pathResolve("src/hooks"),
            store: pathResolve("src/store"),
            utils: pathResolve("src/utils"),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                additionalData: '@import "./src/global.less";',
            },
        },
        postcss: {
            plugins: [
                autoprefixer(),
                pxToRem({
                    rootValue: 37.5,
                    unitPrecision: 5,
                    propList: ["*"],
                }),
            ],
        },
    },
})
