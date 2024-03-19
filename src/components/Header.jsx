import React from "react";
import { Link } from "react-router-dom";

export default function Header(params) {
    return(
        <header>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/cart" >Cart</Link>
                <Link to="/user" >User</Link>
            </nav>
        </header>
    )
};
