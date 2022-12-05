import axios from "axios"
import { handleResponseSuccess } from "../conponents/interceptors/handleResponseFailed"
import { handleResponseFailed } from "../conponents/interceptors/handleResponseSuccess"

const Instance = axios.create({
    baseURL : 'http://localhost:1234',
    timeout : 3000,
    
})
Instance.interceptors.response.use(handleResponseSuccess,handleResponseFailed)

export default Instance