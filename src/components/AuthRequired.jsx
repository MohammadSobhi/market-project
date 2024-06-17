import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";


export const setAccessToken = (token) => {
    localStorage.setItem('accessToken', token);
  };
  
  
export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};
  
  
export const removeAccessToken = () => {
    localStorage.removeItem('accessToken');
};

export default function AuthRequired(params) {
    
    const location = useLocation();
    const token = getAccessToken();
    const isLoggedIn = !!token;


    if(!isLoggedIn){
        return <Navigate to ="/login" state={{ from: location }} />
    }

    return <Outlet/>
};
