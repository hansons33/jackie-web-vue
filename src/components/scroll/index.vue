<template>
    <div
        class="swiperContainer"
        @touchstart="onTouchStart"
        @touchmove="onTouchEnd"
    >
        <div class="swiperItemContainer" ref="scrollContainerRef">
            <div
                class="swiperItem"
                v-for="(item, index) in swiperItems"
                :style="{
                    // flex: `0 0 calc(${(100 / itemNum).toFixed(2)}% - 10px)`,
                    flex: `0 0 ${(100 / itemNum).toFixed(2)}%`,
                }"
                :key="index"
                @click="onItemClick?.(item, index)"
            >
                {{ item }}
            </div>
        </div>
        <div class="indicatorContainer">
            <div
                v-for="(_, index) in swiperItems.length - itemNum + 1"
                :class="['indicator', activeIndex === index && 'active']"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts" generic="itemType extends {}">
// import { ref, computed, onMounted } from "vue"
// import { throttle } from "utils/utils"
import { useScroll } from "hooks/useScroll"
type ScrollProps<T> = {
    swiperItems: T[]
    onItemClick?: (item: T, index: number) => any
    itemNum: number
}
const { swiperItems, itemNum, onItemClick } =
    defineProps<ScrollProps<itemType>>()

const { onTouchEnd, onTouchStart, activeIndex, scrollContainerRef } = useScroll(
    swiperItems,
    itemNum
)

// const activeIndex = computed(() => {
//     return translateX.value === 0
//         ? 0
//         : -translateX.value / scrollItemWidth.value
// })
// const touchStartX = ref(0)
// const translateX = ref(0)
// const scrollItemWidth = ref(0)
// const scrollItem = ref<HTMLDivElement[]>(null as any)
// let touchEnd = false
// onMounted(() => {
//     scrollItemWidth.value = scrollItem.value[0].offsetWidth
// })
// const onTouchStart = (e: TouchEvent) => {
//     touchStartX.value = e.touches[0].clientX
//     touchEnd = false
// }
// const onTouchEnd = throttle((e: TouchEvent) => {
//     if (!touchEnd) {
//         const X = e.touches[0].clientX
//         if (X > touchStartX.value) {
//             translateX.value = Math.min(
//                 translateX.value + scrollItemWidth.value,
//                 0
//             )
//         } else {
//             translateX.value = Math.max(
//                 translateX.value - scrollItemWidth.value,
//                 -scrollItemWidth.value * (swiperItems.length - itemNum)
//             )
//         }
//         touchEnd = true
//     }
// }, 200)
</script>

<style lang="less">
.swiperContainer {
    background: #fff;
    display: flex;
    color: #333333;
    flex-direction: column;
    font-size: 14px;
    position: relative;
    .swiperItemContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
        padding-bottom: 20px;
        scrollbar-width: none;
        text-align: center;
        transition: linear 0.3s;
    }
    .indicatorContainer {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 5px;
        display: flex;

        .indicator {
            background: #cccccc;
            height: 3px;
            width: 3px;
            border-radius: 50%;
        }
        .active {
            width: 9px;
            height: 3px;
            background: #f63843;
            border-radius: 0;
        }
    }
}
</style>
