import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { checkAuthApi, registerApi, loginApi } from "../services/AuthService";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = async (userData) => {
        try {
            setLoading(true);
            const dataFromServer = await registerApi(userData);
            localStorage.setItem('token', dataFromServer.token)
            localStorage.setItem('userId', dataFromServer.data._id)
            setUser(dataFromServer.data);
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
            const response = await loginApi(credentials);
            localStorage.setItem('token', response.bearer.accessToken);
            localStorage.setItem('userId', response.user._id);
            setUser(response.user)
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
        finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
         localStorage.removeItem('userId')
        setUser(null)
    };

    useEffect(() => {
        const chekAuth = async () => {
            const token = localStorage.getItem('token')
            const userId = localStorage.getItem('userId')

            if (!token || !userId) {
                setLoading(false);
                return;
            }
            try {
                const response = await checkAuthApi(userId, token)
                setUser(response.data || response)
            } catch (error) {
                console.error('Session expired or invalid', error)
                localStorage.removeItem('token')
                localStorage.removeItem('userId')
            } finally {
                setLoading(false)
            }
        }
        chekAuth()
    }, [])

    const value = { user, loading, register, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}