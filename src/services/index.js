import axios from 'axios'

const ajax = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
})

function getPosts() {
    return ajax.get('/posts')
}

export {
    getPosts
}