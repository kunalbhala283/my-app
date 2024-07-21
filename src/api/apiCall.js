import axios from 'axios'

const apiCall = axios.create({
    baseURL: 'https://eshopbackend-cmu1.onrender.com'
})

export default apiCall