import React from "react";
import { Link } from "react-router-dom";
import { getAccessToken, removeAccessToken } from "./AuthRequired";
import { AuthContext } from "../AuthContext";
import GB from '../assets/GB.jpg';



export default function Header(params) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const { isLoggedIn, handleLogout } = React.useContext(AuthContext);

    React.useEffect(() => {
        console.log(`isLoggedIn state: ${isLoggedIn}`);
    }, [isLoggedIn]);
    
    
    const handleSearch = (e)=>{
        e.preventDefault();
        console.log(`you searched for ${searchTerm}`)
    }

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm)
    }

    return(
        
            <nav className="navbar">
                <div className="logo">
                    <img src={GB} alt="Logo"/>
                    <span>GraduatingProject</span>
                </div>
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/user">User</Link>


                    <Link to="/cart" className="login">cart</Link>
                    {isLoggedIn ? <Link to="/login"className="logout" onClick={handleLogout}>Logout</Link> :
                    <Link to="login" className="login">login</Link>
                    }
                    

                </div>
            </nav>
        
    )
};
