
import axios from "axios"
export const  getData = async () => {
    
    try {
        const response = axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
    } catch (error) {
        console.error(error)    
    }
}