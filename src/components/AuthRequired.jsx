import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired(params) {
    
    const isLoggedIn = false ;

    if(!isLoggedIn){
        return <Navigate to ="/login"/>
    }

    return <Outlet/>
};
