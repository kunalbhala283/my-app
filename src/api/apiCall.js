import axios from 'axios'

const apiCall = axios.create({
    baseURL: 'http://localhost:4000'
})

export default apiCall