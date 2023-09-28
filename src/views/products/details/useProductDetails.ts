import { useRoute } from "vue-router"
import { ref, onMounted } from 'vue'
import { Product } from "../../../api/interfaces";
import api from '../../../api/fakeStoreApi'

export const useProductDetails = () => {
    const { params } = useRoute()

    const isLoading = ref(false)
    const product = ref<Product>()

    const loadProduct = async (id: number) => {
        isLoading.value = true

        try {
            const res = await api.get<Product>(`products/${id}`)
            product.value = res.data
        }
        catch (ex) {
            console.error(ex);

        }

        isLoading.value = false
    }

    onMounted(() => {
        loadProduct(params['id'])
    })

    return { isLoading, product }
}