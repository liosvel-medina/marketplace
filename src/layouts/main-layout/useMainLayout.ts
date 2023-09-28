import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"

export const useMainLayout = () => {
    const route = useRoute()
    const router = useRouter()

    const title = ref('')
    const onGoBackClick = ref(() => { })

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

    onMounted(() => {
        initRouteParams(route.name?.toString())
    })


    return { title, onGoBackClick }
}