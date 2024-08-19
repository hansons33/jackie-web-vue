import { onMounted, ref } from 'vue';
<template>
    <div
        class="container"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        @click="onClick"
        ref="dragItem"
    >
        悬浮球
    </div>
    <div class="popup" :style="{ scale: show ? 1 : 0, transformOrigin }">
        理财券弹窗
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
const { onShow, onHide } = defineProps<{
    onShow: () => void
    onHide: () => void
}>()
const dragItem = ref<HTMLElement>(null as any)
const show = ref(false)
const startIndex = ref("")
const transformOrigin = ref("50% 50%")
const size = 50
const clientX = document.documentElement.clientWidth
const clientY = document.documentElement.clientHeight
function touchStart(e: TouchEvent) {
    dragItem.value.classList.remove("transition")
    startIndex.value = "" + e.touches[0].clientX + e.touches[0].clientY

    // dragItem.value.style.left =
    //     Math.max(e.touches[0].clientX - size / 2, 0) + "px"
    // dragItem.value.style.top =
    //     Math.max(e.touches[0].clientY - size / 2, 0) + "px"
}
function touchMove(e: TouchEvent) {
    const touchX = e.touches[0].clientX
    const touchY = e.touches[0].clientY
    dragItem.value.style.left =
        touchX - size / 2 < 0
            ? "0"
            : touchX > clientX - size / 2
            ? clientX - size + "px"
            : touchX - size / 2 + "px"
    dragItem.value.style.top =
        touchY - size / 2 < 0
            ? "0"
            : touchY > clientY - size / 2
            ? clientY - size + "px"
            : touchY - size / 2 + "px"
}
function touchEnd(e: TouchEvent) {
    if (
        "" + e.changedTouches[0].clientX + e.changedTouches[0].clientY ===
        startIndex.value
    ) {
        let offsetTop = (e.target as HTMLElement).offsetTop
        let offsetLeft = (e.target as HTMLElement).offsetLeft
        let [deltaX, deltaY] = [
            offsetLeft - (clientX - size) / 2,
            offsetTop - (clientY - size) / 2,
        ]
        transformOrigin.value = `${deltaX}px ${deltaY}px`
        return
    }
    if (e.changedTouches[0].clientX > clientX / 2) {
        dragItem.value.classList.add("transition")
        dragItem.value.style.left = clientX - size + "px"
    } else {
        dragItem.value.classList.add("transition")
        dragItem.value.style.left = "0"
    }
}
function onClick() {
    console.log("onClick", transformOrigin.value)
    setTimeout(() => {
        !show.value ? onShow() : onHide()
        show.value = !show.value
    })
}
onMounted(() => {})
</script>

<style scoped lang="less">
.container {
    background: #e84225;
    font-size: 14px;
    border-radius: 50%;
    color: #fff;
    position: fixed;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
}
.transition {
    transition: all 0.3s;
}
.popup {
    padding: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    font-size: 14px;
    background: #fff;
    color: #e84225;
    transition: scale 0.5s;
    transform: translate(-50%, -50%);
}
</style>
