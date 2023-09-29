import { ref, onMounted, onUnmounted } from 'vue'

export const useWindowSize = () => {
    const width = ref<number>()

    const handler = () => {
        width.value = window.innerWidth
    }

    onMounted(() => {
        handler()
        window.addEventListener('resize', handler)
    })

    onUnmounted(() => {
        window.addEventListener('resize', handler)
    })

    return { width }
}