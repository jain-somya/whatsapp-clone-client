import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://whatsapp-clone-test.herokuapp.com'
})

export default instance;