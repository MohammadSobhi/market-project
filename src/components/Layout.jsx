import React from "react";
import { Outlet } from "react-router-dom";  
import Header from "./Header";


export default function Layout(params) {
    return(
        <div className="layout">
            <Header/>
            <Outlet/>
        </div>
    )
};
