import { ref, onMounted } from 'vue';
import type { Product } from '../../../api/interfaces'
import api from '../../../api/fakeStoreApi'

export const useProductList = () => {
    const isLoading = ref(false)
    const products = ref<Product[]>([])
    const categories = ref<string[]>([])
    const filters = ref<string[]>(['huawei', 'apple', '64GB'])

    const loadProducts = async () => {
        isLoading.value = true

        try {
            const res = await api.get<Product[]>('products')
            products.value = res.data
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

    onMounted(() => {
        loadProducts()
        loadCategories()
    })

    return { isLoading, products, categories, filters }
}