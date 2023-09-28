import { useRoute, onBeforeRouteUpdate } from "vue-router"
import { ref, onMounted } from 'vue'
import { Product } from "../../../api/interfaces";
import api from '../../../api/fakeStoreApi'
import { useProductStore } from "../../../store/productStore";

export const useProductDetails = () => {
    const route = useRoute()

    const isLoading = ref(false)
    const product = ref<Product>()
    const similarProducts = ref<Product[]>([])

    const productStore = useProductStore();

    const isFavorite = () => {
        return productStore.favorites.includes(product?.value?.id || 0)
    }

    const toggleFavorite = () => {
        if (isFavorite()) productStore.removeFavorite(product.value?.id || 0)
        else productStore.addFavorite(product.value?.id || 0)
    }

    const favImage = () => {
        if (isFavorite()) return 'favorite'
        return 'favorite_border'
    }

    const loadSimilarProducts = async (category: string) => {
        try {
            const res = await api.get<Product[]>(`products/category/${category}`)
            similarProducts.value = res.data.filter((item) => { return item.id != product?.value?.id })
        } catch (ex) {
            console.error(ex);
        }
    }

    const loadProduct = async (id: number) => {
        isLoading.value = true

        try {
            const res = await api.get<Product>(`products/${id}`)
            product.value = res.data

            await loadSimilarProducts(product.value.category)
        }
        catch (ex) {
            console.error(ex);

        }

        isLoading.value = false
    }

    onMounted(() => {
        loadProduct(Number(route.params.id))
    })

    onBeforeRouteUpdate(async (to, from) => {
        if (to.params.id !== from.params.id) {
            loadProduct(Number(to.params.id))
        }
    })

    return { isLoading, product, similarProducts, favImage, toggleFavorite }
}