import { ref, onMounted, computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useWindowSize } from "../../composables/useWindowSize"
import api from "../../api/fakeStoreApi"

export const useMainLayout = () => {
    const route = useRoute()
    const router = useRouter()

    const title = ref('')
    const onGoBackClick = ref(() => { })

    const isLoading = ref(false)

    const { screens } = useWindowSize()

    const isMobile = computed(() => {
        return screens.value.xs || screens.value.sm
    })

    const topBarHeight = computed(() => {
        if (isMobile.value) return '56px'
        return '142px'
    })

    const initRouteParams = (name?: string) => {
        if (name == 'ProductList') {
            title.value = 'Products'
            onGoBackClick.value = () => { }
        }
        else if (name == 'ProductDetails') {
            title.value = ''
            onGoBackClick.value = () => {
                router.back()
            }
        }
    }

    router.beforeEach((to, _) => {
        initRouteParams(to.name?.toString())
    })

    const categories = ref<string[]>([])

    const loadCategories = async () => {
        isLoading.value = true

        try {
            const res = await api.get<string[]>('products/categories')
            categories.value = res.data
        }
        catch (ex) {
            console.error(ex)
        }
        isLoading.value = false
    }

    onMounted(() => {
        initRouteParams(route.name?.toString())
        loadCategories()
    })


    return { title, onGoBackClick, isLoading, isMobile, topBarHeight, categories }
}