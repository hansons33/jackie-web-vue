<template>
    <zs-page :hasHeader="true" :headerProps="{ title: '首页' }">首页</zs-page>
    <Scroll :swiperItems="swiperItems" :itemNum="5" />
    <FloatBall :on-hide="onHide" :on-show="onShow"></FloatBall>
</template>

<script setup lang="ts">
import Scroll from "components/scroll/index.vue"
import FloatBall from "components/floatBall/index.vue"
const swiperItems = [
    "我的关注",
    "理财日历",
    "基金经理",
    "基金定投",
    "基金投顾",
    "理财直播",
    "我的关注",
    "理财日历",
    "基金经理",
    "基金定投",
    "基金投顾",
    "理财直播",
]
const onShow = () => {
    console.log("onShow")
}
const onHide = () => {
    console.log("onHide")
}
</script>

<style scoped></style>
