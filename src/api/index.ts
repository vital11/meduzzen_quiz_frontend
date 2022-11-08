import axios from 'axios';

const API_URL: string = process.env.REACT_APP_API_URL!;

const authToken = localStorage.getItem("auth_token");
const authTokenType = localStorage.getItem("auth_token_type");
const token = `${authTokenType} ${authToken}`;

export const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${ token }`
    }
})

export const openApi = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const openApiFormData = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json',
    }
})
