import { ref, type Ref, onMounted } from 'vue';
import type { Product } from '../../../api/interfaces'
import api from '../../../api/fakeStoreApi'

export const useProductList = () => {
    const isLoading = ref(false)
    const products: Ref<Product[]> = ref([])

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

    onMounted(() => {
        loadProducts()
    })

    return { isLoading, products, loadProducts }
}