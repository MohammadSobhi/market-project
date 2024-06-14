import React from "react";
import { Link } from "react-router-dom";

export default function Header(params) {
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleSearch = (e)=>{
        e.preventDefault();
        console.log(`you searched for ${searchTerm}`)
    }

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm)
    }

    return(
        
            <nav class="navbar">
                <div class="logo">
                    <img src="logo.png" alt="ImageMarket Logo"/>
                    <span>ImageMarket</span>
                </div>
                <div class="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/user">User</Link>
                    <Link to="/cart" class="login">Login</Link>
                </div>
            </nav>
        
    )
};
