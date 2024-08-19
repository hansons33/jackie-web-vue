import { defineStore } from "pinia"
type UserInfo = {
    name: string
    password: string | number
    roles: string[]
}

export type State = {
    userInfo: UserInfo
    transitionName: "slide-left" | "slide-right"
}
export const useStore = defineStore("useStore", {
    state: (): State => {
        return {
            userInfo: {
                name: "",
                password: "",
                roles: [],
            },
            transitionName: "slide-left",
        }
    },
    actions: {
        changeUserInfo(payload: UserInfo) {
            this.userInfo = payload
        },
        changeTransitionName(payLoad: State["transitionName"]) {
            this.transitionName = payLoad
        },
    },
})
