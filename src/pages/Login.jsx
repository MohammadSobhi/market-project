import React, { useState } from "react";
import { getAllUsers, createProduct, getMyProfile, editMyProfile, deleteMyProfile
    , getMyCart, addToCart, getProducts, getProductInfo, updateProductInfo, deleteProduct, rateProduct
    ,login, signup

 } from "../api";

 import { useNavigate, useLocation } from 'react-router-dom';
 import { AuthContext } from "../AuthContext";
 

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ username: "", password: "" });
    const [signupFormData, setSignupFormData] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        photo: '',
        address: '',
        cart_id: 0,
        role: 0,
        favorites: '',
        authType: 0
      });
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLogin, setIsLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { handleLogin } = React.useContext(AuthContext);

    async function handleLoginSubmit(e) {
        e.preventDefault();
        console.log("Login Data:", loginFormData);
        try {
            const data = await login(loginFormData);
            console.log("Login Data:", loginFormData);
            console.log("Response Data:", data);

            if (data.status==="success") {
                handleLogin(data.token);
                const from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
            } else {
                setErrorMessage('userame or password is incorrect ');
            }
        } catch (error) {
            console.error('Login Error:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
        setLoginFormData({ username: "", password: "" })
    }

    const handleSignupSubmit = async(e) =>{
        e.preventDefault();
        console.log("Signup Data:", signupFormData);
        if (signupFormData.password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return; 
        }
        try {
            const data = await signup(signupFormData);
            console.log("sign up Data:", loginFormData);
            console.log("Response Data:", data);

            if (data.status==="success") {
                handleLogin(data.token);
                const from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
            } else {
                setErrorMessage('check the error message from the backend');
            }
        } catch (error) {
            console.error('Login Error:', error);
            setErrorMessage('🙂 فرش السيرفر، طلع عتيرمينال السيرفر ');
        }
          setSignupFormData({
            username: '',
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            photo: '',
            address: '',
            cart_id: 0,
            role: 0,
            favorites: ''
          })
    }

    function handleLoginChange(e) {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleCPChange(e) {
        setConfirmPassword(e.target.value);
    }

    function handleSignupChange(e) {
        const { name, value } = e.target;
        const updatedValue = name === "role" ? parseInt(value, 10) : value;
        setSignupFormData((prevData) => ({ ...prevData, [name]: updatedValue }));
    }

    function toggleForm() {
        setIsLogin(prev => !prev);
        setErrorMessage(null)
    }

    console.log(signupFormData)

    return (
        
        <div className="login-container">
            {isLogin ? (
                <>
                    <form onSubmit={handleLoginSubmit} className="form-container">
                    <h1>Sign in to your account</h1>
                    {errorMessage && <h1 style={{ color: 'red' }}>{errorMessage}</h1>}
                        <div className='login-form-group'>
                         <div className="one">
                               
                        <label for="username">Username *</label>
                        <input
                            name="username"
                            onChange={handleLoginChange}
                            type="text"
                            placeholder="username"
                            value={loginFormData.username}
                            required
                        />
                        </div>
                        <div className="one">
                        <label for="password">password *</label>
                        <input
                            name="password"
                            onChange={handleLoginChange}
                            type="password"
                            placeholder="Password"
                            value={loginFormData.password}
                            required
                            />
                          </div>  
                        <button className='normal-button'>Log in</button>
                        </div> 
                        <div className='instead'>
                        <p>
                            Don't have an account? <button 
                                className='link-button' onClick={toggleForm}>Sign up instead
                            </button>
                        </p>
                        </div>
                    </form>
                </>
            ) : (
                
                    <div className="form-container">
        <div className="form-header">
            <h1>Hey There!</h1>
            <p>Let's get started with your <strong>30 days free trial ✨</strong></p>
            {errorMessage && <h1 style={{ color: 'red' }}>{errorMessage}</h1>}
        </div>
        <form action="/submit" method="post">
            <div className="form-row">
                <div className="form-group">
                    <label for="firstname">First Name *</label>
                    <input type="text" id="firstname" name="first_name" value={signupFormData.first_name} onChange={handleSignupChange} required></input>
                </div>
                <div className="form-group">
                    <label for="lastname">Last Name *</label>
                    <input type="text" id="lastname" name="last_name" value={signupFormData.last_name} onChange={handleSignupChange} required></input>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label for="email">Username *</label>
                    <input type="username" id="username" name="username" value={signupFormData.username} onChange={handleSignupChange} required></input>
                </div>
                <div className="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" value={signupFormData.email} onChange={handleSignupChange} required></input>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label for="password">Password *</label>
                    <input type="password" id="password" name="password" value={signupFormData.password} onChange={handleSignupChange} required></input>
                </div>
                <div className="form-group">
                    <label for="confirm-password">  Confirm Password *</label>
                    <input type="password" id="confirm-password" name="confirm-password" 
                    value={confirmPassword} onChange={handleCPChange}
                    required></input>
                </div>
            </div>
            <div className="form-row">
                <div className="role">
                    <p>Select your role : </p>
                    <select name="role" value={signupFormData.role} onChange={handleSignupChange}> 
                        <option value={0}>User</option>
                        <option value={1}>Admin</option>
                    </select>
                </div>
                <button className="normal-button" type="submit" onClick={handleSignupSubmit} >Sign Up</button>
            </div>
        </form>
        <div className="form-footer">
            <p>Already have an account? <button className="link-button" onClick={toggleForm}>Login instead</button></p>
            <p>Trouble signing up? <a href="#">Talk with our Chatbot Assistant (fake lol)</a></p>
        </div>
    </div>
            )}
        </div>
    );
}
