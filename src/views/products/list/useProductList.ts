import { ref, onMounted, computed } from 'vue';
import type { Product } from '../../../api/interfaces'
import api from '../../../api/fakeStoreApi'
import { useProductStore } from '../../../store/productStore';
import { useWindowSize } from '../../../composables/useWindowSize';

interface ProductFav {
    product: Product;
    isFavorite: boolean;
}

export const useProductList = () => {
    const isLoading = ref(false)
    const products = ref<ProductFav[]>([])
    const categories = ref<string[]>([])
    const filters = ref<string[]>(['huawei', 'apple', '64GB'])
    const brands = ref<string[]>(['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'])
    const features = ref<string[]>(['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'])
    const conditions = ref<string[]>(['Any', 'Refurbished', 'Brand new', 'Old items'])

    const selectedCondition = ref<string>('Any')

    const productStore = useProductStore()

    const loadProducts = async () => {
        isLoading.value = true

        try {
            const res = await api.get<Product[]>('products')
            products.value = res.data.map((item) => {
                return {
                    product: item,
                    isFavorite: isFavorite(item.id)
                }
            })
        } catch (ex) {
            console.error(ex);
        }

        isLoading.value = false
    }

    const loadCategories = async () => {
        isLoading.value = true

        try {
            const res = await api.get<string[]>('products/categories')
            categories.value = res.data
        } catch (ex) {
            console.error(ex);
        }

        isLoading.value = false
    }

    const favImage = (id: number) => {
        if (isFavorite(id)) return 'favorite'
        return 'favorite_border'
    }

    const isFavorite = (id: number) => {
        return productStore.favorites.includes(id)
    }

    const toggleFavorite = (id: number) => {
        if (isFavorite(id)) productStore.removeFavorite(id)
        else productStore.addFavorite(id)
    }

    const { screens } = useWindowSize()

    const isMobile = computed(() => {
        return screens.value.xs || screens.value.sm
    })

    onMounted(() => {
        loadProducts()
        loadCategories()
    })

    return {
        isLoading,
        products,
        categories,
        filters,
        toggleFavorite,
        favImage,
        isMobile,
        brands,
        features,
        conditions,
        selectedCondition
    }
}