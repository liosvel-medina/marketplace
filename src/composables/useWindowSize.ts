import { ref, onMounted, onUnmounted, computed } from 'vue'

export const useWindowSize = () => {
    const width = ref<number>(0)

    const handler = () => {
        width.value = window.innerWidth
    }

    const xs = computed(() => {
        return width.value > 0 && width.value < 640
    })

    const sm = computed(() => {
        return width.value >= 640 && width.value < 768
    })

    const md = computed(() => {
        return width.value >= 768 && width.value < 1024
    })

    const lg = computed(() => {
        return width.value >= 1024 && width.value < 1280
    })

    const xl = computed(() => {
        return width.value >= 1280 && width.value < 1536
    })

    const xxl = computed(() => {
        return width.value >= 1536
    })

    onMounted(() => {
        handler()
        window.addEventListener('resize', handler)
    })

    onUnmounted(() => {
        window.addEventListener('resize', handler)
    })

    return { width, xs, sm, md, lg, xl, xxl }
}