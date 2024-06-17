// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { getAccessToken, removeAccessToken, setAccessToken  } from "./components/AuthRequired";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = getAccessToken();
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        removeAccessToken();
        setIsLoggedIn(false);
    };

    const handleLogin = (token) => {
        setAccessToken(token);
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogout, setIsLoggedIn, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
