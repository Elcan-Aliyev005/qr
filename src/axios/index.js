import  axios  from "axios"
export const Api = axios.create({
    baseURL: 'http://localhost:3000/',
    // headers: {'X-Custom-Header': 'foobar'}

})