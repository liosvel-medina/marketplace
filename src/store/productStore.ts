import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
    const loadLocatStorage = () => {
        const saved = localStorage.getItem('favorites')
        return saved?.split(',').map((item) => Number(item))
    }

    const saveLocalStorage = (items: number[]) => {
        let save = items.join(',')
        localStorage.setItem('favorites', save)
    }

    const favorites = ref<number[]>(loadLocatStorage() || [])

    const addFavorite = (id: number) => {
        if (!favorites.value.includes(id))
            favorites.value.push(id)

        saveLocalStorage(favorites.value)
    }

    const removeFavorite = (id: number) => {
        if (favorites.value.includes(id))
            favorites.value = favorites.value.filter((item) => item != id)

        saveLocalStorage(favorites.value)
    }

    return { favorites, addFavorite, removeFavorite }
})