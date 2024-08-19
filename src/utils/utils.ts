export function debounce(fn: Function, delay: number) {
    let timeoutId: NodeJS.Timeout

    return function (...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

export function throttle(
    fn: Function,
    limit: number,
    immediate: boolean = false
) {
    let lastFunc: ReturnType<typeof setTimeout> | undefined
    let lastRan: number
    return function (this: any, ...args: any[]) {
        const context = this
        if (immediate && !lastRan) {
            fn.apply(context, args)
            lastRan = Date.now()
            return
        }
        if (!lastRan || Date.now() - lastRan >= limit) {
            fn.apply(context, args)
            lastRan = Date.now()
        } else {
            clearTimeout(lastFunc)
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    fn.apply(context, args)
                    lastRan = Date.now()
                }
            }, limit - (Date.now() - lastRan))
        }
    }
}
