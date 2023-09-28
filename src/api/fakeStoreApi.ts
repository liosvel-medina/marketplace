import axios, { type AxiosRequestHeaders } from 'axios'

const API_URL = 'https://fakestoreapi.com/'

const instance = axios.create({
    baseURL: API_URL,
    params: {}
})

instance.interceptors.request.use(
    (config) => {
        if (!config.headers)
            config.headers = {
                'Content-Type': 'application/json'
            } as AxiosRequestHeaders

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance
