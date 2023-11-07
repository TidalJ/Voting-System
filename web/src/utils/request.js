import axios from 'axios'

const interce = axios.create({
    baseURL: '/api',
    timeout: 5000
})

interce.interceptors.request.use((config) => {
    return config
}, error => {
    return Promise.reject(error)
})

interce.interceptors.response.use(response => {
    const { data } = response
    return data
}, error => {
    return Promise.reject(error)
})

export default interce

