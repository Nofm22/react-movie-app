import axios from 'axios'
import { apiConfig } from './apiConfig'
import queryString from 'query-string'

export const axiosRequest = axios.create({
    baseURL:apiConfig.baseURL,
    headers: {
        "Content-type":"application/json"
    },
    paramsSerializer: (params) => queryString.stringify({...params,api_key:apiConfig.apiKey}),
})



