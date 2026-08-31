import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { registerApi } from "../services/AuthService";
import { loginApi } from "../services/AuthService";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = async (userData) => {
        try {
            setLoading(true);
            const response = await registerApi(userData);
            localStorage.setItem('token', response.token)
            setUser(response.user);
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        try {
            setLoading(true);
            const response = await loginApi(credentials)
            localStorage.setItem('token', response.token)
            setUser(response.user)
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
        finally {
            setLoading(false);
        }
    }


    const value = { user, loading, register, login };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}