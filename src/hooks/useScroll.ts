import { ref, computed, Ref, ComputedRef, watch } from "vue"
import { throttle } from "utils/utils"
export function useScroll<T>(
    scrollItems: T[],
    containItemNum: number,
    animationDelay = 200
): {
    scrollContainerRef: Ref<HTMLElement>
    onTouchStart: (payload: TouchEvent) => void
    onTouchEnd: (payload: TouchEvent) => void
    activeIndex: ComputedRef<number>
} {
    let scrollItemWidth: number
    let touchEnd = false
    const scrollContainerRef = ref<HTMLElement>(null as any)
    const touchStartX = ref(0)
    const translateX = ref(0)
    const activeIndex = computed(() => {
        return translateX.value === 0 ? 0 : -translateX.value / scrollItemWidth
    })

    watch([scrollContainerRef, translateX], () => {
        if (scrollContainerRef.value) {
            scrollItemWidth = (scrollContainerRef.value.children[0] as any)
                .offsetWidth
            Array.from(scrollContainerRef.value.children).map((item: any) => {
                item.style.flex = `0 0 ${(100 / containItemNum).toFixed(2)}%`
            })
        }
        scrollContainerRef.value.style.transform = `translateX(${translateX.value}px)`
    })

    const onTouchStart = (e: TouchEvent) => {
        touchStartX.value = e.touches[0].clientX
        touchEnd = false
    }
    const onTouchEnd = throttle((e: TouchEvent) => {
        if (!touchEnd) {
            const X = e.touches[0].clientX
            if (X > touchStartX.value) {
                translateX.value = Math.min(
                    translateX.value + scrollItemWidth,
                    0
                )
            } else {
                translateX.value = Math.max(
                    translateX.value - scrollItemWidth,
                    -scrollItemWidth * (scrollItems.length - containItemNum)
                )
            }
            touchEnd = true
        }
    }, animationDelay)
    return {
        scrollContainerRef,
        onTouchStart,
        onTouchEnd,
        activeIndex,
    }
}
