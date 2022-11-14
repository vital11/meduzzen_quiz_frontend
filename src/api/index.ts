import axios from 'axios';
import { IUser } from '../types/user';


const API_URL: string = process.env.REACT_APP_API_URL!

export const openApi = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {'Content-Type': 'application/json'}
})

export const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const addAccessTokenInterceptor = async (getAccessTokenSilently: any) => {
    try {
        api.interceptors.request.use(async (config: any) => {

            if (localStorage.getItem('auth_token')) {
                const token = localStorage.getItem('auth_token')
                config.headers.Authorization = `Bearer ${token}`
                return config

            } if (await getAccessTokenSilently()) {
                const token = await getAccessTokenSilently()
                config.headers.Authorization = `Bearer ${token}`
                return config
            }
        }, error => {
            Promise.reject(error)
        })
    } catch (e: any) {
        throw e;
    }
}

//WIP
api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            await axios.get<IUser>(`${API_URL}/users/me`, {
                withCredentials: true
            })
            return api.request(originalRequest);
        } catch (e) {
            console.log('Unautorized error')
        }
    }
    throw error
})

