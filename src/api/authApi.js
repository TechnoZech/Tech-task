import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Customer & Admin Registration API
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Registration failed!";
    }
};

// Admin Login API
export const loginAdmin = async (loginData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, loginData);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Login failed!";
    }
};

// Email Verification API
export const verifyEmail = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/verify-email/${token}`);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Email verification failed!";
    }
};
