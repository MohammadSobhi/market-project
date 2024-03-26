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
        <header>
            <nav>
                <div className="search-bar">
                    <form onSubmit={handleSearch}>
                        <input
                        type="text"
                         placeholder="Search..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        />
                    <button type="submit">Search</button>
                    </form>
                </div>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/cart" >Cart</Link>
                <Link to="/user" >User</Link>
            </nav>
        </header>
    )
};
