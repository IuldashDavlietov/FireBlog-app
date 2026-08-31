import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const registerApi = async (userData) => {
    const response = await axios.post(`${BASE_URL}/users`, userData);
    return response.data
}

export const loginApi = async(credentials) => {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
    return response.data
}